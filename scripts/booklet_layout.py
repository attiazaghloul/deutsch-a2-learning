"""Recover study content from the actual rows and columns of the Impuls B1 PDF.

Usage: python booklet_layout.py <booklet.pdf> <previous-data.js> <output.js>
The existing lesson index supplies stable titles, page ranges and section IDs.
PyMuPDF reads the positions, colors and ruled boxes of the exact 296-page edition.
"""
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

import pymupdf

ARABIC = re.compile(r"[\u0600-\u06ff\ufb50-\ufdff\ufe70-\ufeff]")
LETTERS = re.compile(r"[a-zA-ZäöüÄÖÜß]")
WHITE = 0xffffff
ANSWER = 1472842
LABEL = 3104168
WRONG = 11805464
# Recurring split ligatures in this edition's embedded Type3 Arabic font.
ARABIC_FONT_SPLITS = {
    "الأ خبار": "الأخبار", "الأ ول": "الأول", "الإ نتر نت": "الإنترنت",
    "الآ خر": "الآخر", "الأ مر": "الأمر", "الأ فعال": "الأفعال",
    "الأ خطاء": "الأخطاء", "الأ منيات": "الأمنيات",
    "لا نعكاسية": "الانعكاسية", "لا نعكاس": "الانعكاس", "لا متحان": "الامتحان", "لا شتقاق": "الاشتقاق",
    "لأ نها": "لأنها", "لأ نه": "لأنه", "لبر لين": "لبرلين", "بر لين": "برلين",
    "أونلا ين": "أونلاين", "لا زم": "لازم", "لإ يه": "لإيه",
    "البر يد": "البريد", "التر كيب": "التركيب", "التصر يف": "التصريف",
    "الح لا ت": "الحالات", "تعبير ات": "تعبيرات", "تحضير ات": "تحضيرات",
    "متر ددة": "مترددة", "الشغلا نة": "الشغلانة", "زعلا نة": "زعلانة",
    "سلا مات": "سلامات", "خلا ص": "خلاص", "خلا ل": "خلال",
    "خصو اً": "خصوصًا", "داي اً": "دايمًا", "ج اً": "جدًا", "شك اً": "شكرًا",
    "بيتو عّ": "بيودّع", "بتو عّ": "بتودّع", "أو عّ ك": "أودّعك",
    "ع ّ المفعولا ت": "عدّ المفعولات", "ر بّ": "رتّب", "ك لّ": "كمّل",
    "بيشر ح": "بيشرح", "بتشر ح": "بتشرح", "بتتصر ف": "بتتصرّف",
}
ARABIC_SPLIT_PATTERN = re.compile(
    r"(?<![ء-ي])(?:" + "|".join(map(re.escape, ARABIC_FONT_SPLITS)) + r")(?![ء-ي])"
)
SECTION_NAMES = (
    ("Wortschatz", "wortschatz"), ("Lesetext", "lesetext"),
    ("Grammatik", "grammatik"), ("Redemittel", "redemittel"),
    ("Rollenspiele", "rollenspiele"), ("Prüfungstraining", "pruefung"),
    ("Übungen", "uebungen")
)


def clean(value):
    return re.sub(r"\s+", " ", unicodedata.normalize("NFKC", value)).strip()


def rtl(span):
    return bool(ARABIC.search(span[5]))


def join_spans(spans, arabic=False):
    """Keep font fragments from the same word and Latin runs in RTL phrases."""
    if arabic:
        spans = [
            (left,right,*span[2:5],char)
            for span in spans for left,right,char in
            (span[6] if rtl(span) and len(span)>6 else [(span[0],span[1],span[5])])
        ]
    order = sorted(spans, key=lambda span: (span[0], span[1]))
    if not arabic:
        pieces = []
        for i, span in enumerate(order):
            if i and span[0] - order[i-1][1] > 1.65:
                pieces.append(" ")
            pieces.append(span[5])
        return clean("".join(pieces))
    # The PDF's Arabic spans already contain logical letters; only their
    # placement across the line is visual. A whole embedded Latin run stays LTR.
    runs = []
    current = []
    for span in order:
        neutral = not (ARABIC.search(span[5]) or LETTERS.search(span[5]))
        direction = rtl(span) if not neutral else (runs[-1][0] if runs else True)
        if not runs or runs[-1][0] != direction:
            runs.append((direction, []))
        runs[-1][1].append(span)
    for direction, run in reversed(runs):
        if not direction:
            current.append(" " + join_spans(run) + " ")
            continue
        reverse = sorted(run,key=lambda s:(-round(s[1],1),-(s[1]-s[0])))
        for i, span in enumerate(reverse):
            if i and reverse[i-1][0] - span[1] > 1.9:
                current.append(" ")
            current.append(span[5])
    text = clean("".join(current))
    text = ARABIC_SPLIT_PATTERN.sub(lambda match: ARABIC_FONT_SPLITS[match[0]], text)
    return re.sub(r"\s+([،؛؟.!:])", r"\1", text)


