"""Build the bundled German-Arabic offline dictionary from a Wiktextract dump.

The input is the compressed JSONL dump of the German Wiktionary edition from
https://kaikki.org/dewiktionary/rawdata.html.  Only German entries with a
direct Arabic translation are retained.  The output is a compact browser JS
asset; no network request is needed while the app is running.
"""

from __future__ import annotations

import argparse
import gzip
import json
import re
from pathlib import Path

from lxml import etree


USEFUL_FORM_TAGS = {
    "infinitive",
    "participle-2",
    "past",
    "present",
    "imperative",
    "nominative",
    "plural",
    "singular",
    "comparative",
    "superlative",
}

TEI = "{http://www.tei-c.org/ns/1.0}"
POS_ALIASES = {
    "noun": "n",
    "name": "n",
    "proper-noun": "n",
    "verb": "v",
    "adjective": "adj",
    "adverb": "adv",
}


def clean(value: object, limit: int = 260) -> str:
    text = " ".join(str(value or "").split())
    return text[:limit].strip()


def normalized_pos(value: object) -> str:
    pos = clean(value, 32).lower() or "other"
    return POS_ALIASES.get(pos, pos)


def english_key(value: object) -> str:
    text = clean(value, 180).casefold()
    text = re.sub(r"\s*\([^)]*\)\s*", " ", text)
    text = re.sub(r"\b(?:s\.?t?h\.?|s\.?o\.?|s\.?b\.?|somebody|someone|something)\b", " ", text)
    text = re.sub(r"\b(?:oneself|yourself|himself|herself|itself)\b", " ", text)
    text = re.sub(r"^(?:to|a|an|the)\s+", "", text)
    return " ".join(text.split()).strip(" .,:;!?-/")


def unique(values: list[str], limit: int) -> list[str]:
    result: list[str] = []
    seen: set[str] = set()
    for value in values:
        value = clean(value)
        key = value.casefold()
        if not value or key in seen:
            continue
        seen.add(key)
        result.append(value)
        if len(result) >= limit:
            break
    return result


def extract_entry(raw: dict) -> tuple[tuple[str, str], dict] | None:
    if raw.get("lang_code") != "de":
        return None

    translations = [
        item
        for item in raw.get("translations", [])
        if item.get("lang_code") == "ar" and item.get("word")
    ]
    if not translations:
        return None

    word = clean(raw.get("word"), 120)
    pos = normalized_pos(raw.get("pos"))
    if not word:
        return None

    arabic = unique([item.get("word", "") for item in translations], 10)
    glosses = unique(
        [item.get("sense", "") for item in translations]
        + [
            gloss
            for sense in raw.get("senses", [])
            for gloss in (sense.get("glosses") or [])[:1]
        ],
        4,
    )

    examples: list[str] = []
    for sense in raw.get("senses", []):
        for example in sense.get("examples", []) or []:
            text = clean(example.get("text"), 190)
            if text and len(text) <= 190 and "\n" not in text:
                examples.append(text)
        if examples:
            break

    article = ""
    plurals: list[str] = []
    forms: list[str] = []
    for form in raw.get("forms", []) or []:
        value = clean(form.get("form"), 100)
        tags = set(form.get("tags") or [])
        if not value or value == "no-table-tags" or "table-tags" in tags:
            continue
        if not article and {"nominative", "singular"}.issubset(tags):
            candidate = clean(form.get("article"), 8)
            if candidate in {"der", "die", "das"}:
                article = candidate
        if {"nominative", "plural"}.issubset(tags) and value != word:
            plurals.append(value)
        if tags & USEFUL_FORM_TAGS or len(value) <= 36:
            forms.append(value)

    ipa = ""
    for sound in raw.get("sounds", []) or []:
        if sound.get("ipa"):
            ipa = clean(sound["ipa"], 80)
            break

    return (word.casefold(), pos), {
        "word": word,
        "pos": pos,
        "arabic": arabic,
        "glosses": glosses,
        "example": unique(examples, 1),
        "article": article,
        "plurals": unique(plurals, 4),
        "forms": unique(forms, 32),
        "ipa": ipa,
        "sources": ["wiktionary"],
    }


def merge(target: dict, incoming: dict) -> None:
    for field, limit in (("arabic", 12), ("glosses", 5), ("plurals", 5), ("forms", 40)):
        target[field] = unique(target[field] + incoming[field], limit)
    if not target["example"] and incoming["example"]:
        target["example"] = incoming["example"]
    if not target["article"]:
        target["article"] = incoming["article"]
    if not target["ipa"]:
        target["ipa"] = incoming["ipa"]
    target["sources"] = unique(target.get("sources", []) + incoming.get("sources", []), 3)


