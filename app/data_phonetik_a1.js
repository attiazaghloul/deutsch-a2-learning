/* Deutsch ueben Phonetik A1 rebuilt from the original book assets. */
(function () {
  function range(cd, start, end) {
    const tracks = [];
    for (let n = start; n <= end; n++) tracks.push(`${cd}.${String(n).padStart(2, "0")}`);
    return tracks;
  }

  function ex(id, title, tracks, pages, solutionPages, task) {
    return {id, title, tracks, exercisePages: pages, solutionPages, task};
  }

  function pages(start, end) {
    const out = [];
    for (let n = start; n <= end; n++) out.push(n);
    return out;
  }

  function trackTask(exercise, track, index) {
    const page = exercise.exercisePages[Math.min(index, exercise.exercisePages.length - 1)];
    return {
      page,
      title: `${track} · ${exercise.title}`,
      tracks: [track],
      task: "Hoere den Track, bearbeite die passende Aufgabe auf der Buchseite und sprich danach laut nach."
    };
  }

  const chapters = [
    {
      id: "A",
      title: "Prosodie",
      exercises: [
        ex("A1", "Wortakzent", range(1, 1, 8), pages(6, 8), [77],
          "Trainiere Wortakzent und Bedeutung mit den Originalaufnahmen."),
        ex("A2", "Satzakzent und Rhythmus", range(1, 9, 25), pages(9, 15), [78, 79],
          "Trainiere Satzakzent, Rhythmus und emotionale Betonung in Dialogen und kurzen Saetzen."),
        ex("A3", "Melodie", range(1, 26, 38), pages(16, 20), [79, 80],
          "Trainiere Pausen, Melodie und Satzmelodie mit Dialogen und Karaoke-Aufgaben.")
      ]
    },
    {
      id: "B",
      title: "Vokale",
      exercises: [
        ex("B1", "Lange und kurze Vokale", range(2, 1, 14), pages(21, 26), [80, 81],
          "Unterscheide lange und kurze betonte Vokale."),
        ex("B2", "Die Vokale a und ae", range(2, 15, 22), pages(27, 29), [81, 82],
          "Trainiere a und ae in Woertern zu Jahreszeiten, Wetter und Berufen."),
        ex("B3", "Der Vokal e", range(2, 23, 34), pages(30, 34), [82, 83],
          "Hoere e in Durchsagen, Dialogen und Alltagssituationen."),
        ex("B4", "Der Vokal i", range(2, 35, 46), pages(35, 36), [83, 84],
          "Trainiere langes und kurzes i, betonte Silben und Zungenbrecher."),
        ex("B5", "Die Vokale o und oe", range(2, 47, 58), pages(37, 40), [84, 85],
          "Trainiere o und oe in Woertern, Saetzen und kurzen Dialogen."),
        ex("B6", "Die Vokale u und ue", range(2, 59, 70), pages(41, 44), [85, 86],
          "Trainiere u und ue in Woertern und kurzen Dialogen."),
        ex("B7", "Die Diphthonge au/aeu, ai/ei, eu", range(2, 71, 78), pages(45, 46), [86, 87],
          "Hoere und sprich Diphthonge in typischen Woertern und Saetzen."),
        ex("B8", "Der Vokaleinsatz", range(2, 79, 90), pages(47, 48), [87, 88],
          "Trainiere den Vokaleinsatz mit Zahlen, Woertern und Zungenbrechern.")
      ]
    },
    {
      id: "C",
      title: "Konsonanten",
      exercises: [
        ex("C1", "Der Konsonant r", range(3, 1, 14), pages(49, 53), [88, 89],
          "Unterscheide vokalisiertes und konsonantisches r."),
        ex("C2", "Die Konsonanten p, t, k - b, d, g", range(3, 15, 28), pages(54, 57), [89, 90],
          "Trainiere stimmlose und stimmhafte Konsonanten am Wortanfang und in Saetzen."),
        ex("C3", "Die Konsonanten s und z", range(3, 29, 41), pages(58, 61), [90],
          "Hoere s und z in Reimen, -tion-Woertern und Alltagssaetzen."),
        ex("C4", "Die Konsonanten sch, ch, h", range(3, 42, 57), pages(62, 67), [90, 91],
          "Trainiere sch, ch und h in Dialogen und Ausspracheuebungen."),
        ex("C5", "Die Konsonanten f, v, w", range(3, 58, 65), pages(68, 71), [91],
          "Trainiere f, v und w in Woertern und Saetzen."),
        ex("C6", "Der Konsonant l", range(3, 66, 71), pages(72, 73), [91],
          "Hoere l in verschiedenen Silbenpositionen und sprich nach."),
        ex("C7", "Die Konsonanten ng und nk", range(3, 72, 77), pages(74, 75), [91],
          "Trainiere ng und nk in typischen deutschen Woertern."),
        ex("C8", "Der Konsonant j", range(3, 78, 82), [76], [91],
          "Hoere j in deutschen, englischen und franzoesischen Woertern.")
      ]
    }
  ];

  chapters.forEach(chapter => {
    chapter.cover = `assets/listening/a1-phonetik/visuals/units/${chapter.id.toLowerCase()}.webp`;
    chapter.exercises.forEach(exercise => {
      const slug = exercise.id.toLowerCase();
      exercise.cover = `assets/listening/a1-phonetik/visuals/lessons/${slug}.webp`;
      exercise.visual = `assets/listening/a1-phonetik/visuals/questions/${slug}.webp`;
    });
  });

  chapters.flatMap(chapter => chapter.exercises).forEach(exercise => {
    exercise.bookTasks = exercise.tracks.map((track, index) => trackTask(exercise, track, index));
  });

  window.PHONETIK_A1_TRACK_TASKS = Object.fromEntries(
    chapters.flatMap(chapter => chapter.exercises)
      .flatMap(exercise => exercise.bookTasks.map(task => [task.tracks[0], task.title]))
  );

  window.PHONETIK_A1_BOOK = {
    id: "phonetik",
    title: "Deutsch ueben Phonetik A1",
    subtitle: "19 Uebungen · 210 Original-Audios · Prosodie, Vokale, Konsonanten",
    assetBase: "assets/listening/a1-phonetik",
    progressKey: "a1PhonetikProgress",
    pageOffset: 1,
    introTrack: "1.01",
    outroTrack: "3.82",
    chapters
  };
})();