def page_geometry(page):
    rows = defaultdict(list)
    raw = page.get_text("rawdict", flags=pymupdf.TEXTFLAGS_RAWDICT & ~pymupdf.TEXT_PRESERVE_IMAGES)
    for block in raw["blocks"]:
        for line in block.get("lines", []):
            for span in line["spans"]:
                y = span["origin"][1]
                if not 28 < y < 804:
                    continue
                text = "".join(char["c"] for char in span["chars"])
                if text:
                    x0, _, x1, _ = span["bbox"]
                    chars = [(c["bbox"][0],c["bbox"][2],c["c"]) for c in span["chars"]]
                    rows[round(y / 1.5) * 1.5].append((x0, x1, span["size"], span["color"], span["font"], text, chars))
    # Some embedded combining marks have shifted baselines. Join those
    # into the nearest Arabic line; otherwise they become phantom rows.
    for y in sorted(list(rows)):
        if not rows[y] or any(LETTERS.search(s[5]) or re.search(r"[\u0621-\u064a\d]", s[5]) for s in rows[y]):
            continue
        target = min((other for other in rows if other != y), key=lambda other: abs(other-y), default=y)
        if 0 < abs(target-y) <= 4.5:
            rows[target].extend(rows.pop(y))
    boxes = []
    for item in page.get_drawings():
        x0,y0,x1,y1 = item["rect"]
        if x1-x0 < 24 or y0 < 18 or y1 > 801:
            continue
        color = item.get("fill")
        fill = "".join(f"{round(c*255):02x}" for c in color) if color else ""
        boxes.append(tuple(round(v,2) for v in (x0,y0,x1,y1)) + (fill,))
    return sorted(rows.items()), boxes


def physical_chunks(spans):
    result = []
    for span in sorted(spans, key=lambda s: s[0]):
        if not result or span[0]-result[-1][-1][1] >= 16:
            result.append([])
        result[-1].append(span)
    return result


def a_text(spans):
    return join_spans(spans, any(rtl(s) for s in spans))


def band(rows, top, bottom):
    return [(y,s) for y,s in rows if top <= y < bottom]


def column_lines(rows, left, right):
    return [[s for s in spans if left-.1 <= (s[0]+s[1])/2 < right-.1] for _, spans in rows]


def join_lines(lines, arabic=False):
    return clean(" ".join(join_spans(row,arabic) for row in lines if row))

def cell_text(lines):
    return clean(" ".join(a_text(row) for row in lines if row))


def word_table(rows, boxes, group):
    result = []
    # The actual three drawn cell borders mark a vocabulary row's end,
    # including when the noun, Arabic, definition or example wraps.
    foot = sorted({y0 for x0,y0,x1,y1,_ in boxes
                   if abs(x0-40.5)<1 and abs(x1-188.25)<1 and y1-y0<1.2})
    headers = [y for y,s in rows if join_spans([x for x in s if x[0]<100])=="Wort"
               and "Bedeutung" in join_spans([x for x in s if 189<x[0]<320])]
    group_lines = {}
    for y, spans in rows:
        if not (any(s[3]==WHITE and s[2]>=10.4 and s[0]<160 and LETTERS.search(s[5]) for s in spans)):
            continue
        chunks = physical_chunks(spans)
        de = next((join_spans(c) for c in chunks if not any(rtl(s) for s in c)), "")
        ar = next((a_text(c) for c in chunks if any(rtl(s) for s in c)), "")
        if de:
            group_lines[y] = (de, ar)
    for i, h in enumerate(headers):
        start = h+3
        group = next((group_lines[y] for y in reversed(sorted(group_lines)) if y<h), group)
        end = headers[i+1]-3 if i+1<len(headers) else 804
        end = min((y-3 for y in group_lines if h<y<end), default=end)
        for edge in [y for y in foot if start<y<end]:
            lines = band(rows,start,edge)
            first = column_lines(lines,40,188.25)
            stems = [[s for s in line if s[2]>=8.7] for line in first if not any(rtl(s) for s in line)]
            forms = [[s for s in line if s[2]<8.7] for line in first if not any(rtl(s) for s in line)]
            translations = [line for line in first if any(rtl(s) for s in line)]
            word = join_lines(stems)
            ar = join_lines(translations,True)
            if word and ar:
                result.append(dict(w=word,form=join_lines(forms),ar=ar,
                                   d=join_lines(column_lines(lines,188.25,335.25)),
                                   ex=join_lines(column_lines(lines,335.25,555.75)),
                                   group=group[0],groupAr=group[1]))
            start = edge+.5
    return result, (group_lines[max(group_lines)] if group_lines else group)


