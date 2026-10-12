/* Detailed B1.2 grammar, chapters 7, 8, 9: rules with tables, Arabic explanations,
   typical mistakes and exercises (choice, true/false, gap, order, transform, error). */
window.B1_GRAMMAR = Object.assign(window.B1_GRAMMAR || {}, {
  "7": [
    {
      "id": "b1-k7-plusquamperfekt",
      "t": "Plusquamperfekt",
      "tAr": "الماضي التام (الماضي قبل الماضي)",
      "summary": "Mit dem <b>Plusquamperfekt</b> erzählt man, was <b>noch früher</b> passiert ist – vor einer anderen Handlung in der Vergangenheit. Form: <b>hatte/war</b> (Präteritum) + <b>Partizip II</b>.",
      "summaryAr": "الـ Plusquamperfekt بنستخدمه للحاجة اللي حصلت قبل حاجة تانية في الماضي. بيتعمل من hatte أو war + التصريف التالت (Partizip II).",
      "sections": [
        {
          "h": "1. Wann benutzt man das Plusquamperfekt?",
          "hAr": "١. بنستخدمه إمتى؟",
          "text": "Wenn man über die Vergangenheit erzählt (im <b>Präteritum</b> oder <b>Perfekt</b>) und eine Handlung <b>davor</b> passiert ist, benutzt man für diese frühere Handlung das <b>Plusquamperfekt</b>. Es heißt deshalb auch <b>Vorvergangenheit</b>.",
          "ar": "لما تكون بتحكي حاجة في الماضي، وفيه حاجة تانية حصلت قبلها، الحاجة الأقدم دي بتتقال بالـ Plusquamperfekt. يعني ماضي قبل الماضي.",
          "table": {
            "head": [
              "Zeit",
              "Beispiel",
              "Tempus"
            ],
            "rows": [
              [
                "jetzt",
                "Wir fahren gemeinsam an die Ostsee.",
                "Präsens"
              ],
              [
                "früher",
                "Wir verloren uns aus den Augen.",
                "Präteritum / Perfekt"
              ],
              [
                "noch früher",
                "Wir hatten uns fast jeden Tag getroffen.",
                "Plusquamperfekt"
              ]
            ]
          },
          "examples": [
            [
              "Elena kannte niemanden. Sie war erst vor ein paar Tagen nach Frankfurt gezogen.",
              "إيلينا ماكانتش تعرف حد. كانت لسه نازلة فرانكفورت من كام يوم."
            ],
            [
              "Als ich ankam, hatte der Film schon angefangen.",
              "لما وصلت، كان الفيلم ابتدا خلاص."
            ]
          ]
        },
        {
          "h": "2. Die Form",
          "hAr": "٢. التصريف",
          "text": "Das Plusquamperfekt bildet man wie das Perfekt, aber das Hilfsverb steht im <b>Präteritum</b>: <b>hatte</b> oder <b>war</b> + <b>Partizip II</b> am Satzende.",
          "ar": "زي الـ Perfekt بالظبط، بس بدل habe/bin بتقول hatte/war، والـ Partizip II بيروح آخر الجملة.",
          "table": {
            "head": [
              "Person",
              "mit haben",
              "mit sein"
            ],
            "rows": [
              [
                "ich",
                "hatte getroffen",
                "war gereist"
              ],
              [
                "du",
                "hattest getroffen",
                "warst gereist"
              ],
              [
                "er/sie/es",
                "hatte getroffen",
                "war gereist"
              ],
              [
                "wir",
                "hatten getroffen",
                "waren gereist"
              ],
              [
                "ihr",
                "hattet getroffen",
                "wart gereist"
              ],
              [
                "sie/Sie",
                "hatten getroffen",
                "waren gereist"
              ]
            ]
          },
          "examples": [
            [
              "Wir hatten uns immer gut verstanden.",
              "إحنا كنا دايمًا متفاهمين مع بعض."
            ],
            [
              "Wir waren viel zusammen gereist.",
              "كنا سافرنا مع بعض كتير."
            ]
          ]
        },
        {
          "h": "3. hatte oder war?",
          "hAr": "٣. hatte ولا war؟",
          "text": "Die Regel ist dieselbe wie beim Perfekt: Verben der <b>Bewegung</b> (gehen, fahren, ziehen) und der <b>Veränderung</b> (einschlafen, aufwachen) sowie <b>sein, bleiben, passieren</b> nehmen <b>war</b>. Alle anderen Verben und alle <b>reflexiven</b> Verben nehmen <b>hatte</b>.",
          "ar": "نفس قاعدة الـ Perfekt: أفعال الحركة والتغيير، وكمان sein وbleiben وpassieren بتاخد war. باقي الأفعال وكل الأفعال اللي فيها sich بتاخد hatte.",
          "examples": [
            [
              "Der Zug war schon abgefahren.",
              "القطر كان مشي خلاص."
            ],
            [
              "Sie hatte sich vorher nie mit ihm gestritten.",
              "هي عمرها ما كانت اتخانقت معاه قبل كده."
            ],
            [
              "Wir waren lange Freunde geblieben.",
              "فضلنا أصحاب فترة طويلة."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Sie hatte nach Berlin gefahren.",
          "right": "Sie war nach Berlin gefahren.",
          "ar": "fahren فعل حركة، يبقى بياخد war مش hatte."
        },
        {
          "wrong": "Ich habe vorher noch nie Sushi gegessen gehabt.",
          "right": "Ich hatte vorher noch nie Sushi gegessen.",
          "ar": "الـ Plusquamperfekt = hatte + Partizip II بس، من غير gehabt زيادة."
        },
        {
          "wrong": "Wir hatten uns schon lange nicht mehr gesehen hatten.",
          "right": "Wir hatten uns schon lange nicht mehr gesehen.",
          "ar": "hatte بيتقال مرة واحدة بس في الجملة، في المكان التاني، والـ Partizip في الآخر."
        },
        {
          "wrong": "Ich war sehr müde, weil ich schlecht geschlafen war.",
          "right": "Ich war sehr müde, weil ich schlecht geschlafen hatte.",
          "ar": "schlafen مش فعل حركة ولا تغيير، يبقى بياخد hatte."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Bevor wir uns kennenlernten, ___ ich schon zwei Jahre in Köln gewohnt.",
          "o": [
            "hatte",
            "war",
            "habe"
          ],
          "a": 0,
          "why": "wohnen بياخد haben، وفي الـ Plusquamperfekt بيبقى hatte."
        },
        {
          "type": "choice",
          "q": "Mila kam zu spät zum Bahnhof. Der Zug ___ schon abgefahren.",
          "o": [
            "hatte",
            "ist",
            "war"
          ],
          "a": 2,
          "why": "abfahren فعل حركة، يبقى war + abgefahren."
        },
        {
          "type": "choice",
          "q": "Ich war sehr müde, weil ich die ganze Nacht nicht ___ hatte.",
          "o": [
            "schlafen",
            "geschlafen",
            "schlief"
          ],
          "a": 1,
          "why": "بعد hatte لازم الـ Partizip II: geschlafen."
        },
        {
          "type": "gap",
          "q": "Elena kannte niemanden in der neuen Stadt. Sie ___ erst vor ein paar Tagen nach Frankfurt gezogen.",
          "a": [
            "war"
          ],
          "why": "ziehen (ينقل) فعل حركة، يبقى war gezogen."
        },
        {
          "type": "gap",
          "q": "Valentin und Karim stritten oft. Vorher ___ sie sich immer gut verstanden.",
          "a": [
            "hatten"
          ],
          "why": "sich verstehen فعل فيه sich، يبقى بياخد haben، ومع sie (هم) hatten."
        },
        {
          "type": "gap",
          "q": "Als ich ankam, hatte die Party schon ___. (anfangen)",
          "a": [
            "angefangen"
          ],
          "why": "Partizip II بتاع anfangen هو angefangen، والـ ge بيدخل بعد البادئة an."
        },
        {
          "type": "truefalse",
          "q": "„Wir hatten uns fast jeden Tag getroffen.“ – Dieser Satz steht im Plusquamperfekt.",
          "a": true,
          "why": "صح: hatten + getroffen = Plusquamperfekt."
        },
        {
          "type": "truefalse",
          "q": "„Sie hatte nach Berlin gefahren.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط: fahren فعل حركة، الصح: Sie war nach Berlin gefahren."
        },
        {
          "type": "transform",
          "q": "Ins Plusquamperfekt: Wir reisen viel zusammen.",
          "a": [
            "Wir waren viel zusammen gereist."
          ],
          "why": "reisen فعل حركة: war + gereist، ومع wir بيبقى waren."
        },
        {
          "type": "transform",
          "q": "Ins Plusquamperfekt: Alessia sieht ihre Freunde nur selten.",
          "a": [
            "Alessia hatte ihre Freunde nur selten gesehen."
          ],
          "why": "sehen بياخد haben: hatte + gesehen في آخر الجملة."
        },
        {
          "type": "order",
          "prefix": "Als Matilda nach Freiburg kam,",
          "words": [
            "gefunden",
            "sie",
            "Wohnung",
            "hatte",
            "schon",
            "eine"
          ],
          "a": [
            "hatte sie schon eine Wohnung gefunden"
          ],
          "why": "الجملة الأساسية بعد جملة als بتبدأ بالفعل hatte، وبعدين الفاعل، والـ Partizip في الآخر."
        },
        {
          "type": "error",
          "q": "Nachdem er gegessen war, ging er spazieren.",
          "a": [
            "Nachdem er gegessen hatte, ging er spazieren."
          ],
          "why": "essen بياخد haben، يبقى gegessen hatte مش gegessen war."
        }
      ]
    },
    {
      "id": "b1-k7-nachdem",
      "t": "Nebensätze mit nachdem",
      "tAr": "الجمل الجانبية بـ nachdem (بعد ما)",
      "summary": "<b>nachdem</b> leitet einen Nebensatz ein: Die Handlung im Nebensatz passiert <b>zuerst</b>, die im Hauptsatz <b>danach</b>. Das Verb steht am <b>Ende</b>, und der Nebensatz hat ein <b>anderes Tempus</b> als der Hauptsatz.",
      "summaryAr": "nachdem يعني «بعد ما». اللي في جملة nachdem حصل الأول، واللي في الجملة الأساسية حصل بعده. الفعل بيروح آخر الجملة، والزمن في جملة nachdem بيبقى أقدم من زمن الجملة الأساسية.",
      "sections": [
        {
          "h": "1. Bedeutung und Satzbau",
          "hAr": "١. المعنى وترتيب الجملة",
          "text": "Der <b>nachdem</b>-Satz nennt, was zuerst passiert. Das konjugierte Verb steht am <b>Ende</b>. Steht der Nebensatz vorne, beginnt der Hauptsatz nach dem Komma mit dem <b>Verb</b>.",
          "ar": "جملة nachdem بتقول إيه اللي حصل الأول، والفعل المصرّف بيروح في الآخر. ولو بدأت بجملة nachdem، الجملة الأساسية بعد الفاصلة بتبدأ بالفعل على طول.",
          "examples": [
            [
              "Nachdem Matilda umgezogen war, fühlte sie sich oft einsam.",
              "بعد ما ماتيلدا عزّلت، كانت بتحس بالوحدة كتير."
            ],
            [
              "Sie fühlte sich oft einsam, nachdem sie umgezogen war.",
              "كانت بتحس بالوحدة كتير بعد ما عزّلت."
            ]
          ]
        },
        {
          "h": "2. Die Zeitenfolge",
          "hAr": "٢. ترتيب الأزمنة",
          "text": "Im <b>nachdem</b>-Satz steht immer ein Tempus, das <b>früher</b> ist als das Tempus im Hauptsatz. Hauptsatz <b>Präsens</b> → Nebensatz <b>Perfekt</b>. Hauptsatz <b>Präteritum</b> → Nebensatz <b>Plusquamperfekt</b>. In der gesprochenen Sprache: Hauptsatz <b>Perfekt</b> → Nebensatz <b>Plusquamperfekt</b>.",
          "ar": "الزمن في جملة nachdem لازم يكون «أقدم» خطوة من زمن الجملة الأساسية: لو الأساسية مضارع، nachdem تبقى Perfekt. ولو الأساسية Präteritum (أو Perfekt في الكلام)، nachdem تبقى Plusquamperfekt.",
          "table": {
            "head": [
              "Hauptsatz",
              "nachdem-Satz",
              "Beispiel"
            ],
            "rows": [
              [
                "Präsens",
                "Perfekt",
                "Nachdem sie nette Leute getroffen hat, fühlt sie sich wohl."
              ],
              [
                "Präteritum",
                "Plusquamperfekt",
                "Nachdem sie angekommen war, fand sie schnell eine Wohnung."
              ],
              [
                "Perfekt (gesprochen)",
                "Plusquamperfekt",
                "Nachdem wir gegessen hatten, sind wir spazieren gegangen."
              ]
            ]
          },
          "examples": [
            [
              "Nachdem ich die Schule abgeschlossen hatte, fuhr ich nach Spanien.",
              "بعد ما خلّصت المدرسة، سافرت إسبانيا."
            ],
            [
              "Nachdem wir uns geeinigt haben, kochen wir zusammen.",
              "بعد ما بنتفق، بنطبخ مع بعض."
            ]
          ]
        },
        {
          "h": "3. nachdem oder nach?",
          "hAr": "٣. nachdem ولا nach؟",
          "text": "<b>nachdem</b> ist ein Konnektor und braucht einen Satz mit Verb. <b>nach</b> ist eine Präposition mit <b>Dativ</b> und steht vor einem Nomen.",
          "ar": "nachdem بعدها جملة فيها فعل. أما nach فهي حرف جر بعده اسم في الـ Dativ، زي «بعد الأكل».",
          "table": {
            "head": [
              "Konnektor + Satz",
              "Präposition + Nomen"
            ],
            "rows": [
              [
                "Nachdem wir gegessen hatten, …",
                "Nach dem Essen …"
              ],
              [
                "Nachdem wir uns gestritten hatten, …",
                "Nach dem Streit …"
              ],
              [
                "Nachdem sie umgezogen war, …",
                "Nach dem Umzug …"
              ]
            ]
          },
          "examples": [
            [
              "Nach der Arbeit treffe ich meine Clique.",
              "بعد الشغل بقابل الشلة بتاعتي."
            ],
            [
              "Nachdem ich gearbeitet habe, treffe ich meine Clique.",
              "بعد ما بخلّص شغل، بقابل الشلة بتاعتي."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Nachdem sie umgezogen ist, fühlte sie sich einsam.",
          "right": "Nachdem sie umgezogen war, fühlte sie sich einsam.",
          "ar": "الأساسية Präteritum (fühlte)، يبقى جملة nachdem لازم تبقى Plusquamperfekt: war."
        },
        {
          "wrong": "Nachdem ich gefrühstückt hatte, ich las die Zeitung.",
          "right": "Nachdem ich gefrühstückt hatte, las ich die Zeitung.",
          "ar": "بعد الفاصلة الفعل بييجي الأول، وبعده الفاعل."
        },
        {
          "wrong": "Nachdem dem Essen gehen wir spazieren.",
          "right": "Nach dem Essen gehen wir spazieren.",
          "ar": "قبل اسم لوحده بنستخدم nach، مش nachdem."
        },
        {
          "wrong": "Nachdem ich esse, putze ich die Zähne.",
          "right": "Nachdem ich gegessen habe, putze ich die Zähne.",
          "ar": "الأكل حصل قبل، يبقى نستخدم Perfekt في جملة nachdem مش المضارع."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Nachdem Matilda ihr Studium ___ hatte, fand sie eine Stelle in Freiburg.",
          "o": [
            "abschloss",
            "abgeschlossen",
            "abschließen"
          ],
          "a": 1,
          "why": "بعد hatte لازم Partizip II: abgeschlossen."
        },
        {
          "type": "choice",
          "q": "Nachdem sie neue Freunde gefunden hat, ___ es ihr in Freiburg sehr gut.",
          "o": [
            "gefällt",
            "gefiel",
            "hatte gefallen"
          ],
          "a": 0,
          "why": "جملة nachdem فيها Perfekt (hat gefunden)، يبقى الأساسية مضارع: gefällt."
        },
        {
          "type": "choice",
          "q": "___ dem Streit haben wir lange nicht miteinander gesprochen.",
          "o": [
            "Nachdem",
            "Bevor",
            "Nach"
          ],
          "a": 2,
          "why": "بعدها اسم بس (dem Streit) من غير فعل، يبقى nach + Dativ."
        },
        {
          "type": "gap",
          "q": "Nachdem er sich entschuldigt ___, war alles wieder gut.",
          "a": [
            "hatte"
          ],
          "why": "الأساسية Präteritum (war)، يبقى Plusquamperfekt، وsich entschuldigen بياخد hatte."
        },
        {
          "type": "gap",
          "q": "Nachdem wir in Leipzig angekommen ___, suchten wir sofort ein Café.",
          "a": [
            "waren"
          ],
          "why": "ankommen فعل حركة: waren angekommen، لأن الأساسية Präteritum."
        },
        {
          "type": "truefalse",
          "q": "„Nachdem ich die Schule abgeschlossen hatte, fuhr ich nach Spanien.“ – Die Zeitenfolge ist richtig.",
          "a": true,
          "why": "صح: الأساسية Präteritum (fuhr) وجملة nachdem Plusquamperfekt (hatte abgeschlossen)."
        },
        {
          "type": "truefalse",
          "q": "„Nachdem wir gegessen haben, gingen wir spazieren.“ – Die Zeitenfolge ist richtig.",
          "a": false,
          "why": "غلط: gingen Präteritum، يبقى لازم gegessen hatten."
        },
        {
          "type": "order",
          "prefix": "Nachdem Lisa umgezogen war,",
          "words": [
            "sich",
            "fühlte",
            "einsam",
            "sie",
            "oft"
          ],
          "a": [
            "fühlte sie sich oft einsam"
          ],
          "why": "بعد جملة nachdem الفعل fühlte أول حاجة، وبعده الفاعل sie وبعده sich."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit nachdem: Ich hatte meine Hausaufgaben gemacht. Dann traf ich meine Freunde.",
          "a": [
            "Nachdem ich meine Hausaufgaben gemacht hatte, traf ich meine Freunde.",
            "Ich traf meine Freunde, nachdem ich meine Hausaufgaben gemacht hatte."
          ],
          "why": "اللي حصل الأول (الواجب) بيروح في جملة nachdem، وhatte في آخرها."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit nachdem: Wir räumen auf. Dann schauen wir einen Film.",
          "a": [
            "Nachdem wir aufgeräumt haben, schauen wir einen Film.",
            "Wir schauen einen Film, nachdem wir aufgeräumt haben."
          ],
          "why": "الأساسية مضارع، يبقى جملة nachdem تبقى Perfekt: aufgeräumt haben."
        },
        {
          "type": "error",
          "q": "Nachdem ich gefrühstückt hatte, ich las die Zeitung.",
          "a": [
            "Nachdem ich gefrühstückt hatte, las ich die Zeitung."
          ],
          "why": "بعد الفاصلة الفعل las بييجي قبل الفاعل ich."
        },
        {
          "type": "error",
          "q": "Nachdem sie sich gestritten haben, redeten sie tagelang nicht miteinander.",
          "a": [
            "Nachdem sie sich gestritten hatten, redeten sie tagelang nicht miteinander."
          ],
          "why": "redeten Präteritum، يبقى جملة nachdem لازم Plusquamperfekt: hatten."
        }
      ]
    },
    {
      "id": "b1-k7-temporalsaetze",
      "t": "Temporalsätze mit bevor, bis, seit/seitdem, während",
      "tAr": "جمل الوقت بـ bevor وbis وseit/seitdem وwährend",
      "summary": "<b>bevor</b> (vorher), <b>bis</b> (Endpunkt), <b>seit/seitdem</b> (Beginn in der Vergangenheit bis jetzt) und <b>während</b> (gleichzeitig) leiten <b>Nebensätze</b> ein. Das Verb steht am <b>Ende</b>.",
      "summaryAr": "bevor = قبل ما، bis = لحد ما، seit/seitdem = من ساعة ما، während = في الوقت اللي / وهو بيعمل. كلهم بيعملوا جملة جانبية والفعل بيروح في الآخر.",
      "sections": [
        {
          "h": "1. Was bedeuten die Konnektoren?",
          "hAr": "١. معنى كل كلمة",
          "text": "Jeder Konnektor zeigt eine andere <b>zeitliche Beziehung</b> zwischen Hauptsatz und Nebensatz.",
          "ar": "كل كلمة من دول بتوضح علاقة زمنية مختلفة بين الجملتين.",
          "table": {
            "head": [
              "Konnektor",
              "Bedeutung",
              "Beispiel"
            ],
            "rows": [
              [
                "bevor",
                "Hauptsatz passiert zuerst, Nebensatz danach",
                "Sie trinken Kaffee, bevor Julia telefoniert."
              ],
              [
                "bis",
                "Endpunkt: so lange, bis etwas passiert",
                "Wir warten, bis du zurückkommst."
              ],
              [
                "seit / seitdem",
                "Beginn in der Vergangenheit, dauert bis jetzt",
                "Seit du arbeitest, bist du gestresst."
              ],
              [
                "während",
                "zwei Handlungen gleichzeitig",
                "Während ich aufräume, kochst du für uns."
              ]
            ]
          },
          "examples": [
            [
              "Bevor ich putze, koche ich einen Kaffee für uns.",
              "قبل ما أنضّف، هعمل لنا قهوة."
            ],
            [
              "Es dauert nicht mehr lang, bis das Essen fertig ist.",
              "مش هتطول لحد ما الأكل يجهز."
            ]
          ]
        },
        {
          "h": "2. Satzbau",
          "hAr": "٢. ترتيب الجملة",
          "text": "Das konjugierte Verb steht im Nebensatz am <b>Ende</b>. Wenn der Nebensatz <b>vorne</b> steht, kommt im Hauptsatz das <b>Verb</b> direkt nach dem Komma.",
          "ar": "في الجملة الجانبية الفعل في الآخر. ولو الجملة الجانبية جت الأول، الجملة الأساسية بتبدأ بالفعل بعد الفاصلة على طول.",
          "table": {
            "head": [
              "Nebensatz (Position 1)",
              "Verb",
              "Rest"
            ],
            "rows": [
              [
                "Seitdem du den Job gewechselt hast,",
                "bist",
                "du ständig erschöpft."
              ],
              [
                "Während du mit Simon telefonierst,",
                "kannst",
                "du gleichzeitig putzen."
              ],
              [
                "Bevor ich ins Bett gehe,",
                "lese",
                "ich noch ein bisschen."
              ]
            ]
          },
          "examples": [
            [
              "Warum kann ich mich nicht ausruhen, während du deine Freunde triffst?",
              "ليه ماينفعش أرتاح وإنت بتقابل صحابك؟"
            ]
          ]
        },
        {
          "h": "3. Tempus und Präpositionen",
          "hAr": "٣. الزمن وحروف الجر",
          "text": "Mit <b>seit/seitdem</b> steht meist das <b>Präsens</b>, wenn die Situation bis heute dauert. <b>seit</b> und <b>seitdem</b> bedeuten dasselbe. Nicht verwechseln: <b>vor</b> + Dativ, <b>seit</b> + Dativ, <b>bis</b> (zu + Dativ) und <b>während</b> + Genitiv stehen auch als <b>Präpositionen</b> vor einem Nomen.",
          "ar": "مع seit/seitdem غالبًا بنستخدم المضارع لو الحالة لسه مستمرة لحد النهارده. seit وseitdem نفس المعنى. وخلي بالك: فيه حروف جر شبههم بتيجي قبل اسم: vor + Dativ، seit + Dativ، bis zum/zur، während + Genitiv.",
          "table": {
            "head": [
              "Konnektor + Satz",
              "Präposition + Nomen"
            ],
            "rows": [
              [
                "bevor ich esse",
                "vor dem Essen"
              ],
              [
                "seit ich hier arbeite",
                "seit meinem ersten Arbeitstag"
              ],
              [
                "bis du kommst",
                "bis zu deiner Ankunft"
              ],
              [
                "während wir essen",
                "während des Essens"
              ]
            ]
          },
          "examples": [
            [
              "Seit ich in Leipzig wohne, gehe ich oft ins Theater.",
              "من ساعة ما سكنت في لايبزيج وأنا بروح المسرح كتير."
            ],
            [
              "Während des Essens schweigt mein Vater immer.",
              "أبويا دايمًا بيسكت وقت الأكل."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Seit du arbeitest, du bist gestresst.",
          "right": "Seit du arbeitest, bist du gestresst.",
          "ar": "بعد الجملة الجانبية الفعل bist بييجي الأول وبعدين الفاعل."
        },
        {
          "wrong": "Wir warten, bis du kommst zurück.",
          "right": "Wir warten, bis du zurückkommst.",
          "ar": "في الجملة الجانبية الفعل اللي بيتفصل بيرجع يتلزق في الآخر: zurückkommst."
        },
        {
          "wrong": "Seit ich in Berlin gewohnt habe, fahre ich Fahrrad.",
          "right": "Seit ich in Berlin wohne, fahre ich Fahrrad.",
          "ar": "لو لسه ساكن هناك، استخدم المضارع مع seit."
        },
        {
          "wrong": "Bevor dem Essen wasche ich mir die Hände.",
          "right": "Vor dem Essen wasche ich mir die Hände.",
          "ar": "قبل اسم لوحده بنقول vor، مش bevor."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Ich koche einen Kaffee, ___ ich mit dem Putzen anfange.",
          "o": [
            "bevor",
            "während",
            "seit"
          ],
          "a": 0,
          "why": "القهوة الأول وبعدين التنضيف، يبقى bevor = قبل ما."
        },
        {
          "type": "choice",
          "q": "Es dauert nicht mehr lang, ___ das Essen fertig ist.",
          "o": [
            "seit",
            "bis",
            "nachdem"
          ],
          "a": 1,
          "why": "bis = لحد ما، هي نقطة النهاية."
        },
        {
          "type": "choice",
          "q": "___ du Geld verdienst, kaufst du oft Sachen.",
          "o": [
            "Bis",
            "Bevor",
            "Seit"
          ],
          "a": 2,
          "why": "بدأ يكسب فلوس في الماضي ولسه مستمر، يبقى seit."
        },
        {
          "type": "choice",
          "q": "Jenny entspannt sich am besten, ___ sie eine Serie sieht.",
          "o": [
            "während",
            "bevor",
            "bis"
          ],
          "a": 0,
          "why": "الاسترخاء والمسلسل في نفس الوقت، يبقى während."
        },
        {
          "type": "gap",
          "q": "Wir warten, ___ du zurückkommst.",
          "a": [
            "bis"
          ],
          "why": "هنستنى لحد ما ترجع، يبقى bis."
        },
        {
          "type": "gap",
          "q": "___ du den Job gewechselt hast, bist du ständig erschöpft.",
          "a": [
            "Seitdem",
            "Seit"
          ],
          "why": "التعب بدأ مع الشغل الجديد ولسه مستمر: seitdem أو seit."
        },
        {
          "type": "truefalse",
          "q": "„Während ich aufräume, kochst du für uns.“ – Die beiden Handlungen passieren gleichzeitig.",
          "a": true,
          "why": "صح: während معناها في نفس الوقت."
        },
        {
          "type": "truefalse",
          "q": "„Seit du arbeitest, du bist gestresst.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط: بعد الفاصلة الفعل الأول: Seit du arbeitest, bist du gestresst."
        },
        {
          "type": "order",
          "prefix": "Bevor Julia telefoniert,",
          "words": [
            "Kaffee",
            "sie",
            "zusammen",
            "trinken"
          ],
          "a": [
            "trinken sie zusammen Kaffee"
          ],
          "why": "بعد جملة bevor الفعل trinken بييجي الأول، وبعده الفاعل sie."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit bis: Florian wartet. Das Essen ist fertig.",
          "a": [
            "Florian wartet, bis das Essen fertig ist.",
            "Bis das Essen fertig ist, wartet Florian."
          ],
          "why": "بيستنى لحد ما الأكل يجهز: bis، والفعل ist في الآخر."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit während: Julia telefoniert. Sie kann gleichzeitig putzen.",
          "a": [
            "Während Julia telefoniert, kann sie putzen.",
            "Julia kann putzen, während sie telefoniert.",
            "Während Julia telefoniert, kann sie gleichzeitig putzen.",
            "Julia kann gleichzeitig putzen, während sie telefoniert."
          ],
          "why": "الحاجتين في نفس الوقت: während، والفعل telefoniert في آخر الجملة الجانبية."
        },
        {
          "type": "error",
          "q": "Bevor ich esse, ich wasche mir die Hände.",
          "a": [
            "Bevor ich esse, wasche ich mir die Hände."
          ],
          "why": "بعد الجملة الجانبية الفعل wasche بييجي قبل ich."
        }
      ]
    },
    {
      "id": "b1-k7-derselbe",
      "t": "derselbe, dasselbe, dieselbe",
      "tAr": "نفس الشخص / نفس الحاجة: derselbe",
      "summary": "<b>derselbe / dasselbe / dieselbe</b> bedeutet „genau dieser, kein anderer“. Der erste Teil wird wie der <b>bestimmte Artikel</b> dekliniert, <b>-selb-</b> bekommt die <b>Adjektivendung</b> nach dem bestimmten Artikel.",
      "summaryAr": "derselbe يعني «نفس الـ…» بالظبط. أوله بيتصرف زي أداة التعريف (der/den/dem)، وآخره selb بياخد نهاية الصفة اللي بعد أداة التعريف (-e أو -en).",
      "sections": [
        {
          "h": "1. Bedeutung",
          "hAr": "١. المعنى",
          "text": "Mit <b>derselbe</b> sagt man, dass es um <b>dieselbe Person</b> oder <b>dieselbe Sache</b> geht, nicht um eine zweite. Man schreibt es immer in <b>einem Wort</b>.",
          "ar": "بنقول derselbe لما نقصد نفس الشخص أو نفس الحاجة بالظبط، مش واحدة تانية شبهها. وبتتكتب كلمة واحدة لازقة.",
          "examples": [
            [
              "Habt ihr euch wieder gestritten? – Ja, es ist immer dasselbe Thema.",
              "اتخانقتوا تاني؟ – أيوه، دايمًا نفس الموضوع."
            ],
            [
              "Man hat eben nicht immer dieselben Wünsche.",
              "ما هو مش دايمًا بيبقى عندنا نفس الأمنيات."
            ]
          ]
        },
        {
          "h": "2. Die Formen",
          "hAr": "٢. التصريف",
          "text": "Artikel + <b>-selbe</b> (Nominativ Singular, Akkusativ feminin/neutral) oder <b>-selben</b> (alle anderen Formen).",
          "ar": "النهاية -selbe بتيجي في الـ Nominativ المفرد، وفي الأكوزاتيف للمؤنث والمحايد. غير كده كله -selben.",
          "table": {
            "head": [
              "Kasus",
              "maskulin",
              "neutral",
              "feminin",
              "Plural"
            ],
            "rows": [
              [
                "Nominativ",
                "derselbe",
                "dasselbe",
                "dieselbe",
                "dieselben"
              ],
              [
                "Akkusativ",
                "denselben",
                "dasselbe",
                "dieselbe",
                "dieselben"
              ],
              [
                "Dativ",
                "demselben",
                "demselben",
                "derselben",
                "denselben"
              ],
              [
                "Genitiv",
                "desselben",
                "desselben",
                "derselben",
                "derselben"
              ]
            ]
          },
          "examples": [
            [
              "Er macht schon wieder denselben Fehler.",
              "هو بيعمل نفس الغلطة تاني."
            ],
            [
              "Ich hatte gerade dieselbe Idee.",
              "لسه كانت جت لي نفس الفكرة."
            ]
          ]
        },
        {
          "h": "3. Nach Präpositionen: im selben, am selben",
          "hAr": "٣. بعد حروف الجر: im selben",
          "text": "Wenn Präposition und Artikel <b>verschmelzen</b> (in dem → im, an dem → am, zu der → zur), schreibt man <b>selben</b> allein: <b>im selben</b> Haus, <b>am selben</b> Tag, <b>zur selben</b> Zeit.",
          "ar": "لما حرف الجر يلزق في الأداة (im، am، zum، zur) بنكتب selben لوحدها: im selben Haus يعني في نفس البيت.",
          "table": {
            "head": [
              "lang",
              "kurz"
            ],
            "rows": [
              [
                "in demselben Haus",
                "im selben Haus"
              ],
              [
                "an demselben Tag",
                "am selben Tag"
              ],
              [
                "zu derselben Zeit",
                "zur selben Zeit"
              ]
            ]
          },
          "examples": [
            [
              "Inga und ich wohnen im selben Haus.",
              "إنجا وأنا ساكنين في نفس البيت."
            ],
            [
              "Wir haben am selben Tag Geburtstag.",
              "عيد ميلادنا في نفس اليوم."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Er macht immer derselbe Fehler.",
          "right": "Er macht immer denselben Fehler.",
          "ar": "machen بياخد أكوزاتيف، وFehler مذكر، يبقى denselben."
        },
        {
          "wrong": "Wir haben die selbe Meinung.",
          "right": "Wir haben dieselbe Meinung.",
          "ar": "derselbe/dieselbe بتتكتب كلمة واحدة من غير مسافة."
        },
        {
          "wrong": "Wir wohnen im demselben Haus.",
          "right": "Wir wohnen im selben Haus.",
          "ar": "im فيها الأداة خلاص (in dem)، فبنقول im selben بس."
        },
        {
          "wrong": "Wir sprechen immer über dasselben Thema.",
          "right": "Wir sprechen immer über dasselbe Thema.",
          "ar": "Thema محايد وفي الأكوزاتيف، يبقى dasselbe من غير n."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Habt ihr euch wieder über den Urlaub gestritten? – Ja, es ist immer ___ Thema.",
          "o": [
            "derselbe",
            "dasselbe",
            "dieselbe"
          ],
          "a": 1,
          "why": "das Thema محايد في الـ Nominativ، يبقى dasselbe."
        },
        {
          "type": "choice",
          "q": "Er macht schon wieder ___ Fehler.",
          "o": [
            "derselbe",
            "demselben",
            "denselben"
          ],
          "a": 2,
          "why": "der Fehler مذكر وهنا مفعول به (أكوزاتيف): denselben."
        },
        {
          "type": "choice",
          "q": "Man muss über ___ Dinge lachen können.",
          "o": [
            "dieselben",
            "dieselbe",
            "denselben"
          ],
          "a": 0,
          "why": "Dinge جمع وبعد über أكوزاتيف: dieselben."
        },
        {
          "type": "choice",
          "q": "Inga und ich arbeiten in ___ Firma.",
          "o": [
            "dieselbe",
            "derselben",
            "demselben"
          ],
          "a": 1,
          "why": "in + Dativ (مكان)، وFirma مؤنث: derselben."
        },
        {
          "type": "gap",
          "q": "Das ist ja lustig – ich hatte gerade ___ Idee! (die Idee)",
          "a": [
            "dieselbe"
          ],
          "why": "die Idee مؤنث وفي الأكوزاتيف بعد hatte: dieselbe."
        },
        {
          "type": "gap",
          "q": "Meine beste Freundin und ich wohnen im ___ Haus.",
          "a": [
            "selben"
          ],
          "why": "im = in dem، فالأداة موجودة، وبنكتب selben بس."
        },
        {
          "type": "gap",
          "q": "Mit ___ Freund fahre ich seit zehn Jahren in den Urlaub. (der Freund)",
          "a": [
            "demselben"
          ],
          "why": "mit + Dativ وFreund مذكر: demselben."
        },
        {
          "type": "truefalse",
          "q": "„Wir hatten nicht immer die selben Wünsche.“ – Die Schreibung ist richtig.",
          "a": false,
          "why": "غلط: بتتكتب كلمة واحدة: dieselben."
        },
        {
          "type": "truefalse",
          "q": "„Mein Bruder und ich gehen in dieselbe Schule.“ – Dieser Satz ist richtig.",
          "a": true,
          "why": "صح: in + أكوزاتيف (اتجاه: رايحين فين)، وSchule مؤنث: dieselbe."
        },
        {
          "type": "transform",
          "q": "Mit derselbe: Wir haben einen Lehrer. Es ist nur ein Lehrer für uns beide.",
          "a": [
            "Wir haben denselben Lehrer."
          ],
          "why": "Lehrer مذكر وفي الأكوزاتيف بعد haben: denselben."
        },
        {
          "type": "order",
          "words": [
            "Seit",
            "Jahren",
            "wohnen",
            "wir",
            "in",
            "derselben",
            "Straße"
          ],
          "a": [
            "Seit Jahren wohnen wir in derselben Straße",
            "Wir wohnen seit Jahren in derselben Straße"
          ],
          "why": "in + Dativ وStraße مؤنث: in derselben Straße، والفعل في المكان التاني."
        },
        {
          "type": "error",
          "q": "Er trägt jeden Tag derselbe Pullover.",
          "a": [
            "Er trägt jeden Tag denselben Pullover."
          ],
          "why": "Pullover مذكر ومفعول به: denselben."
        }
      ]
    }
  ],
  "8": [
    {
      "id": "b1-k8-brauchen-zu",
      "t": "nicht/kein/nur + brauchen + zu + Infinitiv",
      "tAr": "brauchen + zu: «مش لازم» و«كل اللي عليك»",
      "summary": "<b>nicht/kein + brauchen + zu</b> + Infinitiv = <b>nicht müssen</b>. <b>nur + brauchen + zu</b> + Infinitiv = <b>nur müssen</b>. Der Infinitiv mit <b>zu</b> steht am Satzende.",
      "summaryAr": "brauchen + zu بنستخدمها بس مع nicht أو kein (يعني «مش لازم») أو مع nur (يعني «كل اللي عليك إنك …»). المصدر بـ zu بيروح آخر الجملة.",
      "sections": [
        {
          "h": "1. nicht/kein + brauchen + zu = nicht müssen",
          "hAr": "١. nicht/kein + brauchen + zu = مش لازم",
          "text": "Mit <b>nicht</b> oder <b>kein</b> bedeutet <b>brauchen + zu + Infinitiv</b> dasselbe wie <b>nicht müssen</b>: Etwas ist nicht notwendig. <b>brauchen</b> wird konjugiert und steht auf Position 2, <b>zu + Infinitiv</b> steht am Ende.",
          "ar": "لما تقول «مش لازم تعمل كده» بالألماني، ممكن تقول nicht müssen أو nicht brauchen + zu. الاتنين نفس المعنى. brauchen بيتصرّف وييجي في المكان التاني، و zu + المصدر في الآخر.",
          "table": {
            "head": [
              "mit müssen",
              "mit brauchen + zu"
            ],
            "rows": [
              [
                "Das musst du nicht machen.",
                "Das brauchst du nicht zu machen."
              ],
              [
                "Er muss kein Fieber messen.",
                "Er braucht kein Fieber zu messen."
              ],
              [
                "Ich muss keine Tabletten nehmen.",
                "Ich brauche keine Tabletten zu nehmen."
              ],
              [
                "Sie müssen nicht lange warten.",
                "Sie brauchen nicht lange zu warten."
              ]
            ]
          },
          "examples": [
            [
              "Danke, aber du brauchst mir nicht zu helfen.",
              "شكرًا، بس مش لازم تساعدني."
            ],
            [
              "Sie brauchen keine Angst zu haben.",
              "مفيش داعي تخاف."
            ]
          ]
        },
        {
          "h": "2. nur + brauchen + zu = nur müssen",
          "hAr": "٢. nur + brauchen + zu = كل اللي عليك",
          "text": "Mit <b>nur</b> bedeutet <b>brauchen + zu</b>: Man muss nur diese eine Sache tun, sonst nichts. Das klingt freundlich und hilfsbereit, zum Beispiel beim <b>Hilfe anbieten</b>.",
          "ar": "مع nur المعنى بيبقى «كل اللي محتاج تعمله هو …». الجملة دي لطيفة وبنقولها كتير لما نعرض مساعدة، زي الممرضة لما تقول للعيان «بس رنّ الجرس».",
          "examples": [
            [
              "Sie brauchen mich nur zu rufen, wenn ich Ihnen helfen soll.",
              "كل اللي عليك إنك تناديني لو عايزني أساعدك."
            ],
            [
              "Du brauchst nur ins Café zu gehen.",
              "كل اللي عليك إنك تروح الكافيتريا."
            ],
            [
              "Er braucht die Pflegerin nur zu fragen.",
              "كل اللي عليه إنه يسأل الممرضة."
            ]
          ]
        },
        {
          "h": "3. Satzbau und trennbare Verben",
          "hAr": "٣. ترتيب الجملة والأفعال اللي بتنفصل",
          "text": "Bei <b>trennbaren Verben</b> steht <b>zu</b> zwischen Vorsilbe und Verb: an<b>zu</b>rufen, mit<b>zu</b>bringen, ab<b>zu</b>holen. Im <b>Nebensatz</b> steht brauchen ganz am Ende: …, weil du nicht <b>zu kommen brauchst</b>.",
          "ar": "لو الفعل بينفصل، zu بتدخل في النص: anzurufen، mitzubringen. وفي الجملة الفرعية (weil, dass, wenn) brauchen المتصرّف بيروح آخر خالص بعد zu + المصدر.",
          "table": {
            "head": [
              "Infinitiv",
              "brauchen + zu",
              "Beispiel"
            ],
            "rows": [
              [
                "anrufen",
                "anzurufen",
                "Du brauchst mich nicht anzurufen."
              ],
              [
                "mitbringen",
                "mitzubringen",
                "Sie brauchen nichts mitzubringen."
              ],
              [
                "abholen",
                "abzuholen",
                "Ihr braucht mich nicht abzuholen."
              ],
              [
                "einnehmen",
                "einzunehmen",
                "Sie brauchen die Tabletten nur abends einzunehmen."
              ]
            ]
          },
          "examples": [
            [
              "Ich freue mich, dass ich nicht mehr im Bett zu liegen brauche.",
              "أنا مبسوط إني مش لازم أفضل نايم في السرير."
            ]
          ]
        },
        {
          "h": "4. Achtung: brauchen ohne nicht/kein/nur",
          "hAr": "٤. خلي بالك: brauchen من غير nicht/kein/nur",
          "text": "Ohne <b>nicht, kein</b> oder <b>nur</b> benutzt man <b>müssen</b>: Ich <b>muss</b> heute arbeiten. <b>brauchen</b> ohne zu bedeutet „etwas nötig haben“: Ich brauche Hilfe. In der gesprochenen Sprache lässt man <b>zu</b> oft weg, schriftlich schreibt man es aber.",
          "ar": "في الجملة المثبتة من غير nicht/kein/nur بنستخدم müssen مش brauchen + zu. و brauchen لوحده معناه «محتاج حاجة»: Ich brauche Hilfe. وفي الكلام العادي الناس بتشيل zu ساعات، بس في الكتابة لازم تحطها.",
          "examples": [
            [
              "Ich muss heute lange arbeiten.",
              "لازم أشتغل لحد متأخر النهارده."
            ],
            [
              "Ich brauche ein Schmerzmittel.",
              "أنا محتاج مسكّن."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ich brauche heute lange zu arbeiten.",
          "right": "Ich muss heute lange arbeiten.",
          "ar": "من غير nicht أو kein أو nur مينفعش brauchen + zu، استخدم müssen."
        },
        {
          "wrong": "Du brauchst mich nicht zu anrufen.",
          "right": "Du brauchst mich nicht anzurufen.",
          "ar": "anrufen بينفصل، فـ zu بتدخل في النص: anzurufen."
        },
        {
          "wrong": "Er braucht nicht Fieber zu messen.",
          "right": "Er braucht kein Fieber zu messen.",
          "ar": "قبل اسم من غير أداة بنستخدم kein مش nicht."
        },
        {
          "wrong": "Sie brauchen nur mich zu rufen.",
          "right": "Sie brauchen mich nur zu rufen.",
          "ar": "الضمير mich بييجي بدري في الجملة، و nur قبل zu + المصدر."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Sie ___ keine Angst zu haben, die Untersuchung tut nicht weh.",
          "o": [
            "müssen",
            "brauchen",
            "dürfen"
          ],
          "a": 1,
          "why": "عشان فيه zu + مصدر بعد keine Angst، الفعل لازم يكون brauchen. müssen و dürfen مبيجيش بعدهم zu."
        },
        {
          "type": "choice",
          "q": "Wenn Sie Hilfe brauchen, brauchen Sie nur auf den Alarmknopf ___.",
          "o": [
            "drücken",
            "gedrückt",
            "zu drücken"
          ],
          "a": 2,
          "why": "مع nur + brauchen لازم zu + المصدر في الآخر: zu drücken."
        },
        {
          "type": "choice",
          "q": "„Er braucht die Pflegerin nur zu fragen.“ bedeutet:",
          "o": [
            "Er muss die Pflegerin nur fragen.",
            "Er darf die Pflegerin nicht fragen.",
            "Er will die Pflegerin fragen."
          ],
          "a": 0,
          "why": "nur + brauchen + zu = nur müssen، يعني كل اللي عليه إنه يسأل."
        },
        {
          "type": "truefalse",
          "q": "„Ich brauche heute lange zu arbeiten.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "مفيش nicht ولا kein ولا nur، فلازم نقول: Ich muss heute lange arbeiten."
        },
        {
          "type": "truefalse",
          "q": "„Sie brauchen das Formular nur auszufüllen.“ bedeutet: Sie müssen nur das Formular ausfüllen.",
          "a": true,
          "why": "صح، nur + brauchen + zu معناها nur müssen. و ausfüllen بينفصل فبقت auszufüllen."
        },
        {
          "type": "gap",
          "q": "Sie brauchen nicht mehr lange im Krankenhaus ___. (bleiben)",
          "a": [
            "zu bleiben"
          ],
          "why": "nicht + brauchen محتاجة zu + المصدر في آخر الجملة: zu bleiben."
        },
        {
          "type": "gap",
          "q": "Du brauchst mich morgen nicht ___. (abholen)",
          "a": [
            "abzuholen"
          ],
          "why": "abholen فعل بينفصل، فـ zu بتدخل بين ab و holen: abzuholen."
        },
        {
          "type": "gap",
          "q": "Wenn die Schmerzen vorbei sind, ___ Sie keine Tabletten mehr zu nehmen.",
          "a": [
            "brauchen"
          ],
          "why": "فيه keine و zu nehmen، يبقى الفعل الناقص brauchen متصرّف مع Sie."
        },
        {
          "type": "order",
          "prefix": "Sie",
          "words": [
            "brauchen",
            "nur",
            "mit",
            "dem",
            "Rezept",
            "in",
            "die",
            "Apotheke",
            "zu",
            "gehen"
          ],
          "a": [
            "brauchen nur mit dem Rezept in die Apotheke zu gehen",
            "brauchen mit dem Rezept nur in die Apotheke zu gehen"
          ],
          "why": "brauchen في المكان التاني، وبعدين باقي الجملة، و zu gehen في الآخر خالص."
        },
        {
          "type": "transform",
          "q": "Mit brauchen + zu: Sie müssen keine Angst haben.",
          "a": [
            "Sie brauchen keine Angst zu haben."
          ],
          "why": "müssen + kein بتتحوّل لـ brauchen + kein + zu، والمصدر بـ zu في الآخر."
        },
        {
          "type": "transform",
          "q": "Mit brauchen + zu: Du musst mich nur anrufen.",
          "a": [
            "Du brauchst mich nur anzurufen."
          ],
          "why": "nur müssen = nur brauchen + zu. و anrufen بقت anzurufen عشان بينفصل."
        },
        {
          "type": "error",
          "q": "Er braucht nicht Fieber zu messen.",
          "a": [
            "Er braucht kein Fieber zu messen."
          ],
          "why": "Fieber اسم من غير أداة، فبننفيه بـ kein مش nicht."
        }
      ]
    },
    {
      "id": "b1-k8-reflexivpronomen-dativ",
      "t": "Reflexivpronomen im Akkusativ und Dativ",
      "tAr": "ضمائر الانعكاس في الأكوزاتيف والداتيف",
      "summary": "Gibt es nur das Reflexivpronomen, steht es im <b>Akkusativ</b> (Ich ziehe <b>mich</b> an). Gibt es zusätzlich ein <b>Akkusativobjekt</b>, steht es im <b>Dativ</b> (Ich ziehe <b>mir</b> den Pullover an). Einen Unterschied sieht man nur bei <b>ich</b> und <b>du</b>.",
      "summaryAr": "لو مفيش في الجملة غير ضمير الانعكاس يبقى أكوزاتيف: mich/dich. لو فيه كمان مفعول به أكوزاتيف (زي den Pullover أو die Zähne) الضمير بيبقى داتيف: mir/dir. باقي الضمائر شكلها واحد.",
      "sections": [
        {
          "h": "1. Nur Reflexivpronomen: Akkusativ",
          "hAr": "١. ضمير الانعكاس لوحده: أكوزاتيف",
          "text": "Wenn die Handlung zur Person selbst zurückgeht und es <b>kein anderes Akkusativobjekt</b> gibt, steht das Reflexivpronomen im <b>Akkusativ</b>: Ich wasche <b>mich</b>. Du kämmst <b>dich</b>. Wir ziehen <b>uns</b> an.",
          "ar": "لما الواحد بيعمل الحاجة في نفسه ومفيش مفعول به تاني، الضمير بيبقى أكوزاتيف: Ich wasche mich (بغسل نفسي / بستحمى).",
          "examples": [
            [
              "Ich ziehe mich schnell an.",
              "بلبس بسرعة."
            ],
            [
              "Hast du dich heute schon gekämmt?",
              "سرّحت شعرك النهارده؟"
            ],
            [
              "Herr Krause duscht sich jeden Morgen kalt.",
              "الأستاذ كراوزه بيستحمى بمية ساقعة كل يوم الصبح."
            ]
          ]
        },
        {
          "h": "2. Reflexivpronomen + Akkusativobjekt: Dativ",
          "hAr": "٢. ضمير الانعكاس + مفعول به: داتيف",
          "text": "Gibt es zusätzlich ein <b>Akkusativobjekt</b> (den Pullover, die Zähne, die Haare), steht das Reflexivpronomen im <b>Dativ</b>. Nur bei <b>ich (mir)</b> und <b>du (dir)</b> sind die Formen anders, alle anderen sind gleich.",
          "ar": "لو فيه في الجملة مفعول به أكوزاتيف، ضمير الانعكاس بيتحوّل داتيف. ركّز على ich و du بس: mich بتبقى mir، و dich بتبقى dir. الباقي (sich, uns, euch) زي ما هو.",
          "table": {
            "head": [
              "Person",
              "Akkusativ",
              "Dativ"
            ],
            "rows": [
              [
                "ich",
                "mich",
                "mir"
              ],
              [
                "du",
                "dich",
                "dir"
              ],
              [
                "er/es/sie",
                "sich",
                "sich"
              ],
              [
                "wir",
                "uns",
                "uns"
              ],
              [
                "ihr",
                "euch",
                "euch"
              ],
              [
                "sie/Sie",
                "sich",
                "sich"
              ]
            ]
          },
          "examples": [
            [
              "Ich ziehe mir den Pullover an.",
              "بلبس البلوفر."
            ],
            [
              "Wäschst du dir die Haare morgens oder abends?",
              "بتغسل شعرك الصبح ولا بالليل؟"
            ],
            [
              "Er putzt sich nach dem Frühstück die Zähne.",
              "بيغسل سنانه بعد الفطار."
            ]
          ]
        },
        {
          "h": "3. Körperteile und typische Verben",
          "hAr": "٣. أعضاء الجسم وأفعال مشهورة",
          "text": "Bei <b>Körperteilen</b> benutzt man im Deutschen das Reflexivpronomen im Dativ und den <b>bestimmten Artikel</b>, nicht das Possessivpronomen: Ich putze <b>mir die</b> Zähne. Einige Verben haben immer ein Dativ-Reflexivpronomen, z. B. <b>sich etwas merken</b>, <b>sich etwas wünschen</b>, <b>sich etwas vorstellen</b>.",
          "ar": "مع أعضاء الجسم الألماني بيقول «بغسل لنفسي الـ سنان» مش «بغسل سناني»: Ich putze mir die Zähne. وفيه أفعال دايمًا بتاخد mir/dir زي sich etwas merken (يفتكر) و sich etwas wünschen (يتمنى).",
          "table": {
            "head": [
              "Verb",
              "ich-Form",
              "du-Form"
            ],
            "rows": [
              [
                "sich die Zähne putzen",
                "Ich putze mir die Zähne.",
                "Du putzt dir die Zähne."
              ],
              [
                "sich die Hände waschen",
                "Ich wasche mir die Hände.",
                "Du wäschst dir die Hände."
              ],
              [
                "sich die Haare kämmen",
                "Ich kämme mir die Haare.",
                "Du kämmst dir die Haare."
              ],
              [
                "sich etwas merken",
                "Ich merke mir die Nummer.",
                "Du merkst dir die Nummer."
              ],
              [
                "sich etwas wünschen",
                "Ich wünsche mir Ruhe.",
                "Du wünschst dir Ruhe."
              ]
            ]
          },
          "examples": [
            [
              "Ich kann mir neue Wörter am besten mit Bildern merken.",
              "بقدر أحفظ الكلمات الجديدة أحسن بالصور."
            ]
          ]
        },
        {
          "h": "4. Position im Satz",
          "hAr": "٤. مكان الضمير في الجملة",
          "text": "Das Reflexivpronomen steht meistens <b>direkt nach dem konjugierten Verb</b>. Im Nebensatz und in Fragen steht es direkt <b>nach dem Subjekt</b>, wenn das Subjekt ein Pronomen ist: …, weil ich <b>mir</b> noch die Hände waschen muss.",
          "ar": "ضمير الانعكاس غالبًا بييجي بعد الفعل المتصرّف على طول. وفي الجملة الفرعية أو السؤال بييجي بعد الفاعل لو الفاعل ضمير.",
          "examples": [
            [
              "Warte kurz, weil ich mir noch die Schuhe anziehen muss.",
              "استنى شوية، عشان لسه هلبس الجزمة."
            ],
            [
              "Morgens ziehe ich mich immer im Bad um.",
              "الصبح دايمًا بغيّر هدومي في الحمام."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ich wasche mich die Hände.",
          "right": "Ich wasche mir die Hände.",
          "ar": "فيه مفعول به (die Hände)، فالضمير لازم يبقى داتيف: mir."
        },
        {
          "wrong": "Ich putze meine Zähne.",
          "right": "Ich putze mir die Zähne.",
          "ar": "مع أعضاء الجسم الأحسن نقول mir + die مش meine."
        },
        {
          "wrong": "Kannst du dich das merken?",
          "right": "Kannst du dir das merken?",
          "ar": "sich etwas merken دايمًا داتيف عشان فيه مفعول به (das)."
        },
        {
          "wrong": "Ich habe mir heute schon geduscht.",
          "right": "Ich habe mich heute schon geduscht.",
          "ar": "مفيش مفعول به تاني، فالضمير أكوزاتيف: mich."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Ich bin fast fertig. Ich muss ___ nur noch die Schuhe anziehen.",
          "o": [
            "mich",
            "mir",
            "sich"
          ],
          "a": 1,
          "why": "فيه مفعول به (die Schuhe)، فمع ich الضمير داتيف: mir."
        },
        {
          "type": "choice",
          "q": "Ich zieh' ___ noch schnell um, dann können wir los.",
          "o": [
            "mich",
            "mir",
            "dich"
          ],
          "a": 0,
          "why": "مفيش مفعول به تاني غير الضمير، فهو أكوزاتيف: mich."
        },
        {
          "type": "choice",
          "q": "Warum putzt du ___ denn schon wieder die Zähne?",
          "o": [
            "dich",
            "sich",
            "dir"
          ],
          "a": 2,
          "why": "die Zähne مفعول به، فمع du الضمير داتيف: dir."
        },
        {
          "type": "truefalse",
          "q": "„Wir waschen uns die Hände.“ – Hier steht uns im Dativ.",
          "a": true,
          "why": "صح، عشان فيه die Hände. بس uns شكلها واحد في الأكوزاتيف والداتيف، فالفرق مش باين."
        },
        {
          "type": "truefalse",
          "q": "„Ich habe mich die Haare gewaschen.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط، die Haare مفعول به فلازم mir: Ich habe mir die Haare gewaschen."
        },
        {
          "type": "gap",
          "q": "Hast du ___ schon die Haare gekämmt?",
          "a": [
            "dir"
          ],
          "why": "die Haare مفعول به أكوزاتيف، فالضمير مع du يبقى dir."
        },
        {
          "type": "gap",
          "q": "Ich habe ___ heute Morgen kalt geduscht.",
          "a": [
            "mich"
          ],
          "why": "مفيش مفعول به تاني، يبقى أكوزاتيف: mich."
        },
        {
          "type": "gap",
          "q": "Ich kann ___ diese Telefonnummer einfach nicht merken.",
          "a": [
            "mir"
          ],
          "why": "sich etwas merken بياخد داتيف، و diese Telefonnummer هي المفعول به: mir."
        },
        {
          "type": "order",
          "prefix": "Nach dem Frühstück",
          "words": [
            "putze",
            "ich",
            "mir",
            "die",
            "Zähne"
          ],
          "a": [
            "putze ich mir die Zähne"
          ],
          "why": "الفعل في المكان التاني، بعده الفاعل ich، وبعدين mir، وبعدين die Zähne."
        },
        {
          "type": "transform",
          "q": "Mit Akkusativobjekt (den Mantel): Ich ziehe mich an.",
          "a": [
            "Ich ziehe mir den Mantel an."
          ],
          "why": "لما زودنا den Mantel الضمير اتحوّل من mich لـ mir."
        },
        {
          "type": "transform",
          "q": "Frage mit du: sich die Hände waschen – vor dem Essen?",
          "a": [
            "Wäschst du dir vor dem Essen die Hände?",
            "Wäschst du dir die Hände vor dem Essen?"
          ],
          "why": "السؤال بيبدأ بالفعل (wäschst)، وبعده du ثم dir عشان die Hände مفعول به."
        },
        {
          "type": "error",
          "q": "Du musst dich die Hände waschen.",
          "a": [
            "Du musst dir die Hände waschen."
          ],
          "why": "die Hände مفعول به، فلازم الضمير يبقى داتيف: dir."
        }
      ]
    },
    {
      "id": "b1-k8-zweiteilige-konnektoren",
      "t": "Zweiteilige Konnektoren",
      "tAr": "الروابط اللي من جزئين",
      "summary": "<b>sowohl … als auch</b>, <b>nicht nur …, sondern auch</b>, <b>entweder … oder</b>, <b>weder … noch</b>, <b>zwar …, aber</b> und <b>einerseits …, andererseits</b> verbinden <b>Satzteile</b> oder <b>ganze Sätze</b>.",
      "summaryAr": "الروابط دي ليها جزئين ولازم تستخدم الاتنين مع بعض. بتربط كلمتين أو جملتين وبتوضّح: ده وده، يا ده يا ده، لا ده ولا ده، صحيح … بس، من ناحية … ومن ناحية تانية.",
      "sections": [
        {
          "h": "1. Bedeutung",
          "hAr": "١. المعنى",
          "text": "Jeder zweiteilige Konnektor hat eine eigene <b>Bedeutung</b>. Beide Teile gehören zusammen und man darf sie nicht mischen.",
          "ar": "كل رابط ليه معنى خاص بيه، والجزئين لازم ييجوا مع بعض. متخلطش بينهم، يعني متقولش sowohl … aber.",
          "table": {
            "head": [
              "Konnektor",
              "Bedeutung",
              "Beispiel"
            ],
            "rows": [
              [
                "sowohl … als auch",
                "das eine und das andere",
                "Ich höre sowohl Klassik als auch Pop."
              ],
              [
                "nicht nur …, sondern auch",
                "das eine und das andere (betont)",
                "Ich höre nicht nur Klassik, sondern auch Pop."
              ],
              [
                "entweder … oder",
                "das eine oder das andere",
                "Er hört entweder Rock oder Heavy Metal."
              ],
              [
                "weder … noch",
                "das eine nicht und das andere auch nicht",
                "Sie hört weder Pop noch Jazz."
              ],
              [
                "zwar …, aber",
                "das eine mit Einschränkung",
                "Ich höre zwar gern Radio, aber manchmal nerven die Sprecher."
              ],
              [
                "einerseits …, andererseits",
                "Gegensatz: eine Sache hat zwei Seiten",
                "Einerseits höre ich gern laute Musik, andererseits stört sie mich manchmal."
              ]
            ]
          },
          "examples": [
            [
              "Tango kann sowohl traurig als auch fröhlich sein.",
              "التانجو ممكن يكون حزين ومبهج في نفس الوقت."
            ],
            [
              "Ich esse weder Fleisch noch Fisch.",
              "مباكلش لا لحمة ولا سمك."
            ]
          ]
        },
        {
          "h": "2. Satzteile oder ganze Sätze verbinden",
          "hAr": "٢. تربط كلمات أو جمل كاملة",
          "text": "Zweiteilige Konnektoren können <b>Satzteile</b> (Nomen, Adjektive, Verben) oder <b>ganze Sätze</b> verbinden. <b>weder … noch</b> ist schon negativ: Man braucht <b>kein zusätzliches nicht oder kein</b>.",
          "ar": "الروابط دي ممكن تربط كلمتين في نفس الجملة أو جملتين كاملين. و weder … noch فيها النفي أصلًا، فمتحطش معاها nicht أو kein.",
          "examples": [
            [
              "Ella spielt nicht nur Flöte, sondern auch Klavier.",
              "إيلا مش بس بتعزف فلوت، كمان بيانو."
            ],
            [
              "Brian spielt nicht nur Gitarre, sondern er singt auch gut.",
              "برايان مش بس بيعزف جيتار، ده كمان صوته حلو."
            ],
            [
              "Ohne Musik kann ich weder aufräumen noch putzen.",
              "من غير مزيكا مبقدرش لا أرتّب ولا أنضّف."
            ]
          ]
        },
        {
          "h": "3. Wortstellung",
          "hAr": "٣. ترتيب الكلمات",
          "text": "<b>einerseits, andererseits</b> und <b>zwar</b> zählen als Position 1: Danach kommt sofort das <b>Verb</b>. <b>aber, oder, sondern</b> stehen auf Position 0, danach normale Wortstellung. Bei <b>entweder</b> am Satzanfang sind beide Varianten möglich: Entweder <b>komme ich</b> … / Entweder <b>ich komme</b> …",
          "ar": "einerseits و andererseits و zwar لو جم أول الجملة بياخدوا المكان الأول، فالفعل ييجي بعدهم على طول. أما aber و oder و sondern فمش بيعدّوا، والجملة بعدهم عادية: فاعل وبعدين فعل.",
          "table": {
            "head": [
              "Position 1",
              "Verb",
              "Rest"
            ],
            "rows": [
              [
                "Einerseits",
                "höre",
                "ich gern laute Musik,"
              ],
              [
                "andererseits",
                "stört",
                "sie mich beim Lernen."
              ],
              [
                "Zwar",
                "ist",
                "das Konzert teuer,"
              ],
              [
                "aber ich",
                "gehe",
                "trotzdem hin."
              ]
            ]
          },
          "examples": [
            [
              "Zwar ist das Konzert teuer, aber ich gehe trotzdem hin.",
              "صحيح الحفلة غالية، بس هروح برضه."
            ]
          ]
        },
        {
          "h": "4. Komma",
          "hAr": "٤. الفاصلة",
          "text": "Vor <b>aber</b>, <b>sondern</b> und <b>andererseits</b> steht immer ein <b>Komma</b>. Bei <b>sowohl … als auch</b>, <b>entweder … oder</b> und <b>weder … noch</b> steht kein Komma, wenn sie nur Satzteile verbinden.",
          "ar": "قبل aber و sondern و andererseits لازم فاصلة. أما sowohl … als auch و entweder … oder و weder … noch فمن غير فاصلة لما بيربطوا كلمات بس.",
          "examples": [
            [
              "Ich trinke entweder Tee oder Wasser.",
              "يا بشرب شاي يا مية."
            ],
            [
              "Er ist zwar müde, aber er lernt weiter.",
              "صحيح هو تعبان، بس بيكمّل مذاكرة."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ich mag weder Pop nicht noch Jazz.",
          "right": "Ich mag weder Pop noch Jazz.",
          "ar": "weder … noch فيها نفي، فمتزودش nicht."
        },
        {
          "wrong": "Ich mag sowohl Klassik aber auch Jazz.",
          "right": "Ich mag sowohl Klassik als auch Jazz.",
          "ar": "sowohl دايمًا معاها als auch مش aber auch."
        },
        {
          "wrong": "Einerseits ich höre gern Musik, andererseits sie stört mich.",
          "right": "Einerseits höre ich gern Musik, andererseits stört sie mich.",
          "ar": "بعد einerseits و andererseits الفعل ييجي على طول."
        },
        {
          "wrong": "Er spielt nicht nur Gitarre, aber auch Klavier.",
          "right": "Er spielt nicht nur Gitarre, sondern auch Klavier.",
          "ar": "nicht nur دايمًا معاها sondern auch."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Ohne Musik kann ich weder aufräumen ___ putzen.",
          "o": [
            "noch",
            "oder",
            "als auch"
          ],
          "a": 0,
          "why": "weder دايمًا معاها noch: لا ده ولا ده."
        },
        {
          "type": "choice",
          "q": "Am Wochenende gehe ich entweder auf ein Konzert ___ ins Kino.",
          "o": [
            "noch",
            "oder",
            "aber"
          ],
          "a": 1,
          "why": "entweder معاها oder: يا ده يا ده."
        },
        {
          "type": "choice",
          "q": "Tom geht zwar gern auf Konzerte, ___ oft bleibt er lieber zu Hause.",
          "o": [
            "sondern",
            "oder",
            "aber"
          ],
          "a": 2,
          "why": "zwar معاها aber: صحيح … بس."
        },
        {
          "type": "choice",
          "q": "„Ich esse weder Fleisch noch Fisch.“ bedeutet:",
          "o": [
            "Ich esse Fleisch, aber keinen Fisch.",
            "Ich esse keins von beiden.",
            "Ich esse beides."
          ],
          "a": 1,
          "why": "weder … noch معناها لا ده ولا ده، يعني مبياكلش الاتنين."
        },
        {
          "type": "truefalse",
          "q": "„sowohl … als auch“ und „nicht nur …, sondern auch“ haben fast dieselbe Bedeutung.",
          "a": true,
          "why": "صح، الاتنين معناهم «ده وده»، بس nicht nur … sondern auch بتأكّد على الجزء التاني أكتر."
        },
        {
          "type": "truefalse",
          "q": "„Einerseits ich höre gern laute Musik, andererseits …“ – Die Wortstellung ist richtig.",
          "a": false,
          "why": "غلط، بعد einerseits الفعل ييجي على طول: Einerseits höre ich …"
        },
        {
          "type": "gap",
          "q": "Ich spiele nicht nur gern Klavier, ___ auch Gitarre.",
          "a": [
            "sondern"
          ],
          "why": "nicht nur … sondern auch هما الجزئين مع بعض."
        },
        {
          "type": "gap",
          "q": "Tango kann ___ traurig als auch fröhlich sein.",
          "a": [
            "sowohl"
          ],
          "why": "als auch بتيجي مع sowohl."
        },
        {
          "type": "order",
          "prefix": "Einerseits höre ich gern Musik,",
          "words": [
            "andererseits",
            "stört",
            "sie",
            "mich",
            "beim",
            "Lernen"
          ],
          "a": [
            "andererseits stört sie mich beim Lernen"
          ],
          "why": "andererseits في المكان الأول، وبعده الفعل stört، وبعدين الفاعل sie."
        },
        {
          "type": "transform",
          "q": "Mit weder … noch: Ich spiele nicht Gitarre. Ich spiele auch nicht Klavier.",
          "a": [
            "Ich spiele weder Gitarre noch Klavier."
          ],
          "why": "الجملتين المنفيتين بيبقوا جملة واحدة بـ weder … noch من غير nicht."
        },
        {
          "type": "transform",
          "q": "Mit entweder … oder: Wir gehen ins Konzert oder wir bleiben zu Hause.",
          "a": [
            "Entweder gehen wir ins Konzert oder wir bleiben zu Hause.",
            "Entweder gehen wir ins Konzert, oder wir bleiben zu Hause.",
            "Entweder wir gehen ins Konzert oder wir bleiben zu Hause.",
            "Wir gehen entweder ins Konzert oder wir bleiben zu Hause.",
            "Wir gehen entweder ins Konzert, oder wir bleiben zu Hause."
          ],
          "why": "entweder ممكن تيجي أول الجملة (والفعل بعدها أو الفاعل بعدها) أو بعد الفعل، و oder قبل الجزء التاني."
        },
        {
          "type": "error",
          "q": "Ich mag sowohl klassische Musik aber auch Jazz.",
          "a": [
            "Ich mag sowohl klassische Musik als auch Jazz."
          ],
          "why": "sowohl لازم معاها als auch، مش aber auch."
        }
      ]
    },
    {
      "id": "b1-k8-verben-mit-vorsilben",
      "t": "Verben mit mit-, vorbei-, weg-, weiter-, zusammen- und zurück-",
      "tAr": "أفعال بالبادئات mit- و vorbei- و weg- و weiter- و zusammen- و zurück-",
      "summary": "Die Vorsilben <b>mit-, vorbei-, weg-, weiter-, zusammen-</b> und <b>zurück-</b> sind <b>trennbar</b>. Sie behalten in Verbindung mit einem Verb meistens ihre <b>Bedeutung</b>: mitgehen = zusammen mit jemandem gehen.",
      "summaryAr": "البادئات دي بتنفصل عن الفعل في الجملة العادية وبتروح الآخر. ومعناها غالبًا بيفضل زي ما هو، فلو عارف معنى البادئة والفعل هتفهم الفعل الجديد لوحدك.",
      "sections": [
        {
          "h": "1. Bedeutung der Vorsilben",
          "hAr": "١. معنى البادئات",
          "text": "Die Vorsilbe zeigt die <b>Richtung</b> oder die <b>Art</b> der Handlung. Wenn man die Vorsilbe und das Verb kennt, kann man die Bedeutung oft erraten.",
          "ar": "البادئة بتوضّح الاتجاه أو طريقة الفعل. يعني mit = مع حد، weg = يبعد/يمشي، zurück = يرجع، weiter = يكمّل، zusammen = مع بعض، vorbei = يعدّي جنب حاجة أو يعدّي على حد.",
          "table": {
            "head": [
              "Vorsilbe",
              "Bedeutung",
              "Beispiele"
            ],
            "rows": [
              [
                "mit-",
                "zusammen mit anderen",
                "mitgehen, mitkommen, mitmachen, mitbringen"
              ],
              [
                "vorbei-",
                "an etwas vorbei / kurz besuchen",
                "vorbeigehen, vorbeifahren, vorbeikommen"
              ],
              [
                "weg-",
                "fort, von einem Ort weg",
                "weggehen, wegfahren, wegwerfen"
              ],
              [
                "weiter-",
                "nicht aufhören, fortsetzen",
                "weitermachen, weiterarbeiten, weitergehen"
              ],
              [
                "zusammen-",
                "gemeinsam",
                "zusammenarbeiten, zusammenpassen, zusammenwohnen"
              ],
              [
                "zurück-",
                "wieder an den Ausgangsort",
                "zurückgehen, zurückkommen, zurückrufen"
              ]
            ]
          },
          "examples": [
            [
              "Ich besuche Peer im Krankenhaus. Möchtest du mitgehen?",
              "أنا رايح أزور بير في المستشفى. تحب تيجي معايا؟"
            ],
            [
              "Sollen wir am Wochenende wegfahren?",
              "نسافر في الويك إند؟"
            ]
          ]
        },
        {
          "h": "2. Trennbar im Präsens, Präteritum und Imperativ",
          "hAr": "٢. بتنفصل في المضارع والماضي البسيط والأمر",
          "text": "Im Hauptsatz steht das konjugierte Verb auf Position 2, die <b>Vorsilbe am Satzende</b>. Im Imperativ steht die Vorsilbe auch am Ende. Im <b>Nebensatz</b> und mit <b>Modalverb</b> bleibt das Verb zusammen.",
          "ar": "في الجملة الرئيسية الفعل في المكان التاني والبادئة في الآخر. وفي الأمر برضه البادئة في الآخر. أما في الجملة الفرعية أو مع فعل مساعد زي müssen، الفعل بيفضل كلمة واحدة.",
          "table": {
            "head": [
              "Satzart",
              "Beispiel"
            ],
            "rows": [
              [
                "Präsens",
                "Ich gehe heute mit."
              ],
              [
                "Präteritum",
                "Die Linie 5 fuhr direkt am Krankenhaus vorbei."
              ],
              [
                "Imperativ",
                "Komm doch mit!"
              ],
              [
                "Modalverb",
                "Ich muss noch mal zurückgehen."
              ],
              [
                "Nebensatz",
                "Ich bleibe hier, weil wir morgen weitermachen."
              ]
            ]
          },
          "examples": [
            [
              "Wir arbeiten seit drei Jahren zusammen.",
              "إحنا بنشتغل مع بعض من تلات سنين."
            ]
          ]
        },
        {
          "h": "3. Perfekt und zu-Infinitiv",
          "hAr": "٣. البيرفكت والمصدر بـ zu",
          "text": "Im Partizip II steht <b>-ge-</b> zwischen Vorsilbe und Verb: mit<b>ge</b>gangen, zusammen<b>ge</b>arbeitet. Beim Infinitiv mit zu steht <b>zu</b> in der Mitte: mit<b>zu</b>kommen, zurück<b>zu</b>rufen. Verben der Bewegung bilden das Perfekt mit <b>sein</b>.",
          "ar": "في التصريف التالت (Partizip II) الـ ge بتدخل بين البادئة والفعل: mitgegangen. ومع zu برضه zu بتدخل في النص: mitzukommen. وأفعال الحركة زي gehen و fahren و kommen بتاخد sein في البيرفكت.",
          "examples": [
            [
              "Gestern sind alle Kollegen mitgegangen.",
              "امبارح كل الزملا راحوا معانا."
            ],
            [
              "Wir haben lange zusammengearbeitet.",
              "إحنا اشتغلنا مع بعض فترة طويلة."
            ],
            [
              "Hast du Lust mitzukommen?",
              "عندك مزاج تيجي معانا؟"
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ich mitgehe heute.",
          "right": "Ich gehe heute mit.",
          "ar": "mit- بتنفصل وبتروح آخر الجملة."
        },
        {
          "wrong": "Wir haben lange gezusammenarbeitet.",
          "right": "Wir haben lange zusammengearbeitet.",
          "ar": "ge بتدخل بين zusammen و arbeitet مش في الأول."
        },
        {
          "wrong": "Hast du Lust, zu mitkommen?",
          "right": "Hast du Lust mitzukommen?",
          "ar": "zu بتدخل جوّه الفعل: mitzukommen."
        },
        {
          "wrong": "Meine Eltern haben aus dem Urlaub zurückgekommen.",
          "right": "Meine Eltern sind aus dem Urlaub zurückgekommen.",
          "ar": "zurückkommen فعل حركة، فبياخد sein في البيرفكت."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Ich gehe jetzt zu Peer ins Krankenhaus. Möchtest du ___?",
          "o": [
            "weggehen",
            "mitgehen",
            "zurückgehen"
          ],
          "a": 1,
          "why": "عايز يروح معاه، و mit- معناها مع حد: mitgehen."
        },
        {
          "type": "choice",
          "q": "Ich habe meine Jacke vergessen. Ich muss noch mal nach Hause ___.",
          "o": [
            "zurückgehen",
            "weitergehen",
            "vorbeigehen"
          ],
          "a": 0,
          "why": "لازم يرجع البيت، و zurück- معناها يرجع للمكان اللي كان فيه."
        },
        {
          "type": "choice",
          "q": "Ich muss morgen ins Büro und an meinem Projekt ___.",
          "o": [
            "mitmachen",
            "wegmachen",
            "weitermachen"
          ],
          "a": 2,
          "why": "هيكمّل الشغل في المشروع، و weiter- معناها يكمّل."
        },
        {
          "type": "truefalse",
          "q": "Im Satz „Die Linie 5 fährt direkt am Krankenhaus vorbei.“ steht die Vorsilbe am Satzende.",
          "a": true,
          "why": "صح، vorbeifahren بينفصل و vorbei بتروح آخر الجملة."
        },
        {
          "type": "truefalse",
          "q": "Das Partizip II von „zusammenarbeiten“ ist „gezusammenarbeitet“.",
          "a": false,
          "why": "غلط، ge بتدخل بعد البادئة: zusammengearbeitet."
        },
        {
          "type": "gap",
          "q": "Ich brauche Urlaub. Sollen wir am Wochenende vielleicht ___? (weg + fahren)",
          "a": [
            "wegfahren"
          ],
          "why": "بعد sollen الفعل بييجي مصدر في الآخر وبيفضل كلمة واحدة: wegfahren."
        },
        {
          "type": "gap",
          "q": "Gestern sind alle Kollegen nach der Arbeit noch in die Kneipe ___. (mitgehen, Partizip II)",
          "a": [
            "mitgegangen"
          ],
          "why": "ge بين mit و gangen: mitgegangen، ومع sein عشان فعل حركة."
        },
        {
          "type": "gap",
          "q": "Kommst du heute Abend kurz bei mir ___? Ich habe Kuchen gebacken.",
          "a": [
            "vorbei"
          ],
          "why": "vorbeikommen يعني يعدّي على حد زيارة قصيرة، و vorbei بتروح آخر الجملة."
        },
        {
          "type": "order",
          "prefix": "Leider",
          "words": [
            "kann",
            "ich",
            "heute",
            "nicht",
            "mitkommen"
          ],
          "a": [
            "kann ich heute nicht mitkommen"
          ],
          "why": "Leider في الأول، يبقى الفعل kann بعدها على طول، و mitkommen مصدر في الآخر."
        },
        {
          "type": "transform",
          "q": "Ins Perfekt: Meine Eltern kommen aus dem Urlaub zurück.",
          "a": [
            "Meine Eltern sind aus dem Urlaub zurückgekommen."
          ],
          "why": "zurückkommen فعل حركة فبياخد sein، والتصريف التالت zurückgekommen."
        },
        {
          "type": "transform",
          "q": "Mit zu: Hast du Lust? Du kommst mit.",
          "a": [
            "Hast du Lust mitzukommen?",
            "Hast du Lust, mitzukommen?"
          ],
          "why": "بعد Lust haben بنستخدم zu + المصدر، و zu بتدخل في النص: mitzukommen."
        },
        {
          "type": "error",
          "q": "Ich zurückrufe dich später.",
          "a": [
            "Ich rufe dich später zurück."
          ],
          "why": "zurückrufen بينفصل في المضارع: الفعل rufe في المكان التاني و zurück في الآخر."
        }
      ]
    }
  ],
  "9": [
    {
      "id": "b1-k9-stellung-nicht",
      "t": "Stellung von nicht im Satz",
      "tAr": "مكان nicht في الجملة",
      "summary": "Verneint <b>nicht</b> den ganzen Satz, steht es <b>möglichst am Ende</b>, aber <b>vor</b> dem zweiten Verbteil, vor Adjektiven/Adverbien, vor Präpositionalergänzungen und vor Ortsangaben. Verneint <b>nicht</b> nur ein Wort, steht es <b>direkt davor</b>.",
      "summaryAr": "لو nicht بتنفي الجملة كلها، بتروح على قد ما تقدر في آخر الجملة، بس بتقف قبل الجزء التاني من الفعل وقبل الصفة وقبل حرف الجر وقبل المكان. ولو بتنفي كلمة واحدة بس، بتتحط قبلها على طول.",
      "sections": [
        {
          "h": "1. Satzverneinung: nicht möglichst am Ende",
          "hAr": "١. نفي الجملة كلها: nicht في الآخر",
          "text": "Wenn <b>nicht</b> den ganzen Satz verneint, steht es <b>möglichst am Satzende</b> – also nach dem konjugierten Verb, nach dem Akkusativ-Objekt und nach Zeitangaben. Es gibt aber feste Plätze, an denen <b>nicht</b> <b>vor</b> einem Satzteil steht:",
          "ar": "لما تنفي الجملة كلها، nicht بتروح للآخر، يعني بعد الفعل وبعد المفعول به وبعد الوقت. بس في حاجات nicht لازم تيجي قبلها، شوف الجدول:",
          "table": {
            "head": [
              "nicht steht …",
              "Beispiel"
            ],
            "rows": [
              [
                "am Satzende",
                "Das Bild gefällt mir <b>nicht</b>."
              ],
              [
                "nach dem Akkusativ-Objekt",
                "Ich kenne den Künstler <b>nicht</b>."
              ],
              [
                "vor dem zweiten Verbteil",
                "Wir konnten <b>nicht</b> kommen."
              ],
              [
                "vor Adjektiven und Adverbien",
                "Das Bild war <b>nicht</b> teuer."
              ],
              [
                "vor Präpositionalergänzungen",
                "Sie interessiert sich <b>nicht</b> für Kunst."
              ],
              [
                "vor Ortsangaben",
                "Sie waren <b>nicht</b> dort."
              ]
            ]
          },
          "examples": [
            [
              "Der Maler will das Bild nicht verkaufen.",
              "الرسام مش عايز يبيع اللوحة."
            ],
            [
              "Ich war gestern nicht im Museum.",
              "أنا ما رحتش المتحف امبارح."
            ],
            [
              "Meine Freunde nehmen nicht an der Führung teil.",
              "أصحابي مش هيشاركوا في الجولة."
            ]
          ]
        },
        {
          "h": "2. Teilverneinung: nicht direkt vor dem Wort",
          "hAr": "٢. نفي كلمة واحدة: nicht قبلها على طول",
          "text": "Wenn man <b>nur ein Wort</b> oder einen Satzteil verneinen will, steht <b>nicht direkt vor diesem Wort</b>. Oft folgt dann eine Korrektur mit <b>sondern</b>.",
          "ar": "لو عايز تنفي كلمة واحدة بس (مش الجملة كلها)، حط nicht قبل الكلمة دي مباشرة. وغالبًا بعدها بتصحح بـ sondern.",
          "examples": [
            [
              "Ich war nicht heute im Museum, sondern gestern.",
              "أنا ما كنتش في المتحف النهارده، لأ امبارح."
            ],
            [
              "Nicht ich habe das Bild gemalt, sondern mein Bruder.",
              "مش أنا اللي رسمت اللوحة، أخويا هو اللي رسمها."
            ],
            [
              "Wir gehen nicht ins Kino, sondern ins Theater.",
              "إحنا مش رايحين السينما، رايحين المسرح."
            ]
          ]
        },
        {
          "h": "3. nicht oder kein?",
          "hAr": "٣. nicht ولا kein؟",
          "text": "<b>kein</b> verneint Nomen mit unbestimmtem Artikel oder ohne Artikel. <b>nicht</b> verneint Verben, Adjektive, Adverbien, Nomen mit bestimmtem Artikel oder Possessivartikel und Namen.",
          "ar": "kein بتنفي الاسم اللي معاه ein أو مالوش أداة خالص. nicht بتنفي الفعل والصفة والظرف، والاسم اللي معاه der/die/das أو mein/dein، والأسامي.",
          "table": {
            "head": [
              "positiv",
              "negativ"
            ],
            "rows": [
              [
                "Das ist ein Original.",
                "Das ist <b>kein</b> Original."
              ],
              [
                "Ich habe Zeit.",
                "Ich habe <b>keine</b> Zeit."
              ],
              [
                "Ich mag das Bild.",
                "Ich mag das Bild <b>nicht</b>."
              ],
              [
                "Das Konzert war laut.",
                "Das Konzert war <b>nicht</b> laut."
              ]
            ]
          },
          "examples": [
            [
              "Wir haben keine Karten mehr bekommen.",
              "ما لحقناش ناخد تذاكر."
            ],
            [
              "Ich verstehe moderne Kunst nicht immer.",
              "أنا مش دايمًا بفهم الفن الحديث."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ich finde das Bild gut nicht.",
          "right": "Ich finde das Bild nicht gut.",
          "ar": "nicht بتيجي قبل الصفة gut، مش بعدها."
        },
        {
          "wrong": "Ich will die Bilder kaufen nicht.",
          "right": "Ich will die Bilder nicht kaufen.",
          "ar": "nicht لازم تيجي قبل الجزء التاني من الفعل (kaufen) اللي في الآخر."
        },
        {
          "wrong": "Ich nicht gehe ins Kino.",
          "right": "Ich gehe nicht ins Kino.",
          "ar": "الفعل في الجملة الرئيسية دايمًا في المكان التاني، وnicht بتيجي بعده وقبل المكان."
        },
        {
          "wrong": "Ich habe nicht Zeit.",
          "right": "Ich habe keine Zeit.",
          "ar": "الاسم اللي مالوش أداة بيتنفي بـ kein، مش بـ nicht."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Welcher Satz ist richtig?",
          "o": [
            "Ich finde dieses Theaterstück gut nicht.",
            "Ich finde dieses Theaterstück nicht gut.",
            "Ich nicht finde dieses Theaterstück gut."
          ],
          "a": 1,
          "why": "nicht بتيجي قبل الصفة gut."
        },
        {
          "type": "choice",
          "q": "Der Maler will das Bild ___.",
          "o": [
            "verkaufen nicht",
            "nicht zu verkaufen",
            "nicht verkaufen"
          ],
          "a": 2,
          "why": "مع wollen الفعل التاني بيروح للآخر من غير zu، وnicht بتيجي قبله."
        },
        {
          "type": "choice",
          "q": "Ich habe heute ___ Lust auf Theater.",
          "o": [
            "keine",
            "nicht",
            "kein"
          ],
          "a": 0,
          "why": "Lust اسم مؤنث مالوش أداة، فبنفيه بـ keine."
        },
        {
          "type": "truefalse",
          "q": "„Ich will die Bilder kaufen nicht.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط: الصح „Ich will die Bilder nicht kaufen.“ لأن nicht قبل الجزء التاني من الفعل."
        },
        {
          "type": "truefalse",
          "q": "„Ich war nicht heute im Museum.“ – Hier verneint nicht nur das Wort heute.",
          "a": true,
          "why": "صح: nicht واقفة قبل heute على طول، فهي بتنفي heute بس (يعني رحت يوم تاني)."
        },
        {
          "type": "gap",
          "q": "Das Konzert war ___ laut, wir konnten alles gut hören. (nicht/kein)",
          "a": [
            "nicht"
          ],
          "why": "laut صفة، والصفة بتتنفي بـ nicht."
        },
        {
          "type": "gap",
          "q": "Das ist ___ Original, das ist nur eine Kopie. (nicht/kein)",
          "a": [
            "kein"
          ],
          "why": "ein Original اسم مع ein، فبيتنفي بـ kein."
        },
        {
          "type": "order",
          "words": [
            "Den",
            "Künstler",
            "kenne",
            "ich",
            "nicht"
          ],
          "a": [
            "Den Künstler kenne ich nicht",
            "Ich kenne den Künstler nicht"
          ],
          "why": "نفي الجملة كلها: nicht في الآخر بعد المفعول به."
        },
        {
          "type": "order",
          "words": [
            "Meine",
            "Freunde",
            "nehmen",
            "nicht",
            "an",
            "der",
            "Führung",
            "teil"
          ],
          "a": [
            "Meine Freunde nehmen nicht an der Führung teil"
          ],
          "why": "nicht بتيجي قبل حرف الجر an، وteil بيروح للآخر."
        },
        {
          "type": "transform",
          "q": "Verneinen Sie den ganzen Satz: Das Museum hat das Gemälde gekauft.",
          "a": [
            "Das Museum hat das Gemälde nicht gekauft."
          ],
          "why": "nicht قبل التصريف التاني gekauft اللي في الآخر."
        },
        {
          "type": "transform",
          "q": "Verneinen Sie den ganzen Satz: Wir freuen uns auf die neue Ausstellung.",
          "a": [
            "Wir freuen uns nicht auf die neue Ausstellung."
          ],
          "why": "sich freuen auf ليه حرف جر، وnicht بتيجي قبل auf."
        },
        {
          "type": "error",
          "q": "Die meisten Leute finden nicht dieses Kunstwerk schön.",
          "a": [
            "Die meisten Leute finden dieses Kunstwerk nicht schön."
          ],
          "why": "nicht بتيجي بعد المفعول به dieses Kunstwerk وقبل الصفة schön."
        }
      ]
    },
    {
      "id": "b1-k9-nicht-sondern",
      "t": "nicht … sondern / kein … sondern",
      "tAr": "مش … لأ … (nicht/kein … sondern)",
      "summary": "Wenn ein Satz oder Satzteil mit <b>nicht</b> oder <b>kein</b> verneint ist, korrigiert man mit <b>sondern</b>. Vor <b>sondern</b> steht immer ein <b>Komma</b>.",
      "summaryAr": "لما تنفي حاجة بـ nicht أو kein وعايز تقول الحاجة الصح بدالها، بتكمّل بـ sondern. وقبل sondern لازم فاصلة.",
      "sections": [
        {
          "h": "1. Korrigieren mit sondern",
          "hAr": "١. التصحيح بـ sondern",
          "text": "Erst kommt die <b>Verneinung</b> mit <b>nicht</b> oder <b>kein</b>, dann nach einem Komma die <b>richtige Information</b> mit <b>sondern</b>. Das Verb wiederholt man meistens nicht.",
          "ar": "الأول بتنفي بـ nicht أو kein، وبعدين فاصلة، وبعدها sondern والمعلومة الصح. غالبًا ما بنكررش الفعل تاني.",
          "table": {
            "head": [
              "Verneinung",
              "Korrektur"
            ],
            "rows": [
              [
                "Ich war <b>nicht</b> heute im Museum,",
                "<b>sondern</b> gestern."
              ],
              [
                "Das Bild ist <b>nicht</b> teuer,",
                "<b>sondern</b> günstig."
              ],
              [
                "Das ist <b>kein</b> Original,",
                "<b>sondern</b> eine Kopie."
              ],
              [
                "<b>Nicht</b> ich gehe heute ins Museum,",
                "<b>sondern</b> meine Schwester."
              ],
              [
                "Das Bild hängt <b>nicht</b> in der Galerie,",
                "<b>sondern</b> im Museum."
              ]
            ]
          },
          "examples": [
            [
              "Die Statue steht nicht im Park, sondern vor dem Rathaus.",
              "التمثال مش في الحديقة، لأ قدام مبنى البلدية."
            ],
            [
              "Sie singt nicht im Chor, sondern in einer Band.",
              "هي مش بتغني في الكورال، بتغني في فرقة."
            ]
          ]
        },
        {
          "h": "2. sondern oder aber?",
          "hAr": "٢. sondern ولا aber؟",
          "text": "<b>sondern</b> ersetzt die verneinte Information durch eine andere (<i>nicht A, sondern B</i>). <b>aber</b> zeigt einen Gegensatz oder eine Einschränkung; die erste Aussage bleibt richtig.",
          "ar": "sondern معناها «لأ، الصح هو …» وبتشيل المعلومة الأولى وتحط مكانها حاجة تانية. أما aber معناها «بس / لكن» والجملة الأولى بتفضل صح.",
          "table": {
            "head": [
              "Konnektor",
              "Bedeutung",
              "Beispiel"
            ],
            "rows": [
              [
                "sondern",
                "Korrektur: nicht A, sondern B",
                "Das Bild ist nicht teuer, <b>sondern</b> günstig."
              ],
              [
                "aber",
                "Gegensatz / Einschränkung",
                "Das Bild ist nicht teuer, <b>aber</b> es gefällt mir nicht."
              ]
            ]
          },
          "examples": [
            [
              "Ich trinke keinen Kaffee, sondern Tee.",
              "أنا مش بشرب قهوة، بشرب شاي."
            ],
            [
              "Ich trinke keinen Kaffee, aber ich esse gern Kuchen.",
              "أنا مش بشرب قهوة، بس بحب آكل كيك."
            ]
          ]
        },
        {
          "h": "3. nicht nur …, sondern auch …",
          "hAr": "٣. مش بس …، كمان …",
          "text": "Mit <b>nicht nur …, sondern auch …</b> nennt man zwei Dinge, die beide richtig sind. Auch hier steht vor <b>sondern</b> ein Komma.",
          "ar": "nicht nur …, sondern auch … معناها «مش بس … لأ كمان …»، يعني الحاجتين صح. وبرضه فيه فاصلة قبل sondern.",
          "examples": [
            [
              "Er malt nicht nur Bilder, sondern macht auch Musik.",
              "هو مش بس بيرسم، ده كمان بيعمل موسيقى."
            ],
            [
              "Die Ausstellung ist nicht nur für Kinder, sondern auch für Erwachsene interessant.",
              "المعرض مش بس للأطفال، ده كمان ممتع للكبار."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Das ist kein Original, aber eine Kopie.",
          "right": "Das ist kein Original, sondern eine Kopie.",
          "ar": "لما بتصحح معلومة منفية، استخدم sondern مش aber."
        },
        {
          "wrong": "Ich gehe nicht ins Kino sondern ins Theater.",
          "right": "Ich gehe nicht ins Kino, sondern ins Theater.",
          "ar": "متنساش الفاصلة قبل sondern."
        },
        {
          "wrong": "Das ist nicht ein Original, sondern eine Kopie.",
          "right": "Das ist kein Original, sondern eine Kopie.",
          "ar": "nicht + ein بتبقى kein."
        },
        {
          "wrong": "Ich gehe ins Kino, sondern ins Theater.",
          "right": "Ich gehe nicht ins Kino, sondern ins Theater.",
          "ar": "sondern لازم يكون قبلها نفي بـ nicht أو kein."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Das Konzert ist nicht heute, ___ morgen.",
          "o": [
            "aber",
            "sondern",
            "oder"
          ],
          "a": 1,
          "why": "بنصحح المعلومة: مش النهارده، لأ بكرة، فبنستخدم sondern."
        },
        {
          "type": "choice",
          "q": "Das Bild ist nicht teuer, ___ es gefällt mir trotzdem nicht.",
          "o": [
            "sondern",
            "denn",
            "aber"
          ],
          "a": 2,
          "why": "الجملة الأولى فضلت صح والتانية تقييد/عكس، فبنستخدم aber."
        },
        {
          "type": "choice",
          "q": "Das ist ___ Gemälde, sondern ein Foto.",
          "o": [
            "kein",
            "nicht",
            "keine"
          ],
          "a": 0,
          "why": "das Gemälde محايد ومعاه ein، فالنفي kein."
        },
        {
          "type": "truefalse",
          "q": "„Ich gehe nicht ins Theater sondern ins Kino.“ – Die Zeichensetzung ist richtig.",
          "a": false,
          "why": "غلط: لازم فاصلة قبل sondern."
        },
        {
          "type": "truefalse",
          "q": "„Sie singt nicht im Chor, sondern in einer Band.“ – Dieser Satz ist richtig.",
          "a": true,
          "why": "صح: نفي بـ nicht، فاصلة، وبعدين التصحيح بـ sondern."
        },
        {
          "type": "gap",
          "q": "Wir sehen uns heute ___ Film an, sondern ein Theaterstück. (kein)",
          "a": [
            "keinen"
          ],
          "why": "der Film مذكر في الأكوزاتيف، فبيبقى keinen."
        },
        {
          "type": "gap",
          "q": "Die Statue steht nicht im Park, ___ vor dem Rathaus.",
          "a": [
            "sondern"
          ],
          "why": "بنصحح المكان بعد النفي، فبنستخدم sondern."
        },
        {
          "type": "order",
          "words": [
            "Die",
            "Ausstellung",
            "beginnt",
            "nicht",
            "am",
            "Montag",
            "sondern",
            "am",
            "Dienstag"
          ],
          "a": [
            "Die Ausstellung beginnt nicht am Montag, sondern am Dienstag"
          ],
          "why": "nicht قبل am Montag اللي بنصححه، وبعدين sondern am Dienstag."
        },
        {
          "type": "transform",
          "q": "Korrigieren Sie mit sondern: Das Bild hängt in der Galerie. (im Museum)",
          "a": [
            "Das Bild hängt nicht in der Galerie, sondern im Museum."
          ],
          "why": "nicht قبل المكان الغلط، وبعد الفاصلة sondern والمكان الصح."
        },
        {
          "type": "transform",
          "q": "Korrigieren Sie mit kein … sondern: Das ist ein Original. (eine Kopie)",
          "a": [
            "Das ist kein Original, sondern eine Kopie."
          ],
          "why": "ein Original بيتنفي بـ kein، وبعدين sondern eine Kopie."
        },
        {
          "type": "error",
          "q": "Ich trinke keinen Kaffee, aber Tee.",
          "a": [
            "Ich trinke keinen Kaffee, sondern Tee."
          ],
          "why": "ده تصحيح (مش قهوة، لأ شاي)، فلازم sondern."
        },
        {
          "type": "error",
          "q": "Nicht meine Schwester geht heute ins Museum, aber ich.",
          "a": [
            "Nicht meine Schwester geht heute ins Museum, sondern ich."
          ],
          "why": "بنصحح الشخص، فبنستخدم sondern مش aber."
        }
      ]
    },
    {
      "id": "b1-k9-adjektive-ohne-artikel",
      "t": "Adjektive ohne Artikel",
      "tAr": "الصفات من غير أداة",
      "summary": "Steht <b>kein Artikelwort</b> vor dem Adjektiv, bekommt das Adjektiv die <b>Endung des bestimmten Artikels</b>: großer Spaß, kleines Projekt, mit nettem Team. <b>Ausnahme:</b> Genitiv maskulin und neutrum auf <b>-en</b>.",
      "summaryAr": "لو مفيش أداة قبل الصفة، الصفة هي اللي بتاخد نهاية أداة التعريف (der → -er، das → -es، dem → -em). الاستثناء: الجينتيف المذكر والمحايد بياخد -en.",
      "sections": [
        {
          "h": "1. Die Endungen",
          "hAr": "١. النهايات",
          "text": "Ohne Artikel muss das <b>Adjektiv</b> zeigen, welcher Kasus und welches Genus es ist. Deshalb hat es fast die gleiche Endung wie der bestimmte Artikel: <b>der</b> große Spaß → groß<b>er</b> Spaß, <b>dem</b> Projekt → klein<b>em</b> Projekt.",
          "ar": "من غير أداة، الصفة هي اللي لازم توضّح الحالة والجنس. علشان كده بتاخد تقريبًا نفس آخر حرفين من der/die/das: der → -er، das → -es، dem → -em، der (داتيف مؤنث) → -er.",
          "table": {
            "head": [
              "Kasus",
              "maskulin",
              "neutrum",
              "feminin",
              "Plural"
            ],
            "rows": [
              [
                "Nominativ",
                "groß<b>er</b> Spaß",
                "klein<b>es</b> Projekt",
                "nett<b>e</b> Person",
                "bunt<b>e</b> Stifte"
              ],
              [
                "Akkusativ",
                "groß<b>en</b> Spaß",
                "klein<b>es</b> Projekt",
                "nett<b>e</b> Person",
                "bunt<b>e</b> Stifte"
              ],
              [
                "Dativ",
                "groß<b>em</b> Spaß",
                "klein<b>em</b> Projekt",
                "nett<b>er</b> Person",
                "bunt<b>en</b> Stiften"
              ],
              [
                "Genitiv",
                "groß<b>en</b> Spaßes",
                "klein<b>en</b> Projekts",
                "nett<b>er</b> Person",
                "bunt<b>er</b> Stifte"
              ]
            ]
          },
          "examples": [
            [
              "Großer Spaß ist garantiert!",
              "المتعة الكبيرة مضمونة!"
            ],
            [
              "Kleine Gruppe sucht nette Person.",
              "جروب صغير بيدوّر على شخص لطيف."
            ],
            [
              "Wir arbeiten mit buntem Papier und alten Flaschen.",
              "بنشتغل بورق ملوّن وقزايز قديمة."
            ]
          ]
        },
        {
          "h": "2. Ausnahme: Genitiv maskulin und neutrum",
          "hAr": "٢. الاستثناء: الجينتيف المذكر والمحايد",
          "text": "Im <b>Genitiv Singular maskulin und neutrum</b> endet das Adjektiv auf <b>-en</b>, weil das Nomen schon die Endung <b>-(e)s</b> hat. Den Genitiv ohne Artikel verwendet man fast nur nach Präpositionen wie <b>wegen</b> oder <b>trotz</b>.",
          "ar": "في الجينتيف المذكر والمحايد الصفة بتاخد -en (مش -es)، لأن الاسم نفسه واخد -s أو -es. والجينتيف من غير أداة بييجي غالبًا بعد wegen وtrotz.",
          "examples": [
            [
              "Wegen schlechten Wetters fällt das Konzert im Park aus.",
              "بسبب الجو الوحش الحفلة اللي في الجنينة اتلغت."
            ],
            [
              "Trotz langen Wartens haben wir keine Karten bekommen.",
              "رغم إننا استنينا كتير، ما خدناش تذاكر."
            ]
          ]
        },
        {
          "h": "3. Wo braucht man Adjektive ohne Artikel?",
          "hAr": "٣. بنستخدمها فين؟",
          "text": "Man findet sie oft in <b>Anzeigen</b> und Überschriften, im <b>Plural ohne Artikel</b>, nach <b>Zahlen</b> und nach Wörtern wie <b>viel, wenig, etwas</b> sowie bei Nomen ohne Artikel (z. B. Getränke, Materialien).",
          "ar": "بتلاقيها كتير في الإعلانات والعناوين، وفي الجمع من غير أداة، وبعد الأرقام، وبعد viel وwenig وetwas، ومع الأسماء اللي مالهاش أداة زي المشروبات والخامات.",
          "examples": [
            [
              "Verkaufe rotes Sofa, fast neu.",
              "ببيع كنبة حمرا، تقريبًا جديدة."
            ],
            [
              "Wir suchen zwei talentierte Sängerinnen.",
              "بندوّر على مغنيتين موهوبين."
            ],
            [
              "Ich trinke gern heißen Tee mit frischer Minze.",
              "بحب أشرب شاي سخن بنعناع فريش."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Wir arbeiten mit kleines Budget.",
          "right": "Wir arbeiten mit kleinem Budget.",
          "ar": "mit بتاخد داتيف، والمحايد في الداتيف من غير أداة بياخد -em."
        },
        {
          "wrong": "Wegen schlechtes Wetters fällt das Fest aus.",
          "right": "Wegen schlechten Wetters fällt das Fest aus.",
          "ar": "في الجينتيف المذكر والمحايد الصفة بتاخد -en."
        },
        {
          "wrong": "Suche alter Fernseher.",
          "right": "Suche alten Fernseher.",
          "ar": "Fernseher هنا مفعول به (أكوزاتيف) ومذكر، فالصفة -en."
        },
        {
          "wrong": "Ich wünsche dir viel Spaß und gutes Erfolg!",
          "right": "Ich wünsche dir viel Spaß und guten Erfolg!",
          "ar": "der Erfolg مذكر، وفي الأكوزاتيف بياخد -en."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Suche ___ Kostüm für eine Theateraufführung.",
          "o": [
            "altes",
            "alter",
            "alten"
          ],
          "a": 0,
          "why": "das Kostüm محايد في الأكوزاتيف، فالصفة -es زي das."
        },
        {
          "type": "choice",
          "q": "Kleine Theatergruppe sucht ___ Schauspielerin.",
          "o": [
            "talentierter",
            "talentierte",
            "talentiertes"
          ],
          "a": 1,
          "why": "die Schauspielerin مؤنث في الأكوزاتيف، فالصفة -e."
        },
        {
          "type": "choice",
          "q": "Das Büfett mit ___ Salat war sehr lecker.",
          "o": [
            "frischer",
            "frischen",
            "frischem"
          ],
          "a": 2,
          "why": "mit + داتيف، وder Salat مذكر، فالصفة -em زي dem."
        },
        {
          "type": "truefalse",
          "q": "„Trotz langen Wartens haben wir keine Karten bekommen.“ – Die Endung -en ist hier richtig.",
          "a": true,
          "why": "صح: جينتيف محايد (das Warten) من غير أداة، فالصفة -en."
        },
        {
          "type": "truefalse",
          "q": "„Wir trinken Tee mit warme Milch.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط: mit + داتيف، وdie Milch مؤنث، فالصح „mit warmer Milch“."
        },
        {
          "type": "gap",
          "q": "___ Spaß ist garantiert! (groß)",
          "a": [
            "Großer",
            "großer"
          ],
          "why": "der Spaß مذكر في النوميناتيف، فالصفة -er زي der."
        },
        {
          "type": "gap",
          "q": "Wir suchen Leute mit ___ Ideen. (kreativ)",
          "a": [
            "kreativen"
          ],
          "why": "mit + داتيف جمع، فالصفة -en زي den."
        },
        {
          "type": "gap",
          "q": "Verkaufe ___ Sofa, fast neu. (rot)",
          "a": [
            "rotes"
          ],
          "why": "das Sofa محايد في الأكوزاتيف، فالصفة -es."
        },
        {
          "type": "gap",
          "q": "Wegen ___ Regens fällt die Aufführung aus. (stark)",
          "a": [
            "starken"
          ],
          "why": "جينتيف مذكر (des Regens) من غير أداة، فالصفة -en."
        },
        {
          "type": "order",
          "words": [
            "Junge",
            "Band",
            "sucht",
            "erfahrene",
            "Sängerin"
          ],
          "a": [
            "Junge Band sucht erfahrene Sängerin"
          ],
          "why": "زي الإعلانات: الفاعل (Junge Band) وبعدين الفعل وبعدين المفعول به."
        },
        {
          "type": "transform",
          "q": "Schreiben Sie im Plural ohne Artikel: Ich kaufe eine bunte Vase.",
          "a": [
            "Ich kaufe bunte Vasen."
          ],
          "why": "في الجمع من غير أداة في الأكوزاتيف الصفة بتاخد -e."
        },
        {
          "type": "error",
          "q": "Ich trinke gern heißes Tee.",
          "a": [
            "Ich trinke gern heißen Tee."
          ],
          "why": "der Tee مذكر، وفي الأكوزاتيف الصفة -en زي den."
        }
      ]
    },
    {
      "id": "b1-k9-adjektive-mit-artikel",
      "t": "Adjektive nach bestimmtem und unbestimmtem Artikel",
      "tAr": "الصفة بعد أداة التعريف وأداة النكرة",
      "summary": "Nach dem <b>bestimmten Artikel</b> (auch <i>dieser, jeder</i>) hat das Adjektiv nur <b>-e</b> oder <b>-en</b>. Nach dem <b>unbestimmten Artikel</b> (auch <i>kein, mein</i>) zeigt das Adjektiv im Nominativ maskulin <b>-er</b> und im Nominativ/Akkusativ neutrum <b>-es</b>.",
      "summaryAr": "بعد der/die/das (وdieser وjeder) الصفة بتاخد -e أو -en بس. بعد ein/kein/mein الصفة بتاخد -er مع المذكر في النوميناتيف و-es مع المحايد في النوميناتيف والأكوزاتيف، لأن ein هنا مش بيوضّح الجنس.",
      "sections": [
        {
          "h": "1. Nach dem bestimmten Artikel",
          "hAr": "١. بعد أداة التعريف",
          "text": "Der bestimmte Artikel zeigt schon Kasus und Genus. Das Adjektiv bekommt deshalb nur <b>-e</b> (Nominativ Singular, Akkusativ feminin/neutrum) oder <b>-en</b> (alle anderen Formen).",
          "ar": "der/die/das بتوضّح الحالة والجنس، فالصفة بتاخد بس -e (النوميناتيف المفرد، والأكوزاتيف المؤنث والمحايد) أو -en (في كل الباقي).",
          "table": {
            "head": [
              "Kasus",
              "maskulin",
              "neutrum",
              "feminin",
              "Plural"
            ],
            "rows": [
              [
                "Nominativ",
                "der neu<b>e</b> Film",
                "das neu<b>e</b> Stück",
                "die neu<b>e</b> Rolle",
                "die neu<b>en</b> Lieder"
              ],
              [
                "Akkusativ",
                "den neu<b>en</b> Film",
                "das neu<b>e</b> Stück",
                "die neu<b>e</b> Rolle",
                "die neu<b>en</b> Lieder"
              ],
              [
                "Dativ",
                "dem neu<b>en</b> Film",
                "dem neu<b>en</b> Stück",
                "der neu<b>en</b> Rolle",
                "den neu<b>en</b> Liedern"
              ],
              [
                "Genitiv",
                "des neu<b>en</b> Films",
                "des neu<b>en</b> Stücks",
                "der neu<b>en</b> Rolle",
                "der neu<b>en</b> Lieder"
              ]
            ]
          },
          "examples": [
            [
              "Ich warte auf die große Eröffnungsfeier.",
              "أنا مستني حفلة الافتتاح الكبيرة."
            ],
            [
              "Für diese langweilige Rolle braucht man nicht viel Talent.",
              "الدور الممل ده مش محتاج موهبة كبيرة."
            ]
          ]
        },
        {
          "h": "2. Nach dem unbestimmten Artikel",
          "hAr": "٢. بعد أداة النكرة",
          "text": "Bei <b>ein</b> (Nominativ maskulin) und <b>ein</b> (Nominativ/Akkusativ neutrum) sieht man das Genus nicht. Dann zeigt das <b>Adjektiv</b> es: ein jung<b>er</b> Mann, ein alt<b>es</b> Sofa. Genauso nach <b>kein</b> und Possessivartikeln.",
          "ar": "لما تقول ein بس، مش باين المذكر من المحايد. علشان كده الصفة هي اللي بتوضّح: -er للمذكر و-es للمحايد. ونفس الكلام بعد kein وmein وdein.",
          "table": {
            "head": [
              "Kasus",
              "maskulin",
              "neutrum",
              "feminin",
              "Plural"
            ],
            "rows": [
              [
                "Nominativ",
                "ein neu<b>er</b> Film",
                "ein neu<b>es</b> Stück",
                "eine neu<b>e</b> Rolle",
                "keine neu<b>en</b> Lieder"
              ],
              [
                "Akkusativ",
                "einen neu<b>en</b> Film",
                "ein neu<b>es</b> Stück",
                "eine neu<b>e</b> Rolle",
                "keine neu<b>en</b> Lieder"
              ],
              [
                "Dativ",
                "einem neu<b>en</b> Film",
                "einem neu<b>en</b> Stück",
                "einer neu<b>en</b> Rolle",
                "keinen neu<b>en</b> Liedern"
              ],
              [
                "Genitiv",
                "eines neu<b>en</b> Films",
                "eines neu<b>en</b> Stücks",
                "einer neu<b>en</b> Rolle",
                "keiner neu<b>en</b> Lieder"
              ]
            ]
          },
          "examples": [
            [
              "Ein junger Mann singt traditionelle Lieder.",
              "شاب صغير بيغني أغاني تراثية."
            ],
            [
              "Auf der Bühne steht ein altes Sofa.",
              "على المسرح فيه كنبة قديمة."
            ],
            [
              "Gestern habe ich einen interessanten Artikel über Kunst gelesen.",
              "امبارح قريت مقالة مثيرة للاهتمام عن الفن."
            ]
          ]
        },
        {
          "h": "3. Tipp: Die Information kommt nur einmal",
          "hAr": "٣. نصيحة: المعلومة بتظهر مرة واحدة",
          "text": "Merken Sie sich: <b>Artikel oder Adjektiv</b> zeigt das Genus – nicht beide. Zeigt der Artikel schon <b>-r, -s, -m</b>, hat das Adjektiv <b>-e/-en</b>. Zeigt der Artikel nichts, hat das Adjektiv die starke Endung.",
          "ar": "افتكر القاعدة دي: يا الأداة يا الصفة هي اللي بتوضّح الجنس، مش الاتنين. لو الأداة فيها -r أو -s أو -m، الصفة بتاخد -e أو -en. لو الأداة مش موضّحة حاجة، الصفة بتاخد النهاية القوية.",
          "table": {
            "head": [
              "Artikel zeigt Genus?",
              "Adjektiv",
              "Beispiel"
            ],
            "rows": [
              [
                "ja (der, das, dem …)",
                "-e / -en",
                "der alt<b>e</b> Spiegel, dem alt<b>en</b> Spiegel"
              ],
              [
                "nein (ein, kein, mein …)",
                "-er / -es",
                "ein alt<b>er</b> Spiegel, ein klein<b>es</b> Bild"
              ],
              [
                "kein Artikel",
                "wie der Artikel",
                "alt<b>er</b> Spiegel, klein<b>es</b> Bild"
              ]
            ]
          },
          "examples": [
            [
              "Der alte Spiegel ist kaputt. – Ein alter Spiegel ist kaputt.",
              "المراية القديمة مكسورة. – مراية قديمة مكسورة."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ein junge Mann singt im Chor.",
          "right": "Ein junger Mann singt im Chor.",
          "ar": "ein مع المذكر في النوميناتيف مش بيوضّح الجنس، فالصفة لازم تاخد -er."
        },
        {
          "wrong": "Das neues Stück ist toll.",
          "right": "Das neue Stück ist toll.",
          "ar": "بعد das الصفة بتاخد -e بس، لأن das وضّحت الجنس خلاص."
        },
        {
          "wrong": "Sie wohnt in einer kleine Wohnung.",
          "right": "Sie wohnt in einer kleinen Wohnung.",
          "ar": "في الداتيف الصفة بعد einer بتاخد -en."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Hast du schon das ___ Theaterprogramm gesehen?",
          "o": [
            "aktuelle",
            "aktuellen",
            "aktuelles"
          ],
          "a": 0,
          "why": "das + أكوزاتيف محايد: الصفة -e بس."
        },
        {
          "type": "choice",
          "q": "Gestern habe ich einen ___ Artikel über Kunst gelesen.",
          "o": [
            "interessanter",
            "interessanten",
            "interessantes"
          ],
          "a": 1,
          "why": "einen = أكوزاتيف مذكر، فالصفة -en."
        },
        {
          "type": "choice",
          "q": "Auf der Bühne steht ein ___ Sofa.",
          "o": [
            "alte",
            "alten",
            "altes"
          ],
          "a": 2,
          "why": "ein مع المحايد مش بيوضّح الجنس، فالصفة -es."
        },
        {
          "type": "truefalse",
          "q": "„Für diese langweilige Rolle braucht man nicht viel Talent.“ – Die Adjektivendung ist richtig.",
          "a": true,
          "why": "صح: diese زي die، وفي الأكوزاتيف المؤنث الصفة -e."
        },
        {
          "type": "truefalse",
          "q": "„Ein junge Mann singt traditionelle Lieder.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط: الصح „Ein junger Mann“ لأن ein مش بيوضّح المذكر."
        },
        {
          "type": "gap",
          "q": "Ich warte auf die ___ Eröffnungsfeier. (groß)",
          "a": [
            "große"
          ],
          "why": "die + أكوزاتيف مؤنث: الصفة -e."
        },
        {
          "type": "gap",
          "q": "Mit meinem ___ Freund gehe ich ins Konzert. (best-)",
          "a": [
            "besten"
          ],
          "why": "meinem = داتيف، والصفة بعد أداة في الداتيف دايمًا -en."
        },
        {
          "type": "gap",
          "q": "Das ist der Preis des ___ Gemäldes. (teuer)",
          "a": [
            "teuren"
          ],
          "why": "des = جينتيف، فالصفة -en. وteuer بتفقد الـ e: teuren."
        },
        {
          "type": "order",
          "words": [
            "Der",
            "talentierte",
            "Sänger",
            "hat",
            "eine",
            "tolle",
            "Stimme"
          ],
          "a": [
            "Der talentierte Sänger hat eine tolle Stimme",
            "Eine tolle Stimme hat der talentierte Sänger"
          ],
          "why": "der + نوميناتيف مذكر: -e، وeine + أكوزاتيف مؤنث: -e."
        },
        {
          "type": "transform",
          "q": "Schreiben Sie mit unbestimmtem Artikel: Der alte Spiegel ist kaputt.",
          "a": [
            "Ein alter Spiegel ist kaputt."
          ],
          "why": "مع ein الصفة لازم توضّح المذكر: -er."
        },
        {
          "type": "transform",
          "q": "Schreiben Sie mit unbestimmtem Artikel: Ich kaufe das kleine Bild.",
          "a": [
            "Ich kaufe ein kleines Bild."
          ],
          "why": "ein مع المحايد في الأكوزاتيف: الصفة -es."
        },
        {
          "type": "error",
          "q": "Wir haben einen neues Kuli gekauft.",
          "a": [
            "Wir haben einen neuen Kuli gekauft."
          ],
          "why": "der Kuli مذكر، وبعد einen الصفة -en."
        }
      ]
    }
  ]
});
