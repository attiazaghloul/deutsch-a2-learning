/* Additional interactive practice and original lesson illustrations. */
(function () {
  const P = {
    "1-0": [
      {type:"fill", prompt:"Mara bleibt zu Hause, weil sie krank ___.", answer:["ist"], hint:"Das konjugierte Verb steht am Ende."},
      {type:"order", prompt:"Ordne den weil-Satz.", tokens:["weil","morgen","ich","arbeiten","muss"], answer:"weil ich morgen arbeiten muss"},
      {type:"correct", prompt:"Korrigiere: Ich komme nicht, weil ich habe keine Zeit.", answer:["Ich komme nicht, weil ich keine Zeit habe"]},
      {type:"transform", prompt:"Verbinde mit weil: Leo geht früh schlafen. Er ist müde.", answer:["Leo geht früh schlafen, weil er müde ist"]}
    ],
    "1-1": [
      {type:"fill", prompt:"Die Lehrerin erklärt ___ Schülern die Regel. (die Schüler)", answer:["den"], hint:"Dativ Plural: den + Nomen mit -n."},
      {type:"order", prompt:"Ordne die Pronomen.", tokens:["Ich","gebe","es","ihr"], answer:"Ich gebe es ihr"},
      {type:"correct", prompt:"Korrigiere: Der Kellner bringt die Gäste den Kaffee.", answer:["Der Kellner bringt den Gästen den Kaffee"]},
      {type:"transform", prompt:"Ersetze beide Objekte durch Pronomen: Ich zeige Maria das Foto.", answer:["Ich zeige es ihr"]}
    ],
    "1-2": [
      {type:"fill", prompt:"Als Kind ___ ich nicht lange aufbleiben. (dürfen)", answer:["durfte"]},
      {type:"order", prompt:"Bilde einen Satz im Präteritum.", tokens:["Wir","mussten","gestern","lange","arbeiten"], answer:"Wir mussten gestern lange arbeiten"},
      {type:"correct", prompt:"Korrigiere: Früher möchtete er Pilot werden.", answer:["Früher wollte er Pilot werden"]},
      {type:"transform", prompt:"Setze ins Präteritum: Ich kann nicht kommen.", answer:["Ich konnte nicht kommen"]}
    ],
    "2-0": [
      {type:"fill", prompt:"Das ist das Fahrrad ___ Nachbarin. (die Nachbarin)", answer:["der"]},
      {type:"order", prompt:"Ordne die Genitivgruppe.", tokens:["die","Tür","des","alten","Hauses"], answer:"die Tür des alten Hauses"},
      {type:"correct", prompt:"Korrigiere: Das Auto des Frau ist neu.", answer:["Das Auto der Frau ist neu"]},
      {type:"transform", prompt:"Formuliere mit Genitiv: der Hund von meinem Bruder", answer:["der Hund meines Bruders"]}
    ],
    "2-1": [
      {type:"fill", prompt:"Ich spreche mit dem Student___.", answer:["en"]},
      {type:"order", prompt:"Ordne den Satz.", tokens:["Der","Arzt","hilft","dem","Patienten"], answer:"Der Arzt hilft dem Patienten"},
      {type:"correct", prompt:"Korrigiere: Ich sehe den Junge jeden Morgen.", answer:["Ich sehe den Jungen jeden Morgen"]},
      {type:"transform", prompt:"Setze in den Akkusativ: der nette Kollege", answer:["den netten Kollegen"]}
    ],
    "2-2": [
      {type:"fill", prompt:"Sie trägt ein schön___ Kleid.", answer:["es"]},
      {type:"order", prompt:"Ordne die Nominalgruppe.", tokens:["mit","einem","warmen","Pullover"], answer:"mit einem warmen Pullover"},
      {type:"correct", prompt:"Korrigiere: Ich kaufe einen rot Jacke.", answer:["Ich kaufe eine rote Jacke"]},
      {type:"transform", prompt:"Ergänze die Endung: frisch__ Brot (ohne Artikel, Nominativ)", answer:["frisches Brot"]}
    ],
    "3-0": [
      {type:"fill", prompt:"Ich hoffe, dass du morgen ___. (kommen)", answer:["kommst"]},
      {type:"order", prompt:"Ordne den dass-Satz.", tokens:["dass","die Prüfung","sie","bestehen","kann"], answer:"dass sie die Prüfung bestehen kann"},
      {type:"correct", prompt:"Korrigiere: Er sagt, dass er ist müde.", answer:["Er sagt, dass er müde ist"]},
      {type:"transform", prompt:"Verbinde mit dass: Mia glaubt. Der Kurs ist interessant.", answer:["Mia glaubt, dass der Kurs interessant ist"]}
    ],
    "3-1": [
      {type:"fill", prompt:"Mein Fahrrad ist ___ als deins. (schnell)", answer:["schneller"]},
      {type:"order", prompt:"Ordne den Vergleich.", tokens:["Lena","ist","so","groß","wie","Sara"], answer:"Lena ist so groß wie Sara"},
      {type:"correct", prompt:"Korrigiere: Dieser Film ist am besser.", answer:["Dieser Film ist am besten"]},
      {type:"transform", prompt:"Bilde den Superlativ: warm", answer:["am wärmsten"]}
    ],
    "3-2": [
      {type:"fill", prompt:"Wir freuen ___ auf das Wochenende.", answer:["uns"]},
      {type:"order", prompt:"Ordne den Satz.", tokens:["Ich","putze","mir","die","Zähne"], answer:"Ich putze mir die Zähne"},
      {type:"correct", prompt:"Korrigiere: Du musst sich beeilen.", answer:["Du musst dich beeilen"]},
      {type:"transform", prompt:"Setze mit Reflexivpronomen: Er wäscht die Hände.", answer:["Er wäscht sich die Hände"]}
    ],
    "4-0": [
      {type:"fill", prompt:"Ich warte ___ den Bus.", answer:["auf"]},
      {type:"order", prompt:"Ordne den Satz.", tokens:["Sie","interessiert","sich","für","Kunst"], answer:"Sie interessiert sich für Kunst"},
      {type:"correct", prompt:"Korrigiere: Wir sprechen für das Problem.", answer:["Wir sprechen über das Problem"]},
      {type:"transform", prompt:"Bilde eine Frage: Er denkt an seine Prüfung.", answer:["Woran denkt er"]}
    ],
    "4-1": [
      {type:"fill", prompt:"Worauf wartest du? – Ich warte ___ den Zug.", answer:["auf"]},
      {type:"order", prompt:"Ordne die Antwort.", tokens:["Ich","freue","mich","darauf"], answer:"Ich freue mich darauf"},
      {type:"correct", prompt:"Korrigiere: Wofür denkst du?", answer:["Woran denkst du"]},
      {type:"transform", prompt:"Ersetze: Ich spreche über den Urlaub.", answer:["Ich spreche darüber"]}
    ],
    "4-2": [
      {type:"fill", prompt:"___ es regnet, bleiben wir zu Hause.", answer:["Wenn","Falls"]},
      {type:"order", prompt:"Ordne den Bedingungssatz.", tokens:["Wenn","ich","Zeit","habe","komme","ich"], answer:"Wenn ich Zeit habe komme ich"},
      {type:"correct", prompt:"Korrigiere: Wenn du hast Hunger, mach dir ein Brot.", answer:["Wenn du Hunger hast, mach dir ein Brot"]},
      {type:"transform", prompt:"Verbinde mit wenn: Ruf mich an. Du brauchst Hilfe.", answer:["Ruf mich an, wenn du Hilfe brauchst"]}
    ],
    "5-0": [
      {type:"fill", prompt:"Ich ___ gern mehr Freizeit. (haben)", answer:["hätte"]},
      {type:"order", prompt:"Ordne die höfliche Bitte.", tokens:["Könnten","Sie","mir","bitte","helfen"], answer:"Könnten Sie mir bitte helfen"},
      {type:"correct", prompt:"Korrigiere: Wenn ich reich bin, würde ich reisen.", answer:["Wenn ich reich wäre, würde ich reisen"]},
      {type:"transform", prompt:"Formuliere höflicher: Gib mir das Salz.", answer:["Könntest du mir bitte das Salz geben","Könnten Sie mir bitte das Salz geben"]}
    ],
    "5-1": [
      {type:"fill", prompt:"Das Bild hängt ___ der Wand. (wo?)", answer:["an"]},
      {type:"order", prompt:"Ordne den Richtungssatz.", tokens:["Ich","stelle","die Lampe","neben","das Sofa"], answer:"Ich stelle die Lampe neben das Sofa"},
      {type:"correct", prompt:"Korrigiere: Ich gehe in der Küche.", answer:["Ich gehe in die Küche"]},
      {type:"transform", prompt:"Antworte mit Dativ: Wo liegt das Buch? (auf / der Tisch)", answer:["Das Buch liegt auf dem Tisch"]}
    ],
    "5-2": [
      {type:"fill", prompt:"Die Flasche ___ auf dem Tisch. (stehen)", answer:["steht"]},
      {type:"order", prompt:"Ordne den Aktionssatz.", tokens:["Sie","legt","das Buch","auf","den Tisch"], answer:"Sie legt das Buch auf den Tisch"},
      {type:"correct", prompt:"Korrigiere: Der Mann setzt auf dem Stuhl.", answer:["Der Mann sitzt auf dem Stuhl"]},
      {type:"transform", prompt:"Bilde die Position: Ich hänge das Bild an die Wand.", answer:["Das Bild hängt an der Wand"]}
    ],
    "6-0": [
      {type:"fill", prompt:"Gestern ___ er sehr früh nach Hause. (gehen)", answer:["ging"]},
      {type:"order", prompt:"Ordne den Satz im Präteritum.", tokens:["Wir","sahen","einen","spannenden","Film"], answer:"Wir sahen einen spannenden Film"},
      {type:"correct", prompt:"Korrigiere: Sie kommte um acht Uhr.", answer:["Sie kam um acht Uhr"]},
      {type:"transform", prompt:"Setze ins Präteritum: Ich finde meinen Schlüssel.", answer:["Ich fand meinen Schlüssel"]}
    ],
    "6-1": [
      {type:"fill", prompt:"Das ist der Mann, ___ mir geholfen hat.", answer:["der"]},
      {type:"order", prompt:"Ordne den Relativsatz.", tokens:["Das","ist","das Buch","das","ich","suche"], answer:"Das ist das Buch das ich suche"},
      {type:"correct", prompt:"Korrigiere: Die Frau, den dort steht, ist meine Lehrerin.", answer:["Die Frau, die dort steht, ist meine Lehrerin"]},
      {type:"transform", prompt:"Verbinde: Ich kenne den Mann. Du hast den Mann angerufen.", answer:["Ich kenne den Mann, den du angerufen hast"]}
    ],
    "6-2": [
      {type:"fill", prompt:"Bevor er ging, ___ er die Rechnung bezahlt. (haben)", answer:["hatte"]},
      {type:"order", prompt:"Ordne den früheren Vorgang.", tokens:["Sie","war","schon","nach Hause","gefahren"], answer:"Sie war schon nach Hause gefahren"},
      {type:"correct", prompt:"Korrigiere: Nachdem ich gegessen hatte, ich ging spazieren.", answer:["Nachdem ich gegessen hatte, ging ich spazieren"]},
      {type:"transform", prompt:"Zeige die Vorzeitigkeit: Max las die Mail. Dann antwortete er.", answer:["Max hatte die Mail gelesen, dann antwortete er"]}
    ],
    "7-0": [
      {type:"fill", prompt:"Ich stelle den Wecker, ___ ich nicht zu spät komme.", answer:["damit"]},
      {type:"order", prompt:"Ordne den Zwecksatz.", tokens:["Sie","spricht","laut","damit","alle","sie","hören"], answer:"Sie spricht laut damit alle sie hören"},
      {type:"correct", prompt:"Korrigiere: Ich lerne viel, damit ich will die Prüfung bestehen.", answer:["Ich lerne viel, damit ich die Prüfung bestehe"]},
      {type:"transform", prompt:"Verbinde mit damit: Er schreibt alles auf. Er vergisst nichts.", answer:["Er schreibt alles auf, damit er nichts vergisst"]}
    ],
    "7-1": [
      {type:"fill", prompt:"Hast du Äpfel? – Ja, ich habe ___.", answer:["welche"]},
      {type:"order", prompt:"Ordne den Satz.", tokens:["Niemand","hat","die Antwort","gewusst"], answer:"Niemand hat die Antwort gewusst"},
      {type:"correct", prompt:"Korrigiere: Ist hier ein Bank? – Ja, dort ist einer.", answer:["Ist hier eine Bank? Ja, dort ist eine"]},
      {type:"transform", prompt:"Ersetze das Nomen: Ich brauche einen Stift. Hast du einen Stift?", answer:["Ich brauche einen Stift. Hast du einen"]}
    ],
    "7-2": [
      {type:"fill", prompt:"Weißt du, ___ der Zug abfährt?", answer:["wann"]},
      {type:"order", prompt:"Ordne die indirekte Frage.", tokens:["Ich","weiß","nicht","ob","er","kommt"], answer:"Ich weiß nicht ob er kommt"},
      {type:"correct", prompt:"Korrigiere: Können Sie mir sagen, wo ist die Bank?", answer:["Können Sie mir sagen, wo die Bank ist"]},
      {type:"transform", prompt:"Mache indirekt: Hat das Museum heute geöffnet?", answer:["Ich weiß nicht, ob das Museum heute geöffnet hat","Weißt du, ob das Museum heute geöffnet hat"]}
    ],
    "8-0": [
      {type:"fill", prompt:"Ich nehme ___ Pullover hier. (Akkusativ maskulin)", answer:["diesen"]},
      {type:"order", prompt:"Ordne den Satz.", tokens:["Diese","Schuhe","gefallen","mir"], answer:"Diese Schuhe gefallen mir"},
      {type:"correct", prompt:"Korrigiere: Mit diese Tasche gehe ich zur Arbeit.", answer:["Mit dieser Tasche gehe ich zur Arbeit"]},
      {type:"transform", prompt:"Ersetze den Artikel: Ich kaufe den Mantel.", answer:["Ich kaufe diesen Mantel"]}
    ],
    "8-1": [
      {type:"fill", prompt:"Wir ___ euch morgen besuchen.", answer:["werden"]},
      {type:"order", prompt:"Ordne den Zukunftssatz.", tokens:["Sie","wird","die Prüfung","bestimmt","schaffen"], answer:"Sie wird die Prüfung bestimmt schaffen"},
      {type:"correct", prompt:"Korrigiere: Du werdest bald besser sprechen.", answer:["Du wirst bald besser sprechen"]},
      {type:"transform", prompt:"Setze ins Futur I: Ich rufe dich an.", answer:["Ich werde dich anrufen"]}
    ],
    "8-2": [
      {type:"fill", prompt:"Ich kann heute ___ kommen.", answer:["nicht"]},
      {type:"order", prompt:"Ordne die Negation.", tokens:["Er","ruft","mich","heute","nicht","an"], answer:"Er ruft mich heute nicht an"},
      {type:"correct", prompt:"Korrigiere: Der Zug kommt pünktlich nicht.", answer:["Der Zug kommt nicht pünktlich"]},
      {type:"transform", prompt:"Verneine: Ich habe Max eingeladen.", answer:["Ich habe Max nicht eingeladen"]}
    ]
  };

  const lessonCaptions = {
    1:["Gründe, zwei Objekte und Modalverben in der Vergangenheit","الأسباب، المفعولان، والأفعال الناقصة في الماضي"],
    2:["Besitz, besondere Nomen und Adjektivendungen","الملكية، أسماء n، ونهايات الصفات"],
    3:["Aussagen wiedergeben, vergleichen und reflexive Handlungen","نقل الكلام، المقارنة، والأفعال الانعكاسية"],
    4:["Präpositionen, Verweise und Bedingungen im Alltag","حروف الجر، الإشارة للأشياء، وجمل الشرط"],
    5:["Wünsche sowie Bewegung und Position im Raum","التمني والحركة والمكان داخل الغرفة"],
    6:["Vergangenheit erzählen und Ereignisse verbinden","حكي الماضي وربط الأحداث"],
    7:["Zweck, unbestimmte Pronomen und höfliche Fragen","الغرض والضمائر غير المحددة والأسئلة المؤدبة"],
    8:["Auf Dinge zeigen, Zukunft planen und Aussagen verneinen","الإشارة للأشياء والتخطيط للمستقبل والنفي"]
  };

  window.GRAM.forEach(lesson => {
    lesson.topics.forEach((topic, index) => {
      topic.practice = P[`${lesson.num}-${index}`] || [];
      topic.visual = {
        src:`assets/grammar/lesson-${lesson.num}.webp`,
        alt:lessonCaptions[lesson.num][0],
        caption:lessonCaptions[lesson.num][0],
        captionAr:lessonCaptions[lesson.num][1]
      };
    });
  });
})();
