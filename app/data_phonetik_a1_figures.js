/* Figure crops for Deutsch üben Phonetik A1 — scene illustrations and exercise sheets. */
(function () {
  const B = "assets/listening/a1-phonetik/figures";
  const sheet = (ex, page) => ({src: `${B}/${ex}/${ex}-p${String(page).padStart(2, "0")}-sheet.webp`, caption: `Buchseite ${page}`, page, sheet: true});
  const scene = (path, caption) => ({src: `${B}/${path}`, caption});

  const pages = (ex, start, end) => {
    const out = [];
    for (let p = start; p <= end; p++) out.push(sheet(ex, p));
    return out;
  };

  window.PHONETIK_A1_FIGURES = {
    A1: [scene("a1/a1-p06-garden.webp", "Übung 1 · Garten"), ...pages("a1", 7, 9)],
    A2: [scene("a2/a2-p10-train.webp", "Übung 7 · Zugreise"), ...pages("a2", 11, 15)],
    A3: [scene("a3/a3-p16-love.webp", "Übung 10 · In Liebe"), ...pages("a3", 17, 20)],
    B1: [scene("b1/b1-p21-miete.webp", "Übung 1 · Miete / Mitte"), ...pages("b1", 22, 26)],
    B2: [scene("b2/b2-p27-seasons.webp", "Übung 10 · Jahreszeiten"), ...pages("b2", 28, 29)],
    B3: [scene("b3/b3-p30-announce.webp", "Übung 5 · Durchsagen"), ...pages("b3", 31, 34)],
    B4: [scene("b4/b4-p35-igel.webp", "Regel · langes ie"), ...pages("b4", 36, 36)],
    B5: [scene("b5/b5-p37-o.webp", "Übung · o und ö"), ...pages("b5", 38, 40)],
    B6: [scene("b6/b6-p41-u.webp", "Übung · u und ü"), ...pages("b6", 42, 44)],
    B7: [scene("b7/b7-p45-diph.webp", "Übung · Diphthonge"), ...pages("b7", 46, 46)],
    B8: [scene("b8/b8-p47-city.webp", "Übung · Vokaleinsatz"), ...pages("b8", 48, 48)],
    C1: [scene("c1/c1-p49-r.webp", "Übung · Konsonant r"), ...pages("c1", 50, 53)],
    C2: [scene("c2/c2-p54-ptk.webp", "Übung · p, t, k"), ...pages("c2", 55, 57)],
    C3: [scene("c3/c3-p58-sz.webp", "Übung · s und z"), ...pages("c3", 59, 61)],
    C4: [scene("c4/c4-p62-sch.webp", "Übung · sch, ch, h"), ...pages("c4", 63, 67)],
    C5: [scene("c5/c5-p68-fvw.webp", "Übung · f, v, w"), ...pages("c5", 69, 71)],
    C6: [scene("c6/c6-p72-l.webp", "Übung · Konsonant l"), ...pages("c6", 73, 73)],
    C7: [scene("c7/c7-p74-ng.webp", "Übung · ng und nk"), ...pages("c7", 75, 75)],
    C8: [scene("c8/c8-p76-j.webp", "Übung · Konsonant j"), ...pages("c8", 76, 76)]
  };
})();
