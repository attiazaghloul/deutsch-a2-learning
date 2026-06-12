/* Expanded, original A2.1 Lernwortschatz and visual scenes. */
(() => {
  const entry = (w, d, ex, ar, cat, catAr) => ({ w, d, ex, ar, cat, catAr });

  const additions = {
    1: [
      {
        cat: "Pläne und Treffen", catAr: "الخطط والمقابلات",
        items: [
          ["zusagen", "Sagen, dass man zu einem Treffen kommt.", "Mina hat für den Ausflug zugesagt.", "يوافق / يؤكد الحضور"],
          ["einverstanden sein", "Einen Vorschlag gut finden und akzeptieren.", "Treffen wir uns um sechs? – Ich bin einverstanden.", "يكون موافقًا"],
          ["einen Plan ändern", "Etwas anders organisieren als zuerst gedacht.", "Wegen des Wetters ändern wir unseren Plan.", "يغيّر الخطة"],
          ["der Verein, -e", "Eine organisierte Gruppe mit einem gemeinsamen Interesse.", "Er spielt in einem Sportverein Fußball.", "نادٍ / جمعية"],
          ["sich anmelden", "Den eigenen Namen für einen Kurs oder eine Aktivität eintragen.", "Ich melde mich für den Kochkurs an.", "يسجّل نفسه"],
          ["teilnehmen an", "Bei einer Aktivität oder Veranstaltung dabei sein.", "Am Samstag nehme ich an einer Radtour teil.", "يشارك في"],
          ["der Treffpunkt, -e", "Der Ort, an dem Menschen sich treffen.", "Der Treffpunkt ist vor dem Bahnhof.", "نقطة الالتقاء"],
          ["pünktlich", "Genau zur vereinbarten Zeit.", "Bitte sei morgen pünktlich.", "في الموعد"]
        ]
      },
      {
        cat: "Biografie und Personen", catAr: "السيرة والأشخاص",
        items: [
          ["aufwachsen", "Die Kindheit an einem Ort verbringen.", "Ich bin in einer kleinen Stadt aufgewachsen.", "ينشأ / يكبر"],
          ["geboren sein", "An einem Ort und zu einer Zeit zur Welt gekommen sein.", "Sie ist 1998 in Hamburg geboren.", "مولود"],
          ["umziehen", "Die Wohnung oder den Wohnort wechseln.", "Vor zwei Jahren bin ich nach Köln umgezogen.", "ينتقل للسكن"],
          ["die Heimat", "Der Ort oder das Land, mit dem man sich verbunden fühlt.", "Im Sommer besucht er seine Heimat.", "الوطن / مسقط الرأس"],
          ["ledig", "Nicht verheiratet.", "Im Formular kreuze ich ledig an.", "أعزب / عزباء"],
          ["verheiratet", "Mit einer Person in einer Ehe leben.", "Meine Schwester ist seit Mai verheiratet.", "متزوج"],
          ["kennenlernen", "Eine Person zum ersten Mal treffen und mehr über sie erfahren.", "Wir haben uns im Sprachkurs kennengelernt.", "يتعرّف على"],
          ["die Kindheit", "Die Lebenszeit, in der man ein Kind ist.", "Sie erzählt gern von ihrer Kindheit.", "الطفولة"]
        ]
      },
      {
        cat: "Im Restaurant", catAr: "في المطعم",
        items: [
          ["bestellen", "Im Restaurant sagen, was man essen oder trinken möchte.", "Ich bestelle eine Suppe und Wasser.", "يطلب"],
          ["reservieren", "Einen Tisch vorher frei halten lassen.", "Wir haben einen Tisch für vier Personen reserviert.", "يحجز"],
          ["die Rechnung, -en", "Die schriftliche Summe, die man bezahlen muss.", "Könnten wir bitte die Rechnung bekommen?", "الحساب / الفاتورة"],
          ["das Trinkgeld", "Zusätzliches Geld für guten Service.", "Der Kellner bekommt fünf Euro Trinkgeld.", "بقشيش"],
          ["vegetarisch", "Ohne Fleisch und Fisch.", "Gibt es auch ein vegetarisches Gericht?", "نباتي"],
          ["satt", "Nicht mehr hungrig.", "Nach dem Hauptgericht bin ich schon satt.", "شبعان"],
          ["die Bedienung, -en", "Eine Person, die Gäste im Restaurant bedient.", "Die Bedienung war freundlich und schnell.", "مقدّم الخدمة"],
          ["schmecken", "Einen bestimmten Geschmack haben.", "Die Nudeln schmecken ausgezeichnet.", "طعمه يكون"]
        ]
      }
    ],
    2: [
      {
        cat: "Schulalltag", catAr: "الحياة المدرسية",
        items: [
          ["die Klasse, -n", "Eine Gruppe von Schülerinnen und Schülern.", "In unserer Klasse waren 24 Kinder.", "الفصل الدراسي"],
          ["der Stundenplan, -pläne", "Eine Übersicht über Fächer und Unterrichtszeiten.", "Montags stehen drei Fächer im Stundenplan.", "جدول الحصص"],
          ["der Unterricht", "Die Zeit, in der eine Lehrkraft etwas erklärt.", "Der Unterricht beginnt um halb acht.", "الحصة / التدريس"],
          ["die Hausaufgabe, -n", "Eine Aufgabe, die man zu Hause erledigt.", "Wir mussten jeden Tag Hausaufgaben machen.", "الواجب المنزلي"],
          ["sich melden", "Im Unterricht zeigen, dass man etwas sagen möchte.", "Bitte melde dich, bevor du antwortest.", "يرفع يده / يشارك"],
          ["fehlen", "Nicht anwesend sein.", "Warum hast du gestern in der Schule gefehlt?", "يتغيب"],
          ["wiederholen", "Etwas noch einmal lernen oder sagen.", "Vor der Prüfung wiederholen wir den Stoff.", "يراجع / يكرر"],
          ["erklären", "Etwas so beschreiben, dass andere es verstehen.", "Die Lehrerin erklärt die Regel mit einem Beispiel.", "يشرح"]
        ]
      },
      {
        cat: "Bildungswege", catAr: "مسارات التعليم",
        items: [
          ["das Gymnasium, Gymnasien", "Eine Schule, die meist zum Abitur führt.", "Nach der Grundschule ging sie aufs Gymnasium.", "المدرسة الثانوية المؤهلة للجامعة"],
          ["die Realschule, -n", "Eine weiterführende Schule mit mittlerem Abschluss.", "Er hat die Realschule erfolgreich beendet.", "المدرسة المتوسطة"],
          ["die Universität, -en", "Eine Hochschule für Studium und Forschung.", "Sie studiert Medizin an der Universität.", "الجامعة"],
          ["das Studium, Studien", "Eine Ausbildung an einer Hochschule.", "Sein Studium dauert sechs Semester.", "الدراسة الجامعية"],
          ["die Lehre, -n", "Eine praktische Berufsausbildung in einem Betrieb.", "Nach der Schule begann sie eine Lehre.", "تدريب مهني"],
          ["der Ausbildungsplatz, -plätze", "Eine Stelle für eine berufliche Ausbildung.", "Er sucht einen Ausbildungsplatz als Mechaniker.", "مكان تدريب مهني"],
          ["sich bewerben um", "Offiziell um eine Stelle oder einen Platz bitten.", "Ich bewerbe mich um einen Praktikumsplatz.", "يتقدم إلى"],
          ["der Betrieb, -e", "Eine Firma oder Arbeitsstätte.", "Die praktische Ausbildung findet im Betrieb statt.", "شركة / منشأة"]
        ]
      },
      {
        cat: "Leistung und Erfahrung", catAr: "الأداء والخبرة",
        items: [
          ["die Prüfung, -en", "Eine Aufgabe, mit der Wissen getestet wird.", "Morgen schreibe ich eine wichtige Prüfung.", "امتحان"],
          ["durchfallen", "Eine Prüfung nicht bestehen.", "Beim ersten Versuch ist er leider durchgefallen.", "يرسب"],
          ["verbessern", "Etwas besser machen.", "Mit viel Übung hat sie ihre Note verbessert.", "يحسّن"],
          ["der Mitschüler, -", "Eine Person aus derselben Schulklasse.", "Mein Mitschüler half mir bei Mathematik.", "زميل الدراسة"],
          ["die Lehrkraft, -kräfte", "Eine Person, die unterrichtet.", "Unsere Lehrkraft gab uns hilfreiche Tipps.", "المعلّم / هيئة التدريس"],
          ["nervös", "Unruhig, weil etwas Wichtiges passiert.", "Vor Präsentationen bin ich immer nervös.", "متوتر"],
          ["stolz auf", "Sehr zufrieden mit einer Leistung oder Person.", "Sie ist stolz auf ihren Abschluss.", "فخور بـ"],
          ["nützlich", "Hilfreich für ein Ziel oder eine Aufgabe.", "Das Praktikum war für meinen Beruf sehr nützlich.", "مفيد"]
        ]
      }
    ],
    3: [
      {
        cat: "Geräte und Internet", catAr: "الأجهزة والإنترنت",
        items: [
          ["das Gerät, -e", "Ein technischer Gegenstand mit einer bestimmten Funktion.", "Dieses Gerät verbindet sich automatisch mit dem WLAN.", "جهاز"],
          ["die App, -s", "Ein Programm für Smartphone oder Tablet.", "Mit dieser App lerne ich neue Wörter.", "تطبيق"],
          ["herunterladen", "Daten aus dem Internet auf ein Gerät speichern.", "Ich lade den Podcast für die Reise herunter.", "يحمّل من الإنترنت"],
          ["hochladen", "Daten vom eigenen Gerät ins Internet übertragen.", "Sie lädt ein Foto in die Cloud hoch.", "يرفع على الإنترنت"],
          ["der Bildschirm, -e", "Die Fläche, auf der ein Gerät Bilder und Text zeigt.", "Nach zwei Stunden brauche ich eine Pause vom Bildschirm.", "شاشة"],
          ["das Passwort, -wörter", "Eine geheime Zeichenfolge für den Zugang.", "Mein Passwort besteht aus zwölf Zeichen.", "كلمة المرور"],
          ["die Nachricht, -en", "Eine kurze schriftliche oder gesprochene Information.", "Ich habe dir eine Nachricht geschickt.", "رسالة"],
          ["der Zugang, -gänge", "Die Möglichkeit, ein System oder Angebot zu benutzen.", "Für den Kurs brauchst du einen persönlichen Zugang.", "إمكانية الدخول"]
        ]
      },
      {
        cat: "Online-Aktivitäten", catAr: "الأنشطة على الإنترنت",
        items: [
          ["online sein", "Mit dem Internet verbunden sein.", "Abends bin ich nur kurz online.", "يكون متصلًا بالإنترنت"],
          ["chatten", "Online kurze Nachrichten austauschen.", "Wir chatten in einer kleinen Lerngruppe.", "يدردش"],
          ["posten", "Einen Beitrag im Internet veröffentlichen.", "Er postet selten private Fotos.", "ينشر"],
          ["teilen", "Digitale Inhalte an andere weitergeben.", "Kannst du den Link mit mir teilen?", "يشارك"],
          ["speichern", "Daten so sichern, dass man sie später wiederfindet.", "Vergiss nicht, das Dokument zu speichern.", "يحفظ"],
          ["löschen", "Daten oder Inhalte entfernen.", "Sie hat die alte Datei gelöscht.", "يحذف"],
          ["die Suchmaschine, -n", "Ein Internetdienst zum Finden von Informationen.", "Mit einer Suchmaschine finde ich schnell die Adresse.", "محرك بحث"],
          ["die Werbung, -en", "Informationen, die ein Produkt bekannt machen sollen.", "In der kostenlosen App gibt es viel Werbung.", "إعلان"]
        ]
      },
      {
        cat: "Film und Meinung", catAr: "الأفلام والرأي",
        items: [
          ["der Film, -e", "Eine erzählte Geschichte aus bewegten Bildern.", "Der Film beginnt um Viertel nach acht.", "فيلم"],
          ["die Handlung, -en", "Die Ereignisse und Geschichte eines Films.", "Die Handlung war einfach, aber spannend.", "أحداث الفيلم"],
          ["die Rolle, -n", "Eine Figur, die eine Schauspielerin oder ein Schauspieler spielt.", "Sie spielt die wichtigste Rolle im Film.", "دور"],
          ["spannend", "So interessant, dass man wissen möchte, wie es weitergeht.", "Der Krimi war bis zum Ende spannend.", "مشوّق"],
          ["langweilig", "Nicht interessant oder abwechslungsreich.", "Die erste Hälfte fand ich etwas langweilig.", "ممل"],
          ["lustig", "So, dass man lachen muss.", "Wir haben einen sehr lustigen Film gesehen.", "مضحك"],
          ["bewerten", "Eine Meinung und oft eine Note zu etwas geben.", "Viele Zuschauer bewerten den Film positiv.", "يقيّم"],
          ["der Eintritt", "Das Geld, das man für den Besuch bezahlt.", "Der Eintritt ins kleine Kino kostet acht Euro.", "سعر الدخول"]
        ]
      }
    ],
    4: [
      {
        cat: "Gefühle ausdrücken", catAr: "التعبير عن المشاعر",
        items: [
          ["sich ärgern über", "Wegen einer Sache wütend oder unzufrieden sein.", "Ich ärgere mich über die lange Wartezeit.", "ينزعج من"],
          ["sich freuen auf", "Mit Freude an etwas Zukünftiges denken.", "Wir freuen uns auf das Fest.", "يتطلع بسعادة إلى"],
          ["überrascht", "So, dass man etwas nicht erwartet hat.", "Sie war von dem Geschenk völlig überrascht.", "متفاجئ"],
          ["enttäuscht", "Traurig, weil etwas nicht so gut war wie erwartet.", "Nach der Absage war er enttäuscht.", "محبط"],
          ["erleichtert", "Froh, weil eine Sorge vorbei ist.", "Nach der Prüfung war ich sehr erleichtert.", "شعر بالارتياح"],
          ["peinlich", "Unangenehm, weil man sich schämt.", "Der falsche Name war mir peinlich.", "محرج"],
          ["ruhig", "Ohne Stress, Lärm oder starke Bewegung.", "Bleib ruhig und erzähl alles langsam.", "هادئ"],
          ["wütend", "Sehr ärgerlich.", "Er wurde wütend, als niemand zuhörte.", "غاضب"]
        ]
      },
      {
        cat: "Feste und Glückwünsche", catAr: "المناسبات والتهاني",
        items: [
          ["gratulieren zu", "Einer Person gute Wünsche zu einem Anlass sagen.", "Wir gratulieren dir zum neuen Job.", "يهنئ بـ"],
          ["wünschen", "Sagen, was man für eine Person hofft.", "Ich wünsche dir viel Erfolg.", "يتمنى"],
          ["sich bedanken für", "Für etwas Danke sagen.", "Sie bedankt sich für die Einladung.", "يشكر على"],
          ["die Einladung, -en", "Eine Bitte, zu einem Fest oder Treffen zu kommen.", "Die Einladung kam per E-Mail.", "دعوة"],
          ["der Gast, Gäste", "Eine eingeladene oder besuchende Person.", "Die ersten Gäste kommen um sieben.", "ضيف"],
          ["das Geschenk, -e", "Etwas, das man einer Person kostenlos gibt.", "Wir suchen ein passendes Geschenk.", "هدية"],
          ["die Feier, -n", "Ein Treffen zu einem besonderen Anlass.", "Die Feier findet im Garten statt.", "احتفال"],
          ["vorbereiten", "Vorher alles Nötige organisieren.", "Am Vormittag bereiten wir die Feier vor.", "يحضّر"]
        ]
      },
      {
        cat: "Ereignisse und Blog", catAr: "الأحداث والمدونة",
        items: [
          ["berichten über", "Informationen über ein Ereignis geben.", "Im Blog berichtet sie über das Straßenfest.", "يروي / يكتب عن"],
          ["der Beitrag, -träge", "Ein Text, Bild oder Video in einem Medium.", "Sein neuer Beitrag hat viele Kommentare.", "منشور / مساهمة"],
          ["das Erlebnis, -se", "Ein Ereignis, an das man sich erinnert.", "Die Reise war ein besonderes Erlebnis.", "تجربة / حدث"],
          ["stattfinden", "Zu einer bestimmten Zeit und an einem Ort passieren.", "Das Konzert findet am Freitag statt.", "يُقام"],
          ["die Stimmung, -en", "Die Atmosphäre und Gefühle in einer Gruppe.", "Auf dem Fest war die Stimmung fröhlich.", "الأجواء"],
          ["sich unterhalten", "Mit einer Person sprechen.", "Die Gäste unterhalten sich auf dem Balkon.", "يتحدث / يتسامر"],
          ["die Erinnerung, -en", "Etwas Vergangenes, an das man noch denkt.", "Die Fotos sind eine schöne Erinnerung.", "ذكرى"],
          ["veröffentlichen", "Etwas öffentlich zugänglich machen.", "Morgen veröffentlicht sie ihren Bericht.", "ينشر"]
        ]
      }
    ],
    5: [
      {
        cat: "Bewerbungsgespräch", catAr: "مقابلة العمل",
        items: [
          ["der Lebenslauf, -läufe", "Eine Übersicht über Ausbildung und Berufserfahrung.", "Bitte bringen Sie Ihren Lebenslauf mit.", "السيرة الذاتية"],
          ["die Stelle, -n", "Ein bestimmter Arbeitsplatz in einer Firma.", "Die Stelle ist ab August frei.", "وظيفة شاغرة"],
          ["die Qualifikation, -en", "Wissen und Fähigkeiten für eine Aufgabe.", "Für die Stelle braucht man technische Qualifikationen.", "مؤهل"],
          ["die Berufserfahrung", "Erfahrung, die man durch berufliche Arbeit sammelt.", "Sie hat fünf Jahre Berufserfahrung.", "خبرة عملية"],
          ["der Arbeitgeber, -", "Eine Firma oder Person, für die man arbeitet.", "Mein Arbeitgeber bietet flexible Arbeitszeiten.", "صاحب العمل"],
          ["die Stärke, -n", "Eine Fähigkeit, die eine Person besonders gut beherrscht.", "Organisation ist eine meiner Stärken.", "نقطة قوة"],
          ["die Schwäche, -n", "Ein Bereich, den man noch verbessern kann.", "Im Gespräch nennt er eine ehrliche Schwäche.", "نقطة ضعف"],
          ["sich vorbereiten auf", "Vorher lernen und planen, damit etwas gut läuft.", "Ich bereite mich auf das Gespräch vor.", "يستعد لـ"]
        ]
      },
      {
        cat: "Bank und Behörde", catAr: "البنك والمصلحة الحكومية",
        items: [
          ["das Konto, Konten", "Ein persönlicher Bereich bei einer Bank.", "Ich möchte ein neues Konto eröffnen.", "حساب بنكي"],
          ["überweisen", "Geld auf ein anderes Konto schicken.", "Die Miete überweise ich am Monatsanfang.", "يحوّل مالًا"],
          ["abheben", "Geld vom Konto als Bargeld nehmen.", "Am Automaten kann man Geld abheben.", "يسحب مالًا"],
          ["einzahlen", "Bargeld auf ein Konto bringen.", "Sie möchte zweihundert Euro einzahlen.", "يودع مالًا"],
          ["das Formular, -e", "Ein Dokument mit Feldern für Informationen.", "Füllen Sie bitte dieses Formular aus.", "استمارة"],
          ["der Antrag, -träge", "Eine offizielle Bitte an eine Institution.", "Der Antrag muss vollständig sein.", "طلب رسمي"],
          ["unterschreiben", "Den eigenen Namen als Bestätigung schreiben.", "Hier müssen Sie noch unterschreiben.", "يوقّع"],
          ["die Öffnungszeit, -en", "Die Zeit, in der ein Geschäft oder Amt geöffnet ist.", "Die Öffnungszeiten stehen an der Tür.", "مواعيد العمل"]
        ]
      },
      {
        cat: "In der Stadt", catAr: "في المدينة",
        items: [
          ["die Innenstadt, -städte", "Der zentrale Teil einer Stadt.", "Am Wochenende ist die Innenstadt sehr voll.", "وسط المدينة"],
          ["das Viertel, -", "Ein bestimmter Teil einer Stadt.", "Wir wohnen in einem ruhigen Viertel.", "حي"],
          ["der Stadtplan, -pläne", "Eine Karte mit Straßen und Orten einer Stadt.", "Auf dem Stadtplan findest du das Museum.", "خريطة المدينة"],
          ["die Sehenswürdigkeit, -en", "Ein interessanter Ort, den viele Menschen besuchen.", "Das Schloss ist die bekannteste Sehenswürdigkeit.", "مَعلم سياحي"],
          ["öffentlich", "Für alle Menschen zugänglich oder vom Staat organisiert.", "Wir fahren mit öffentlichen Verkehrsmitteln.", "عام"],
          ["zentral", "In der Mitte oder gut mit vielen Orten verbunden.", "Das Hotel liegt sehr zentral.", "مركزي"],
          ["belebt", "Mit vielen Menschen und Aktivitäten.", "Der Marktplatz ist tagsüber sehr belebt.", "حيوي / مزدحم"],
          ["die Führung, -en", "Ein organisierter Rundgang mit Erklärungen.", "Die Stadtführung dauert neunzig Minuten.", "جولة إرشادية"]
        ]
      }
    ],
    6: [
      {
        cat: "Arbeit und Firma", catAr: "العمل والشركة",
        items: [
          ["der Arbeitsplatz, -plätze", "Der Ort, an dem eine Person arbeitet.", "Mein Arbeitsplatz ist direkt am Fenster.", "مكان العمل"],
          ["die Arbeitszeit, -en", "Die Zeit, in der man arbeitet.", "Meine Arbeitszeit beginnt um acht Uhr.", "ساعات العمل"],
          ["das Gehalt, -hälter", "Das Geld, das man regelmäßig für Arbeit bekommt.", "Das Gehalt wird am Monatsende bezahlt.", "الراتب"],
          ["der Kollege, -n", "Ein Mann, mit dem man zusammenarbeitet.", "Ein Kollege zeigt mir das neue Programm.", "زميل العمل"],
          ["der Kunde, -n", "Eine Person, die etwas kauft oder eine Dienstleistung nutzt.", "Der Kunde braucht eine schnelle Antwort.", "عميل"],
          ["die Aufgabe, -n", "Eine Arbeit, die erledigt werden muss.", "Heute habe ich drei wichtige Aufgaben.", "مهمة"],
          ["verantwortlich für", "Die Pflicht haben, sich um etwas zu kümmern.", "Sie ist für die Veranstaltung verantwortlich.", "مسؤول عن"],
          ["kündigen", "Ein Arbeitsverhältnis offiziell beenden.", "Er möchte nicht kündigen, sondern die Abteilung wechseln.", "يستقيل / ينهي العقد"]
        ]
      },
      {
        cat: "Mit der Bahn", catAr: "السفر بالقطار",
        items: [
          ["der Fahrplan, -pläne", "Eine Übersicht über Abfahrts- und Ankunftszeiten.", "Im Fahrplan steht die neue Abfahrtszeit.", "جدول المواعيد"],
          ["das Gleis, -e", "Der Bereich im Bahnhof, an dem ein Zug abfährt.", "Der Zug nach Bonn fährt von Gleis vier.", "رصيف القطار"],
          ["die Verspätung, -en", "Eine spätere Ankunft oder Abfahrt als geplant.", "Der Zug hat zwanzig Minuten Verspätung.", "تأخير"],
          ["abfahren", "Einen Ort mit einem Verkehrsmittel verlassen.", "Unser Zug fährt um 9:12 Uhr ab.", "يغادر"],
          ["ankommen", "Ein Reiseziel erreichen.", "Wir kommen kurz vor Mittag an.", "يصل"],
          ["die Fahrkarte, -n", "Ein Ticket für Bus oder Bahn.", "Die Fahrkarte gilt auch für die Straßenbahn.", "تذكرة مواصلات"],
          ["hin und zurück", "Zum Ziel und später wieder zum Startort.", "Ich brauche eine Fahrkarte hin und zurück.", "ذهاب وعودة"],
          ["direkt", "Ohne Umsteigen oder Umweg.", "Gibt es eine direkte Verbindung nach Bremen?", "مباشر"]
        ]
      },
      {
        cat: "Veranstaltung und Telefon", catAr: "الفعالية والهاتف",
        items: [
          ["die Messe, -n", "Eine große Veranstaltung, auf der Firmen etwas zeigen.", "Unsere Firma ist auf einer Jobmesse.", "معرض"],
          ["die Bühne, -n", "Der erhöhte Bereich für eine Vorstellung.", "Vor dem Konzert wird die Bühne aufgebaut.", "مسرح"],
          ["der Termin, -e", "Eine vereinbarte Zeit für ein Treffen oder Gespräch.", "Ich möchte den Termin bestätigen.", "موعد"],
          ["Bescheid geben", "Eine Person über etwas informieren.", "Bitte geben Sie mir bis morgen Bescheid.", "يبلغ / يخبر"],
          ["eine Nachricht notieren", "Wichtige Informationen für eine Person aufschreiben.", "Ich notiere gern eine Nachricht für Frau Lang.", "يدوّن رسالة"],
          ["sich melden", "Kontakt aufnehmen oder antworten.", "Herr Kaya meldet sich heute Nachmittag.", "يتواصل / يرد"],
          ["durchstellen", "Einen Telefonanruf zu einer anderen Person leiten.", "Einen Moment, ich stelle Sie durch.", "يحوّل المكالمة"],
          ["die Telefonnummer, -n", "Eine Zahlenfolge, unter der man jemanden anruft.", "Könnten Sie die Telefonnummer wiederholen?", "رقم الهاتف"]
        ]
      }
    ]
  };

  const sceneCopy = {
    1: [["Sich kennenlernen", "التعارف وتقديم النفس"], ["Freizeit aktiv gestalten", "أنشطة وقت الفراغ"], ["Ein Treffen planen", "التخطيط لمقابلة"], ["Im Restaurant bestellen", "الطلب والدفع في المطعم"]],
    2: [["Erinnerungen an die Schule", "ذكريات المدرسة"], ["Fächer und Unterricht", "المواد والحصص"], ["Praktische Ausbildung", "التدريب العملي"], ["Bildungswege präsentieren", "عرض مسارات التعليم"]],
    3: [["Digitale Geräte nutzen", "استخدام الأجهزة الرقمية"], ["Medien vergleichen", "مقارنة وسائل الإعلام"], ["Einen Film auswählen", "اختيار فيلم"], ["Zeit ohne Bildschirm", "وقت بعيد عن الشاشة"]],
    4: [["Gefühle erkennen", "التعرف على المشاعر"], ["Glückwünsche sagen", "تقديم التهنئة"], ["Sich bedanken", "التعبير عن الشكر"], ["Über ein Ereignis berichten", "الكتابة عن حدث"]],
    5: [["Im Bewerbungsgespräch", "في مقابلة العمل"], ["Einen Banktermin erledigen", "إنجاز موعد في البنك"], ["Bei einer Behörde fragen", "طلب المساعدة في مصلحة حكومية"], ["Die Stadt entdecken", "اكتشاف المدينة"]],
    6: [["Im Team arbeiten", "العمل ضمن فريق"], ["Eine Zugverbindung erfragen", "السؤال عن رحلة قطار"], ["Eine Veranstaltung vorbereiten", "تجهيز فعالية"], ["Professionell telefonieren", "مكالمة هاتفية مهنية"]]
  };

  window.BOOK0.forEach(chapter => {
    chapter.vocab = chapter.vocab.map(item => ({
      ...item,
      cat: "Kernwortschatz",
      catAr: "المفردات الأساسية"
    }));

    additions[chapter.num].forEach(group => {
      group.items.forEach(([w, d, ex, ar]) => {
        chapter.vocab.push(entry(w, d, ex, ar, group.cat, group.catAr));
      });
    });

    chapter.scenes = sceneCopy[chapter.num].map(([caption, captionAr], index) => ({
      src: `assets/chapter-scenes/chapter-${chapter.num}-scene-${index + 1}.webp`,
      alt: caption,
      caption,
      captionAr
    }));

    chapter.vocabSummary = {
      title: "Lernwortschatz der Einheit",
      titleAr: "ملخص مفردات الوحدة",
      note: `${chapter.vocab.length} zentrale Wörter und Wendungen, nach Themen geordnet und mit eigenen Beispielsätzen.`,
      noteAr: `${chapter.vocab.length} كلمة وتعبير أساسي، متقسمين حسب الموضوع ومع كل كلمة مثال خاص بها.`
    };

    if (chapter.readings?.[0]) chapter.readings[0].visual = chapter.scenes[0];
    if (chapter.readings?.[1]) chapter.readings[1].visual = chapter.scenes[3];
  });
})();
