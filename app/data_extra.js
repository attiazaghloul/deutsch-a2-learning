/* Original companion material aligned with Netzwerk neu A2.2, Kapitel 7-12. */
(function () {
  const EXTRA = {
    7: {
      vocab: [
        {w:"die Kaution, -en", d:"Geld als Sicherheit, das man später zurückbekommt.", ex:"Für das Leihrad zahlt man keine Kaution.", ar:"تأمين مالي / مبلغ ضمان"},
        {w:"der Kundenservice", d:"Eine Abteilung, die Kundinnen und Kunden bei Problemen hilft.", ex:"Der Kundenservice ist rund um die Uhr erreichbar.", ar:"خدمة العملاء"},
        {w:"reservieren", d:"Etwas vorher für eine bestimmte Zeit bestellen.", ex:"Ich reserviere ein Auto für morgen früh.", ar:"يحجز"},
        {w:"versichert sein", d:"Bei einem Unfall finanziell geschützt sein.", ex:"Sind die Fahrer bei der Fahrt versichert?", ar:"يكون مؤمَّنًا عليه"},
        {w:"der Bordcomputer, -", d:"Ein Computer in einem Fahrzeug, über den man es bedient.", ex:"Gib die PIN in den Bordcomputer ein.", ar:"كمبيوتر داخل المركبة"},
        {w:"die Nähe", d:"Ein Ort, der nicht weit entfernt ist.", ex:"Die App zeigt freie Fahrräder in meiner Nähe.", ar:"مكان قريب / الجوار"},
        {w:"der Tarif, -e", d:"Der Preis und die Regeln für eine Dienstleistung.", ex:"Der günstigste Tarif kostet zehn Cent pro Minute.", ar:"التعريفة / نظام السعر"},
        {w:"der Kinderwagen, -", d:"Ein Wagen, in dem man ein kleines Kind schiebt.", ex:"Gibt es im Zug Platz für einen Kinderwagen?", ar:"عربة أطفال"},
        {w:"das Bordbistro, -s", d:"Ein kleines Restaurant in einem Zug.", ex:"Das Bordbistro ist heute leider geschlossen.", ar:"مطعم القطار"},
        {w:"die Umleitung, -en", d:"Ein anderer Weg, weil die normale Straße gesperrt ist.", ex:"Wegen der Baustelle gibt es eine Umleitung.", ar:"طريق بديل / تحويلة"},
        {w:"die Ausfahrt, -en", d:"Eine Stelle, an der man eine Straße oder Autobahn verlässt.", ex:"Nehmen Sie die nächste Ausfahrt.", ar:"مخرج الطريق"},
        {w:"sich verfahren", d:"Den falschen Weg fahren.", ex:"Wir haben uns in der Innenstadt verfahren.", ar:"يضل الطريق بالسيارة"},
        {w:"die Sperrung, -en", d:"Wenn eine Straße oder Strecke vorübergehend geschlossen ist.", ex:"Wegen einer Sperrung fährt der Bus eine andere Route.", ar:"إغلاق طريق أو خط"}
      ],
      readings: [
        {
          title:"Ein Morgen voller Verspätungen",
          kind:"Alltagstext",
          text:`Mina fährt jeden Morgen mit der Straßenbahn zur Arbeit. Normalerweise braucht sie nur fünfundzwanzig Minuten. Heute zeigt die App aber schon vor der Abfahrt eine Störung an. Eine Baustelle blockiert die Strecke, deshalb fahren keine Bahnen zwischen Rathaus und Hauptbahnhof. Mina nimmt zuerst einen Ersatzbus. Der Bus steht lange im Stau und ist sehr voll. Am Hauptbahnhof erfährt sie, dass auch ihr Zug zehn Minuten Verspätung hat. Sie geht zum Informationsschalter und fragt höflich, von welchem Gleis der Zug abfährt. Die Mitarbeiterin erklärt ihr, dass sich das Gleis geändert hat. Mina erreicht den Zug gerade noch. Sie schreibt ihrem Kollegen eine Nachricht und erklärt, warum sie später kommt. Obwohl der Weg heute fast eine Stunde dauert, bleibt sie ruhig: Mit guten Informationen und etwas Geduld kommt sie schließlich sicher ans Ziel.`,
          ar:"مينا بتروح الشغل كل يوم بالترام، لكن عطل وأعمال طريق خلوها تستخدم أتوبيس بديل وقطار متأخر. سألت موظفة المعلومات بأدب عن الرصيف الجديد ووصلت في النهاية.",
          glossary:[["die Störung","العطل"],["blockieren","يعطّل / يغلق"],["der Ersatzbus","أتوبيس بديل"],["der Informationsschalter","شباك المعلومات"],["sich ändern","يتغيّر"],["das Ziel","الوجهة"]],
          questions:[
            ["Wie lange braucht Mina normalerweise zur Arbeit?","Fünfundzwanzig Minuten."],
            ["Warum fährt keine Straßenbahn zum Hauptbahnhof?","Eine Baustelle blockiert die Strecke."],
            ["Was hat sich am Bahnhof geändert?","Das Gleis des Zuges hat sich geändert."],
            ["Wie reagiert Mina auf die Probleme?","Sie bleibt ruhig, informiert sich und schreibt ihrem Kollegen."]
          ]
        },
        {
          title:"Ein Leihrad für den Stadtbesuch",
          kind:"Informationstext",
          text:`Jonas bekommt am Wochenende Besuch von seiner Cousine. Sie möchten die Stadt sehen, aber nicht den ganzen Tag zu Fuß gehen. Jonas schlägt ein Leihrad-System vor. Zuerst laden beide die App herunter und registrieren sich. Danach suchen sie auf der Karte eine Station in ihrer Nähe. Vor der ersten Fahrt lesen sie die Tarife und die wichtigsten Regeln: Das Rad darf nicht auf privaten Grundstücken abgestellt werden, und nach der Fahrt muss man es an einer offiziellen Station zurückgeben. In der App reservieren sie zwei Räder für fünfzehn Minuten. An der Station wählen sie die Räder aus und geben ihre PIN ein. Die Tour führt am Fluss entlang, durch den Stadtpark und an mehreren Sehenswürdigkeiten vorbei. Als es plötzlich regnet, geben sie die Räder früher zurück und fahren mit der U-Bahn weiter. Beide finden das System praktisch, weil sie flexibel bleiben.`,
          ar:"يوناس وقريبته استخدموا نظام عجل إيجار: نزّلوا التطبيق، سجلوا، قرأوا الأسعار والقواعد، حجزوا عجلتين وعملوا جولة في المدينة.",
          glossary:[["das Leihrad-System","نظام تأجير العجل"],["sich registrieren","يسجّل بياناته"],["das Grundstück","قطعة أرض / ملكية"],["offiziell","رسمي"],["am Fluss entlang","على امتداد النهر"],["flexibel","مرن"]],
          questions:[
            ["Warum möchten Jonas und seine Cousine Fahrräder leihen?","Sie möchten die Stadt sehen und nicht den ganzen Tag laufen."],
            ["Was machen sie vor der ersten Fahrt?","Sie laden die App herunter, registrieren sich und lesen Tarife und Regeln."],
            ["Wo müssen sie die Räder zurückgeben?","An einer offiziellen Station."],
            ["Warum endet die Radtour früher?","Weil es plötzlich regnet."]
          ]
        }
      ]
    },
    8: {
      vocab: [
        {w:"beschriften", d:"Auf einen Gegenstand einen Zettel mit seinem Namen kleben.", ex:"Ich beschrifte die Möbel mit deutschen Wörtern.", ar:"يضع اسمًا أو بطاقة على الشيء"},
        {w:"nachschlagen", d:"Eine Information in einem Buch oder Wörterbuch suchen.", ex:"Unbekannte Wörter schlage ich im Wörterbuch nach.", ar:"يبحث في القاموس / المرجع"},
        {w:"nachsprechen", d:"Einen gehörten Satz genauso wiederholen.", ex:"Hör den Dialog und sprich jeden Satz nach.", ar:"يردد خلف المتحدث"},
        {w:"der Lernstoff", d:"Alles, was man für einen Kurs oder eine Prüfung lernen muss.", ex:"Ich teile den Lernstoff auf sieben Tage auf.", ar:"المادة المطلوب مذاكرتها"},
        {w:"die Karteikarte, -n", d:"Eine kleine Karte zum Lernen von Fragen und Wörtern.", ex:"Auf die Vorderseite der Karteikarte schreibe ich das Wort.", ar:"بطاقة مذاكرة"},
        {w:"der Stichpunkt, -e", d:"Ein kurzes Wort oder eine kurze Notiz zu einem Thema.", ex:"Für meine Präsentation notiere ich nur Stichpunkte.", ar:"نقطة مختصرة"},
        {w:"der Blickkontakt", d:"Wenn man einer Person beim Sprechen in die Augen sieht.", ex:"Guter Blickkontakt macht eine Präsentation lebendig.", ar:"التواصل البصري"},
        {w:"deutlich", d:"So, dass man etwas gut hören oder verstehen kann.", ex:"Bitte sprich langsam und deutlich.", ar:"بوضوح"},
        {w:"auswendig lernen", d:"Etwas so lernen, dass man es ohne Text sagen kann.", ex:"Du musst nicht die ganze Präsentation auswendig lernen.", ar:"يحفظ عن ظهر قلب"},
        {w:"sich vorbereiten auf", d:"Vorher alles Nötige für etwas tun.", ex:"Wir bereiten uns gemeinsam auf die Prüfung vor.", ar:"يستعد لـ"},
        {w:"die Gliederung, -en", d:"Die geordnete Struktur eines Textes oder Vortrags.", ex:"Eine klare Gliederung hilft dem Publikum.", ar:"تقسيم / هيكل الموضوع"},
        {w:"die Rückmeldung, -en", d:"Eine Reaktion mit Lob, Kritik oder Tipps.", ex:"Nach dem Vortrag bekomme ich eine hilfreiche Rückmeldung.", ar:"تغذية راجعة / رأي"},
        {w:"die Folie, -n", d:"Eine einzelne Seite, die man bei einer Präsentation zeigt.", ex:"Auf dieser Folie sieht man nur ein Bild und drei Stichpunkte.", ar:"شريحة عرض"},
        {w:"der Vortrag, ⸚e", d:"Eine längere mündliche Präsentation vor anderen Menschen.", ex:"Der Vortrag dauert ungefähr zehn Minuten.", ar:"محاضرة / عرض شفهي"},
        {w:"das Publikum", d:"Alle Personen, die einen Vortrag oder eine Vorstellung ansehen.", ex:"Das Publikum stellt am Ende viele Fragen.", ar:"الجمهور"},
        {w:"die Lernstrategie, -n", d:"Eine geplante Methode, mit der man besser lernt.", ex:"Karteikarten sind eine gute Lernstrategie für Wortschatz.", ar:"استراتيجية مذاكرة"},
        {w:"der Prüfungstermin, -e", d:"Das festgelegte Datum einer Prüfung.", ex:"Der Prüfungstermin steht schon im Kalender.", ar:"موعد الامتحان"},
        {w:"die Aussprache", d:"Die Art, wie Laute und Wörter gesprochen werden.", ex:"Mit Aufnahmen kann ich meine Aussprache kontrollieren.", ar:"النطق"}
      ],
      readings: [
        {
          title:"Laras Lernplan für die Prüfung",
          kind:"Erfahrungsbericht",
          text:`In zwei Wochen schreibt Lara eine wichtige Deutschprüfung. Früher hat sie immer erst am letzten Abend gelernt. Dann war sie müde, nervös und konnte sich kaum konzentrieren. Dieses Mal macht sie es anders. Zuerst sammelt sie den gesamten Lernstoff und teilt ihn in kleine Themen. Jeden Werktag lernt sie vierzig Minuten und macht danach eine kurze Pause. Neue Wörter schreibt sie auf Karteikarten: vorne steht das deutsche Wort, hinten stehen die Bedeutung und ein Beispielsatz. Schwierige Wörter spricht sie laut aus und wiederholt sie am nächsten Tag. Für das Hörverstehen sieht sie kurze Videos und hört Dialoge mehrmals. Einmal pro Woche trifft sie ihren Lernpartner. Sie stellen sich gegenseitig Fragen und erklären Grammatikregeln mit eigenen Beispielen. Lara merkt, dass sie jetzt weniger Angst hat. Ihr wichtigster Tipp lautet: regelmäßig lernen, Fehler akzeptieren und genug schlafen.`,
          ar:"لارا غيّرت طريقة مذاكرتها: قسمت المادة، استخدمت بطاقات، كررت الكلمات بصوت عالٍ، تدربت على السماع وذاكرت مع زميل. النتيجة إنها بقت أهدى.",
          glossary:[["der Werktag","يوم عمل"],["die Bedeutung","المعنى"],["das Hörverstehen","فهم المسموع"],["gegenseitig","كل واحد للآخر"],["akzeptieren","يتقبّل"],["regelmäßig","بانتظام"]],
          questions:[
            ["Was war Laras altes Lernproblem?","Sie lernte erst am letzten Abend und war müde und nervös."],
            ["Was schreibt sie auf die Rückseite der Karteikarten?","Die Bedeutung und einen Beispielsatz."],
            ["Wie übt sie das Hörverstehen?","Mit kurzen Videos und Dialogen, die sie mehrmals hört."],
            ["Welchen Tipp gibt Lara?","Regelmäßig lernen, Fehler akzeptieren und genug schlafen."]
          ]
        },
        {
          title:"Eine Präsentation, die man gern hört",
          kind:"Ratgeber",
          text:`Eine gute Präsentation beginnt nicht erst vor dem Publikum, sondern bei der Vorbereitung. Überlegen Sie zuerst, was die Zuhörer am Ende wissen sollen. Ordnen Sie Ihre Informationen in eine klare Gliederung: Einleitung, Hauptteil und Schluss. Schreiben Sie auf die Folien nur kurze Stichpunkte. Wenn dort ganze Absätze stehen, lesen viele Vortragende nur noch ab. Üben Sie den Vortrag mehrmals laut und messen Sie die Zeit. Beim Sprechen sollten Sie aufrecht stehen, deutlich sprechen und regelmäßig Blickkontakt mit verschiedenen Personen suchen. Kleine Pausen sind kein Fehler. Sie geben dem Publikum Zeit zum Nachdenken und helfen Ihnen beim Atmen. Wenn Sie eine Frage nicht sofort beantworten können, bleiben Sie ruhig. Sagen Sie ehrlich, dass Sie die Information später prüfen. Bitten Sie nach dem Vortrag um eine Rückmeldung. So wird die nächste Präsentation noch besser.`,
          ar:"النص بيوضح خطوات عرض ناجح: هدف واضح، مقدمة ومحتوى وخاتمة، نقاط قصيرة، تدريب بصوت عالٍ، تواصل بصري وهدوء وقت الأسئلة.",
          glossary:[["der Zuhörer","المستمع"],["der Absatz","فقرة"],["ablesen","يقرأ من الورق مباشرة"],["aufrecht","مستقيم"],["nachdenken","يفكر"],["prüfen","يراجع / يتحقق"]],
          questions:[
            ["Welche drei Teile hat eine klare Präsentation?","Einleitung, Hauptteil und Schluss."],
            ["Warum soll man keine langen Absätze auf Folien schreiben?","Weil Vortragende dann oft nur ablesen."],
            ["Wozu sind kleine Pausen gut?","Sie helfen dem Publikum beim Nachdenken und dem Sprecher beim Atmen."],
            ["Was kann man tun, wenn man eine Antwort nicht weiß?","Ruhig bleiben und sagen, dass man die Information später prüft."]
          ]
        }
      ]
    },
    9: {
      vocab: [
        {w:"der Kletterpark, -s", d:"Ein Ort, an dem man gesichert zwischen Bäumen klettert.", ex:"Am Samstag gehen wir in den Kletterpark.", ar:"حديقة تسلق"},
        {w:"der Kletterwettbewerb, -e", d:"Ein Wettkampf im Klettern.", ex:"Bea nimmt an einem Kletterwettbewerb teil.", ar:"مسابقة تسلق"},
        {w:"aufgeregt", d:"Nervös und gespannt vor einem wichtigen Ereignis.", ex:"Vor dem Wettkampf bin ich sehr aufgeregt.", ar:"متحمس ومتوتر"},
        {w:"jemandem Mut machen", d:"Einer Person helfen, wieder an sich zu glauben.", ex:"Meine Freunde machen mir vor dem Spiel Mut.", ar:"يشجّع شخصًا"},
        {w:"das Finale, -", d:"Der letzte und entscheidende Teil eines Wettbewerbs.", ex:"Unsere Mannschaft steht im Finale.", ar:"النهائي"},
        {w:"der Zuschauer, -", d:"Eine Person, die ein Spiel oder einen Wettkampf ansieht.", ex:"Die Zuschauer jubeln laut.", ar:"المشاهد"},
        {w:"anfeuern", d:"Sportler laut unterstützen.", ex:"Die Fans feuern ihr Team an.", ar:"يشجّع بحماس"},
        {w:"sich verletzen", d:"Am Körper eine Verletzung bekommen.", ex:"Er hat sich beim Training am Fuß verletzt.", ar:"يُصاب"},
        {w:"sich aufwärmen", d:"Den Körper vor dem Sport mit leichten Übungen vorbereiten.", ex:"Vor dem Laufen wärme ich mich zehn Minuten auf.", ar:"يعمل إحماء"},
        {w:"durchhalten", d:"Trotz Anstrengung bis zum Ende weitermachen.", ex:"Die letzten Kilometer sind schwer, aber ich halte durch.", ar:"يصمد / يكمل للنهاية"},
        {w:"unentschieden", d:"Mit dem gleichen Ergebnis für beide Teams.", ex:"Das Spiel endet zwei zu zwei unentschieden.", ar:"تعادل"},
        {w:"der Teamgeist", d:"Das Gefühl, gemeinsam als Gruppe zu handeln.", ex:"Guter Teamgeist ist wichtiger als ein einzelner Star.", ar:"روح الفريق"}
      ],
      readings: [
        {
          title:"Vor und nach dem Kletterwettbewerb",
          kind:"Erzählung",
          text:`Am Samstag nimmt Bea zum ersten Mal an einem Kletterwettbewerb teil. Schon beim Frühstück ist sie sehr aufgeregt. Sie kontrolliert dreimal, ob Helm, Kletterschuhe und Trinkflasche in ihrer Tasche sind. Im Kletterpark trifft sie ihre Freundin Anna, die ihr Mut macht. Vor dem Start wärmt Bea sich gründlich auf und beobachtet die anderen Teilnehmer. Die erste Strecke schafft sie schnell. In der zweiten Runde macht sie jedoch einen Fehler und verliert viel Zeit. Kurz ist sie enttäuscht, trotzdem klettert sie weiter und erreicht das Ziel. Für das Finale reicht ihre Zeit nicht. Nach dem Wettbewerb wartet eine Überraschung: Anna und zwei Freunde stehen am Ausgang und haben ein kleines Plakat gemalt. Sie sagen, dass Bea beim nächsten Mal bestimmt noch besser ist. Bea lächelt. Sie hat nicht gewonnen, aber sie ist stolz, weil sie nicht aufgegeben hat.`,
          ar:"بيا شاركت لأول مرة في مسابقة تسلق. أخطأت ولم تدخل النهائي، لكنها كملت للنهاية وأصحابها شجعوها، فكانت فخورة إنها ما استسلمتش.",
          glossary:[["gründlich","بشكل جيد ودقيق"],["der Teilnehmer","المشارك"],["die Runde","الجولة"],["jedoch","لكن / إلا أن"],["reichen","يكفي"],["aufgeben","يستسلم"]],
          questions:[
            ["Warum kontrolliert Bea ihre Tasche mehrmals?","Weil sie aufgeregt ist und nichts vergessen möchte."],
            ["Was passiert in der zweiten Runde?","Sie macht einen Fehler und verliert Zeit."],
            ["Erreicht Bea das Finale?","Nein, ihre Zeit reicht nicht."],
            ["Warum ist sie trotzdem stolz?","Weil sie weitergemacht und nicht aufgegeben hat."]
          ]
        },
        {
          title:"Ein Verein sucht neue Mitglieder",
          kind:"Anzeige und Bericht",
          text:`Der Sportverein Nord bietet ab September einen neuen Freizeitkurs an. Gesucht werden Erwachsene, die gern gemeinsam aktiv sind. Im Kurs probieren die Mitglieder verschiedene Sportarten aus: Volleyball, Tischtennis, leichtes Lauftraining und kleine Mannschaftsspiele. Vorkenntnisse sind nicht nötig. Wichtig sind bequeme Sportschuhe, Freude an Bewegung und Respekt vor den anderen. Das Training findet jeden Dienstag von 18 bis 19.30 Uhr statt. Nach einem kostenlosen Probetraining kann man entscheiden, ob man Mitglied werden möchte. Samir besucht den Kurs, weil er nach der Arbeit mehr Bewegung braucht. Am ersten Abend kennt er niemanden und ist etwas unsicher. Die Trainerin erklärt alle Regeln ruhig, und die Gruppe begrüßt ihn freundlich. Beim Volleyball verliert sein Team zwar knapp, trotzdem haben alle viel Spaß. Samir meldet sich noch am selben Abend an. Besonders gefällt ihm der Teamgeist.`,
          ar:"نادي رياضي عامل كورس للكبار يجربوا فيه رياضات مختلفة. سمير حضر تدريب تجريبي، خسر فريقه لكن استمتع بروح الفريق وسجل عضوية.",
          glossary:[["der Freizeitkurs","كورس وقت الفراغ"],["die Vorkenntnisse","خبرة سابقة"],["bequem","مريح"],["das Probetraining","تدريب تجريبي"],["knapp","بفارق بسيط"],["sich anmelden","يسجّل"]],
          questions:[
            ["Für wen ist der neue Kurs?","Für Erwachsene, die gern gemeinsam aktiv sind."],
            ["Was braucht man für die Teilnahme?","Bequeme Sportschuhe, Freude an Bewegung und Respekt."],
            ["Warum besucht Samir den Kurs?","Weil er nach der Arbeit mehr Bewegung braucht."],
            ["Was gefällt ihm besonders?","Der Teamgeist."]
          ]
        }
      ]
    },
    10: {
      vocab: [
        {w:"die Wohngemeinschaft, -en", d:"Mehrere Personen wohnen zusammen in einer Wohnung.", ex:"In unserer Wohngemeinschaft teilen wir Küche und Bad.", ar:"سكن مشترك"},
        {w:"der Mitbewohner, -", d:"Eine Person, die mit anderen in derselben Wohnung lebt.", ex:"Mein neuer Mitbewohner kocht sehr gern.", ar:"زميل السكن"},
        {w:"die WG-Kasse, -n", d:"Gemeinsames Geld für Dinge, die alle in der WG brauchen.", ex:"Putzmittel bezahlen wir aus der WG-Kasse.", ar:"صندوق مصاريف السكن"},
        {w:"der Putzplan, -e", d:"Ein Plan, der zeigt, wer wann sauber macht.", ex:"Der Putzplan hängt an der Küchentür.", ar:"جدول التنظيف"},
        {w:"aufräumen", d:"Dinge an ihren richtigen Platz bringen.", ex:"Bitte räum nach der Party das Wohnzimmer auf.", ar:"يرتّب"},
        {w:"der Müll", d:"Dinge, die man nicht mehr braucht und wegwirft.", ex:"Wer bringt heute den Müll runter?", ar:"القمامة"},
        {w:"Rücksicht nehmen auf", d:"An die Bedürfnisse anderer Menschen denken.", ex:"Nachts nehmen wir Rücksicht auf die Nachbarn.", ar:"يراعي"},
        {w:"die Ruhezeit, -en", d:"Eine Zeit, in der man keinen Lärm machen soll.", ex:"Die Ruhezeit beginnt um 22 Uhr.", ar:"وقت الهدوء"},
        {w:"das WG-Casting, -s", d:"Ein Treffen, bei dem eine WG neue Mitbewohner kennenlernt.", ex:"Beim WG-Casting sprechen wir über Alltag und Regeln.", ar:"مقابلة اختيار زميل سكن"},
        {w:"zuverlässig", d:"So, dass andere sich auf eine Person verlassen können.", ex:"Wir suchen eine freundliche und zuverlässige Mitbewohnerin.", ar:"جدير بالثقة / ملتزم"},
        {w:"die Nebenkosten (Pl.)", d:"Zusätzliche Wohnkosten für Heizung, Wasser und anderes.", ex:"Die Nebenkosten sind schon in der Miete enthalten.", ar:"مصاريف إضافية للسكن"},
        {w:"einziehen", d:"Beginnen, in einer neuen Wohnung zu wohnen.", ex:"Die neue Mitbewohnerin zieht am ersten Oktober ein.", ar:"ينتقل للسكن"}
      ],
      readings: [
        {
          title:"Das WG-Casting",
          kind:"Dialogbericht",
          text:`In der WG von Nils, Amira und Jo wird ein Zimmer frei. Sie schreiben eine Anzeige und laden vier Interessierte zu einem WG-Casting ein. Vor dem ersten Gespräch sammeln sie Fragen: Wie sieht der Tagesablauf der Person aus? Kocht sie gern? Hat sie ein Haustier? Wie wichtig sind ihr Ordnung und Ruhe? Die Bewerberin Sofia erzählt, dass sie als Krankenpflegerin arbeitet und manchmal Nachtdienst hat. Sie ist zuverlässig, raucht nicht und würde gern zweimal pro Woche für alle kochen. Einen festen Putzplan findet sie sinnvoll. Amira fragt, ob Sofia auch am Wochenende Besuch bekommt. Sofia antwortet offen, dass ihre Schwester manchmal übernachtet, aber sie möchte vorher immer Bescheid sagen. Nach dem Gespräch sind sich die drei einig: Sofia passt gut zu ihnen. Sie erklären ihr die WG-Kasse, die Ruhezeiten und die Nebenkosten. Eine Woche später unterschreibt Sofia den Mietvertrag.`,
          ar:"ثلاثة زملاء سكن عملوا مقابلة لاختيار شخص جديد. صوفيا كانت واضحة وملتزمة ووافقت على نظام التنظيف والهدوء، فاختاروها.",
          glossary:[["frei werden","يصبح شاغرًا"],["der Interessierte","الشخص المهتم"],["der Tagesablauf","نظام اليوم"],["der Nachtdienst","نوبة ليلية"],["Bescheid sagen","يبلّغ"],["der Mietvertrag","عقد الإيجار"]],
          questions:[
            ["Warum veranstaltet die WG ein Casting?","Weil ein Zimmer frei wird."],
            ["Welchen Beruf hat Sofia?","Sie ist Krankenpflegerin."],
            ["Was sagt Sofia über Besuch?","Ihre Schwester übernachtet manchmal, aber Sofia sagt vorher Bescheid."],
            ["Welche Regeln erklärt die WG?","WG-Kasse, Ruhezeiten und Nebenkosten."]
          ]
        },
        {
          title:"Eine höfliche Beschwerde",
          kind:"E-Mail",
          text:`Sehr geehrter Herr Klein, seit drei Wochen funktioniert der Aufzug in unserem Haus nicht zuverlässig. Manchmal bleibt er zwischen dem zweiten und dritten Stock stehen. Gestern musste eine ältere Nachbarin fast zwanzig Minuten warten, bis die Tür wieder aufging. Außerdem ist das Licht im Treppenhaus kaputt. Besonders abends ist das gefährlich. Ich habe den Hausmeister bereits zweimal informiert, aber bisher hat sich nichts geändert. Könnten Sie bitte eine Firma beauftragen und uns mitteilen, wann die Reparatur stattfindet? Wir möchten keinen Streit, aber die Situation ist für mehrere Mieter schwierig. Bis zur Reparatur wäre es hilfreich, wenn ein Hinweis an der Aufzugtür hängen würde. Vielen Dank für Ihre Unterstützung. Mit freundlichen Grüßen, Elena Baumann.`,
          ar:"إيلينا كتبت شكوى مؤدبة لصاحب العقار عن الأسانسير والنور. شرحت المشكلة وتأثيرها وطلبت موعد إصلاح وتنبيه للسكان.",
          glossary:[["zuverlässig funktionieren","يعمل بثبات"],["stecken bleiben","يعلق"],["der Hausmeister","مسؤول المبنى"],["jemanden beauftragen","يكلّف شخصًا بمهمة"],["der Hinweis","تنبيه"],["die Unterstützung","المساعدة"]],
          questions:[
            ["Welche zwei Probleme gibt es im Haus?","Der Aufzug funktioniert nicht zuverlässig und das Treppenhauslicht ist kaputt."],
            ["Wer hatte gestern ein Problem mit dem Aufzug?","Eine ältere Nachbarin."],
            ["Wen hat Elena schon informiert?","Den Hausmeister."],
            ["Was soll bis zur Reparatur passieren?","Ein Hinweis soll an der Aufzugtür hängen."]
          ]
        }
      ]
    },
    11: {
      vocab: [
        {w:"das Sprichwort, ⸚er", d:"Ein kurzer, bekannter Satz mit einer allgemeinen Erfahrung.", ex:"„Zeit ist Geld“ ist ein bekanntes Sprichwort.", ar:"مثل / حكمة"},
        {w:"der Zeitdruck", d:"Das Gefühl, nicht genug Zeit zu haben.", ex:"Unter Zeitdruck mache ich mehr Fehler.", ar:"ضغط الوقت"},
        {w:"Zeit verschwenden", d:"Zeit für etwas Unwichtiges oder Nutzloses verbrauchen.", ex:"Ich möchte morgens keine Zeit mit Suchen verschwenden.", ar:"يضيّع الوقت"},
        {w:"sich Zeit nehmen", d:"Genug Zeit für eine Person oder Sache planen.", ex:"Am Sonntag nehme ich mir Zeit für meine Familie.", ar:"يخصص وقتًا"},
        {w:"rechtzeitig", d:"Früh genug, bevor es zu spät ist.", ex:"Wir müssen rechtzeitig mit dem Packen anfangen.", ar:"في الوقت المناسب"},
        {w:"die Lebensphase, -n", d:"Ein Abschnitt im Leben, zum Beispiel Kindheit oder Studium.", ex:"In jeder Lebensphase verändern sich unsere Wünsche.", ar:"مرحلة من الحياة"},
        {w:"die Erinnerung, -en", d:"Etwas aus der Vergangenheit, an das man sich erinnert.", ex:"Dieses Foto ist eine schöne Erinnerung.", ar:"ذكرى"},
        {w:"der Wunsch, ⸚e", d:"Etwas, das man gern haben oder erleben möchte.", ex:"Mein größter Wunsch ist eine lange Reise.", ar:"أمنية"},
        {w:"die Priorität, -en", d:"Etwas, das wichtiger als andere Dinge ist.", ex:"Gesundheit hat für mich die höchste Priorität.", ar:"أولوية"},
        {w:"aufschieben", d:"Etwas später machen, obwohl man es jetzt machen könnte.", ex:"Ich schiebe unangenehme Aufgaben oft auf.", ar:"يؤجل"},
        {w:"erledigen", d:"Eine Aufgabe vollständig machen.", ex:"Am Vormittag erledige ich wichtige Aufgaben.", ar:"ينجز"},
        {w:"der Terminplaner, -", d:"Ein Kalender für Termine und Aufgaben.", ex:"Alle Termine stehen in meinem digitalen Terminplaner.", ar:"منظم المواعيد"}
      ],
      readings: [
        {
          title:"Ein Tag ohne Zeitdruck",
          kind:"Blogbeitrag",
          text:`Früher begann Toms Arbeitstag chaotisch. Er suchte morgens seine Schlüssel, beantwortete beim Frühstück E-Mails und kam häufig zu spät. Den ganzen Tag hatte er das Gefühl, dass die Zeit nicht reicht. Dann änderte er einige Gewohnheiten. Am Abend legt er jetzt Kleidung, Schlüssel und Tasche bereit. Im Terminplaner stehen nicht nur berufliche Aufgaben, sondern auch Pausen. Die wichtigste Aufgabe erledigt er vormittags, bevor er soziale Medien öffnet. Kleinere Aufgaben sammelt er und bearbeitet sie später zusammen. Wenn eine neue Bitte kommt, prüft er zuerst, ob sie wirklich dringend ist. Nach 19 Uhr liest er keine Arbeitsnachrichten mehr. Tom schafft dadurch nicht plötzlich alles. Aber er entscheidet bewusster, wofür er seine Zeit verwendet. Er sagt: Wer jede Minute füllt, hat nicht automatisch mehr Zeit. Manchmal braucht man eine freie Stunde, um wieder gute Ideen zu haben.`,
          ar:"توم كان يومه فوضوي وتحت ضغط. جهز حاجاته بالليل، نظم الأولويات والمواعيد، جمع المهام الصغيرة وحدد وقتًا يتوقف بعده عن رسائل العمل.",
          glossary:[["chaotisch","فوضوي"],["bereitlegen","يجهز ويضع"],["beruflich","خاص بالعمل"],["dringend","عاجل"],["bewusst","بوعي"],["verwenden","يستخدم"]],
          questions:[
            ["Warum kam Tom morgens oft zu spät?","Weil er Dinge suchte und schon beim Frühstück E-Mails beantwortete."],
            ["Wann erledigt er die wichtigste Aufgabe?","Am Vormittag, bevor er soziale Medien öffnet."],
            ["Was macht er nach 19 Uhr nicht mehr?","Er liest keine Arbeitsnachrichten mehr."],
            ["Was hat Tom vor allem gelernt?","Bewusster zu entscheiden, wofür er seine Zeit verwendet."]
          ]
        },
        {
          title:"Wünsche verändern sich",
          kind:"Interview",
          text:`Eine Stadtzeitschrift hat drei Generationen nach ihren Wünschen gefragt. Die siebzehnjährige Mila möchte nach der Schule ein Jahr im Ausland verbringen. Sie würde gern neue Menschen kennenlernen und selbstständiger werden. Ihr Vater Daniel ist vierundvierzig. Früher wollte er beruflich möglichst schnell erfolgreich sein. Heute wünscht er sich vor allem mehr Zeit mit seiner Familie und weniger Termine am Wochenende. Milas Großmutter Ruth ist zweiundsiebzig. Sie sagt, dass materielle Dinge für sie nicht mehr so wichtig sind. Sie wäre gern gesund genug, um weiter im Garten zu arbeiten und ihre Freunde regelmäßig zu treffen. Alle drei haben unterschiedliche Pläne, aber eine Antwort ist gleich: Gute Beziehungen sind wichtiger als ein voller Kalender. Die Reporterin stellt am Ende fest, dass Wünsche von der Lebensphase abhängen. Manche Träume verschwinden, andere werden konkreter, und manchmal entdeckt man ganz neue.`,
          ar:"مقابلة مع ثلاث أجيال: ميلا تريد السفر، أبوها يريد وقتًا أكثر للعائلة، وجدتها تهتم بالصحة والأصدقاء. الأمنيات تتغير حسب مرحلة الحياة.",
          glossary:[["die Generation","الجيل"],["selbstständig","مستقل"],["beruflich erfolgreich","ناجح مهنيًا"],["materiell","مادي"],["abhängen von","يعتمد على"],["konkret","محدد وواضح"]],
          questions:[
            ["Was möchte Mila nach der Schule machen?","Ein Jahr im Ausland verbringen."],
            ["Wie haben sich Daniels Wünsche verändert?","Früher wollte er schnellen beruflichen Erfolg, heute mehr Familienzeit."],
            ["Was ist Ruth besonders wichtig?","Gesundheit, Gartenarbeit und regelmäßige Treffen mit Freunden."],
            ["Welche Antwort geben alle drei ähnlich?","Gute Beziehungen sind wichtiger als ein voller Kalender."]
          ]
        }
      ]
    },
    12: {
      vocab: [
        {w:"die Leinwand, ⸚e", d:"Eine Fläche, auf die man malt oder ein Bild projiziert.", ex:"Das große Bild hängt auf einer Leinwand.", ar:"لوحة رسم قماشية / شاشة عرض"},
        {w:"der Vordergrund", d:"Der vordere Teil eines Bildes.", ex:"Im Vordergrund sitzt eine Frau am Tisch.", ar:"مقدمة الصورة"},
        {w:"der Hintergrund", d:"Der hintere Teil eines Bildes.", ex:"Im Hintergrund sieht man das Meer.", ar:"خلفية الصورة"},
        {w:"der Bildrand, ⸚er", d:"Der äußere Bereich eines Bildes.", ex:"Am linken Bildrand steht ein kleines Boot.", ar:"حافة الصورة"},
        {w:"wirken", d:"Einen bestimmten Eindruck machen.", ex:"Die dunklen Farben wirken traurig.", ar:"يبدو / يعطي انطباعًا"},
        {w:"der Auftritt, -e", d:"Eine Vorstellung vor Publikum.", ex:"Der Auftritt der Band beginnt um neun Uhr.", ar:"عرض فني"},
        {w:"live", d:"Direkt vor Publikum und nicht als Aufnahme.", ex:"Die Sängerin klingt live besonders gut.", ar:"مباشر"},
        {w:"der Refrain, -s", d:"Der Teil eines Liedes, der mehrmals wiederholt wird.", ex:"Beim Refrain singt das Publikum mit.", ar:"لازمة الأغنية"},
        {w:"die Stimmung, -en", d:"Die Atmosphäre und Gefühle an einem Ort.", ex:"Auf dem Festival war die Stimmung fantastisch.", ar:"الأجواء / الحالة"},
        {w:"die Eintrittskarte, -n", d:"Ein Ticket für ein Konzert, Museum oder Theater.", ex:"Ich habe die Eintrittskarten online gekauft.", ar:"تذكرة دخول"},
        {w:"ausverkauft", d:"So, dass es keine Karten mehr gibt.", ex:"Das Konzert ist seit Wochen ausverkauft.", ar:"نفدت تذاكره"},
        {w:"darstellen", d:"Etwas in einem Bild, Text oder Theaterstück zeigen.", ex:"Das Gemälde stellt einen ruhigen Sommerabend dar.", ar:"يجسّد / يصوّر"},
        {w:"die Zugabe, -n", d:"Ein zusätzliches Lied am Ende eines Konzerts.", ex:"Nach langem Applaus spielt die Band noch eine Zugabe.", ar:"أغنية إضافية بعد نهاية الحفل"}
      ],
      readings: [
        {
          title:"Ein Konzert im alten Bahnhof",
          kind:"Kulturbericht",
          text:`Am Freitagabend spielt die Band „Nordlicht“ in einem alten Bahnhof, der heute als Kulturzentrum genutzt wird. Alle Eintrittskarten sind ausverkauft. Schon vor dem Eingang warten viele Fans, obwohl es kalt ist. Im Saal gibt es keine festen Sitzplätze. Die Bühne steht dort, wo früher die Züge abgefahren sind. Als die Musiker erscheinen, wird es sofort still. Das erste Lied beginnt nur mit einer Gitarre und einer leisen Stimme. Später wird die Musik schneller, und beim bekannten Refrain singt das ganze Publikum mit. Die Sängerin erzählt zwischen den Liedern, wie die Band ihre Texte schreibt. Viele handeln von Freundschaft, Veränderungen und dem Leben in der Stadt. Nach neunzig Minuten endet der Auftritt, aber die Fans klatschen weiter. Die Band kommt zurück und spielt zwei zusätzliche Lieder. Für Mara war besonders die ungewöhnliche Atmosphäre im Bahnhof unvergesslich.`,
          ar:"فرقة قدمت حفلة في محطة قطار قديمة تحولت لمركز ثقافي. الجمهور غنى اللازمة، والفرقة رجعت وقدمت أغنيتين إضافيتين.",
          glossary:[["das Kulturzentrum","مركز ثقافي"],["der Saal","القاعة"],["erscheinen","يظهر"],["handeln von","يتناول موضوع"],["zusätzlich","إضافي"],["unvergesslich","لا يُنسى"]],
          questions:[
            ["Wo findet das Konzert statt?","In einem alten Bahnhof, der heute ein Kulturzentrum ist."],
            ["Was macht das Publikum beim bekannten Refrain?","Es singt mit."],
            ["Wovon handeln viele Lieder?","Von Freundschaft, Veränderungen und dem Stadtleben."],
            ["Warum ist der Abend für Mara besonders?","Wegen der ungewöhnlichen Atmosphäre im Bahnhof."]
          ]
        },
        {
          title:"Ein Bild genau beschreiben",
          kind:"Bildbeschreibung",
          text:`Das Gemälde zeigt einen Strand am frühen Morgen. Im Vordergrund liegt ein rotes Fahrrad im Sand. Daneben stehen ein Korb und ein Paar Schuhe. In der Mitte des Bildes läuft eine Person langsam am Wasser entlang. Man sieht ihr Gesicht nicht, weil sie dem Meer zugewandt ist. Am rechten Bildrand liegt ein kleines Boot. Im Hintergrund sind zwei Inseln und mehrere helle Wolken zu erkennen. Die Farben Blau, Grau und Hellgelb bestimmen das Bild. Dadurch wirkt die Szene ruhig, aber auch ein wenig einsam. Vielleicht gehört das Fahrrad der Person am Wasser. Möglicherweise ist sie sehr früh aufgestanden, um den Strand ohne Touristen zu erleben. Der Maler stellt keine schnelle Handlung dar. Trotzdem erzählt das Bild eine Geschichte: Jemand hat den Alltag kurz verlassen und genießt einen stillen Moment.`,
          ar:"وصف لوحة لشاطئ صباحًا: عجلة حمراء في المقدمة، شخص عند المياه، مركب على اليمين وجزر في الخلف. الألوان تجعل الجو هادئًا وقليلًا من الوحدة.",
          glossary:[["dem Meer zugewandt","مواجه للبحر"],["zu erkennen sein","يمكن تمييزه"],["bestimmen","يسيطر / يحدد"],["einsam","وحيد"],["möglicherweise","ربما"],["die Handlung","الحدث"]],
          questions:[
            ["Was liegt im Vordergrund?","Ein rotes Fahrrad, ein Korb und ein Paar Schuhe."],
            ["Warum sieht man das Gesicht der Person nicht?","Weil sie dem Meer zugewandt ist."],
            ["Wie wirkt die Szene?","Ruhig und ein wenig einsam."],
            ["Welche mögliche Geschichte erzählt das Bild?","Jemand verlässt kurz den Alltag und genießt einen stillen Moment."]
          ]
        }
      ]
    }
  };

  const allChapters = [...window.BOOK1, ...window.BOOK2];
  allChapters.forEach(chapter => {
    const extra = EXTRA[chapter.num];
    if (!extra) return;
    const knownWords = new Set(chapter.vocab.map(item => item.w.toLowerCase()));
    chapter.vocab.push(...extra.vocab.filter(item => !knownWords.has(item.w.toLowerCase())));
    chapter.readings = extra.readings;
  });
})();