def grammar_tables(rows, boxes):
    groups = defaultdict(set)
    for x0,y0,x1,y1,color in boxes:
        if color and 12<y1-y0<44 and x1-x0<390:
            groups[y0,y1].add((x0,x1))
    for (top,head_end), cells in sorted(groups.items()):
        cells = sorted(cells)
        if len(cells)<2 or cells[0][0]>42 or cells[-1][1]<553 or any(abs(a[1]-b[0])>1 for a,b in zip(cells,cells[1:])):
            continue
        head_rows = band(rows,top,head_end)
        if not head_rows or any(s[3] != WHITE for _, spans in head_rows for s in spans if s[5].strip()):
            continue
        heads = [cell_text(column_lines(head_rows,*cell)) for cell in cells]
        if sum(bool(x) for x in heads)<2:
            continue
        # The border of the first table cell is enough to identify
        # aligned data rows; reject detached shapes elsewhere on the page.
        x0,x1 = cells[0]
        edges = sorted({y1 for a,y0,b,y1,_ in boxes if abs(a-x0)<1 and abs(b-x1)<1 and 0<y1-y0<1.5 and y1>head_end+7})
        data, start = [], head_end
        for y in edges:
            if y-start>78:
                break
            line = [cell_text(column_lines(band(rows,start,y),*cell)) for cell in cells]
            if sum(bool(x) for x in line)<2:
                break
            data.append(line)
            start = y
        if data:
            yield top,start,dict(t="table",headers=heads,rows=data)