def parse_english_arabic(source: Path) -> dict[str, list[str]]:
    mapping: dict[str, list[str]] = {}
    for _, entry in etree.iterparse(str(source), events=("end",), tag=f"{TEI}entry", huge_tree=True):
        headwords = [clean(node.text, 180) for node in entry.findall(f".//{TEI}form/{TEI}orth")]
        arabic = [clean(node.text, 180) for node in entry.findall(f".//{TEI}cit[@type='trans']/{TEI}quote")]
        arabic = unique(arabic, 16)
        if arabic:
            for headword in headwords:
                key = english_key(headword)
                if key:
                    mapping[key] = unique(mapping.get(key, []) + arabic, 20)
        entry.clear()
        parent = entry.getparent()
        if parent is not None:
            while entry.getprevious() is not None:
                del parent[0]
    return mapping


def add_freedict_bridge(entries: dict[tuple[str, str], dict], deu_eng: Path, eng_ara: Path) -> None:
    english_arabic = parse_english_arabic(eng_ara)
    for _, entry in etree.iterparse(str(deu_eng), events=("end",), tag=f"{TEI}entry", huge_tree=True):
        headword_node = entry.find(f"./{TEI}form/{TEI}orth")
        word = clean(headword_node.text if headword_node is not None else "", 120)
        pos_node = entry.find(f"./{TEI}gramGrp/{TEI}pos")
        pos = normalized_pos(pos_node.text if pos_node is not None else "other")
        translations = [clean(node.text, 180) for node in entry.findall(f".//{TEI}cit[@type='trans']/{TEI}quote")]
        arabic: list[str] = []
        matched_english: list[str] = []
        for translation in translations:
            match = english_arabic.get(english_key(translation), [])
            if match:
                arabic.extend(match)
                matched_english.append(translation)

        if word and arabic and len(word) <= 120:
            gender_node = entry.find(f"./{TEI}gramGrp/{TEI}gen")
            gender = clean(gender_node.text if gender_node is not None else "", 12).lower()
            article = {"masc": "der", "fem": "die", "neut": "das"}.get(gender, "")
            examples = [
                clean(node.text, 190)
                for node in entry.findall(f".//{TEI}cit[@type='example']/{TEI}quote[@xml:lang='de']", namespaces={"xml": "http://www.w3.org/XML/1998/namespace"})
            ]
            incoming = {
                "word": word,
                "pos": pos,
                "arabic": unique(arabic, 12),
                "glosses": unique([f"Englisch: {item}" for item in matched_english], 4),
                "example": unique(examples, 1),
                "article": article,
                "plurals": [],
                "forms": [],
                "ipa": "",
                "sources": ["freedict"],
            }
            key = (word.casefold(), pos)
            if key in entries:
                merge(entries[key], incoming)
            else:
                entries[key] = incoming

        entry.clear()
        parent = entry.getparent()
        if parent is not None:
            while entry.getprevious() is not None:
                del parent[0]


def build(source: Path, output: Path, deu_eng: Path | None = None, eng_ara: Path | None = None) -> None:
    entries: dict[tuple[str, str], dict] = {}
    with gzip.open(source, "rt", encoding="utf-8") as stream:
        for line in stream:
            extracted = extract_entry(json.loads(line))
            if not extracted:
                continue
            key, entry = extracted
            if key in entries:
                merge(entries[key], entry)
            else:
                entries[key] = entry

    if deu_eng and eng_ara:
        add_freedict_bridge(entries, deu_eng, eng_ara)

    compact = []
    for entry in sorted(entries.values(), key=lambda item: (item["word"].casefold(), item["pos"])):
        compact.append([
            entry["word"],
            entry["pos"],
            entry["arabic"],
            entry["glosses"],
            entry["example"][0] if entry["example"] else "",
            entry["article"],
            entry["plurals"],
            entry["forms"],
            entry["ipa"],
            "+".join(entry.get("sources", [])),
        ])

    payload = {
        "meta": {
            "source": "German Wiktionary via Kaikki/Wiktextract + FreeDict",
            "sourceUrl": "https://kaikki.org/dewiktionary/rawdata.html",
            "license": "CC BY-SA 4.0; FreeDict GPL/AGPL",
            "entries": len(compact),
            "offline": True,
        },
        "entries": compact,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    encoded = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    output.write_text(
        "/* German-Arabic offline dictionary: Wiktionary, CC BY-SA 4.0 */\n"
        f"window.OFFLINE_DE_AR={encoded};\n",
        encoding="utf-8",
    )
    print(json.dumps({"entries": len(compact), "bytes": output.stat().st_size}, ensure_ascii=False))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--deu-eng", type=Path)
    parser.add_argument("--eng-ara", type=Path)
    args = parser.parse_args()
    build(args.source, args.output, args.deu_eng, args.eng_ara)


if __name__ == "__main__":
    main()