def block_rows(rows, section):
    """Within a physical block, pair opposite-language lines by baseline."""
    result = []
    for y, spans in rows:
        chunks = physical_chunks(spans)
        german, arabic = [], []
        for chunk in chunks:
            if any(rtl(s) for s in chunk):
                # Colored section subtitles sometimes share a baseline.
                # Split them at the language edge, while keeping mixed examples RTL.
                german_start = next((i for i,s in enumerate(chunk) if rtl(s)), 0)
                first = chunk[:german_start]
                if first and len({s[3] for s in chunk if s[5].strip()}) == 1 and join_spans(first).endswith("·"):
                    german.append((join_spans(first).rstrip(" ·"), first))
                    chunk = chunk[german_start:]
                arabic.append(a_text(chunk))
            else:
                value = join_spans(chunk)
                if value:
                    german.append((value,chunk))
        de = " ".join(s for s,_ in german)
        ar = " ".join(arabic)
        if not (de or ar):
            continue
        gs = [s for _,chunk in german for s in chunk if LETTERS.search(s[5])]
        size = max((s[2] for s in gs),default=0)
        shades = {s[3] for s in gs}
        wrong = " ".join(join_spans([s for s in chunk if s[3]==WRONG]) for _,chunk in german).strip()
        correct = " ".join(join_spans([s for s in chunk if s[3]==ANSWER]) for _,chunk in german).strip()
        # A number badge and its text can differ by a fraction of a point.
        # Keep step markers on the corresponding German line.
        if section == "grammatik" and re.search(r"\s\d{1,2}$", de):
            badges = [s for _, chunk in german for s in chunk if s[0] < 75 and s[5].strip().isdigit()]
            if badges:
                body, badge = de.rsplit(" ", 1)
                if badge == badges[0][5].strip():
                    de = badge + " " + body
        number = re.match(r"^(\d{1,2})\.?\s+(?=\S)", de)
        dual_heading = bool(de and ar and de.isupper() and size < 8)
        heading = (dual_heading or size>=10.45 and bool(de) and not number and "___" not in de
                   or bool(de) and shades=={LABEL} and not re.match(r"^(Wann|Beispiel)\b",de))
        speaker = None
        if section == "rollenspiele" and len(german) > 1:
            name, prefix = german[0]
            if (prefix[0][0] < 43 and prefix[-1][1] < 102
                    and 102 <= german[1][1][0][0] <= 108
                    and len(name) <= 26 and LETTERS.search(name)
                    and prefix[0][3] != german[1][1][0][3]):
                speaker = name
        if section == "rollenspiele" and len(german) == 2 and re.fullmatch(r"\d{4}", german[0][0]) and german[0][0] == german[1][0]:
            item = dict(t="h",de=german[0][0],ar=ar)
        elif speaker:
            item = dict(t="dialogue",speaker=speaker,de=" ".join(s for s,_ in german[1:]),ar=ar)
        elif section in {"uebungen","lesetext"} and number:
            item = dict(t="question",number=int(number[1]),de=de[number.end():],ar=ar)
        elif section=="pruefung" and shades=={WHITE}:
            item = dict(t="prompt",de=de,ar=ar)
        elif wrong and correct:
            item = dict(t="correction",de=wrong,correct=correct,ar=ar)
        elif shades=={ANSWER}:
            item = dict(t="answer",de=de.lstrip("→ "),ar=ar)
        elif heading:
            item = dict(t="h",de=de,ar=ar)
        else:
            item = dict(t="p",de=de,ar=ar)
        last = result[-1] if result else None
        if item["t"]=="question" and last and not last["de"] and y-last["_y"]<=3:
            item["ar"]=clean(result.pop()["ar"]+" "+item["ar"])
            last = result[-1] if result else None
        next_row = next(((z,ss) for z,ss in rows if y<z<=y+3),None) if section=="lesetext" and not de else None
        belongs_to_next = next_row and re.match(r"^\d{1,2}\.",join_spans([s for s in next_row[1] if s[0]<200]))
        if last and not de and last["t"]=="h" and not last["ar"] and y-last["_y"]<=4.5:
            last["ar"]=ar
        elif last and last["t"]=="dialogue" and not speaker and y-last["_y"]<16.6 and (not de or german[0][1][0][0]>=102):
            for lang in ("de","ar"):
                last[lang]=clean(last[lang]+" "+item[lang])
            last["_y"]=y
        elif last and not de and y-last["_y"]<22 and last["t"]!="h" and not belongs_to_next:
            last["ar"] = clean(last["ar"]+" "+ar)
            last["_y"] = y
        elif (last and item["t"]==last["t"] and y-last["_y"]<16.6
              and (item["t"] in {"answer","prompt"} or item["t"]=="h" and last["de"].endswith(",")
                   or item["t"]=="p" and bool(de)==bool(last["de"]) and not number and not re.match(r"^(Wann|Beispiel|✗|✓)\b",de))):
            for lang in ("de","ar"):
                last[lang]=clean(last[lang]+" "+item[lang])
            last["_y"]=y
        else:
            result.append(dict(item,_y=y))
    for item in result:
        item.pop("_y")
    return result


def prose(rows, boxes, section):
    result = []
    tables = list(grammar_tables(rows,boxes)) if section in {"grammatik","grammatik-blick"} else []
    stops = {y0 for x0,y0,x1,y1,_ in boxes if x0<43 and x1>550 and .4<y1-y0<1.8}
    # Finished reference cards use a row rule; do not attach the next
    # Arabic example to the previous card when a page changes.
    for lo,hi,_ in tables:
        stops.update((lo,hi))
    lower = 0
    for upper in sorted(stops|{805}):
        lines = band(rows,lower,upper)
        table = next((item for lo,hi,item in tables if abs(lo-lower)<.01 and upper<=hi),None)
        if table:
            if not result or result[-1] is not table:
                result.append(table)
        elif not any(lo<=lower<hi for lo,hi,_ in tables):
            result.extend(block_rows(lines,section))
        lower=upper
    return result


def grammar_overview(pages, first, last):
    columns = [39.75,65.25,204.75,396.75,555.8]
    data=[]
    for number in range(first,last+1):
        rows,boxes=pages[number-1]
        bands=sorted({(top,bottom) for left,top,right,bottom,_ in boxes
                      if abs(left-columns[0])<1 and abs(right-columns[1])<1 and bottom-top>15})
        for top,bottom in bands:
            area=band(rows,top,bottom)
            line=[cell_text(column_lines(area,l,r)) for l,r in zip(columns,columns[1:])]
            if line[0].isdigit():
                data.append(line)
    if {int(row[0]) for row in data}!=set(range(1,31)):
        raise ValueError(f"Grammar overview lost lessons: {len(data)} rows")
    return [dict(t="table",headers=["Lektion","Thema","القاعدة باختصار","Beispiel"],rows=data)]


def solution_blocks(pages, first, last):
    output=[]
    pending={}
    active={}

    def flush():
        for number,text in sorted(pending.items()):
            output.append(dict(t="solution",number=number,de=clean(text),ar=""))
        pending.clear()
        active.clear()

    for p in range(first,last+1):
        rows,_=pages[p-1]
        for y,spans in rows:
            german=[s for s in spans if not rtl(s)]
            chunks=physical_chunks(german)
            first_text=join_spans(chunks[0]) if chunks else ""
            if re.match(r"^(Lektion\s+\d+|Übung\s+\d+\.\d+)",first_text):
                flush()
                output.append(dict(t="h",de=first_text,ar=""))
                continue
            for chunk in chunks:
                value=join_spans(chunk)
                column=0 if chunk[0][0]<300 else 1
                match=re.match(r"^(\d+)\.\s*(.*)$",value)
                if match:
                    number=int(match[1])
                    pending[number]=match[2]
                    active[column]=number
                elif column in active and value:
                    pending[active[column]]+=" "+value
    flush()
    return output


def goals_for(rows):
    terms=[]
    previous=None
    for y,spans in rows:
        start=join_spans([s for s in spans if s[3]==LABEL and not rtl(s)]).startswith("Lernziele")
        if not start and (previous is None or y-previous>16):
            if previous is not None: break
            continue
        value=join_spans([s for s in spans if s[3]==1909811 and not rtl(s)])
        if value:
            terms.append(value)
        previous=y
    return clean(" ".join(terms))


def rebuild(book, pages):
    diagnostics = []
    for lesson in book["lessons"]:
        number = lesson["n"]
        first,last = lesson["pages"]
        parts = {key:[] for _,key in SECTION_NAMES if key!="wortschatz"}
        words, current, group = [], None, ("","")
        for p in range(first,last+1):
            rows,boxes = pages[p-1]
            switch = []
            for y, spans in rows:
                title = join_spans([s for s in spans if s[0]<310 and s[2]>=12.8 and not rtl(s)])
                match = next((k for label,k in SECTION_NAMES if re.match(r"^"+label+r"\b",title)),None)
                if match:
                    switch.append((y,match))
            lower = 0
            for upper, following in sorted(switch)+[(805,None)]:
                content = band(rows,lower,upper)
                if current=="wortschatz":
                    extracted, group = word_table(content,boxes,group)
                    words.extend(extracted)
                elif current:
                    parts[current].extend(prose(content,boxes,current))
                current = following if following else current
                lower = upper+2
        if len(words)<10 or any(not items for items in parts.values()):
            raise ValueError(f"Lektion {number} incomplete: {len(words)} words and {[(x,len(y)) for x,y in parts.items()]}")
        diagnostics.append((number,len(lesson["words"]),len(words),sum(b["t"]=="table" for b in parts["grammatik"])))
        lesson.update(words=words,parts=parts,goals=goals_for(pages[first-1][0]) or lesson["goals"])
    for extra in book["extras"]:
        first,last = extra["pages"]
        if extra["id"]=="grammatik-blick":
            extra["blocks"]=grammar_overview(pages,first,last)
            continue
        if extra["id"]=="loesungen":
            extra["blocks"]=solution_blocks(pages,first,last)
            continue
        rebuilt = []
        for p in range(first,last+1):
            rows,boxes=pages[p-1]
            filtered=[(y,ss) for y,ss in rows if not any(s[2]>=17 for s in ss)]
            rebuilt.extend(prose(filtered,boxes,extra["id"]))
        extra["blocks"]=rebuilt
    print("Lektion | old words | physical rows | grammar tables")
    for result in diagnostics:
        print(*result)


def main():
    pdf,baseline,target=(Path(p) for p in sys.argv[1:])
    original=baseline.read_text(encoding="utf-8").split("const IMPULS_REVIEW=",1)[1].strip()
    book=json.loads(original.removesuffix(";"))
    with pymupdf.open(pdf) as document:
        if len(document) != 296:
            raise ValueError("Expected the 296-page bilingual edition")
        rebuild(book,[page_geometry(page) for page in document])
    dump=lambda obj:json.dumps(obj,ensure_ascii=False,separators=(",",":"))
    sections=[f'"meta":{dump(book["meta"])}',
              '"lessons":[\n'+',\n'.join(map(dump,book["lessons"]))+'\n]',
              '"extras":[\n'+',\n'.join(map(dump,book["extras"]))+'\n]']
    target.write_text("// Generated by scripts/booklet_layout.py from the bilingual Impuls B1 PDF.\n"
                      "const IMPULS_REVIEW={\n"+",\n".join(sections)+"\n};\n",encoding="utf-8")


if __name__=="__main__":
    main()
