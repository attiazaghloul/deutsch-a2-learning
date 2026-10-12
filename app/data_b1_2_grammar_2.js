/* Detailed B1.2 grammar, chapters 10, 11, 12: rules with tables, Arabic explanations,
   typical mistakes and exercises (choice, true/false, gap, order, transform, error). */
window.B1_GRAMMAR = Object.assign(window.B1_GRAMMAR || {}, {
  "10": [
    {
      "id": "b1-k10-passiv-praesens",
      "t": "Passiv Präsens",
      "tAr": "المبني للمجهول في المضارع",
      "summary": "Im <b>Passiv</b> steht der <b>Vorgang</b> im Mittelpunkt: <b>werden + Partizip II</b>. Das Akkusativobjekt aus dem Aktivsatz wird zum <b>Subjekt</b> (Nominativ). Wer handelt, kann mit <b>von + Dativ</b> genannt werden.",
      "summaryAr": "في الـ Passiv بنركّز على «إيه اللي بيحصل» مش «مين بيعمله». التركيبة: werden + Partizip II. المفعول (Akkusativ) في جملة الـ Aktiv بيبقى هو الفاعل (Nominativ) في الـ Passiv، ولو عايز تقول مين عمل بتستخدم von + Dativ.",
      "sections": [
        {
          "h": "1. Aktiv oder Passiv?",
          "hAr": "١. مبني للمعلوم ولا للمجهول؟",
          "text": "Im <b>Aktiv</b> fragt man: <b>Wer tut etwas?</b> Im <b>Passiv</b> fragt man: <b>Was passiert?</b> Das Passiv benutzt man oft in Zeitungsartikeln, Berichten und Beschreibungen von Abläufen, wenn die handelnde Person nicht wichtig oder nicht bekannt ist.",
          "ar": "في الـ Aktiv السؤال: مين بيعمل الحاجة؟ وفي الـ Passiv السؤال: إيه اللي بيحصل؟ الـ Passiv بيتستخدم كتير في الجرايد والتقارير ووصف خطوات شغل، لما الشخص اللي بيعمل مش مهم أو مش معروف.",
          "examples": [
            [
              "Aktiv: Die Supermärkte werfen viele Lebensmittel weg.",
              "المبني للمعلوم: السوبرماركتات بترمي أكل كتير."
            ],
            [
              "Passiv: Viele Lebensmittel werden weggeworfen.",
              "المبني للمجهول: أكل كتير بيترمي."
            ],
            [
              "Hier wird Deutsch gesprochen.",
              "هنا بيتكلموا ألماني. (حرفيًا: هنا بيُتكلَّم ألماني)"
            ]
          ]
        },
        {
          "h": "2. Form: werden + Partizip II",
          "hAr": "٢. التكوين: werden + التصريف الثالث",
          "text": "<b>werden</b> wird konjugiert und steht auf <b>Position 2</b>. Das <b>Partizip II</b> steht am <b>Satzende</b>. Im Nebensatz steht werden ganz am Ende: …, weil die Lebensmittel verteilt <b>werden</b>.",
          "ar": "werden هو اللي بيتصرّف ومكانه التاني في الجملة، والـ Partizip II بيروح آخر الجملة. في الجملة الفرعية (weil, dass…) werden بيروح آخر خالص بعد الـ Partizip II.",
          "table": {
            "head": [
              "Person",
              "werden",
              "Partizip II"
            ],
            "rows": [
              [
                "ich",
                "werde",
                "informiert"
              ],
              [
                "du",
                "wirst",
                "informiert"
              ],
              [
                "er/sie/es",
                "wird",
                "informiert"
              ],
              [
                "wir",
                "werden",
                "informiert"
              ],
              [
                "ihr",
                "werdet",
                "informiert"
              ],
              [
                "sie/Sie",
                "werden",
                "informiert"
              ]
            ],
            "headAr": [
              "الشخص أو الضمير",
              "الفعل المساعد لتكوين المبني للمجهول",
              "التصريف الثالث"
            ],
            "rowsAr": [
              [
                "أنا",
                "صيغة werden مع أنا",
                "مُبلَّغ"
              ],
              [
                "إنت",
                "صيغة werden مع إنت",
                "مُبلَّغ"
              ],
              [
                "هو / هي / هو لغير العاقل",
                "صيغة werden مع هو أو هي",
                "مُبلَّغ"
              ],
              [
                "إحنا",
                "الفعل المساعد لتكوين المبني للمجهول",
                "مُبلَّغ"
              ],
              [
                "إنتوا",
                "صيغة werden مع إنتوا",
                "مُبلَّغ"
              ],
              [
                "هم / حضرتك أو حضراتكم",
                "الفعل المساعد لتكوين المبني للمجهول",
                "مُبلَّغ"
              ]
            ]
          },
          "examples": [
            [
              "Der Tagesablauf wird morgens geplant.",
              "برنامج اليوم بيتخطط الصبح."
            ],
            [
              "Die Feuerwehrautos werden regelmäßig kontrolliert.",
              "عربيات المطافي بتتفحص بانتظام."
            ],
            [
              "Ich weiß, dass die Kinder gut betreut werden.",
              "أنا عارف إن الأطفال بيتراعوا كويس."
            ]
          ]
        },
        {
          "h": "3. Vom Aktiv zum Passiv: von + Dativ",
          "hAr": "٣. من المعلوم للمجهول: von + Dativ",
          "text": "Das <b>Akkusativobjekt</b> im Aktiv wird im Passiv zum <b>Subjekt im Nominativ</b>. Das Subjekt des Aktivsatzes kann man mit <b>von + Dativ</b> nennen – oder ganz weglassen. Das Dativobjekt bleibt im Dativ.",
          "ar": "المفعول به (Akkusativ) في الـ Aktiv بيبقى فاعل في الـ Passiv (Nominativ)، وبالتالي الأداة بتتغير: den Brand ← der Brand. الفاعل الأصلي ممكن تذكره بـ von + Dativ أو تشيله خالص. والمفعول في الـ Dativ بيفضل Dativ زي ما هو.",
          "table": {
            "head": [
              "Aktiv",
              "Passiv"
            ],
            "rows": [
              [
                "Die Tafel verteilt die Lebensmittel.",
                "Die Lebensmittel werden (von der Tafel) verteilt."
              ],
              [
                "Die Feuerwehr löscht den Brand.",
                "Der Brand wird (von der Feuerwehr) gelöscht."
              ],
              [
                "Firmen spenden der Tafel Lebensmittel.",
                "Der Tafel werden (von Firmen) Lebensmittel gespendet."
              ]
            ],
            "headAr": [
              "المبني للمعلوم",
              "المبني للمجهول"
            ],
            "rowsAr": [
              [
                "بنك الطعام بيوزّع الأطعمة.",
                "الأطعمة بتتوزّع بواسطة بنك الطعام."
              ],
              [
                "الإطفاء بيطفي الحريق.",
                "الحريق بيتم إطفاؤه بواسطة الإطفاء."
              ],
              [
                "شركات بتتبرّع بأطعمة لبنك الطعام.",
                "بيتم التبرع بأطعمة لبنك الطعام بواسطة شركات."
              ]
            ]
          },
          "examples": [
            [
              "Die Organisation wird von 60.000 Helfern unterstützt.",
              "المنظمة بيدعمها ٦٠ ألف متطوع."
            ],
            [
              "Die Kontakte werden vom Verein vermittelt.",
              "الاتصالات بتتعمل عن طريق الجمعية."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Die Lebensmittel wird verteilt.",
          "right": "Die Lebensmittel werden verteilt.",
          "ar": "die Lebensmittel جمع، يبقى werden مش wird. werden بيتصرّف حسب الفاعل."
        },
        {
          "wrong": "Der Brand wird gelöscht von die Feuerwehr.",
          "right": "Der Brand wird von der Feuerwehr gelöscht.",
          "ar": "von دايمًا معاها Dativ (von der)، والـ Partizip II يفضل في آخر الجملة."
        },
        {
          "wrong": "Den Müll wird jeden Dienstag abgeholt.",
          "right": "Der Müll wird jeden Dienstag abgeholt.",
          "ar": "في الـ Passiv المفعول بيبقى فاعل (Nominativ)، يبقى der Müll مش den Müll."
        },
        {
          "wrong": "Das Formular wird ausfüllen.",
          "right": "Das Formular wird ausgefüllt.",
          "ar": "الـ Passiv محتاج Partizip II (ausgefüllt)، مش المصدر. werden + مصدر ده المستقبل (Futur)."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Die Feuerwehrleute ___ von der Zentrale alarmiert.",
          "o": [
            "wird",
            "werden",
            "wurde"
          ],
          "a": 1,
          "why": "die Feuerwehrleute جمع، يبقى werden.",
          "qAr": "رجال الإطفاء ___ إبلاغهم من المركز.",
          "oAr": [
            "فعل werden مع المفرد",
            "الفعل werden",
            "فعل werden في الماضي مع المفرد"
          ]
        },
        {
          "type": "choice",
          "q": "Das Programm ___ von der Stadt finanziert.",
          "o": [
            "wird",
            "werden",
            "wirst"
          ],
          "a": 0,
          "why": "das Programm مفرد (er/es)، يبقى wird.",
          "qAr": "البرنامج ___ تمويله من المدينة.",
          "oAr": [
            "فعل werden مع المفرد",
            "الفعل werden",
            "فعل werden مع إنت"
          ]
        },
        {
          "type": "choice",
          "q": "Der Brand wird ___ Feuerwehr gelöscht.",
          "o": [
            "von die",
            "durch der",
            "von der"
          ],
          "a": 2,
          "why": "von بتاخد Dativ: die Feuerwehr ← von der Feuerwehr.",
          "qAr": "الحريق بيتم إطفاؤه ___ الإطفاء.",
          "oAr": [
            "بواسطة؛ von مع الأداة die",
            "عن طريق؛ durch مع الأداة der",
            "بواسطة؛ von مع الأداة der"
          ]
        },
        {
          "type": "gap",
          "q": "In Deutschland ___ täglich viele Lebensmittel weggeworfen.",
          "a": [
            "werden"
          ],
          "why": "viele Lebensmittel جمع، والـ Passiv: werden + Partizip II.",
          "qAr": "في ألمانيا ___ رمي أطعمة كتير يوميًا.",
          "solutionAr": "الفعل werden"
        },
        {
          "type": "gap",
          "q": "Jedes Mitglied wird in Erster Hilfe ___. (ausbilden)",
          "a": [
            "ausgebildet"
          ],
          "why": "ausbilden فعل منفصل: الـ Partizip II بيبقى aus-ge-bildet.",
          "qAr": "كل عضو بيتم ___ على الإسعافات الأولية. استخدم ausbilden.",
          "solutionAr": "تم تدريبه"
        },
        {
          "type": "truefalse",
          "q": "„Die Tafel wird von viele Firmen unterstützt.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "بعد von لازم Dativ: von vielen Firmen.",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى: بنك الطعام بيتم دعمه من شركات كتير."
        },
        {
          "type": "truefalse",
          "q": "„Im Lager wird alles kontrolliert und sortiert.“ – Dieser Satz ist richtig.",
          "a": true,
          "why": "alles مفرد، فـ wird صح، والاتنين Partizip II في الآخر.",
          "qAr": "«في المخزن بيتم فحص وفرز كل شيء»: الجملة الألمانية صحيحة."
        },
        {
          "type": "order",
          "prefix": "Am Vormittag",
          "words": [
            "werden",
            "die",
            "Lebensmittel",
            "abgeholt"
          ],
          "a": [
            "werden die Lebensmittel abgeholt"
          ],
          "why": "بعد ظرف الزمان في الأول بييجي werden في المكان التاني، وبعده الفاعل، والـ Partizip II في الآخر.",
          "qAr": "رتّب الكلمات لإكمال: قبل الظهر، ...",
          "solutionAr": "قبل الظهر بيتم جمع الأطعمة."
        },
        {
          "type": "order",
          "prefix": "Ich finde gut, dass",
          "words": [
            "bedürftigen",
            "Menschen",
            "geholfen",
            "wird"
          ],
          "a": [
            "bedürftigen Menschen geholfen wird"
          ],
          "why": "في الجملة الفرعية بـ dass الـ werden بيروح آخر خالص بعد الـ Partizip II.",
          "qAr": "رتّب الكلمات لإكمال: شايف كويس إن ...",
          "solutionAr": "شايف كويس إن المحتاجين بيتم مساعدتهم."
        },
        {
          "type": "transform",
          "q": "Ins Passiv: Die Helfer verteilen die Lebensmittel.",
          "a": [
            "Die Lebensmittel werden von den Helfern verteilt.",
            "Die Lebensmittel werden verteilt."
          ],
          "why": "die Lebensmittel بقت فاعل، و die Helfer ← von den Helfern (Dativ جمع بيزود n).",
          "qAr": "حوّل للمبني للمجهول: المساعدون بيوزّعوا الأطعمة.",
          "solutionAr": "الأطعمة بيتم توزيعها بواسطة المساعدين."
        },
        {
          "type": "transform",
          "q": "Ins Passiv: Die Müllabfuhr leert die Mülltonnen.",
          "a": [
            "Die Mülltonnen werden von der Müllabfuhr geleert.",
            "Die Mülltonnen werden geleert."
          ],
          "why": "die Mülltonnen جمع ← werden، و die Müllabfuhr ← von der Müllabfuhr.",
          "qAr": "حوّل للمبني للمجهول: خدمة جمع القمامة بتفرّغ الصناديق.",
          "solutionAr": "صناديق القمامة بيتم تفريغها بواسطة خدمة جمع القمامة."
        },
        {
          "type": "error",
          "q": "Die Gäste wird von der Bürgermeisterin begrüßt.",
          "a": [
            "Die Gäste werden von der Bürgermeisterin begrüßt."
          ],
          "why": "die Gäste جمع، يبقى werden مش wird.",
          "qAr": "صحّح الجملة الألمانية. المعنى: رئيسة البلدية بترحّب بالضيوف.",
          "solutionAr": "الضيوف بيتم الترحيب بيهم من رئيسة البلدية."
        }
      ]
    },
    {
      "id": "b1-k10-passiv-vergangenheit",
      "t": "Passiv Präteritum und Perfekt",
      "tAr": "المبني للمجهول في الماضي",
      "summary": "<b>Präteritum:</b> wurde + Partizip II. <b>Perfekt:</b> sein + Partizip II + <b>worden</b>. In Texten über die Vergangenheit benutzt man meistens das <b>Präteritum</b>.",
      "summaryAr": "الماضي البسيط في الـ Passiv: wurde + Partizip II. والـ Perfekt: sein + Partizip II + worden. لما بنحكي عن الماضي بنستخدم wurde في الغالب.",
      "sections": [
        {
          "h": "1. Passiv Präteritum",
          "hAr": "١. الـ Passiv في الماضي البسيط",
          "text": "Man konjugiert <b>werden</b> im Präteritum (<b>wurde</b>) und setzt das <b>Partizip II</b> ans Satzende. Diese Form ist typisch für Berichte, Geschichte und Nachrichten.",
          "ar": "بنصرّف werden في الماضي البسيط (wurde) والـ Partizip II في الآخر. الشكل ده منتشر في التقارير والتاريخ والأخبار.",
          "table": {
            "head": [
              "Person",
              "werden (Präteritum)",
              "Partizip II"
            ],
            "rows": [
              [
                "ich",
                "wurde",
                "eingeladen"
              ],
              [
                "du",
                "wurdest",
                "eingeladen"
              ],
              [
                "er/sie/es",
                "wurde",
                "eingeladen"
              ],
              [
                "wir",
                "wurden",
                "eingeladen"
              ],
              [
                "ihr",
                "wurdet",
                "eingeladen"
              ],
              [
                "sie/Sie",
                "wurden",
                "eingeladen"
              ]
            ],
            "headAr": [
              "الشخص أو الضمير",
              "تصريف werden في الماضي البسيط",
              "التصريف الثالث"
            ],
            "rowsAr": [
              [
                "أنا",
                "صيغة الماضي مع أنا أو هو أو هي",
                "مدعوّ"
              ],
              [
                "إنت",
                "صيغة الماضي مع إنت",
                "مدعوّ"
              ],
              [
                "هو / هي / هو لغير العاقل",
                "صيغة الماضي مع أنا أو هو أو هي",
                "مدعوّ"
              ],
              [
                "إحنا",
                "صيغة الماضي مع إحنا أو هم أو حضرتك",
                "مدعوّ"
              ],
              [
                "إنتوا",
                "صيغة الماضي مع إنتوا",
                "مدعوّ"
              ],
              [
                "هم / حضرتك أو حضراتكم",
                "صيغة الماضي مع إحنا أو هم أو حضرتك",
                "مدعوّ"
              ]
            ]
          },
          "examples": [
            [
              "Die erste deutsche Tafel wurde 1993 in Berlin gegründet.",
              "أول تافل في ألمانيا اتأسست سنة ١٩٩٣ في برلين."
            ],
            [
              "Das Konzept wurde aus den USA übernommen.",
              "الفكرة اتاخدت من أمريكا."
            ],
            [
              "1957 wurden zwei weitere Verträge unterzeichnet.",
              "سنة ١٩٥٧ اتوقّعت معاهدتين كمان."
            ]
          ]
        },
        {
          "h": "2. Passiv Perfekt: sein + Partizip II + worden",
          "hAr": "٢. الـ Passiv في الـ Perfekt",
          "text": "Im Perfekt steht <b>sein</b> auf Position 2. Am Ende stehen das <b>Partizip II</b> des Verbs und <b>worden</b>. Achtung: Im Passiv heißt es <b>worden</b>, nicht „geworden“.",
          "ar": "في الـ Perfekt بنستخدم sein في المكان التاني، وفي الآخر الـ Partizip II بتاع الفعل وبعده worden. خلي بالك: في الـ Passiv بنقول worden مش geworden. (geworden معناها «أصبح»: Er ist Arzt geworden.)",
          "table": {
            "head": [
              "Zeit",
              "Form",
              "Beispiel"
            ],
            "rows": [
              [
                "Präsens",
                "werden + Partizip II",
                "Die Feuerwehr wird alarmiert."
              ],
              [
                "Präteritum",
                "wurde + Partizip II",
                "Die Feuerwehr wurde alarmiert."
              ],
              [
                "Perfekt",
                "sein + Partizip II + worden",
                "Die Feuerwehr ist alarmiert worden."
              ]
            ],
            "headAr": [
              "الزمن",
              "التركيب",
              "مثال"
            ],
            "rowsAr": [
              [
                "المضارع",
                "الفعل المساعد werden مع التصريف الثالث",
                "بيتم إبلاغ الإطفاء."
              ],
              [
                "الماضي البسيط",
                "الفعل المساعد wurde مع التصريف الثالث",
                "تم إبلاغ الإطفاء."
              ],
              [
                "الماضي المستخدم كثيرًا في المحادثة",
                "الفعل المساعد sein مع التصريف الثالث وworden",
                "تم إبلاغ الإطفاء بالفعل."
              ]
            ]
          },
          "examples": [
            [
              "Mehr als 940 Tafeln sind gegründet worden.",
              "أكتر من ٩٤٠ تافل اتأسست."
            ],
            [
              "Der Antrag ist schon genehmigt worden.",
              "الطلب اتوافق عليه خلاص."
            ],
            [
              "Seitdem sind viele Projekte umgesetzt worden.",
              "من ساعتها مشاريع كتير اتنفذت."
            ]
          ]
        },
        {
          "h": "3. Im Nebensatz",
          "hAr": "٣. في الجملة الفرعية",
          "text": "Im Nebensatz steht das konjugierte Verb am Ende: <b>wurde</b> bzw. <b>ist</b> steht ganz hinten. Im Perfekt: Partizip II + worden + <b>ist/sind</b>.",
          "ar": "في الجملة الفرعية الفعل المتصرّف بيروح الآخر: wurde أو ist/sind بييجي آخر كلمة. في الـ Perfekt الترتيب: Partizip II + worden + ist.",
          "examples": [
            [
              "Ich habe gelesen, dass die Tafel 1993 gegründet wurde.",
              "قريت إن التافل اتأسست سنة ١٩٩٣."
            ],
            [
              "Weißt du, ob der Brand schon gelöscht worden ist?",
              "تعرف إذا كانت الحريقة اتطفت ولا لأ؟"
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Die Tafel ist 1993 gegründet geworden.",
          "right": "Die Tafel ist 1993 gegründet worden.",
          "ar": "في الـ Passiv Perfekt بنقول worden مش geworden."
        },
        {
          "wrong": "Die Tafel hat 1993 gegründet worden.",
          "right": "Die Tafel ist 1993 gegründet worden.",
          "ar": "الـ Passiv Perfekt دايمًا مع sein، عمره ما ييجي مع haben."
        },
        {
          "wrong": "Die Bäume wurde im Park gepflanzt.",
          "right": "Die Bäume wurden im Park gepflanzt.",
          "ar": "die Bäume جمع، يبقى wurden مش wurde."
        },
        {
          "wrong": "Die erste Tafel wird 1993 gegründet.",
          "right": "Die erste Tafel wurde 1993 gegründet.",
          "ar": "سنة ١٩٩٣ ماضي، لازم wurde مش wird."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Unser Verein ___ 2009 gegründet.",
          "o": [
            "wird",
            "wurde",
            "wurden"
          ],
          "a": 1,
          "why": "2009 ماضي، و Verein مفرد ← wurde.",
          "qAr": "جمعيتنا ___ تأسيسها سنة ٢٠٠٩.",
          "oAr": [
            "فعل werden مع المفرد",
            "فعل werden في الماضي مع المفرد",
            "فعل werden في الماضي مع الجمع"
          ]
        },
        {
          "type": "choice",
          "q": "Seitdem sind viele Projekte umgesetzt ___.",
          "o": [
            "worden",
            "geworden",
            "wurden"
          ],
          "a": 0,
          "why": "في الـ Perfekt Passiv: sein + Partizip II + worden.",
          "qAr": "من وقتها مشاريع كتير اتنفذت ___ .",
          "oAr": [
            "صيغة worden المستخدمة في المبني للمجهول",
            "أصبح؛ التصريف الثالث لـ werden",
            "فعل werden في الماضي مع الجمع"
          ]
        },
        {
          "type": "choice",
          "q": "2017 ___ fünfzig Bäume im Park gepflanzt.",
          "o": [
            "wurde",
            "wird",
            "wurden"
          ],
          "a": 2,
          "why": "fünfzig Bäume جمع وماضي ← wurden.",
          "qAr": "سنة ٢٠١٧ ___ زرع خمسين شجرة في الحديقة.",
          "oAr": [
            "فعل werden في الماضي مع المفرد",
            "فعل werden مع المفرد",
            "فعل werden في الماضي مع الجمع"
          ]
        },
        {
          "type": "gap",
          "q": "Der Brand ___ nach einer Stunde gelöscht. (Präteritum)",
          "a": [
            "wurde"
          ],
          "why": "der Brand مفرد، والماضي البسيط بتاع werden هو wurde.",
          "qAr": "الحريق ___ إطفاؤه بعد ساعة. استخدم الماضي Präteritum.",
          "solutionAr": "فعل werden في الماضي مع المفرد"
        },
        {
          "type": "gap",
          "q": "Die Bewohner sind von der Feuerwehr gerettet ___.",
          "a": [
            "worden"
          ],
          "why": "دي Passiv Perfekt: sind + Partizip II + worden، ومن غير ge-.",
          "qAr": "السكان تم إنقاذهم بواسطة الإطفاء ___ .",
          "solutionAr": "صيغة worden المستخدمة في المبني للمجهول"
        },
        {
          "type": "gap",
          "q": "Auf dem Weihnachtsmarkt wurde Geld für eine Kletterwand ___. (sammeln)",
          "a": [
            "gesammelt"
          ],
          "why": "sammeln فعل ضعيف: ge + sammel + t ← gesammelt.",
          "qAr": "في سوق عيد الميلاد تم ___ المال لحائط تسلّق. استخدم sammeln: جمع.",
          "solutionAr": "تم جمعه"
        },
        {
          "type": "truefalse",
          "q": "„Der Computer wurde ausgeschaltet.“ – Dieser Satz ist richtig.",
          "a": true,
          "why": "Computer مفرد، wurde + Partizip II في الآخر. صح.",
          "qAr": "«تم إطفاء الكمبيوتر»: الجملة الألمانية صحيحة."
        },
        {
          "type": "truefalse",
          "q": "„Die Fenster sind geschlossen geworden.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "في الـ Passiv بنقول worden: Die Fenster sind geschlossen worden.",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى المقصود: النوافذ تم إغلاقها."
        },
        {
          "type": "order",
          "prefix": "1992",
          "words": [
            "wurde",
            "der",
            "Vertrag",
            "von",
            "Maastricht",
            "unterzeichnet"
          ],
          "a": [
            "wurde der Vertrag von Maastricht unterzeichnet"
          ],
          "why": "بعد السنة في الأول، wurde في المكان التاني، والـ Partizip II في الآخر.",
          "qAr": "رتّب الكلمات لإكمال: سنة ١٩٩٢، ...",
          "solutionAr": "سنة ١٩٩٢ تم توقيع معاهدة ماستريخت."
        },
        {
          "type": "transform",
          "q": "Ins Passiv Präteritum: Die Nachbarin alarmierte die Feuerwehr.",
          "a": [
            "Die Feuerwehr wurde von der Nachbarin alarmiert.",
            "Die Feuerwehr wurde alarmiert."
          ],
          "why": "die Feuerwehr بقت الفاعل، و die Nachbarin ← von der Nachbarin.",
          "qAr": "حوّل للمبني للمجهول في Präteritum: الجارة بلّغت الإطفاء.",
          "solutionAr": "تم إبلاغ الإطفاء بواسطة الجارة."
        },
        {
          "type": "transform",
          "q": "Ins Passiv Perfekt: Man hat den Antrag genehmigt.",
          "a": [
            "Der Antrag ist genehmigt worden."
          ],
          "why": "man بيختفي في الـ Passiv، و den Antrag ← der Antrag، والتركيبة ist + genehmigt + worden.",
          "qAr": "حوّل للمبني للمجهول في Perfekt: تمّت الموافقة على الطلب.",
          "solutionAr": "تمت الموافقة على الطلب."
        },
        {
          "type": "error",
          "q": "Die Gläser wurde abgespült.",
          "a": [
            "Die Gläser wurden abgespült."
          ],
          "why": "die Gläser جمع ← wurden.",
          "qAr": "صحّح الجملة الألمانية. المعنى: تم غسل الأكواب.",
          "solutionAr": "تم غسل الأكواب."
        }
      ]
    },
    {
      "id": "b1-k10-passiv-modalverb",
      "t": "Passiv mit Modalverb",
      "tAr": "المبني للمجهول مع الأفعال الناقصة",
      "summary": "Passiv mit Modalverb: <b>Modalverb</b> (konjugiert) + … + <b>Partizip II + werden</b> (Infinitiv). So sagt man, was gemacht werden <b>muss</b>, <b>kann</b>, <b>soll</b> oder <b>darf</b>.",
      "summaryAr": "الـ Passiv مع الأفعال الناقصة: الفعل الناقص متصرّف في المكان التاني، وفي آخر الجملة Partizip II + werden في المصدر. بنستخدمه علشان نقول إيه اللي لازم أو ممكن أو المفروض يتعمل.",
      "sections": [
        {
          "h": "1. Die Satzklammer",
          "hAr": "١. ترتيب الجملة",
          "text": "Das <b>Modalverb</b> steht auf <b>Position 2</b> und wird konjugiert. Am Satzende steht der <b>Passiv-Infinitiv</b>: <b>Partizip II + werden</b>.",
          "ar": "الفعل الناقص (müssen, können, sollen, dürfen) بيتصرّف وييجي تاني كلمة. وفي آخر الجملة بييجي «مصدر الـ Passiv»: Partizip II وبعده werden.",
          "table": {
            "head": [
              "Position 1",
              "Modalverb",
              "Mittelfeld",
              "Partizip II + werden"
            ],
            "rows": [
              [
                "Das Geld",
                "kann",
                "in der Bank",
                "abgeholt werden."
              ],
              [
                "Viele Dinge",
                "müssen",
                "in einer Stadt",
                "erledigt werden."
              ],
              [
                "Der Müll",
                "soll",
                "besser",
                "getrennt werden."
              ],
              [
                "Hier",
                "darf",
                "nicht",
                "geparkt werden."
              ]
            ],
            "headAr": [
              "الموضع الأول",
              "فعل مساعد للكيفية",
              "وسط الجملة",
              "التصريف الثالث وبعده werden"
            ],
            "rowsAr": [
              [
                "المال",
                "يمكن",
                "في البنك",
                "يمكن استلامه."
              ],
              [
                "حاجات كتير",
                "لازم",
                "في مدينة",
                "لازم إنجازها."
              ],
              [
                "القمامة",
                "المفروض",
                "بشكل أفضل",
                "يتم فصلها."
              ],
              [
                "هنا",
                "يُسمح",
                "لا أو ليس",
                "ركن السيارات."
              ]
            ]
          },
          "examples": [
            [
              "Zuerst muss Geld eingenommen werden.",
              "الأول لازم فلوس تتكسب."
            ],
            [
              "Das Projekt kann alle zwei Jahre durchgeführt werden.",
              "المشروع ممكن يتنفذ كل سنتين."
            ]
          ]
        },
        {
          "h": "2. Bedeutung der Modalverben",
          "hAr": "٢. معنى الأفعال الناقصة",
          "text": "<b>müssen</b> = es ist notwendig, <b>können</b> = es ist möglich, <b>sollen</b> = jemand will es / es ist geplant, <b>dürfen</b> = es ist erlaubt (<b>nicht dürfen</b> = verboten).",
          "ar": "müssen = لازم، können = ممكن، sollen = المفروض / مطلوب، dürfen = مسموح، و nicht dürfen = ممنوع.",
          "table": {
            "head": [
              "Modalverb",
              "Bedeutung",
              "Beispiel"
            ],
            "rows": [
              [
                "müssen",
                "notwendig",
                "Die Steuern müssen bezahlt werden."
              ],
              [
                "können",
                "möglich",
                "Der Antrag kann online gestellt werden."
              ],
              [
                "sollen",
                "geplant / gewünscht",
                "Neue Schulen sollen gebaut werden."
              ],
              [
                "nicht dürfen",
                "verboten",
                "Der Müll darf nicht in den Park geworfen werden."
              ]
            ],
            "headAr": [
              "فعل مساعد للكيفية",
              "المعنى",
              "مثال"
            ],
            "rowsAr": [
              [
                "لازم",
                "ضروري",
                "لازم دفع الضرائب."
              ],
              [
                "يمكن أو يستطيع",
                "ممكن",
                "ممكن تقديم الطلب أونلاين."
              ],
              [
                "يُفترض أو يُراد",
                "مخطط له أو مرغوب فيه",
                "المفروض تُبنى مدارس جديدة."
              ],
              [
                "لا يُسمح",
                "ممنوع",
                "ممنوع رمي القمامة في الحديقة."
              ]
            ]
          },
          "examples": [
            [
              "Die Fenster müssen geputzt werden.",
              "الشبابيك لازم تتمسح."
            ],
            [
              "Die Lieferung soll in den Keller gebracht werden.",
              "الشحنة المفروض تتنزل في البدروم."
            ]
          ]
        },
        {
          "h": "3. Im Nebensatz und in der Vergangenheit",
          "hAr": "٣. في الجملة الفرعية وفي الماضي",
          "text": "Im <b>Nebensatz</b> steht das Modalverb ganz am Ende: …, dass viel erledigt werden <b>muss</b>. In der <b>Vergangenheit</b> benutzt man meistens das Präteritum des Modalverbs: Das Formular <b>musste</b> ausgefüllt werden.",
          "ar": "في الجملة الفرعية الفعل الناقص بيروح آخر كلمة خالص. وفي الماضي بنستخدم الماضي البسيط بتاع الفعل الناقص: musste / konnte / sollte + Partizip II + werden.",
          "examples": [
            [
              "Ich wusste nicht, dass so viel organisiert werden muss.",
              "مكنتش أعرف إن حاجات كتير كده لازم تتنظم."
            ],
            [
              "Letzte Woche musste ein Antrag ausgefüllt werden.",
              "الأسبوع اللي فات كان لازم طلب يتملى."
            ],
            [
              "Der Termin konnte leider nicht verschoben werden.",
              "للأسف الميعاد مكانش ينفع يتأجل."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Das Geld kann in der Bank werden abgeholt.",
          "right": "Das Geld kann in der Bank abgeholt werden.",
          "ar": "الترتيب في الآخر: Partizip II الأول وبعده werden."
        },
        {
          "wrong": "Die Fenster müssen putzen werden.",
          "right": "Die Fenster müssen geputzt werden.",
          "ar": "لازم Partizip II (geputzt) مش المصدر (putzen)."
        },
        {
          "wrong": "Die Steuern muss bezahlt werden.",
          "right": "Die Steuern müssen bezahlt werden.",
          "ar": "الفعل الناقص بيتصرّف حسب الفاعل: die Steuern جمع ← müssen."
        },
        {
          "wrong": "Ich weiß, dass viel muss erledigt werden.",
          "right": "Ich weiß, dass viel erledigt werden muss.",
          "ar": "في الجملة الفرعية الفعل الناقص بيروح آخر خالص."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Der Bürgermeister muss von den Bürgern ___.",
          "o": [
            "gewählt werden",
            "werden gewählt",
            "wählen werden"
          ],
          "a": 0,
          "why": "مع الفعل الناقص: Partizip II + werden في الآخر.",
          "qAr": "رئيس البلدية لازم ___ بواسطة المواطنين.",
          "oAr": [
            "يتم انتخابه؛ بصيغ مختلفة للمبني للمجهول",
            "يتم انتخابه؛ بصيغ مختلفة للمبني للمجهول",
            "يتم انتخابه؛ بصيغ مختلفة للمبني للمجهول"
          ]
        },
        {
          "type": "choice",
          "q": "Die Anträge ___ heute noch genehmigt werden.",
          "o": [
            "muss",
            "müssen",
            "musst"
          ],
          "a": 1,
          "why": "die Anträge جمع ← müssen.",
          "qAr": "الطلبات ___ الموافقة عليها النهارده.",
          "oAr": [
            "يجب أو لازم",
            "يجب أو لازم",
            "لازم عليك؛ صيغة müssen"
          ]
        },
        {
          "type": "choice",
          "q": "Hier ___ nicht geraucht werden. Das ist verboten.",
          "o": [
            "muss",
            "soll",
            "darf"
          ],
          "a": 2,
          "why": "ممنوع = nicht dürfen.",
          "qAr": "هنا ___ التدخين. ده ممنوع.",
          "oAr": [
            "يجب أو لازم",
            "يُفترض أو يُراد",
            "يُسمح أو يجوز"
          ]
        },
        {
          "type": "gap",
          "q": "Jede Woche muss der Müll entsorgt ___.",
          "a": [
            "werden"
          ],
          "why": "بعد الـ Partizip II في الـ Passiv مع müssen بييجي werden في المصدر.",
          "qAr": "كل أسبوع القمامة لازم يتم التخلص منها ___ .",
          "solutionAr": "الفعل werden"
        },
        {
          "type": "gap",
          "q": "Der Computer muss zuerst ___ werden. (hochfahren)",
          "a": [
            "hochgefahren"
          ],
          "why": "hochfahren فعل منفصل: hoch-ge-fahren.",
          "qAr": "الكمبيوتر لازم يتم ___ أولًا. استخدم hochfahren: تشغيل.",
          "solutionAr": "تم تشغيله"
        },
        {
          "type": "truefalse",
          "q": "„In der Stadtvertretung müssen viele Entscheidungen getroffen werden.“ – Dieser Satz ist richtig.",
          "a": true,
          "why": "Entscheidungen جمع ← müssen، والآخر getroffen werden. صح.",
          "qAr": "«لازم اتخاذ قرارات كتير في مجلس المدينة»: الجملة الألمانية صحيحة."
        },
        {
          "type": "truefalse",
          "q": "„Die Blumen sollen gießen werden.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "محتاجين Partizip II: Die Blumen sollen gegossen werden.",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى: المفروض الورد يتم سقيه."
        },
        {
          "type": "order",
          "prefix": "Für die Sicherheit",
          "words": [
            "müssen",
            "die",
            "Straßen",
            "kontrolliert",
            "werden"
          ],
          "a": [
            "müssen die Straßen kontrolliert werden"
          ],
          "why": "الفعل الناقص في المكان التاني بعد المقدمة، وبعده الفاعل، وفي الآخر kontrolliert werden.",
          "qAr": "رتّب الكلمات لإكمال: من أجل الأمن، ...",
          "solutionAr": "علشان الأمن، لازم تتم مراقبة الشوارع."
        },
        {
          "type": "order",
          "prefix": "Damit die Stadt Einnahmen hat,",
          "words": [
            "müssen",
            "Steuern",
            "gezahlt",
            "werden"
          ],
          "a": [
            "müssen Steuern gezahlt werden"
          ],
          "why": "بعد الجملة الفرعية الفعل الناقص بييجي على طول، وبعده الفاعل، و gezahlt werden في الآخر.",
          "qAr": "رتّب الكلمات لإكمال: علشان يكون للمدينة إيرادات، ...",
          "solutionAr": "علشان يكون للمدينة إيرادات، لازم تُدفع الضرائب."
        },
        {
          "type": "transform",
          "q": "Ins Passiv: Man muss das Geschirr abräumen.",
          "a": [
            "Das Geschirr muss abgeräumt werden."
          ],
          "why": "man بتختفي، و das Geschirr بقى الفاعل، والآخر abgeräumt werden.",
          "qAr": "حوّل للمبني للمجهول: لازم نلمّ الأطباق.",
          "solutionAr": "لازم الأطباق تتلمّ."
        },
        {
          "type": "transform",
          "q": "Ins Passiv: Man kann den Antrag auch online stellen.",
          "a": [
            "Der Antrag kann auch online gestellt werden."
          ],
          "why": "den Antrag ← der Antrag (Nominativ)، و kann + gestellt werden.",
          "qAr": "حوّل للمبني للمجهول: ممكن نقدّم الطلب أونلاين كمان.",
          "solutionAr": "ممكن تقديم الطلب أونلاين كمان."
        },
        {
          "type": "error",
          "q": "Die Straßenlampe muss werden repariert.",
          "a": [
            "Die Straßenlampe muss repariert werden."
          ],
          "why": "Partizip II الأول وبعده werden: repariert werden.",
          "qAr": "صحّح ترتيب الجملة الألمانية. المعنى: لازم يتصلّح مصباح الشارع.",
          "solutionAr": "لازم يتصلّح مصباح الشارع."
        }
      ]
    },
    {
      "id": "b1-k10-adjektive-bar-los",
      "t": "Adjektive mit -bar und -los",
      "tAr": "الصفات بـ -bar و -los",
      "summary": "<b>-bar</b> + Verbstamm = Man <b>kann</b> es machen (machbar, essbar). <b>Nomen + -los</b> = <b>ohne</b> etwas (kostenlos, arbeitslos). Die Adjektive werden wie alle Adjektive dekliniert.",
      "summaryAr": "-bar بتتحط بعد جذر الفعل ومعناها «ينفع يتعمل» (machbar = ينفع يتعمل). و -los بتتحط بعد الاسم ومعناها «من غير» (kostenlos = من غير فلوس). والصفات دي بتتصرّف زي أي صفة قبل الاسم.",
      "sections": [
        {
          "h": "1. Adjektive mit -bar",
          "hAr": "١. الصفات بـ -bar",
          "text": "Adjektive mit <b>-bar</b> kommen von einem <b>Verb</b>. Man nimmt den Verbstamm und hängt <b>-bar</b> an. Sie drücken aus, dass man etwas machen <b>kann</b> – oft als Ersatz für einen Passivsatz mit <b>können</b>.",
          "ar": "الصفات بـ -bar بتيجي من فعل: بناخد جذر الفعل ونزوّد -bar. معناها إن الحاجة «ممكن تتعمل»، وكتير بتبقى بديل لجملة Passiv مع können.",
          "table": {
            "head": [
              "Verb",
              "Adjektiv",
              "Bedeutung"
            ],
            "rows": [
              [
                "machen",
                "machbar",
                "Man kann es machen."
              ],
              [
                "erreichen",
                "erreichbar",
                "Man kann es / ihn erreichen."
              ],
              [
                "halten",
                "haltbar",
                "Es bleibt lange gut."
              ],
              [
                "essen",
                "essbar",
                "Man kann es essen."
              ],
              [
                "recyceln",
                "recycelbar",
                "Man kann es recyceln."
              ]
            ],
            "headAr": [
              "الفعل",
              "الصفة",
              "المعنى"
            ],
            "rowsAr": [
              [
                "يعمل",
                "قابل للتنفيذ",
                "ممكن نعمله."
              ],
              [
                "يصل",
                "يمكن الوصول إليه",
                "ممكن نوصل له."
              ],
              [
                "يستمر أو يبقى صالحًا",
                "يبقى صالحًا",
                "بيفضل صالحًا لفترة طويلة."
              ],
              [
                "يأكل",
                "صالح للأكل",
                "ممكن ناكله."
              ],
              [
                "يعيد التدوير",
                "قابل لإعادة التدوير",
                "ممكن نعيد تدويره."
              ]
            ]
          },
          "examples": [
            [
              "Diesen Pilz kann man essen. → Dieser Pilz ist essbar.",
              "المشروم ده ينفع يتاكل."
            ],
            [
              "Das Material kann recycelt werden. → Es ist recycelbar.",
              "الخامة دي ينفع يتعاد تدويرها."
            ]
          ]
        },
        {
          "h": "2. Adjektive mit -los",
          "hAr": "٢. الصفات بـ -los",
          "text": "Adjektive mit <b>-los</b> kommen von einem <b>Nomen</b>. Sie bedeuten: Es gibt das, was das Nomen sagt, <b>nicht</b>. Manchmal steht ein Fugen-s dazwischen: die Arbeit → arbeit<b>s</b>los.",
          "ar": "الصفات بـ -los بتيجي من اسم، ومعناها «من غير» الحاجة دي. أحيانًا بيتزود s في النص: die Arbeit ← arbeitslos.",
          "table": {
            "head": [
              "Nomen",
              "Adjektiv",
              "Bedeutung"
            ],
            "rows": [
              [
                "die Kosten",
                "kostenlos",
                "ohne Kosten"
              ],
              [
                "die Hilfe",
                "hilflos",
                "ohne Hilfe, kann sich nicht helfen"
              ],
              [
                "die Arbeit",
                "arbeitslos",
                "ohne Arbeit"
              ],
              [
                "das Problem",
                "problemlos",
                "ohne Probleme"
              ],
              [
                "das Glück",
                "glücklos",
                "ohne Glück"
              ]
            ],
            "headAr": [
              "الاسم",
              "الصفة",
              "المعنى"
            ],
            "rowsAr": [
              [
                "التكاليف",
                "مجاني",
                "من غير تكاليف"
              ],
              [
                "المساعدة",
                "عاجز عن مساعدة نفسه",
                "من غير مساعدة ولا يقدر يساعد نفسه"
              ],
              [
                "العمل",
                "عاطل",
                "من غير عمل"
              ],
              [
                "المشكلة",
                "بسهولة",
                "من غير مشاكل"
              ],
              [
                "الحظ",
                "سيئ الحظ",
                "من غير حظ"
              ]
            ]
          },
          "examples": [
            [
              "Die Nachhilfe ist kostenlos.",
              "دروس التقوية ببلاش."
            ],
            [
              "Er ist seit einem Jahr arbeitslos.",
              "هو من سنة مش لاقي شغل."
            ]
          ]
        },
        {
          "h": "3. Deklination und Verwendung",
          "hAr": "٣. التصريف والاستخدام",
          "text": "Vor einem Nomen bekommen die Adjektive die normale <b>Adjektivendung</b>: ein <b>machbares</b> Projekt, die <b>kostenlose</b> Hilfe, ein <b>hilfloses</b> Tier. Nach <b>sein</b> bleiben sie ohne Endung.",
          "ar": "لو الصفة جت قبل الاسم بتاخد نهاية الصفة العادية: ein machbares Projekt. ولو جت بعد sein بتفضل من غير نهاية: Das Projekt ist machbar.",
          "examples": [
            [
              "Das ist eine kostenlose Beratung.",
              "دي استشارة ببلاش."
            ],
            [
              "Ich suche ein gut erreichbares Büro.",
              "بدوّر على مكتب سهل الوصول ليه."
            ],
            [
              "Die Lösung ist machbar.",
              "الحل ده ممكن يتنفذ."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Das Tier war völlig hilfebar.",
          "right": "Das Tier war völlig hilflos.",
          "ar": "-bar بتيجي مع أفعال مش أسماء. لو معناها «من غير مساعدة» يبقى hilflos."
        },
        {
          "wrong": "Die Reparatur ist kostelos.",
          "right": "Die Reparatur ist kostenlos.",
          "ar": "الاسم die Kosten، فالصفة kostenlos بالـ n."
        },
        {
          "wrong": "Er ist arbeitlos.",
          "right": "Er ist arbeitslos.",
          "ar": "arbeitslos فيها s في النص."
        },
        {
          "wrong": "Das ist ein machbar Projekt.",
          "right": "Das ist ein machbares Projekt.",
          "ar": "قبل الاسم الصفة لازم تاخد نهاية: ein machbares Projekt."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Viele Lebensmittel sind sehr lange ___.",
          "o": [
            "haltlos",
            "haltbar",
            "hilflos"
          ],
          "a": 1,
          "why": "haltbar = بيفضل صالح مدة طويلة.",
          "qAr": "مواد غذائية كتير ___ لمدة طويلة جدًا.",
          "oAr": [
            "بلا سند أو دعم",
            "يبقى صالحًا",
            "عاجز عن مساعدة نفسه"
          ]
        },
        {
          "type": "choice",
          "q": "Er hat schon lange keine Arbeit mehr, er ist ___.",
          "o": [
            "arbeitslos",
            "arbeitbar",
            "machbar"
          ],
          "a": 0,
          "why": "من غير شغل = arbeitslos.",
          "qAr": "ما بقاش عنده شغل من مدة طويلة؛ هو ___ .",
          "oAr": [
            "عاطل عن العمل",
            "صفة مشتقة من كلمة العمل",
            "قابل للتنفيذ"
          ]
        },
        {
          "type": "choice",
          "q": "Das Material ist zu 100 Prozent ___.",
          "o": [
            "kostenlos",
            "problemlos",
            "recycelbar"
          ],
          "a": 2,
          "why": "recycelbar = ينفع يتعاد تدويره (من الفعل recyceln).",
          "qAr": "المادة دي ___ بنسبة مئة بالمئة.",
          "oAr": [
            "مجاني",
            "من غير مشاكل",
            "قابل لإعادة التدوير"
          ]
        },
        {
          "type": "gap",
          "q": "Mein Arbeitsplatz ist auch zu Fuß ___. (erreichen)",
          "a": [
            "erreichbar"
          ],
          "why": "من الفعل erreichen + bar ← erreichbar = ينفع توصله.",
          "qAr": "مكان شغلي ___ مشيًا كمان. اشتق صفة من erreichen: يصل.",
          "solutionAr": "يمكن الوصول إليه"
        },
        {
          "type": "gap",
          "q": "Es gab keine Hilfe, das arme Tier war völlig ___.",
          "a": [
            "hilflos"
          ],
          "why": "من غير مساعدة = hilflos.",
          "qAr": "ماكانش فيه مساعدة، والحيوان المسكين كان ___ تمامًا.",
          "solutionAr": "عاجز عن مساعدة نفسه"
        },
        {
          "type": "gap",
          "q": "Das geht ohne Probleme, wir können das ___ reparieren.",
          "a": [
            "problemlos"
          ],
          "why": "ohne Probleme يعني من غير مشاكل ← problemlos.",
          "qAr": "ده ينفع من غير مشاكل؛ نقدر نصلحه ___ .",
          "solutionAr": "من غير مشاكل"
        },
        {
          "type": "truefalse",
          "q": "„Adjektive mit -los kommen meistens von einem Verb.“ – Diese Aussage ist richtig.",
          "a": false,
          "why": "-los بتيجي من اسم (Nomen)، و -bar هي اللي بتيجي من فعل.",
          "qAr": "«الصفات بـ-los غالبًا مشتقة من فعل»: هل العبارة صحيحة؟"
        },
        {
          "type": "truefalse",
          "q": "„Das ist kein großes Problem, das ist gut machbar.“ – Dieser Satz ist richtig.",
          "a": true,
          "why": "machbar = ممكن يتعمل. الجملة صح.",
          "qAr": "«دي مش مشكلة كبيرة، ده قابل للتنفيذ بسهولة»: الجملة الألمانية صحيحة."
        },
        {
          "type": "order",
          "words": [
            "Die",
            "Beratung",
            "beim",
            "Verein",
            "ist",
            "kostenlos"
          ],
          "a": [
            "Die Beratung beim Verein ist kostenlos",
            "Beim Verein ist die Beratung kostenlos"
          ],
          "why": "الصفة بعد sein بتيجي في الآخر ومن غير نهاية.",
          "qAr": "رتّب الكلمات لتكوين جملة صحيحة.",
          "solutionAr": "الاستشارة في الجمعية مجانية."
        },
        {
          "type": "transform",
          "q": "Mit -bar: Diesen Pilz kann man essen.",
          "a": [
            "Dieser Pilz ist essbar."
          ],
          "why": "kann man essen ← essbar، و diesen Pilz بقى فاعل ← dieser Pilz.",
          "qAr": "استخدم -bar: المشروم ده ممكن ناكله.",
          "solutionAr": "المشروم ده صالح للأكل."
        },
        {
          "type": "transform",
          "q": "Mit -los: Die Reparatur kostet nichts.",
          "a": [
            "Die Reparatur ist kostenlos."
          ],
          "why": "kostet nichts = من غير تكلفة ← kostenlos.",
          "qAr": "استخدم -los: التصليح مش بيكلّف حاجة.",
          "solutionAr": "التصليح مجاني."
        },
        {
          "type": "error",
          "q": "Wir bieten eine kostenlos Beratung an.",
          "a": [
            "Wir bieten eine kostenlose Beratung an."
          ],
          "why": "قبل الاسم الصفة لازم تاخد نهاية: eine kostenlose Beratung.",
          "qAr": "صحّح نهاية الصفة في الجملة الألمانية. المعنى: بنقدّم استشارة مجانية.",
          "solutionAr": "بنقدّم استشارة مجانية."
        }
      ]
    }
  ],
  "11": [
    {
      "id": "b1-k11-artikelwoerter-pronomen",
      "t": "Artikelwörter als Pronomen",
      "tAr": "أدوات التنكير والملكية كضماير (einer / eins / welche)",
      "summary": "Wenn man ein Nomen nicht wiederholen will, kann man <b>ein-, kein-</b> und <b>mein-, dein-, …</b> allein als Pronomen benutzen. Die Endungen zeigen Genus und Kasus: <b>einer</b> (der), <b>eins</b> (das), <b>eine</b> (die). Im Plural heißt es positiv <b>welche</b>, negativ <b>keine</b>.",
      "summaryAr": "لما متحبش تكرر الاسم، بتستخدم الأداة لوحدها كضمير. النهاية بتوضح النوع والحالة: einer للمذكر، eins للمحايد، eine للمؤنث. وفي الجمع بنقول welche لو إيجابي و keine لو نفي.",
      "sections": [
        {
          "h": "1. Wozu braucht man das?",
          "hAr": "١. بنستخدمها ليه؟",
          "text": "In Antworten wiederholt man das Nomen meistens nicht. Man nimmt nur das Artikelwort, aber mit einer <b>eigenen Endung</b>, damit man Genus und Kasus erkennt.",
          "ar": "في الرد عادةً مش بنكرر الاسم. بناخد الأداة بس، لكن بنهاية خاصة عشان يبان الاسم ده مذكر ولا مؤنث ولا محايد، وفي أنهي حالة.",
          "examples": [
            [
              "Bist du ein Stadtmensch? – Nein, ich bin keiner.",
              "إنت من بتوع المدينة؟ – لأ، أنا مش منهم."
            ],
            [
              "Ich suche ein Café. – Da drüben ist eins.",
              "بدوّر على كافيه. – فيه واحد هناك أهو."
            ],
            [
              "Ist das deine Tasche? – Ja, das ist meine.",
              "دي شنطتك؟ – أيوه، دي بتاعتي."
            ]
          ]
        },
        {
          "h": "2. Die Formen",
          "hAr": "٢. التصريف",
          "text": "Die Formen sind fast wie beim Artikelwort. Anders sind nur: <b>Nominativ maskulin</b> (einer, keiner, meiner), <b>Nominativ und Akkusativ neutral</b> (eins, keins, meins) und der <b>Plural von ein</b>: welche.",
          "ar": "التصريف تقريبًا زي الأداة العادية. الفرق بس في: المذكر Nominativ (einer / keiner / meiner)، والمحايد Nominativ و Akkusativ (eins / keins / meins)، وجمع ein اللي بيبقى welche.",
          "table": {
            "head": [
              "Kasus",
              "maskulin (der)",
              "neutral (das)",
              "feminin (die)",
              "Plural (die)"
            ],
            "rows": [
              [
                "Nominativ",
                "einer / keiner / meiner",
                "eins / keins / meins",
                "eine / keine / meine",
                "welche / keine / meine"
              ],
              [
                "Akkusativ",
                "einen / keinen / meinen",
                "eins / keins / meins",
                "eine / keine / meine",
                "welche / keine / meine"
              ],
              [
                "Dativ",
                "einem / keinem / meinem",
                "einem / keinem / meinem",
                "einer / keiner / meiner",
                "welchen / keinen / meinen"
              ]
            ],
            "headAr": [
              "الحالة الإعرابية",
              "المذكر",
              "المحايد",
              "المؤنث",
              "الجمع"
            ],
            "rowsAr": [
              [
                "حالة الفاعل: نوميناتيف",
                "واحد / ولا واحد / بتاعي، للمذكر حسب الإعراب",
                "واحد / ولا واحد / بتاعي، للمحايد",
                "واحدة / ولا واحدة / بتاعتي، للمؤنث",
                "بعض / ولا شيء / بتوعي، للجمع حسب الإعراب"
              ],
              [
                "حالة المفعول المباشر: أكوزاتيف",
                "واحد / ولا واحد / بتاعي، للمذكر حسب الإعراب",
                "واحد / ولا واحد / بتاعي، للمحايد",
                "واحدة / ولا واحدة / بتاعتي، للمؤنث",
                "بعض / ولا شيء / بتوعي، للجمع حسب الإعراب"
              ],
              [
                "حالة المفعول غير المباشر: داتيف",
                "واحد / ولا واحد / بتاعي، للمذكر حسب الإعراب",
                "واحد / ولا واحد / بتاعي، للمذكر حسب الإعراب",
                "واحد / ولا واحد / بتاعي، للمذكر حسب الإعراب",
                "بعض / ولا شيء / بتوعي، للجمع حسب الإعراب"
              ]
            ]
          },
          "examples": [
            [
              "Hast du einen Stadtplan? – Ja, ich habe einen.",
              "معاك خريطة للمدينة؟ – أيوه، معايا واحدة."
            ],
            [
              "Brauchst du noch Eier? – Nein, ich habe noch welche.",
              "محتاج بيض تاني؟ – لأ، لسه عندي."
            ],
            [
              "Mit welchem Rad fährst du? – Mit meinem.",
              "هتركب أنهي عجلة؟ – عجلتي أنا."
            ]
          ]
        },
        {
          "h": "3. Possessivpronomen",
          "hAr": "٣. ضماير الملكية",
          "text": "Genauso funktionieren <b>meiner, deiner, seiner, ihrer, unserer, eurer, Ihrer</b>. Die Endung richtet sich nach dem Nomen, das man ersetzt, nicht nach der Person.",
          "ar": "نفس الكلام مع ضماير الملكية: meiner, deiner, seiner … النهاية بتمشي على الاسم اللي إنت شلته، مش على الشخص.",
          "examples": [
            [
              "Ist das euer Auto? – Nein, unseres steht vor der Garage.",
              "دي عربيتكم؟ – لأ، عربيتنا راكنة قدام الجراج."
            ],
            [
              "Der Schlüssel? Das ist seiner, nicht meiner.",
              "المفتاح؟ ده بتاعه، مش بتاعي."
            ],
            [
              "Ich habe meine Fahrkarte. Hast du deine?",
              "أنا معايا التذكرة بتاعتي. وإنت معاك بتاعتك؟"
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Ein Café? Da drüben ist ein.",
          "right": "Ein Café? Da drüben ist eins.",
          "ar": "المحايد لوحده من غير اسم بيبقى eins، مش ein."
        },
        {
          "wrong": "Ich brauche einen Stift. Hast du ein?",
          "right": "Ich brauche einen Stift. Hast du einen?",
          "ar": "Stift مذكر وفي Akkusativ، يبقى einen."
        },
        {
          "wrong": "Brauchst du Tomaten? Ich habe noch eine.",
          "right": "Brauchst du Tomaten? Ich habe noch welche.",
          "ar": "في الجمع الإيجابي مفيش eine، بنقول welche."
        },
        {
          "wrong": "Der Koffer da? Das ist mein.",
          "right": "Der Koffer da? Das ist meiner.",
          "ar": "Koffer مذكر Nominativ، فالضمير بيبقى meiner."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Brauchst du einen Stadtplan? – Nein, danke, ich habe schon ___.",
          "o": [
            "einen",
            "eins",
            "einer"
          ],
          "a": 0,
          "why": "Stadtplan مذكر، و haben عايز Akkusativ، يبقى einen.",
          "qAr": "محتاج خريطة مدينة؟ لا شكرًا، معايا ___ بالفعل.",
          "oAr": [
            "واحد أو واحدة؛ حسب الجنس النحوي والإعراب",
            "واحد؛ حسب الجنس النحوي",
            "واحد؛ حسب الجنس النحوي"
          ]
        },
        {
          "type": "choice",
          "q": "Ist das dein Fahrrad? – Ja, das ist ___.",
          "o": [
            "meiner",
            "meine",
            "meins"
          ],
          "a": 2,
          "why": "Fahrrad محايد (das) في Nominativ، يبقى meins.",
          "qAr": "دي عجلتك؟ أيوه دي ___ .",
          "oAr": [
            "بتاعي؛ حسب الجنس النحوي",
            "بتاعي؛ حسب الجنس النحوي",
            "بتاعي؛ حسب الجنس النحوي"
          ]
        },
        {
          "type": "choice",
          "q": "Hier gibt es keine Parkplätze. – Doch, da hinten sind ___.",
          "o": [
            "keine",
            "welche",
            "eine"
          ],
          "a": 1,
          "why": "جمع وإيجابي (فيه أماكن)، يبقى welche.",
          "qAr": "مفيش هنا أماكن ركن. بالعكس، هناك ورا فيه ___ .",
          "oAr": [
            "ولا واحد أو لا شيء؛ بصيغ مختلفة للنفي",
            "بعض؛ ضمير للجمع",
            "واحد أو واحدة؛ حسب الجنس النحوي والإعراب"
          ]
        },
        {
          "type": "choice",
          "q": "Kennst du hier einen Zahnarzt? – Ja, ich war letzte Woche bei ___ in der Altstadt.",
          "o": [
            "einen",
            "einem",
            "einer"
          ],
          "a": 1,
          "why": "bei دايمًا عايزة Dativ، والمذكر في Dativ بيبقى einem.",
          "qAr": "تعرف طبيب أسنان هنا؟ أيوه، الأسبوع اللي فات رحت لـ___ في المدينة القديمة.",
          "oAr": [
            "واحد أو واحدة؛ حسب الجنس النحوي والإعراب",
            "واحد أو واحدة؛ حسب الجنس النحوي والإعراب",
            "واحد؛ حسب الجنس النحوي"
          ]
        },
        {
          "type": "gap",
          "q": "Hast du einen Garten? – Nein, ich habe ___.",
          "a": [
            "keinen"
          ],
          "why": "Garten مذكر Akkusativ ونفي، يبقى keinen.",
          "qAr": "عندك جنينة؟ لا، ما عنديش ___ .",
          "solutionAr": "ولا واحد أو لا شيء؛ بصيغ مختلفة للنفي"
        },
        {
          "type": "gap",
          "q": "Gehört der Schlüssel einem von euch? – Nein, er gehört ___ von uns. (kein)",
          "a": [
            "keinem"
          ],
          "why": "gehören بياخد Dativ، والمذكر في Dativ: keinem.",
          "qAr": "المفتاح بتاع واحد فيكم؟ لا، مش بتاع ___ مننا. استخدم kein.",
          "solutionAr": "ولا واحد؛ في الداتيف"
        },
        {
          "type": "truefalse",
          "q": "„Ich suche ein Café. – Da drüben ist eins.“ – Der Satz ist richtig.",
          "a": true,
          "why": "صح: Café محايد، والضمير المحايد في Nominativ هو eins.",
          "qAr": "«بدوّر على كافيه، فيه واحد هناك»: الجملة الألمانية صحيحة."
        },
        {
          "type": "truefalse",
          "q": "„Bist du ein Landmensch? – Ja, ich bin einen.“ – Der Satz ist richtig.",
          "a": false,
          "why": "غلط: بعد sein بنستخدم Nominativ، يبقى «Ja, ich bin einer».",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى: إنت من محبي الريف؟ أيوه أنا واحد منهم."
        },
        {
          "type": "order",
          "prefix": "Ein Auto?",
          "words": [
            "wir",
            "haben",
            "keins",
            "leider"
          ],
          "a": [
            "Wir haben leider keins",
            "Leider haben wir keins"
          ],
          "why": "Auto محايد، والنفي في Akkusativ بيبقى keins. الفعل في المكان التاني.",
          "qAr": "رتّب الكلمات لإكمال: عربية؟ ...",
          "solutionAr": "عربية؟ للأسف ما عندناش واحدة."
        },
        {
          "type": "transform",
          "q": "Antworten Sie mit Pronomen: Hast du ein Fahrrad? (Nein)",
          "a": [
            "Nein, ich habe keins.",
            "Nein, ich habe keins"
          ],
          "why": "بدل ما نقول kein Fahrrad، بنقول keins بس.",
          "qAr": "جاوب بضمير: عندك عجلة؟ الإجابة: لا.",
          "solutionAr": "لا، ما عنديش واحدة."
        },
        {
          "type": "error",
          "q": "Der Koffer da? Das ist meins.",
          "a": [
            "Der Koffer da? Das ist meiner."
          ],
          "why": "Koffer مذكر، فالضمير في Nominativ بيبقى meiner مش meins.",
          "qAr": "صحّح الضمير في الجملة الألمانية. المعنى: الشنطة دي؟ دي بتاعتي.",
          "solutionAr": "الشنطة اللي هناك؟ دي بتاعتي."
        },
        {
          "type": "error",
          "q": "Brauchst du Tomaten? Ich habe noch eine.",
          "a": [
            "Brauchst du Tomaten? Ich habe noch welche."
          ],
          "why": "Tomaten جمع، والجمع الإيجابي بيبقى welche.",
          "qAr": "صحّح الضمير في الجملة الألمانية. المعنى: محتاج طماطم؟ لسه عندي شوية.",
          "solutionAr": "محتاج طماطم؟ لسه عندي شوية."
        }
      ]
    },
    {
      "id": "b1-k11-irgendein",
      "t": "irgendein, irgendeine, irgendwelche",
      "tAr": "irgendein: أي واحد ومش فارقة",
      "summary": "<b>irgendein-</b> bedeutet: Es ist nicht bekannt oder nicht wichtig, <b>welche</b> Person oder Sache. Im Singular hat es die Endungen von <b>ein</b>, im Plural sagt man <b>irgendwelche</b>. Ohne Nomen benutzt man die Pronomenformen <b>irgendeiner, irgendeins, irgendeine</b>.",
      "summaryAr": "irgendein معناها «أي واحد، مش مهم مين أو إيه». في المفرد بتتصرف زي ein بالظبط، وفي الجمع بنقول irgendwelche. ولو من غير اسم بنقول irgendeiner / irgendeins / irgendeine.",
      "sections": [
        {
          "h": "1. Bedeutung",
          "hAr": "١. المعنى",
          "text": "Mit <b>irgend-</b> zeigt man: Ich weiß es nicht genau, oder es ist mir <b>egal</b>. Oft klingt es auch ein bisschen negativ: „in irgendeiner kleinen Wohnung“ = in einer kleinen Wohnung, die nicht besonders ist.",
          "ar": "irgend- بتبيّن إنك مش عارف بالظبط، أو إن الموضوع مش فارق معاك. وساعات بيبقى فيها نبرة سلبية شوية: «في أي شقة صغيرة وخلاص».",
          "examples": [
            [
              "Kannst du mir irgendein gutes Buch empfehlen?",
              "ممكن ترشحلي أي كتاب حلو؟"
            ],
            [
              "Am Wochenende fahre ich an irgendeinen See.",
              "في الويك إند بروح أي بحيرة وخلاص."
            ],
            [
              "In irgendeiner kleinen Wohnung im Zentrum möchte ich nicht leben.",
              "مش عايز أعيش في أي شقة صغيرة وخلاص في وسط البلد."
            ]
          ]
        },
        {
          "h": "2. Formen als Artikelwort",
          "hAr": "٢. التصريف قبل الاسم",
          "text": "Vor einem Nomen hat <b>irgendein</b> im Singular die Endungen von <b>ein/eine</b>. Im Plural gibt es kein „ein“, deshalb sagt man <b>irgendwelche</b>.",
          "ar": "قبل الاسم irgendein بتاخد نفس نهايات ein / eine في المفرد. وفي الجمع مفيش ein، فبنقول irgendwelche.",
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
                "irgendein Park",
                "irgendein Café",
                "irgendeine Straße",
                "irgendwelche Läden"
              ],
              [
                "Akkusativ",
                "irgendeinen Park",
                "irgendein Café",
                "irgendeine Straße",
                "irgendwelche Läden"
              ],
              [
                "Dativ",
                "irgendeinem Park",
                "irgendeinem Café",
                "irgendeiner Straße",
                "irgendwelchen Läden"
              ]
            ],
            "headAr": [
              "الحالة الإعرابية",
              "المذكر",
              "المحايد",
              "المؤنث",
              "الجمع"
            ],
            "rowsAr": [
              [
                "حالة الفاعل: نوميناتيف",
                "أي حديقة غير محددة",
                "أي كافيه غير محدد",
                "أي شارع غير محدد",
                "بعض المحلات غير المحددة"
              ],
              [
                "حالة المفعول المباشر: أكوزاتيف",
                "أي حديقة غير محددة",
                "أي كافيه غير محدد",
                "أي شارع غير محدد",
                "بعض المحلات غير المحددة"
              ],
              [
                "حالة المفعول غير المباشر: داتيف",
                "أي حديقة غير محددة",
                "أي كافيه غير محدد",
                "أي شارع غير محدد",
                "بعض المحلات غير المحددة"
              ]
            ]
          },
          "examples": [
            [
              "Gibt es hier irgendwelche Cafés?",
              "فيه أي كافيهات هنا؟"
            ],
            [
              "Er wohnt in irgendeinem Dorf in Bayern.",
              "هو ساكن في قرية كده في بافاريا."
            ]
          ]
        },
        {
          "h": "3. Als Pronomen und andere irgend-Wörter",
          "hAr": "٣. كضمير وكلمات تانية بـ irgend-",
          "text": "Ohne Nomen nimmt man die Formen von <b>ein</b> als Pronomen: <b>irgendeiner</b> (der), <b>irgendeins</b> (das), <b>irgendeine</b> (die), Plural <b>irgendwelche</b>. Weitere Wörter: <b>irgendwo</b> (Ort), <b>irgendwann</b> (Zeit), <b>irgendwie</b> (Art), <b>irgendwer / irgendjemand</b> (Person), <b>irgendwas</b> (Sache).",
          "ar": "من غير اسم بنستخدم irgendeiner / irgendeins / irgendeine، وفي الجمع irgendwelche. وفيه كلمات تانية: irgendwo = في أي حتة، irgendwann = في أي وقت، irgendwie = بأي طريقة، irgendjemand = أي حد، irgendwas = أي حاجة.",
          "examples": [
            [
              "Ein Café? Wir finden bestimmt irgendeins.",
              "كافيه؟ أكيد هنلاقي أي واحد."
            ],
            [
              "Ich habe den Mann irgendwo schon mal gesehen.",
              "أنا شفت الراجل ده قبل كده في حتة ما."
            ],
            [
              "Irgendwann möchte ich in Wien leben.",
              "في يوم من الأيام نفسي أعيش في فيينا."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Gibt es hier irgendeine Cafés?",
          "right": "Gibt es hier irgendwelche Cafés?",
          "ar": "في الجمع لازم irgendwelche، مفيش irgendeine مع الجمع."
        },
        {
          "wrong": "Ein Café? Wir finden bestimmt irgendein.",
          "right": "Ein Café? Wir finden bestimmt irgendeins.",
          "ar": "من غير اسم المحايد بيبقى irgendeins بالـ s."
        },
        {
          "wrong": "Er wohnt in irgendein Dorf.",
          "right": "Er wohnt in irgendeinem Dorf.",
          "ar": "in هنا بتاخد Dativ (فين؟)، فلازم irgendeinem."
        },
        {
          "wrong": "Hast du irgendwelche Idee?",
          "right": "Hast du irgendeine Idee?",
          "ar": "Idee مفرد مؤنث، يبقى irgendeine. و irgendwelche للجمع بس: irgendwelche Ideen."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Kannst du mir ___ gutes Restaurant empfehlen?",
          "o": [
            "irgendein",
            "irgendeinen",
            "irgendwelche"
          ],
          "a": 0,
          "why": "Restaurant محايد Akkusativ، والمحايد قبل الاسم بيبقى irgendein من غير نهاية.",
          "qAr": "ممكن ترشّح لي ___ مطعم كويس؟",
          "oAr": [
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة"
          ]
        },
        {
          "type": "choice",
          "q": "Am Wochenende fahre ich an ___ See auf dem Land.",
          "o": [
            "irgendein",
            "irgendeinen",
            "irgendeinem"
          ],
          "a": 1,
          "why": "fahren an + Akkusativ (لفين؟)، و See مذكر، يبقى irgendeinen.",
          "qAr": "في الويك إند هروح ___ بحيرة في الريف.",
          "oAr": [
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة"
          ]
        },
        {
          "type": "choice",
          "q": "Hast du ___ Ideen für das Wochenende?",
          "o": [
            "irgendeine",
            "irgendein",
            "irgendwelche"
          ],
          "a": 2,
          "why": "Ideen جمع، والجمع بيبقى irgendwelche.",
          "qAr": "عندك ___ أفكار للويك إند؟",
          "oAr": [
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة"
          ]
        },
        {
          "type": "choice",
          "q": "Ich habe ihn ___ schon mal gesehen, aber ich weiß nicht mehr, wo.",
          "o": [
            "irgendwann",
            "irgendwo",
            "irgendwie"
          ],
          "a": 1,
          "why": "السؤال عن المكان (wo)، يبقى irgendwo.",
          "qAr": "شفته ___ قبل كده، لكن مش فاكر فين.",
          "oAr": [
            "في وقت ما",
            "في مكان ما",
            "بطريقة ما"
          ]
        },
        {
          "type": "gap",
          "q": "In ___ kleinen Wohnung im Zentrum möchte ich nicht leben. (irgendein)",
          "a": [
            "irgendeiner"
          ],
          "why": "in + Dativ (فين؟) و Wohnung مؤنث، يبقى irgendeiner.",
          "qAr": "مش عايز أعيش في ___ شقة صغيرة في المركز. صرّف irgendein.",
          "solutionAr": "أي واحدة غير محددة؛ حسب الإعراب"
        },
        {
          "type": "gap",
          "q": "Ich brauche einen Stift. Hast du ___? (irgendein)",
          "a": [
            "irgendeinen"
          ],
          "why": "Stift مذكر في Akkusativ ومن غير اسم بعده، يبقى irgendeinen.",
          "qAr": "محتاج قلم. معاك ___؟ صرّف irgendein.",
          "solutionAr": "أي واحد أو بعض غير محددين؛ بصيغ مختلفة"
        },
        {
          "type": "gap",
          "q": "Ein Café? Wir finden bestimmt ___. (irgendein)",
          "a": [
            "irgendeins"
          ],
          "why": "Café محايد ومن غير اسم، فالضمير بيبقى irgendeins.",
          "qAr": "كافيه؟ أكيد هنلاقي ___ . صرّف irgendein.",
          "solutionAr": "أي واحد غير محدد؛ للمحايد"
        },
        {
          "type": "truefalse",
          "q": "„irgendein“ bedeutet: Es ist nicht wichtig, welche Person oder Sache.",
          "a": true,
          "why": "صح، irgendein معناها «أي واحد، مش فارقة».",
          "qAr": "irgendein معناها إن تحديد الشخص أو الشيء مش مهم."
        },
        {
          "type": "truefalse",
          "q": "„Gibt es hier irgendeine Läden?“ – Der Satz ist richtig.",
          "a": false,
          "why": "غلط: Läden جمع، يبقى irgendwelche Läden.",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى: فيه أي محلات هنا؟"
        },
        {
          "type": "order",
          "words": [
            "Sie",
            "irgendwelche",
            "Fragen",
            "noch",
            "haben"
          ],
          "a": [
            "Haben Sie noch irgendwelche Fragen"
          ],
          "why": "سؤال بنعم أو لأ: الفعل في الأول، و Fragen جمع فبنقول irgendwelche.",
          "qAr": "رتّب الكلمات لتكوين سؤال صحيح.",
          "solutionAr": "لسه عندك أي أسئلة؟"
        },
        {
          "type": "transform",
          "q": "Mit irgend-: Wir gehen in ein Restaurant. Welches, ist egal.",
          "a": [
            "Wir gehen in irgendein Restaurant.",
            "Wir gehen in irgendein Restaurant"
          ],
          "why": "لما مش فارقة أنهي واحد بنحط irgendein بدل ein، والنهاية زي ein.",
          "qAr": "استخدم irgend-: هنروح مطعمًا. مش مهم أي مطعم.",
          "solutionAr": "هنروح أي مطعم من غير تحديد."
        },
        {
          "type": "error",
          "q": "Er wohnt in irgendein Dorf in Bayern.",
          "a": [
            "Er wohnt in irgendeinem Dorf in Bayern."
          ],
          "why": "wohnen in + Dativ، و Dorf محايد، يبقى irgendeinem.",
          "qAr": "صحّح الجملة الألمانية. المعنى: هو ساكن في قرية ما في بافاريا.",
          "solutionAr": "هو ساكن في قرية ما في بافاريا."
        }
      ]
    },
    {
      "id": "b1-k11-adjektive-als-nomen",
      "t": "Adjektive als Nomen",
      "tAr": "الصفات اللي بتتحول لأسماء",
      "summary": "Viele Adjektive und Partizipien kann man als Nomen benutzen: <b>der Obdachlose, die Angestellte, die Verletzten</b>. Man schreibt sie <b>groß</b>, aber sie haben die <b>gleichen Endungen wie Adjektive</b> vor einem Nomen. Im Wörterbuch stehen sie mit <b>der/die</b>.",
      "summaryAr": "صفات كتير بتتحول لأسماء زي der Obdachlose (المشرد) و die Angestellte (الموظفة). بتتكتب بحرف كبير، لكن نهايتها بتتغير زي الصفة بالظبط حسب الأداة والحالة. وفي القاموس بتلاقيها مكتوبة der/die.",
      "sections": [
        {
          "h": "1. Was ist das?",
          "hAr": "١. يعني إيه؟",
          "text": "Man denkt sich das Nomen <b>Mann, Frau</b> oder <b>Menschen</b> dazu: der obdachlose Mann → <b>der Obdachlose</b>, die angestellte Frau → <b>die Angestellte</b>. Das Wort ist ein Nomen, also <b>groß</b>, die Endung bleibt aber eine Adjektivendung.",
          "ar": "تخيل إن فيه كلمة Mann أو Frau أو Menschen بعد الصفة وشلناها: der obdachlose Mann → der Obdachlose. الكلمة بقت اسم فبتتكتب كبير، لكن نهايتها لسه نهاية صفة.",
          "examples": [
            [
              "Der Obdachlose schläft im Park.",
              "المشرد نايم في الجنينة."
            ],
            [
              "Die Verletzten wurden ins Krankenhaus eingeliefert.",
              "المصابين اتنقلوا المستشفى."
            ],
            [
              "Die Einheimischen kennen die besten Kneipen.",
              "أهل البلد عارفين أحسن الحانات."
            ]
          ]
        },
        {
          "h": "2. Endungen mit der/die/das",
          "hAr": "٢. النهايات بعد der / die / das",
          "text": "Nach dem bestimmten Artikel ist die Endung im Nominativ Singular <b>-e</b>, sonst fast immer <b>-en</b>.",
          "ar": "بعد أداة التعريف: النهاية في Nominativ المفرد ‎-e، وفي باقي الحالات تقريبًا ‎-en.",
          "table": {
            "head": [
              "Kasus",
              "maskulin",
              "feminin",
              "Plural"
            ],
            "rows": [
              [
                "Nominativ",
                "der Bekannte",
                "die Bekannte",
                "die Bekannten"
              ],
              [
                "Akkusativ",
                "den Bekannten",
                "die Bekannte",
                "die Bekannten"
              ],
              [
                "Dativ",
                "dem Bekannten",
                "der Bekannten",
                "den Bekannten"
              ],
              [
                "Genitiv",
                "des Bekannten",
                "der Bekannten",
                "der Bekannten"
              ]
            ],
            "headAr": [
              "الحالة الإعرابية",
              "المذكر",
              "المؤنث",
              "الجمع"
            ],
            "rowsAr": [
              [
                "حالة الفاعل: نوميناتيف",
                "المعروف لديّ أو أحد معارفي، حسب الإعراب",
                "المعروفة لديّ أو إحدى معارفي، حسب الإعراب",
                "المعارف"
              ],
              [
                "حالة المفعول المباشر: أكوزاتيف",
                "المعروف لديّ أو أحد معارفي، حسب الإعراب",
                "المعروفة لديّ أو إحدى معارفي، حسب الإعراب",
                "المعارف"
              ],
              [
                "حالة المفعول غير المباشر: داتيف",
                "المعروف لديّ أو أحد معارفي، حسب الإعراب",
                "المعروفة لديّ أو إحدى معارفي، حسب الإعراب",
                "المعروف لديّ أو أحد معارفي، حسب الإعراب"
              ],
              [
                "حالة الإضافة: جينيتيف",
                "المعروف لديّ أو أحد معارفي، حسب الإعراب",
                "المعروفة لديّ أو إحدى معارفي، حسب الإعراب",
                "المعروفة لديّ أو إحدى معارفي، حسب الإعراب"
              ]
            ]
          },
          "examples": [
            [
              "Ich habe den Verletzten geholfen.",
              "ساعدت المصابين."
            ],
            [
              "Die Angestellte der Bäckerei backt schon um vier Uhr.",
              "موظفة المخبز بتخبز من الساعة أربعة."
            ]
          ]
        },
        {
          "h": "3. Endungen mit ein/kein und ohne Artikel",
          "hAr": "٣. النهايات بعد ein / kein ومن غير أداة",
          "text": "Nach <b>ein/kein</b> zeigt die Endung das Genus: <b>ein Bekannter</b> (Mann), <b>eine Bekannte</b> (Frau). Ohne Artikel im Plural heißt es <b>Bekannte</b>, z. B. drei Verletzte, viele Jugendliche.",
          "ar": "بعد ein / kein النهاية هي اللي بتوضح النوع: ein Bekannter (راجل)، eine Bekannte (ست). ومن غير أداة في الجمع: Bekannte، زي drei Verletzte (تلات مصابين).",
          "table": {
            "head": [
              "Kasus",
              "maskulin",
              "feminin",
              "Plural (ohne Artikel)"
            ],
            "rows": [
              [
                "Nominativ",
                "ein Bekannter",
                "eine Bekannte",
                "Bekannte"
              ],
              [
                "Akkusativ",
                "einen Bekannten",
                "eine Bekannte",
                "Bekannte"
              ],
              [
                "Dativ",
                "einem Bekannten",
                "einer Bekannten",
                "Bekannten"
              ]
            ],
            "headAr": [
              "الحالة الإعرابية",
              "المذكر",
              "المؤنث",
              "الجمع من غير أداة"
            ],
            "rowsAr": [
              [
                "حالة الفاعل: نوميناتيف",
                "واحد من معارفي",
                "واحدة من معارفي",
                "معارف"
              ],
              [
                "حالة المفعول المباشر: أكوزاتيف",
                "واحد من معارفي",
                "واحدة من معارفي",
                "معارف"
              ],
              [
                "حالة المفعول غير المباشر: داتيف",
                "واحد من معارفي",
                "واحدة من معارفي",
                "معارف"
              ]
            ]
          },
          "examples": [
            [
              "Ein Verwandter von mir arbeitet als Pfleger.",
              "واحد قريبي بيشتغل ممرض."
            ],
            [
              "Gestern habe ich mit einer Bekannten telefoniert.",
              "امبارح كلمت واحدة أعرفها في التليفون."
            ],
            [
              "Bei dem Unfall gab es drei Verletzte.",
              "في الحادثة كان فيه تلات مصابين."
            ]
          ]
        },
        {
          "h": "4. Wichtige Wörter",
          "hAr": "٤. كلمات مهمة",
          "text": "Typisch sind: <b>der/die Angestellte, Arbeitslose, Auszubildende, Bekannte, Deutsche, Einheimische, Erwachsene, Jugendliche, Kranke, Obdachlose, Verletzte, Verwandte</b>. Auch neutral nach <b>etwas, nichts, viel</b>: etwas <b>Neues</b>, nichts <b>Besonderes</b>.",
          "ar": "أشهر الكلمات: der/die Angestellte (موظف)، Arbeitslose (عاطل)، Bekannte (معرفة)، Verwandte (قريب)، Jugendliche (شاب/مراهق)، Erwachsene (بالغ). وكمان بعد etwas / nichts بنقول etwas Neues (حاجة جديدة) و nichts Besonderes (مفيش حاجة مميزة).",
          "examples": [
            [
              "Für Jugendliche gibt es in unserem Viertel ein Freizeitzentrum.",
              "فيه مركز ترفيهي للشباب في حينا."
            ],
            [
              "In der Altstadt gibt es immer etwas Neues zu entdecken.",
              "في المدينة القديمة دايمًا فيه حاجة جديدة تكتشفها."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Gestern habe ich einen Bekannter getroffen.",
          "right": "Gestern habe ich einen Bekannten getroffen.",
          "ar": "بعد einen (Akkusativ) النهاية ‎-en زي الصفة: einen Bekannten."
        },
        {
          "wrong": "Mein Bruder ist ein Angestellte bei der Stadt.",
          "right": "Mein Bruder ist ein Angestellter bei der Stadt.",
          "ar": "مع ein للمذكر في Nominativ النهاية ‎-er."
        },
        {
          "wrong": "Die verletzten wurden schnell versorgt.",
          "right": "Die Verletzten wurden schnell versorgt.",
          "ar": "لما الصفة تبقى اسم لازم تتكتب بحرف كبير."
        },
        {
          "wrong": "Für Jugendlichen gibt es hier wenig Angebote.",
          "right": "Für Jugendliche gibt es hier wenig Angebote.",
          "ar": "من غير أداة في الجمع و Akkusativ النهاية ‎-e."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Bei dem Unfall gab es drei ___.",
          "o": [
            "Verletzte",
            "Verletzten",
            "Verletzter"
          ],
          "a": 0,
          "why": "جمع من غير أداة، النهاية ‎-e: drei Verletzte.",
          "qAr": "في الحادث كان فيه ثلاثة ___ .",
          "oAr": [
            "مصاب أو مصابون؛ حسب الصيغة والإعراب",
            "مصاب أو مصابون؛ حسب الصيغة والإعراب",
            "مصاب أو مصابون؛ حسب الصيغة والإعراب"
          ]
        },
        {
          "type": "choice",
          "q": "Die ___ wurden sofort ins Krankenhaus eingeliefert.",
          "o": [
            "Verletzte",
            "Verletzten",
            "Verletzter"
          ],
          "a": 1,
          "why": "بعد die في الجمع النهاية ‎-en.",
          "qAr": "الـ___ اتنقلوا فورًا للمستشفى.",
          "oAr": [
            "مصاب أو مصابون؛ حسب الصيغة والإعراب",
            "مصاب أو مصابون؛ حسب الصيغة والإعراب",
            "مصاب أو مصابون؛ حسب الصيغة والإعراب"
          ]
        },
        {
          "type": "choice",
          "q": "Mein Bruder ist ___ bei der Stadt.",
          "o": [
            "Angestellte",
            "Angestellten",
            "Angestellter"
          ],
          "a": 2,
          "why": "من غير أداة ومذكر في Nominativ، يبقى Angestellter.",
          "qAr": "أخويا ___ في البلدية.",
          "oAr": [
            "موظف أو موظفون؛ حسب الصيغة والإعراب",
            "موظف أو موظفون؛ حسب الصيغة والإعراب",
            "موظف أو موظفون؛ حسب الصيغة والإعراب"
          ]
        },
        {
          "type": "gap",
          "q": "Der Sozialarbeiter hilft einem ___. (obdachlos)",
          "a": [
            "Obdachlosen"
          ],
          "why": "helfen بياخد Dativ، وبعد einem النهاية ‎-en، والكلمة كبيرة لأنها اسم.",
          "qAr": "الأخصائي الاجتماعي بيساعد ___ . حوّل obdachlos إلى اسم: مشرد.",
          "solutionAr": "مشرد؛ حسب الإعراب"
        },
        {
          "type": "gap",
          "q": "Viele ___ treffen sich abends im Park. (jugendlich)",
          "a": [
            "Jugendliche"
          ],
          "why": "جمع من غير أداة في Nominativ، النهاية ‎-e.",
          "qAr": "___ كتير بيتقابلوا في الحديقة بالليل. حوّل jugendlich إلى اسم: شباب.",
          "solutionAr": "شباب أو مراهقون"
        },
        {
          "type": "gap",
          "q": "Die ___ kennen die besten Restaurants der Stadt. (einheimisch)",
          "a": [
            "Einheimischen"
          ],
          "why": "بعد die في الجمع النهاية ‎-en.",
          "qAr": "الـ___ عارفين أفضل مطاعم المدينة. حوّل einheimisch إلى اسم: السكان المحليون.",
          "solutionAr": "السكان المحليون"
        },
        {
          "type": "gap",
          "q": "Gestern habe ich mit einer ___ telefoniert. (verwandt)",
          "a": [
            "Verwandten"
          ],
          "why": "mit + Dativ، وبعد einer النهاية ‎-en.",
          "qAr": "امبارح اتكلمت بالتليفون مع ___ . حوّل verwandt إلى اسم: قريبة.",
          "solutionAr": "قريب أو قريبة؛ بصيغ مختلفة للاسم"
        },
        {
          "type": "truefalse",
          "q": "„Gestern habe ich einen Bekannter getroffen.“ – Der Satz ist richtig.",
          "a": false,
          "why": "غلط: بعد einen لازم ‎-en: einen Bekannten.",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى: امبارح قابلت واحدًا من معارفي."
        },
        {
          "type": "truefalse",
          "q": "Adjektive als Nomen schreibt man groß, aber sie haben Adjektivendungen.",
          "a": true,
          "why": "صح، الكلمة بقت اسم فبتتكتب كبير، لكن النهاية بتتغير زي الصفة.",
          "qAr": "الصفات المستخدمة كأسماء تُكتب بحرف كبير، لكن تظل لها نهايات الصفات."
        },
        {
          "type": "order",
          "words": [
            "ein",
            "Verwandter",
            "besucht",
            "uns",
            "morgen"
          ],
          "a": [
            "Ein Verwandter besucht uns morgen",
            "Morgen besucht uns ein Verwandter"
          ],
          "why": "Verwandter مع ein في Nominativ للمذكر، والفعل في المكان التاني.",
          "qAr": "رتّب الكلمات لتكوين جملة صحيحة.",
          "solutionAr": "واحد من قرايبنا هيزورنا بكرة."
        },
        {
          "type": "transform",
          "q": "Benutzen Sie ein Nomen: Im Zimmer liegt ein kranker Mann.",
          "a": [
            "Im Zimmer liegt ein Kranker.",
            "Im Zimmer liegt ein Kranker"
          ],
          "why": "شيل Mann وخلي الصفة اسم كبير: ein Kranker بنفس نهاية ‎-er.",
          "qAr": "استخدم اسمًا بدل الصفة مع الاسم: في الغرفة رجل مريض مستلقٍ.",
          "solutionAr": "في الغرفة مريض مستلقٍ."
        },
        {
          "type": "error",
          "q": "Für Jugendlichen gibt es hier wenig Angebote.",
          "a": [
            "Für Jugendliche gibt es hier wenig Angebote."
          ],
          "why": "جمع من غير أداة بعد für (Akkusativ)، النهاية ‎-e.",
          "qAr": "صحّح نهاية الاسم في الجملة الألمانية. المعنى: فيه أنشطة قليلة للشباب هنا.",
          "solutionAr": "فيه أنشطة قليلة للشباب هنا."
        }
      ]
    },
    {
      "id": "b1-k11-relativsaetze-was-wo",
      "t": "Relativsätze mit was und wo",
      "tAr": "جمل الصلة بـ was و wo",
      "summary": "Das Relativpronomen <b>was</b> bezieht sich auf <b>ganze Sätze</b> oder auf Wörter wie <b>alles, etwas, nichts, vieles, das</b> und auf Superlative (das Beste). <b>wo</b> bezieht sich auf <b>Orte</b>. Das Verb steht wie in jedem Nebensatz <b>am Ende</b>.",
      "summaryAr": "was بنستخدمها لما نرجع على جملة كاملة، أو بعد كلمات زي alles / etwas / nichts / vieles / das، وبعد التفضيل زي das Beste. و wo بنستخدمها للأماكن. والفعل بيروح آخر الجملة زي أي جملة جانبية.",
      "sections": [
        {
          "h": "1. was nach alles, etwas, nichts …",
          "hAr": "١. was بعد alles / etwas / nichts",
          "text": "Nach <b>alles, etwas, nichts, vieles, weniges, das</b> und nach <b>Superlativen</b> wie <b>das Beste, das Schönste</b> benutzt man <b>was</b>, nicht das.",
          "ar": "بعد alles و etwas و nichts و vieles و das، وبعد صيغة التفضيل زي das Beste، بنقول was مش das.",
          "examples": [
            [
              "Viel Kultur ist etwas, was eine Stadt attraktiv macht.",
              "الثقافة الكتير حاجة بتخلي المدينة جذابة."
            ],
            [
              "Das Wetter ist nichts, was für Rankings wichtig ist.",
              "الجو مش حاجة مهمة في التصنيفات."
            ],
            [
              "Das Beste, was ich in Wien gegessen habe, war die Sachertorte.",
              "أحلى حاجة أكلتها في فيينا كانت تورتة زاخر."
            ]
          ]
        },
        {
          "h": "2. was bezieht sich auf einen ganzen Satz",
          "hAr": "٢. was بترجع على جملة كاملة",
          "text": "Wenn der Relativsatz einen <b>ganzen Satz</b> kommentiert, beginnt er mit <b>was</b>. Er steht dann nach dem Hauptsatz.",
          "ar": "لما الجملة الجانبية بتعلّق على الجملة اللي قبلها كلها، بتبدأ بـ was وبتيجي بعد الجملة الأساسية.",
          "examples": [
            [
              "Hier gibt es viele Parks, was ich toll finde.",
              "هنا فيه جناين كتير، وده حاجة بحبها جدًا."
            ],
            [
              "Die Mieten steigen immer weiter, was viele Menschen ärgert.",
              "الإيجارات بتزيد على طول، وده مضايق ناس كتير."
            ]
          ]
        },
        {
          "h": "3. wo für Orte",
          "hAr": "٣. wo للأماكن",
          "text": "<b>wo</b> bezieht sich auf einen <b>Ort</b>: eine Stadt, ein Land, ein Café, ein Viertel. Statt wo kann man auch <b>in dem / in der</b> sagen. Nach Städte- und Ländernamen benutzt man immer <b>wo</b>.",
          "ar": "wo بترجع على مكان: مدينة، بلد، كافيه، حي. ممكن بدلها تقول in dem / in der. وبعد أسماء المدن والبلاد بنستخدم wo على طول.",
          "table": {
            "head": [
              "Bezugswort",
              "Relativwort",
              "Beispiel"
            ],
            "rows": [
              [
                "alles, etwas, nichts, vieles, das",
                "was",
                "Alles, was ich brauche, ist hier."
              ],
              [
                "Superlativ (das Beste, das Schönste)",
                "was",
                "Das Schönste, was ich kenne, ist der Hafen."
              ],
              [
                "ganzer Satz",
                "was",
                "Er kommt mit, was mich freut."
              ],
              [
                "Ortsangabe (Stadt, Café, Viertel)",
                "wo",
                "Das ist das Café, wo wir uns kennengelernt haben."
              ],
              [
                "Städte- und Ländernamen",
                "wo",
                "Ich fahre nach Graz, wo meine Tante wohnt."
              ]
            ],
            "headAr": [
              "الكلمة التي يعود عليها الوصل",
              "أداة الوصل",
              "مثال"
            ],
            "rowsAr": [
              [
                "كل شيء، شيء ما، لا شيء، أشياء كثيرة، ذلك",
                "الذي أو ما",
                "كل اللي محتاجه موجود هنا."
              ],
              [
                "صيغة التفضيل الأعلى: الأفضل أو الأجمل",
                "الذي أو ما",
                "أجمل حاجة أعرفها هي الميناء."
              ],
              [
                "جملة كاملة",
                "الذي أو ما",
                "هو جاي معانا، وده بيفرحني."
              ],
              [
                "تعبير مكان: مدينة أو كافيه أو حي",
                "حيث أو المكان الذي",
                "ده الكافيه اللي اتعرفنا فيه على بعض."
              ],
              [
                "أسماء المدن والبلاد",
                "حيث أو المكان الذي",
                "هسافر لغراتس، حيث تعيش عمّتي أو خالتي."
              ]
            ]
          },
          "examples": [
            [
              "Hamburg ist eine Stadt, wo ich gerne wohnen würde.",
              "هامبورج مدينة نفسي أعيش فيها."
            ],
            [
              "Zürich ist eine Stadt, in der die Lebensqualität sehr hoch ist.",
              "زيورخ مدينة مستوى المعيشة فيها عالي جدًا."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Das ist alles, das ich weiß.",
          "right": "Das ist alles, was ich weiß.",
          "ar": "بعد alles لازم was، مش das."
        },
        {
          "wrong": "Hier gibt es viele Parks, das ich toll finde.",
          "right": "Hier gibt es viele Parks, was ich toll finde.",
          "ar": "لما بترجع على الجملة كلها بتستخدم was."
        },
        {
          "wrong": "Hamburg ist eine Stadt, was ich gerne wohnen würde.",
          "right": "Hamburg ist eine Stadt, wo ich gerne wohnen würde.",
          "ar": "للمكان بنستخدم wo، مش was."
        },
        {
          "wrong": "Ich kenne ein Café, wo man kann gut frühstücken.",
          "right": "Ich kenne ein Café, wo man gut frühstücken kann.",
          "ar": "في الجملة الجانبية الفعل المصرّف بيروح الآخر."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Es gibt nichts, ___ ich an meiner Stadt nicht mag.",
          "o": [
            "das",
            "was",
            "wo"
          ],
          "a": 1,
          "why": "بعد nichts بنستخدم was.",
          "qAr": "مفيش حاجة ___ مش بحبها في مدينتي.",
          "oAr": [
            "أداة معرفة أو وصل بحسب السياق والجنس النحوي",
            "ما أو الذي",
            "حيث أو أين"
          ]
        },
        {
          "type": "choice",
          "q": "Das ist das Café, ___ wir uns kennengelernt haben.",
          "o": [
            "wo",
            "was",
            "wann"
          ],
          "a": 0,
          "why": "Café مكان، يبقى wo.",
          "qAr": "ده الكافيه ___ اتعرفنا فيه على بعض.",
          "oAr": [
            "حيث أو أين",
            "ما أو الذي",
            "إمتى"
          ]
        },
        {
          "type": "choice",
          "q": "Die Mieten sind sehr hoch, ___ viele Familien ärgert.",
          "o": [
            "das",
            "wo",
            "was"
          ],
          "a": 2,
          "why": "بترجع على الجملة كلها (إن الإيجارات غالية)، يبقى was.",
          "qAr": "الإيجارات عالية جدًا، ___ بيضايق أسرًا كتير.",
          "oAr": [
            "أداة معرفة أو وصل بحسب السياق والجنس النحوي",
            "حيث أو أين",
            "ما أو الذي"
          ]
        },
        {
          "type": "gap",
          "q": "Alles, ___ du brauchst, findest du im Zentrum.",
          "a": [
            "was"
          ],
          "why": "بعد alles بنقول was.",
          "qAr": "كل حاجة ___ تحتاجها هتلاقيها في المركز.",
          "solutionAr": "ما أو الذي"
        },
        {
          "type": "gap",
          "q": "Zürich ist eine Stadt, ___ die Lebensqualität sehr hoch ist.",
          "a": [
            "wo",
            "in der"
          ],
          "why": "Stadt مكان، فبنقول wo أو in der.",
          "qAr": "زيورخ مدينة ___ جودة الحياة فيها عالية جدًا.",
          "solutionAr": "حيث أو أين"
        },
        {
          "type": "gap",
          "q": "Das Beste, ___ mir in Wien passiert ist, war das Konzert im Park.",
          "a": [
            "was"
          ],
          "why": "بعد التفضيل das Beste بنستخدم was.",
          "qAr": "أحسن حاجة ___ حصلت لي في فيينا كانت الحفلة الموسيقية في الحديقة.",
          "solutionAr": "ما أو الذي"
        },
        {
          "type": "truefalse",
          "q": "„Ich ziehe nach Graz, was mich sehr freut.“ – Der Satz ist richtig.",
          "a": true,
          "why": "صح: was هنا بترجع على الجملة كلها (إني هنقل جراتس).",
          "qAr": "«هنتقل لغراتس، وده بيفرحني جدًا»: الجملة الألمانية صحيحة."
        },
        {
          "type": "truefalse",
          "q": "Nach alles, etwas und nichts benutzt man das Relativwort wo.",
          "a": false,
          "why": "غلط: بعد alles و etwas و nichts بنستخدم was، و wo للأماكن بس.",
          "qAr": "بعد alles وetwas وnichts بنستخدم أداة الوصل wo. هل العبارة صحيحة؟"
        },
        {
          "type": "order",
          "prefix": "Viel Kultur ist etwas,",
          "words": [
            "was",
            "eine",
            "Stadt",
            "attraktiv",
            "macht"
          ],
          "a": [
            "was eine Stadt attraktiv macht"
          ],
          "why": "بعد etwas بنبدأ بـ was، والفعل macht بيروح الآخر.",
          "qAr": "رتّب الكلمات لإكمال: كثرة الثقافة شيء ...",
          "solutionAr": "كثرة الثقافة من الأشياء اللي بتخلّي المدينة جذابة."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit was: Es gibt viele Grünflächen. Das finde ich toll.",
          "a": [
            "Es gibt viele Grünflächen, was ich toll finde."
          ],
          "why": "was بترجع على الجملة الأولى كلها، والفعل finde في الآخر.",
          "qAr": "اربط بـ was: فيه مساحات خضراء كتير. شايف ده رائعًا.",
          "solutionAr": "فيه مساحات خضراء كتير، وده شايفه رائعًا."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit wo: Ich kenne ein Restaurant. Dort kann man gut essen.",
          "a": [
            "Ich kenne ein Restaurant, wo man gut essen kann."
          ],
          "why": "Restaurant مكان، فبنستخدم wo، والفعل المصرّف kann بيروح الآخر.",
          "qAr": "اربط بـ wo: أعرف مطعمًا. ممكن ناكل فيه كويس.",
          "solutionAr": "أعرف مطعمًا ممكن ناكل فيه كويس."
        },
        {
          "type": "error",
          "q": "Das ist alles, das ich über die Stadt weiß.",
          "a": [
            "Das ist alles, was ich über die Stadt weiß."
          ],
          "why": "بعد alles لازم was مش das.",
          "qAr": "صحّح أداة الوصل في الجملة الألمانية. المعنى: ده كل اللي أعرفه عن المدينة.",
          "solutionAr": "ده كل اللي أعرفه عن المدينة."
        }
      ]
    }
  ],
  "12": [
    {
      "id": "b1-k12-je-desto",
      "t": "Sätze mit je ..., desto/umso ...",
      "tAr": "جمل «كل ما ... كل ما ...» (je ..., desto/umso ...)",
      "summary": "Mit <b>je ..., desto/umso ...</b> zeigt man, dass sich zwei Dinge <b>gemeinsam verändern</b>. Der <b>je</b>-Teil ist ein Nebensatz (Verb am Ende), im <b>desto/umso</b>-Teil steht das Verb direkt nach dem Komparativ.",
      "summaryAr": "je ..., desto/umso ... معناها «كل ما ... كل ما ...». جملة je جملة جانبية والفعل بيروح آخرها، وبعد desto/umso + الـ Komparativ الفعل بييجي على طول.",
      "sections": [
        {
          "h": "1. Bedeutung",
          "hAr": "١. المعنى",
          "text": "Wenn sich eine Sache verändert, verändert sich auch eine andere Sache. Beide Teile brauchen einen <b>Komparativ</b> (mehr, weniger, öfter, höher ...). <b>desto</b> und <b>umso</b> bedeuten dasselbe.",
          "ar": "لما حاجة تتغير، حاجة تانية بتتغير معاها. الجزئين لازم يبقى فيهم صفة مقارنة (Komparativ) زي mehr و weniger و öfter. و desto و umso نفس المعنى بالظبط، استخدم اللي يريحك.",
          "examples": [
            [
              "Je mehr Geld Anna verdient, desto mehr spart sie.",
              "كل ما آنا تكسب فلوس أكتر، كل ما توفّر أكتر."
            ],
            [
              "Je weniger Bargeld man dabeihat, umso weniger kann man verlieren.",
              "كل ما يبقى معاك كاش أقل، كل ما تقدر تخسر أقل."
            ],
            [
              "Je seltener man zur Bank muss, desto mehr Zeit hat man.",
              "كل ما تحتاج تروح البنك أقل، كل ما يبقى عندك وقت أكتر."
            ]
          ]
        },
        {
          "h": "2. Wortstellung",
          "hAr": "٢. ترتيب الكلمات",
          "text": "<b>je + Komparativ</b> → Subjekt ... <b>Verb am Ende</b> (Nebensatz), dann Komma. <b>desto/umso + Komparativ</b> → <b>Verb</b> → Subjekt ... (Hauptsatz mit Inversion).",
          "ar": "أول جزء: je + Komparativ وبعدين الفاعل والفعل في الآخر خالص. بعد الفاصلة: desto/umso + Komparativ وبعدها الفعل على طول، وبعدين الفاعل. يعني الفاعل بييجي بعد الفعل في الجزء التاني.",
          "table": {
            "head": [
              "je + Komparativ",
              "Subjekt ... Verb (Ende)",
              "desto/umso + Komparativ",
              "Verb + Subjekt ..."
            ],
            "rows": [
              [
                "Je öfter",
                "man Online-Banking macht,",
                "desto leichter",
                "wird es."
              ],
              [
                "Je größer",
                "der Kredit ist,",
                "umso günstiger",
                "sind die Zinsen."
              ],
              [
                "Je mehr Geld",
                "Frau Ramon abhebt,",
                "desto höher",
                "sind die Gebühren."
              ],
              [
                "Je länger",
                "ich warte,",
                "umso nervöser",
                "werde ich."
              ]
            ],
            "headAr": [
              "أداة je مع صيغة المقارنة",
              "الفاعل ثم باقي الجملة، والفعل في النهاية",
              "أداة desto أو umso مع صيغة المقارنة",
              "الفعل ثم الفاعل وباقي الجملة"
            ],
            "rowsAr": [
              [
                "كلما زاد عدد المرات",
                "اللي بنستخدم فيها الخدمات البنكية أونلاين،",
                "بقى أسهل",
                "بيكون الأمر أسهل."
              ],
              [
                "كلما كان أكبر",
                "حجم القرض،",
                "بقت أقل",
                "الفوائد بتكون أقل."
              ],
              [
                "كلما زاد مقدار المال",
                "اللي السيدة رامون بتسحبه،",
                "بقت أعلى",
                "الرسوم بتكون أعلى."
              ],
              [
                "كلما زادت المدة",
                "اللي بستناها،",
                "بقيت أكثر توترًا",
                "أنا ببقى أكثر توترًا."
              ]
            ]
          },
          "examples": [
            [
              "Je früher du dich informierst, desto leichter findest du ein günstiges Konto.",
              "كل ما تسأل بدري، كل ما يبقى أسهل إنك تلاقي حساب رخيص."
            ]
          ]
        },
        {
          "h": "3. Wichtige Komparative",
          "hAr": "٣. أهم صيغ المقارنة",
          "text": "Viele Komparative sind <b>unregelmäßig</b> oder haben einen <b>Umlaut</b>. Nach <b>desto/umso</b> kann auch ein Nomen kommen: <i>desto mehr <b>Steuern</b> zahlt man</i>.",
          "ar": "صيغ مقارنة كتير شاذة أو بيبقى فيها Umlaut، فلازم تحفظها. وممكن بعد desto mehr ييجي اسم: desto mehr Steuern zahlt man.",
          "table": {
            "head": [
              "Grundform",
              "Komparativ",
              "Beispiel"
            ],
            "rows": [
              [
                "viel",
                "mehr",
                "Je mehr ich spare, ..."
              ],
              [
                "wenig",
                "weniger",
                "Je weniger man ausgibt, ..."
              ],
              [
                "gut",
                "besser",
                "... desto besser."
              ],
              [
                "gern",
                "lieber",
                "Je früher, desto lieber!"
              ],
              [
                "oft",
                "öfter",
                "Je öfter man übt, ..."
              ],
              [
                "hoch",
                "höher",
                "Je höher die Zinsen sind, ..."
              ],
              [
                "groß",
                "größer",
                "Je größer der Kredit ist, ..."
              ],
              [
                "teuer",
                "teurer",
                "... umso teurer wird es."
              ]
            ],
            "headAr": [
              "الصيغة الأساسية",
              "صيغة المقارنة",
              "مثال"
            ],
            "rowsAr": [
              [
                "كثير",
                "أكثر",
                "كلما وفّرت أكتر، ..."
              ],
              [
                "قليل",
                "أقل",
                "كلما صرفنا أقل، ..."
              ],
              [
                "جيد",
                "بشكل أفضل",
                "... كان أفضل."
              ],
              [
                "بسرور أو عن رغبة",
                "أفضل أو برغبة أكبر",
                "كلما كان أبكر كان أفضل!"
              ],
              [
                "كثيرًا من حيث التكرار",
                "بتكرار أكثر",
                "كلما تدرّبنا مرات أكثر، ..."
              ],
              [
                "عالٍ",
                "أعلى",
                "كلما كانت الفوائد أعلى، ..."
              ],
              [
                "كبير",
                "أكبر",
                "كلما كان القرض أكبر، ..."
              ],
              [
                "غالٍ",
                "أغلى",
                "... أصبح أغلى."
              ]
            ]
          }
        },
        {
          "h": "4. Kurzformen und andere Reihenfolge",
          "hAr": "٤. الصيغ المختصرة وترتيب تاني",
          "text": "In der gesprochenen Sprache gibt es <b>Kurzformen ohne Verb</b>: <i>Je schneller, desto besser!</i> Der <b>je</b>-Satz kann auch <b>nach</b> dem Hauptsatz stehen: <i>Man spart umso mehr, je weniger man ausgibt.</i>",
          "ar": "في الكلام العادي فيه جمل قصيرة من غير فعل: Je schneller, desto besser! (كل ما أسرع كل ما أحسن). وممكن كمان جملة je تيجي في الآخر بعد الجملة الرئيسية.",
          "examples": [
            [
              "Je schneller, desto besser!",
              "كل ما أسرع، كل ما أحسن!"
            ],
            [
              "Man spart umso mehr, je weniger man ausgibt.",
              "الواحد بيوفّر أكتر، كل ما يصرف أقل."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Je mehr ich arbeite, desto ich verdiene mehr.",
          "right": "Je mehr ich arbeite, desto mehr verdiene ich.",
          "ar": "الـ Komparativ لازم يلزق في desto، وبعده الفعل على طول."
        },
        {
          "wrong": "Je mehr ich arbeite, desto mehr ich verdiene.",
          "right": "Je mehr ich arbeite, desto mehr verdiene ich.",
          "ar": "الجزء بتاع desto جملة رئيسية، فالفعل بييجي قبل الفاعل مش في الآخر."
        },
        {
          "wrong": "Je ich mehr spare, desto ruhiger schlafe ich.",
          "right": "Je mehr ich spare, desto ruhiger schlafe ich.",
          "ar": "الـ Komparativ بييجي على طول بعد je، قبل الفاعل."
        },
        {
          "wrong": "Je viel man übt, desto gut spricht man.",
          "right": "Je mehr man übt, desto besser spricht man.",
          "ar": "لازم صيغة المقارنة: viel → mehr و gut → besser."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Je früher du sparst, ___ mehr Geld hast du später.",
          "o": [
            "dann",
            "desto",
            "als"
          ],
          "a": 1,
          "why": "je دايمًا جوزها desto أو umso، مش dann ولا als.",
          "qAr": "كلما وفّرت بدري، ___ بقى معاك فلوس أكتر بعدين.",
          "oAr": [
            "بعد كده",
            "الجزء الثاني من رابط كلما",
            "عندما في الماضي أو من في المقارنة"
          ]
        },
        {
          "type": "choice",
          "q": "Je ___ die Zinsen sind, desto teurer wird der Kredit.",
          "o": [
            "hoch",
            "am höchsten",
            "höher"
          ],
          "a": 2,
          "why": "بعد je لازم Komparativ: hoch → höher.",
          "qAr": "كلما كانت الفوائد ___، بقى القرض أغلى.",
          "oAr": [
            "عالٍ",
            "الأعلى",
            "أعلى"
          ]
        },
        {
          "type": "choice",
          "q": "Je weniger man ausgibt, umso ___.",
          "o": [
            "mehr spart man",
            "man spart mehr",
            "mehr man spart"
          ],
          "a": 0,
          "why": "بعد umso + Komparativ الفعل على طول وبعدين الفاعل: mehr spart man.",
          "qAr": "كلما صرفنا أقل، ___ .",
          "oAr": [
            "نوفّر أكثر؛ بصيغ مختلفة للترتيب",
            "نوفّر أكثر؛ بصيغ مختلفة للترتيب",
            "نوفّر أكثر؛ بصيغ مختلفة للترتيب"
          ]
        },
        {
          "type": "gap",
          "q": "Je ___ ich online bezahle, desto weniger Bargeld brauche ich. (oft)",
          "a": [
            "öfter",
            "häufiger"
          ],
          "why": "oft في المقارنة بتبقى öfter (أو häufiger).",
          "qAr": "كلما دفعت أونلاين ___، احتجت نقدًا أقل. استخدم مقارنة oft: كثيرًا.",
          "solutionAr": "بتكرار أكثر"
        },
        {
          "type": "gap",
          "q": "Je mehr Geld Anna verdient, desto mehr ___ sie. (sparen)",
          "a": [
            "spart"
          ],
          "why": "بعد desto mehr الفعل المصرّف بييجي على طول: spart sie.",
          "qAr": "كلما آنا كسبت فلوس أكتر، ___ أكتر. صرّف sparen: يوفّر.",
          "solutionAr": "يوفّر"
        },
        {
          "type": "gap",
          "q": "Je ___ der Kredit ist, umso günstiger sind die Zinsen. (groß)",
          "a": [
            "größer"
          ],
          "why": "groß → größer بالـ Umlaut.",
          "qAr": "كلما كان القرض ___، كانت الفوائد أقل. استخدم مقارنة groß: كبير.",
          "solutionAr": "أكبر"
        },
        {
          "type": "order",
          "prefix": "Je länger ich in Deutschland lebe,",
          "words": [
            "verstehe",
            "desto",
            "ich",
            "besser",
            "das",
            "System"
          ],
          "a": [
            "desto besser verstehe ich das System"
          ],
          "why": "desto + Komparativ في الأول، بعده الفعل verstehe، وبعده الفاعل ich.",
          "qAr": "رتّب الكلمات لإكمال: كلما عشت في ألمانيا أطول، ...",
          "solutionAr": "كلما عشت في ألمانيا مدة أطول، فهمت النظام أفضل."
        },
        {
          "type": "order",
          "words": [
            "mehr",
            "Je",
            "ausgibt",
            "man",
            "weniger",
            "spart",
            "desto",
            "man"
          ],
          "a": [
            "Je weniger man ausgibt, desto mehr spart man.",
            "Je mehr man ausgibt, desto weniger spart man."
          ],
          "why": "في جملة je الفعل ausgibt في الآخر، وفي جملة desto الفعل spart قبل man.",
          "qAr": "رتّب الكلمات لتكوين جملة صحيحة.",
          "solutionAr": "كلما صرفنا أقل وفّرنا أكتر.",
          "aAr": [
            "كلما صرفنا أقل وفّرنا أكتر.",
            "كلما صرفنا أكتر وفّرنا أقل."
          ]
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit je ..., desto ...: Man übt viel. Man spricht gut.",
          "a": [
            "Je mehr man übt, desto besser spricht man.",
            "Je mehr man übt, umso besser spricht man.",
            "Je öfter man übt, desto besser spricht man.",
            "Je öfter man übt, umso besser spricht man."
          ],
          "why": "viel → mehr و gut → besser، والفعل übt في آخر جملة je.",
          "qAr": "اربط بـ je …, desto …: بنتدرّب كتير. بنتكلم كويس.",
          "solutionAr": "كلما تدرّبنا أكتر اتكلمنا أفضل."
        },
        {
          "type": "transform",
          "q": "Verbinden Sie mit je ..., umso ...: Die Preise steigen stark. Die Kunden kaufen wenig.",
          "a": [
            "Je stärker die Preise steigen, umso weniger kaufen die Kunden.",
            "Je stärker die Preise steigen, desto weniger kaufen die Kunden."
          ],
          "why": "stark → stärker و wenig → weniger، وبعد umso weniger الفعل kaufen قبل الفاعل.",
          "qAr": "اربط بـ je …, umso …: الأسعار بترتفع بشدة. العملاء بيشتروا قليلًا.",
          "solutionAr": "كلما ارتفعت الأسعار بشدة، اشترى العملاء أقل."
        },
        {
          "type": "error",
          "q": "Je höher das Gehalt ist, desto man zahlt mehr Steuern.",
          "a": [
            "Je höher das Gehalt ist, desto mehr Steuern zahlt man.",
            "Je höher das Gehalt ist, umso mehr Steuern zahlt man."
          ],
          "why": "desto لازم بعدها على طول mehr Steuern، وبعدين الفعل zahlt وبعدين man.",
          "qAr": "صحّح ترتيب الجملة الألمانية. المعنى: كلما زاد المرتب زادت الضرائب.",
          "solutionAr": "كلما زاد المرتب زادت الضرائب اللي بندفعها."
        },
        {
          "type": "truefalse",
          "q": "„Je mehr ich lerne, desto besser ich verstehe.“ – Dieser Satz ist richtig.",
          "a": false,
          "why": "غلط: الصح desto besser verstehe ich، لأن الفعل بييجي قبل الفاعل بعد desto.",
          "qAr": "هل الجملة الألمانية صحيحة؟ المعنى: كلما تعلّمت أكتر فهمت أفضل."
        }
      ]
    },
    {
      "id": "b1-k12-partizip-ii-adjektiv",
      "t": "Partizip II als Adjektiv",
      "tAr": "اسم المفعول (Partizip II) كصفة",
      "summary": "Ein <b>Partizip II</b> kann wie ein <b>Adjektiv</b> vor einem Nomen stehen. Es hat eine <b>passive</b> oder <b>abgeschlossene</b> Bedeutung und bekommt die normalen <b>Adjektivendungen</b>: <i>das ausgefüllte Formular</i>.",
      "summaryAr": "الـ Partizip II (زي ausgefüllt, überwiesen) ممكن يبقى صفة قبل الاسم. معناه إن الحاجة «اتعملت» خلاص، وبياخد نهايات الصفات العادية.",
      "sections": [
        {
          "h": "1. Vom Relativsatz zum Partizip",
          "hAr": "١. من جملة الصلة للـ Partizip",
          "text": "Ein Relativsatz im <b>Passiv</b> (… <i>der überwiesen wurde</i>) kann kürzer werden: Man nimmt das <b>Partizip II</b> und stellt es mit <b>Adjektivendung</b> vor das Nomen.",
          "ar": "بدل ما تقول جملة صلة بالمبني للمجهول زي «المبلغ اللي اتحوّل»، تاخد الـ Partizip II وتحطه قبل الاسم بنهاية الصفة: der überwiesene Betrag. أقصر وأشيك.",
          "table": {
            "head": [
              "Relativsatz (Passiv)",
              "Partizip II als Adjektiv"
            ],
            "rows": [
              [
                "der Betrag, der überwiesen wurde",
                "der überwiesene Betrag"
              ],
              [
                "eine PIN, die gespeichert wurde",
                "eine gespeicherte PIN"
              ],
              [
                "das Formular, das ausgefüllt wurde",
                "das ausgefüllte Formular"
              ],
              [
                "die Daten, die übernommen wurden",
                "die übernommenen Daten"
              ],
              [
                "die Karte, die verloren wurde",
                "die verlorene Karte"
              ]
            ],
            "headAr": [
              "جملة وصل بالمبني للمجهول",
              "التصريف الثالث مستخدمًا كصفة"
            ],
            "rowsAr": [
              [
                "المبلغ الذي تم تحويله",
                "المبلغ المحوّل"
              ],
              [
                "رقم سري تم حفظه",
                "رقم سري محفوظ"
              ],
              [
                "الاستمارة التي تم ملؤها",
                "الاستمارة المكتملة"
              ],
              [
                "البيانات التي تم نقلها",
                "البيانات المنقولة"
              ],
              [
                "البطاقة التي تم فقدانها",
                "البطاقة المفقودة"
              ]
            ]
          },
          "examples": [
            [
              "Der überwiesene Betrag kommt innerhalb eines Tages an.",
              "المبلغ المحوَّل بيوصل خلال يوم."
            ],
            [
              "Die übernommenen Daten können Sie korrigieren.",
              "البيانات اللي اتنقلت تقدر تصححها."
            ]
          ]
        },
        {
          "h": "2. Adjektivendungen",
          "hAr": "٢. نهايات الصفة",
          "text": "Das Partizip bekommt dieselben Endungen wie jedes Adjektiv. Nach <b>der/die/das</b> meistens <b>-e</b> oder <b>-en</b>, nach <b>ein</b> zeigt die Endung das Genus: <i>ein ausgefüllt<b>es</b> Formular, ein überwiesen<b>er</b> Betrag</i>.",
          "ar": "الـ Partizip بياخد نفس نهايات أي صفة. بعد der/die/das غالبًا -e أو -en، وبعد ein النهاية بتبيّن نوع الاسم: ausgefülltes للمحايد و überwiesener للمذكر.",
          "table": {
            "head": [
              "Kasus / Genus",
              "mit der/die/das",
              "mit ein/eine / ohne Artikel"
            ],
            "rows": [
              [
                "Nominativ maskulin",
                "der überwiesene Betrag",
                "ein überwiesener Betrag"
              ],
              [
                "Akkusativ maskulin",
                "den überwiesenen Betrag",
                "einen überwiesenen Betrag"
              ],
              [
                "Nominativ neutral",
                "das ausgefüllte Formular",
                "ein ausgefülltes Formular"
              ],
              [
                "Dativ feminin",
                "mit der gespeicherten PIN",
                "mit einer gespeicherten PIN"
              ],
              [
                "Nominativ Plural",
                "die eingezahlten Beträge",
                "eingezahlte Beträge"
              ]
            ],
            "headAr": [
              "الحالة الإعرابية والجنس النحوي",
              "مع أداة معرفة",
              "مع أداة نكرة أو من غير أداة"
            ],
            "rowsAr": [
              [
                "مذكر في حالة الفاعل",
                "المبلغ المحوّل",
                "مبلغ محوّل"
              ],
              [
                "مذكر في حالة المفعول المباشر",
                "المبلغ المحوّل",
                "مبلغ محوّل"
              ],
              [
                "محايد في حالة الفاعل",
                "الاستمارة المكتملة",
                "استمارة مكتملة"
              ],
              [
                "مؤنث في حالة الداتيف",
                "مع الرقم السري المحفوظ",
                "مع رقم سري محفوظ"
              ],
              [
                "جمع في حالة الفاعل",
                "المبالغ المودعة",
                "مبالغ مودعة"
              ]
            ]
          }
        },
        {
          "h": "3. Nach Tätigkeiten fragen",
          "hAr": "٣. تسأل حد عمل حاجة ولا لأ",
          "text": "Mit dem Partizip II kann man kurz antworten, dass eine Tätigkeit <b>schon fertig</b> ist. Bei trennbaren Verben steht <b>ge</b> in der Mitte: <i>ausgefüllt, eingezahlt</i>. Unregelmäßige Partizipien enden auf <b>-en</b>: <i>unterschrieben, verloren, gestohlen</i>.",
          "ar": "بالـ Partizip II تقدر ترد بسرعة إن الحاجة خلصت. في الأفعال اللي بتتفصل الـ ge بتيجي في النص: ausgefüllt. والأفعال الشاذة الـ Partizip بتاعها بيخلص بـ -en: unterschrieben, gestohlen.",
          "examples": [
            [
              "Hast du das Formular schon ausgefüllt? – Ja, hier ist das ausgefüllte Formular.",
              "ملّيت الاستمارة؟ – أيوه، أهي الاستمارة المتملّية."
            ],
            [
              "Hast du den Kontoauszug gedruckt? – Ja, der gedruckte Auszug liegt auf dem Tisch.",
              "طبعت كشف الحساب؟ – أيوه، الكشف المطبوع على الترابيزة."
            ],
            [
              "Die Polizei hat das gestohlene Fahrrad gefunden.",
              "البوليس لقى العجلة المسروقة."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "Hier ist das ausgefüllt Formular.",
          "right": "Hier ist das ausgefüllte Formular.",
          "ar": "قبل الاسم الـ Partizip لازم ياخد نهاية الصفة: ausgefüllte."
        },
        {
          "wrong": "Wir ersetzen Ihre verlorte Karte.",
          "right": "Wir ersetzen Ihre verlorene Karte.",
          "ar": "verlieren فعل شاذ، والـ Partizip بتاعه verloren مش verlort."
        },
        {
          "wrong": "Die eingezahlte Beträge werden gutgeschrieben.",
          "right": "Die eingezahlten Beträge werden gutgeschrieben.",
          "ar": "في الجمع بعد die النهاية -en."
        },
        {
          "wrong": "das geausfüllte Formular",
          "right": "das ausgefüllte Formular",
          "ar": "في الأفعال اللي بتتفصل ge بتيجي بعد البادئة: aus-ge-füllt."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Schicken Sie uns das ___ Formular.",
          "o": [
            "unterschreibende",
            "unterschriebene",
            "unterschrieben"
          ],
          "a": 1,
          "why": "الاستمارة اتمضت خلاص (مبني للمجهول) → Partizip II بنهاية -e بعد das.",
          "qAr": "ابعت لنا الاستمارة ___ .",
          "oAr": [
            "يوقّع حاليًا؛ صفة من Partizip I",
            "موقّع؛ من Partizip II",
            "موقّع؛ من Partizip II"
          ]
        },
        {
          "type": "choice",
          "q": "Wir ersetzen Ihre ___ Karte innerhalb einer Woche.",
          "o": [
            "verlorene",
            "verlierende",
            "verlorte"
          ],
          "a": 0,
          "why": "الكارت ضاع خلاص → Partizip II الشاذ verloren + e.",
          "qAr": "هنستبدل بطاقتك ___ خلال أسبوع.",
          "oAr": [
            "مفقود؛ من Partizip II",
            "يفقد حاليًا؛ من Partizip I",
            "صيغة مشتقة من فعل يفقد"
          ]
        },
        {
          "type": "choice",
          "q": "Die ___ Beträge werden sofort gutgeschrieben.",
          "o": [
            "eingezahlte",
            "einzahlenden",
            "eingezahlten"
          ],
          "a": 2,
          "why": "جمع بعد die → النهاية -en، والمبالغ اتودعت خلاص فـ Partizip II.",
          "qAr": "المبالغ الـ___ بتُضاف فورًا للحساب.",
          "oAr": [
            "مُودع؛ من Partizip II بحسب الإعراب",
            "يودع حاليًا؛ من Partizip I",
            "مُودع؛ من Partizip II بحسب الإعراب"
          ]
        },
        {
          "type": "gap",
          "q": "Eine ___ PIN können Sie jederzeit ändern. (speichern)",
          "a": [
            "gespeicherte"
          ],
          "why": "speichern → gespeichert، وبعد eine في المؤنث النهاية -e.",
          "qAr": "يمكن تغيير رقم PIN الـ___ في أي وقت. اشتق الصفة من speichern: يحفظ.",
          "solutionAr": "محفوظة"
        },
        {
          "type": "gap",
          "q": "Bewahren Sie Ihre ___ Karte sicher auf. (unterschreiben)",
          "a": [
            "unterschriebene"
          ],
          "why": "unterschreiben فعل شاذ → unterschrieben + e.",
          "qAr": "احفظ بطاقتك الـ___ بأمان. اشتق الصفة من unterschreiben: يوقّع.",
          "solutionAr": "موقّع؛ من Partizip II"
        },
        {
          "type": "gap",
          "q": "Der ___ Betrag kommt innerhalb eines Tages beim Empfänger an. (überweisen)",
          "a": [
            "überwiesene"
          ],
          "why": "überweisen → überwiesen (من غير ge لأنه بيبدأ بـ über- غير منفصلة) + e بعد der.",
          "qAr": "المبلغ الـ___ بيوصل للمستلم خلال يوم. اشتق الصفة من überweisen: يحوّل.",
          "solutionAr": "محوّل"
        },
        {
          "type": "transform",
          "q": "Mit Partizip II: die Rechnung, die bezahlt wurde",
          "a": [
            "die bezahlte Rechnung"
          ],
          "why": "bezahlt + e قبل الاسم: die bezahlte Rechnung.",
          "qAr": "استخدم Partizip II كصفة: الفاتورة التي تم دفعها.",
          "solutionAr": "الفاتورة المدفوعة."
        },
        {
          "type": "transform",
          "q": "Mit Partizip II: das Fahrrad, das repariert wurde",
          "a": [
            "das reparierte Fahrrad"
          ],
          "why": "الأفعال اللي بتخلص بـ -ieren مالهاش ge: repariert → das reparierte Fahrrad.",
          "qAr": "استخدم Partizip II كصفة: العجلة التي تم إصلاحها.",
          "solutionAr": "العجلة التي تم إصلاحها."
        },
        {
          "type": "truefalse",
          "q": "„Hier ist der gedruckte Kontoauszug.“ – Das bedeutet: Der Kontoauszug wurde schon gedruckt.",
          "a": true,
          "why": "صح: الـ Partizip II معناه إن الحاجة اتعملت خلاص.",
          "qAr": "«هنا كشف الحساب المطبوع»: يعني إن كشف الحساب تم طباعته بالفعل."
        },
        {
          "type": "error",
          "q": "Ich habe die bestellte Kleidung und den kopierte Pass dabei.",
          "a": [
            "Ich habe die bestellte Kleidung und den kopierten Pass dabei."
          ],
          "why": "بعد den في المذكر مفعول به النهاية -en: den kopierten Pass.",
          "qAr": "صحّح نهاية الصفة في الجملة الألمانية. المعنى: معايا الملابس المطلوبة وجواز السفر المنسوخ.",
          "solutionAr": "معايا الملابس اللي طلبتها وصورة جواز السفر."
        },
        {
          "type": "order",
          "prefix": "Hast du die Sachen schon gekauft? – Ja,",
          "words": [
            "gelegt",
            "die",
            "habe",
            "Auto",
            "gekauften",
            "ich",
            "ins",
            "Sachen"
          ],
          "a": [
            "ich habe die gekauften Sachen ins Auto gelegt",
            "die gekauften Sachen habe ich ins Auto gelegt"
          ],
          "why": "die gekauften Sachen = الحاجات اللي اتشترت، و gelegt في آخر الجملة.",
          "qAr": "رتّب الكلمات لإكمال: اشتريت الحاجات بالفعل؟ أيوه، ...",
          "solutionAr": "اشتريت الحاجات بالفعل؟ أيوه، حطّيت الحاجات اللي اشتريتها في العربية."
        },
        {
          "type": "transform",
          "q": "Antworten Sie mit Partizip II: Hast du den Vertrag schon unterschrieben? – Ja, hier ist ...",
          "a": [
            "Ja, hier ist der unterschriebene Vertrag.",
            "Hier ist der unterschriebene Vertrag.",
            "der unterschriebene Vertrag"
          ],
          "why": "der Vertrag مذكر وفاعل → der unterschriebene Vertrag.",
          "qAr": "جاوب بـ Partizip II كصفة: وقّعت العقد بالفعل؟ أيوه، هنا ...",
          "solutionAr": "أيوه، هنا العقد الموقّع."
        }
      ]
    },
    {
      "id": "b1-k12-partizip-i-adjektiv",
      "t": "Partizip I als Adjektiv",
      "tAr": "اسم الفاعل (Partizip I) كصفة",
      "summary": "Das <b>Partizip I</b> bildet man mit <b>Infinitiv + d</b>: <i>steigen → steigend</i>. Es hat eine <b>aktive</b> Bedeutung: Die Handlung <b>passiert gerade</b>. Vor einem Nomen bekommt es die normalen <b>Adjektivendungen</b>: <i>steigende Preise</i>.",
      "summaryAr": "الـ Partizip I = المصدر + d. معناه إن الحاجة «بتحصل دلوقتي» أو الشخص «بيعمل» الحاجة: steigende Preise = أسعار بتزيد. وبياخد نهايات الصفات العادية.",
      "sections": [
        {
          "h": "1. Bildung",
          "hAr": "١. إزاي بنكوّنه",
          "text": "Man nimmt den <b>Infinitiv</b> und hängt <b>-d</b> an. Dann kommt die <b>Adjektivendung</b>. Auch trennbare Verben bleiben zusammen: <i>zunehmen → zunehmend</i>.",
          "ar": "خد المصدر وزوّد عليه -d، وبعدين نهاية الصفة. والأفعال اللي بتتفصل بتفضل لازقة: zunehmend.",
          "table": {
            "head": [
              "Infinitiv",
              "Partizip I",
              "Beispiel mit Nomen"
            ],
            "rows": [
              [
                "steigen",
                "steigend",
                "steigende Preise"
              ],
              [
                "sinken",
                "sinkend",
                "die sinkenden Preise"
              ],
              [
                "wachsen",
                "wachsend",
                "auf dem wachsenden Weltmarkt"
              ],
              [
                "überzeugen",
                "überzeugend",
                "ein überzeugendes Argument"
              ],
              [
                "zunehmen",
                "zunehmend",
                "der zunehmende Austausch"
              ],
              [
                "lachen",
                "lachend",
                "lachende Menschen"
              ],
              [
                "telefonieren",
                "telefonierend",
                "eine telefonierende Frau"
              ]
            ],
            "headAr": [
              "المصدر",
              "اسم الفاعل النحوي",
              "مثال مع اسم"
            ],
            "rowsAr": [
              [
                "يرتفع",
                "يرتفع حاليًا",
                "أسعار في ارتفاع"
              ],
              [
                "ينخفض",
                "ينخفض حاليًا",
                "الأسعار التي تنخفض"
              ],
              [
                "ينمو",
                "ينمو حاليًا",
                "في السوق العالمية المتنامية"
              ],
              [
                "يقنع",
                "مقنع",
                "حجة مقنعة"
              ],
              [
                "يزداد",
                "متزايد",
                "التبادل المتزايد"
              ],
              [
                "يضحك",
                "ضاحك",
                "ناس بيضحكوا"
              ],
              [
                "يتحدث هاتفيًا",
                "يتحدث هاتفيًا حاليًا",
                "سيدة بتتكلم في التليفون"
              ]
            ]
          }
        },
        {
          "h": "2. Bedeutung: aktiv und gleichzeitig",
          "hAr": "٢. المعنى: فاعل وفي نفس الوقت",
          "text": "Ein Partizip I ersetzt einen <b>aktiven Relativsatz im Präsens</b>: <i>Preise, die steigen → steigende Preise</i>. Das Partizip II beschreibt dagegen etwas <b>Passives oder Abgeschlossenes</b>.",
          "ar": "الـ Partizip I بيحل محل جملة صلة في المضارع المبني للمعلوم: «أسعار بتزيد». أما الـ Partizip II فمعناه إن الحاجة اتعملت أو خلصت. قارن: das kochende Wasser (مية بتغلي) و das gekochte Ei (بيضة مسلوقة).",
          "table": {
            "head": [
              "Partizip I (passiert gerade)",
              "Partizip II (passiv / abgeschlossen)"
            ],
            "rows": [
              [
                "das kochende Wasser (das Wasser kocht)",
                "das gekochte Ei (das Ei wurde gekocht)"
              ],
              [
                "die steigenden Preise (sie steigen jetzt)",
                "die gestiegenen Preise (sie sind gestiegen)"
              ],
              [
                "ein schlafendes Kind (es schläft)",
                "ein repariertes Auto (es wurde repariert)"
              ]
            ],
            "headAr": [
              "اسم الفاعل: فعل يحدث حاليًا",
              "التصريف الثالث: مبني للمجهول أو فعل مكتمل"
            ],
            "rowsAr": [
              [
                "الماء الذي يغلي حاليًا",
                "البيضة التي تم سلقها"
              ],
              [
                "الأسعار التي ترتفع الآن",
                "الأسعار التي ارتفعت بالفعل"
              ],
              [
                "طفل نائم حاليًا",
                "سيارة تم إصلاحها"
              ]
            ]
          },
          "examples": [
            [
              "Wegen der wachsenden Konkurrenz müssen kleine Firmen schließen.",
              "بسبب المنافسة اللي بتزيد، شركات صغيرة لازم تقفل."
            ],
            [
              "Ich habe heute viele lachende Menschen gesehen.",
              "النهارده شفت ناس كتير بتضحك."
            ]
          ]
        },
        {
          "h": "3. Endungen und typische Ausdrücke",
          "hAr": "٣. النهايات وتعبيرات مشهورة",
          "text": "Die Endungen sind dieselben wie bei Adjektiven: <i>der zunehmend<b>e</b> Austausch, wegen der produzierend<b>en</b> Fabriken, ein überzeugend<b>es</b> Argument</i>. In Broschüren liest man oft: <i>die beiliegende Karte, die hinter Ihnen stehenden Personen</i>.",
          "ar": "النهايات زي أي صفة بالظبط. وفي الكتيّبات والخطابات الرسمية هتقرا كتير: die beiliegende Karte (الكارت المرفق) و die hinter Ihnen stehenden Personen (الناس اللي واقفين وراك).",
          "examples": [
            [
              "Wichtige Hinweise finden Sie auf der beiliegenden Notfallkarte.",
              "هتلاقي ملاحظات مهمة على كارت الطوارئ المرفق."
            ],
            [
              "Achten Sie auf die hinter Ihnen stehenden Personen.",
              "خد بالك من الناس اللي واقفين وراك."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "steigene Preise",
          "right": "steigende Preise",
          "ar": "الـ Partizip I محتاج الـ d: steigen + d + e."
        },
        {
          "wrong": "ein überzeugende Argument",
          "right": "ein überzeugendes Argument",
          "ar": "بعد ein في المحايد النهاية -es."
        },
        {
          "wrong": "Ich habe lachend Menschen gesehen.",
          "right": "Ich habe lachende Menschen gesehen.",
          "ar": "قبل الاسم لازم نهاية صفة: lachende Menschen."
        },
        {
          "wrong": "die gestiegenden Preise",
          "right": "die steigenden Preise / die gestiegenen Preise",
          "ar": "ماتخلطش الاتنين: Partizip I = steigend، Partizip II = gestiegen."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "Wegen der ___ Konkurrenz müssen viele Firmen schließen.",
          "o": [
            "wachsenden",
            "gewachsen",
            "wachsende"
          ],
          "a": 0,
          "why": "wegen + Genitiv، وبعد der في المؤنث جينتيف النهاية -en: der wachsenden Konkurrenz.",
          "qAr": "بسبب المنافسة الـ___ شركات كتير مضطرة تقفل.",
          "oAr": [
            "متنامٍ؛ بصيغ مختلفة للصفة",
            "نما؛ التصريف الثالث",
            "متنامٍ؛ بصيغ مختلفة للصفة"
          ]
        },
        {
          "type": "choice",
          "q": "Das ist wirklich ein ___ Argument.",
          "o": [
            "überzeugtes",
            "überzeugendes",
            "überzeugende"
          ],
          "a": 1,
          "why": "الحجة هي اللي «بتقنع» → Partizip I، وبعد ein في المحايد -es.",
          "qAr": "دي فعلًا حجة ___ .",
          "oAr": [
            "مقتنع",
            "مقنع؛ بصيغ مختلفة للصفة",
            "مقنع؛ بصيغ مختلفة للصفة"
          ]
        },
        {
          "type": "choice",
          "q": "Ich habe heute im Bus eine ___ Frau gesehen.",
          "o": [
            "telefonierte",
            "telefonierender",
            "telefonierende"
          ],
          "a": 2,
          "why": "الست «بتتكلم في التليفون» دلوقتي → Partizip I، وبعد eine النهاية -e.",
          "qAr": "شفت النهارده في الأتوبيس سيدة ___ .",
          "oAr": [
            "صيغة مشتقة من فعل يتحدث هاتفيًا",
            "يتحدث هاتفيًا حاليًا؛ بحسب الإعراب",
            "يتحدث هاتفيًا حاليًا؛ بحسب الإعراب"
          ]
        },
        {
          "type": "gap",
          "q": "Die ___ Preise freuen die Verbraucher. (sinken)",
          "a": [
            "sinkenden"
          ],
          "why": "sinken + d = sinkend، وفي الجمع بعد die النهاية -en.",
          "qAr": "الأسعار الـ___ بتفرّح المستهلكين. اشتق الصفة من sinken: ينخفض.",
          "solutionAr": "منخفضة حاليًا"
        },
        {
          "type": "gap",
          "q": "Der ___ Austausch zwischen den Ländern ist ein Vorteil. (zunehmen)",
          "a": [
            "zunehmende"
          ],
          "why": "zunehmen + d = zunehmend، وبعد der في الفاعل -e.",
          "qAr": "التبادل الـ___ بين البلاد ميزة. اشتق الصفة من zunehmen: يزداد.",
          "solutionAr": "متزايد"
        },
        {
          "type": "gap",
          "q": "Wichtige Hinweise finden Sie auf der ___ Notfallkarte. (beiliegen)",
          "a": [
            "beiliegenden"
          ],
          "why": "auf + Dativ، وبعد der في المؤنث داتيف -en: der beiliegenden Karte.",
          "qAr": "هتلاقي تعليمات مهمة في بطاقة الطوارئ الـ___ . اشتق الصفة من beiliegen: يكون مرفقًا.",
          "solutionAr": "مرفقة"
        },
        {
          "type": "transform",
          "q": "Mit Partizip I: Kinder, die spielen",
          "a": [
            "spielende Kinder"
          ],
          "why": "spielen + d = spielend، ومن غير أداة في الجمع النهاية -e.",
          "qAr": "استخدم Partizip I كصفة: أطفال يلعبون.",
          "solutionAr": "أطفال بيلعبوا."
        },
        {
          "type": "transform",
          "q": "Mit Partizip I: die Fabriken, die produzieren",
          "a": [
            "die produzierenden Fabriken"
          ],
          "why": "produzieren + d، وبعد die في الجمع النهاية -en.",
          "qAr": "استخدم Partizip I كصفة: المصانع التي تنتج.",
          "solutionAr": "المصانع التي تنتج."
        },
        {
          "type": "truefalse",
          "q": "„steigende Preise“ bedeutet: Die Preise steigen gerade.",
          "a": true,
          "why": "صح: الـ Partizip I معناه إن الحاجة بتحصل دلوقتي.",
          "qAr": "steigende Preise معناها إن الأسعار بترتفع حاليًا."
        },
        {
          "type": "truefalse",
          "q": "„das gekochte Wasser“ und „das kochende Wasser“ bedeuten dasselbe.",
          "a": false,
          "why": "غلط: kochend = بتغلي دلوقتي، gekocht = اتغلت خلاص.",
          "qAr": "«الماء الذي تم غليه» و«الماء الذي يغلي» لهما نفس المعنى. هل العبارة صحيحة؟"
        },
        {
          "type": "error",
          "q": "Achten Sie auf die hinter Ihnen stehende Personen.",
          "a": [
            "Achten Sie auf die hinter Ihnen stehenden Personen."
          ],
          "why": "في الجمع بعد die النهاية -en: stehenden.",
          "qAr": "صحّح نهاية الصفة في الجملة الألمانية. المعنى: انتبه للأشخاص الواقفين خلفك.",
          "solutionAr": "انتبه للأشخاص الواقفين خلفك."
        },
        {
          "type": "order",
          "prefix": "Ich habe heute",
          "words": [
            "gesehen",
            "Menschen",
            "lachende",
            "viele"
          ],
          "a": [
            "viele lachende Menschen gesehen"
          ],
          "why": "الصفة lachende قبل الاسم Menschen، و gesehen في الآخر.",
          "qAr": "رتّب الكلمات لإكمال: أنا النهارده ...",
          "solutionAr": "شفت النهارده ناس كتير بيضحكوا."
        }
      ]
    },
    {
      "id": "b1-k12-hin-her",
      "t": "Verben mit hin- und her-",
      "tAr": "أفعال بـ hin- و her- (الاتجاه)",
      "summary": "Die Präfixe <b>her-</b> und <b>hin-</b> zeigen die <b>Richtung</b>: <b>her-</b> = zum Sprecher, <b>hin-</b> = vom Sprecher weg. Oft kommt eine Präposition dazu: <b>herein, hinaus, herauf, hinunter</b>. Umgangssprachlich: <b>rein, raus, rauf, runter</b>.",
      "summaryAr": "her- يعني الحركة ناحية اللي بيتكلم، و hin- يعني بعيد عنه. وكتير بتيجي معاها حرف جر: herein, hinaus. وفي الكلام العادي بنقول rein, raus, rauf, runter.",
      "sections": [
        {
          "h": "1. Die Grundregel",
          "hAr": "١. القاعدة الأساسية",
          "text": "Wichtig ist immer, <b>wo der Sprecher ist</b>. Kommt die Bewegung <b>zu mir</b>, nimmt man <b>her-</b>. Geht die Bewegung <b>von mir weg</b>, nimmt man <b>hin-</b>.",
          "ar": "أهم حاجة: إنت فين؟ لو الحركة جاية ناحيتك استخدم her-، ولو رايحة بعيد عنك استخدم hin-. Komm her! = تعالى هنا. Geh hin! = روح هناك.",
          "table": {
            "head": [
              "Präfix",
              "Richtung",
              "Beispiel"
            ],
            "rows": [
              [
                "her-",
                "zum Sprecher hin",
                "Komm bitte her!"
              ],
              [
                "hin-",
                "vom Sprecher weg",
                "Wir fahren morgen hin."
              ]
            ],
            "headAr": [
              "البادئة",
              "الاتجاه",
              "مثال"
            ],
            "rowsAr": [
              [
                "باتجاه المتكلم",
                "ناحية المتكلم",
                "تعال هنا لو سمحت!"
              ],
              [
                "بعيدًا عن المتكلم",
                "في اتجاه بعيد عن المتكلم",
                "هنروح هناك بكرة."
              ]
            ]
          },
          "examples": [
            [
              "Komm doch mal her, ich zeige dir mein Online-Banking.",
              "تعالى هنا، هوريك الأونلاين بانكينج بتاعي."
            ],
            [
              "Die Bank ist gleich da vorne. Ich gehe schnell hin.",
              "البنك قدام على طول. هروح بسرعة."
            ]
          ]
        },
        {
          "h": "2. Mit Präpositionen",
          "hAr": "٢. مع حروف الجر",
          "text": "Oft verbindet man <b>her/hin</b> mit einer Präposition. Im Alltag sagt man meistens die <b>Kurzform</b> mit <b>r-</b>, egal ob her oder hin.",
          "ar": "غالبًا her و hin بيتركبوا مع حرف جر. وفي الكلام اليومي الناس بتقول الصيغة القصيرة بـ r- من غير ما تفرق بين her و hin.",
          "table": {
            "head": [
              "Präposition",
              "her- (zu mir)",
              "hin- (weg von mir)",
              "Umgangssprache"
            ],
            "rows": [
              [
                "auf (nach oben)",
                "herauf",
                "hinauf",
                "rauf"
              ],
              [
                "unter (nach unten)",
                "herunter",
                "hinunter",
                "runter"
              ],
              [
                "ein (nach drinnen)",
                "herein",
                "hinein",
                "rein"
              ],
              [
                "aus (nach draußen)",
                "heraus",
                "hinaus",
                "raus"
              ],
              [
                "über (auf die andere Seite)",
                "herüber",
                "hinüber",
                "rüber"
              ]
            ],
            "headAr": [
              "حرف الجر",
              "الحركة ناحيتي",
              "الحركة بعيدًا عني",
              "اللغة العامية"
            ],
            "rowsAr": [
              [
                "إلى أعلى",
                "إلى أعلى ناحية المتكلم",
                "إلى أعلى بعيدًا عن المتكلم",
                "فوق بالعامية"
              ],
              [
                "إلى أسفل",
                "إلى أسفل ناحية المتكلم",
                "إلى أسفل بعيدًا عن المتكلم",
                "تحت بالعامية"
              ],
              [
                "إلى الداخل",
                "إلى الداخل ناحية المتكلم",
                "إلى الداخل بعيدًا عن المتكلم",
                "جوه بالعامية"
              ],
              [
                "إلى الخارج",
                "إلى الخارج ناحية المتكلم",
                "إلى الخارج بعيدًا عن المتكلم",
                "برّه بالعامية"
              ],
              [
                "إلى الجانب الآخر",
                "إلى الجانب الآخر ناحية المتكلم",
                "إلى الجانب الآخر بعيدًا عن المتكلم",
                "للناحية التانية بالعامية"
              ]
            ]
          }
        },
        {
          "h": "3. Perspektive: oben, unten, drinnen, draußen",
          "hAr": "٣. وجهة النظر: فوق، تحت، جوه، بره",
          "text": "Derselbe Weg kann <b>her-</b> oder <b>hin-</b> sein – es kommt auf den Sprecher an. Die Verben sind <b>trennbar</b>: <i>Ich komme gleich herunter.</i>",
          "ar": "نفس الطريق ممكن يبقى her- أو hin- حسب مكانك إنت. ولو إنت فوق بتقول herauf، ولو إنت تحت بتقول hinauf. والأفعال دي بتتفصل: Ich komme gleich herunter.",
          "examples": [
            [
              "(Sprecher ist oben) Komm herauf, dann müssen wir nicht so laut reden.",
              "(أنا فوق) اطلع لي، علشان مانتكلمش بصوت عالي كده."
            ],
            [
              "(Sprecher ist unten) Ich kann nicht hinaufkommen, die Tür ist zu.",
              "(أنا تحت) مش هقدر أطلع، الباب مقفول."
            ],
            [
              "(Sprecher ist drinnen) Einen Moment, ich lasse dich gleich herein.",
              "(أنا جوه) لحظة، هدخّلك حالًا."
            ]
          ]
        }
      ],
      "pitfalls": [
        {
          "wrong": "(Ich bin in der Wohnung) Komm hinein!",
          "right": "Komm herein!",
          "ar": "إنت جوه والحركة جاية ناحيتك، يبقى herein مش hinein."
        },
        {
          "wrong": "Ich hereinkomme gleich.",
          "right": "Ich komme gleich herein.",
          "ar": "الأفعال دي بتتفصل، والبادئة بتروح آخر الجملة."
        },
        {
          "wrong": "(Ich bin unten) Kannst du mal hinunterkommen?",
          "right": "Kannst du mal herunterkommen?",
          "ar": "إنت تحت والشخص هيجي ناحيتك، يبقى herunter."
        }
      ],
      "exercises": [
        {
          "type": "choice",
          "q": "(Sprecherin ist im Garten) Kommst du auch ___?",
          "o": [
            "heraus",
            "hinaus",
            "hinein"
          ],
          "a": 0,
          "why": "هي بره في الجنينة والشخص هيخرج ناحيتها → heraus.",
          "qAr": "المتحدثة في الجنينة: إنت جاي ___ كمان؟",
          "oAr": [
            "إلى الخارج ناحية المتكلم",
            "إلى الخارج بعيدًا عن المتكلم",
            "إلى الداخل بعيدًا عن المتكلم"
          ]
        },
        {
          "type": "choice",
          "q": "(Sprecher ist unten) Ich kann nicht ___, die Tür ist zu.",
          "o": [
            "heraufkommen",
            "herunterkommen",
            "hinaufkommen"
          ],
          "a": 2,
          "why": "هو تحت وعايز يطلع لفوق بعيد عنه → hinaufkommen.",
          "qAr": "المتحدث في الأسفل: مش قادر ___، الباب مقفول.",
          "oAr": [
            "يأتي إلى أعلى ناحية المتكلم",
            "يأتي إلى أسفل ناحية المتكلم",
            "يصعد بعيدًا عن المتكلم"
          ]
        },
        {
          "type": "choice",
          "q": "(Mutter steht vor dem Haus) Die Kinder laufen schnell ins Haus ___.",
          "o": [
            "herein",
            "hinein",
            "heraus"
          ],
          "a": 1,
          "why": "الأم بره والعيال داخلين جوه بعيد عنها → hinein.",
          "qAr": "الأم واقفة خارج البيت: الأطفال بيجروا بسرعة ___ داخل البيت.",
          "oAr": [
            "إلى الداخل ناحية المتكلم",
            "إلى الداخل بعيدًا عن المتكلم",
            "إلى الخارج ناحية المتكلم"
          ]
        },
        {
          "type": "gap",
          "q": "(Sprecher ist drinnen) Einen Moment bitte, ich lasse dich gleich ___.",
          "a": [
            "herein",
            "rein"
          ],
          "why": "هو جوه والشخص هييجي ناحيته → herein (أو بالعامي rein).",
          "qAr": "المتحدث داخل المكان: لحظة لو سمحت، هدخّلك ___ حالًا.",
          "solutionAr": "إلى الداخل ناحية المتكلم"
        },
        {
          "type": "gap",
          "q": "(Sprecherin ist oben) Ich kann gerade nicht ___kommen, ich arbeite.",
          "a": [
            "hinunter",
            "runter"
          ],
          "why": "هي فوق وعايزة تنزل بعيد عن مكانها → hinunter (أو runter).",
          "qAr": "المتحدثة فوق: مش قادرة آجي ___ دلوقتي، أنا بشتغل.",
          "solutionAr": "إلى أسفل بعيدًا عن المتكلم"
        },
        {
          "type": "truefalse",
          "q": "„her-“ bedeutet: Die Bewegung geht zum Sprecher hin.",
          "a": true,
          "why": "صح: her- = ناحية اللي بيتكلم.",
          "qAr": "her- معناها إن الحركة في اتجاه المتكلم."
        },
        {
          "type": "truefalse",
          "q": "„Geh hinaus!“ bedeutet: Komm zu mir.",
          "a": false,
          "why": "غلط: hinaus يعني اطلع بره بعيد عني.",
          "qAr": "Geh hinaus! معناها «تعال عندي». هل العبارة صحيحة؟"
        },
        {
          "type": "order",
          "words": [
            "herein",
            "Sie",
            "doch",
            "Kommen"
          ],
          "a": [
            "Kommen Sie doch herein"
          ],
          "why": "جملة أمر: الفعل Kommen في الأول، والبادئة herein في الآخر.",
          "qAr": "رتّب الكلمات لتكوين جملة صحيحة.",
          "solutionAr": "اتفضّل ادخل."
        },
        {
          "type": "transform",
          "q": "Sagen Sie es umgangssprachlich: Kommst du herunter?",
          "a": [
            "Kommst du runter?"
          ],
          "why": "herunter في الكلام العادي بتبقى runter.",
          "qAr": "قول بالعامية الألمانية: هتنزل؟",
          "solutionAr": "هتنزل؟"
        },
        {
          "type": "transform",
          "q": "Sagen Sie es umgangssprachlich: Gehst du hinaus?",
          "a": [
            "Gehst du raus?"
          ],
          "why": "hinaus في الكلام العادي بتبقى raus.",
          "qAr": "قول بالعامية الألمانية: هتخرج؟",
          "solutionAr": "هتخرج؟"
        },
        {
          "type": "error",
          "q": "(Sprecherin ist in der Küche) Komm doch hinein, das Essen ist fertig!",
          "a": [
            "Komm doch herein, das Essen ist fertig!",
            "Komm doch rein, das Essen ist fertig!"
          ],
          "why": "هي جوه المطبخ والحركة ناحيتها → herein.",
          "qAr": "صحّح اتجاه الحركة: المتحدثة في المطبخ وبتقول «تعال جوه، الأكل جاهز!»",
          "solutionAr": "تعال جوه، الأكل جاهز!"
        },
        {
          "type": "error",
          "q": "Ich hinausgehe kurz.",
          "a": [
            "Ich gehe kurz hinaus.",
            "Ich gehe kurz raus."
          ],
          "why": "hinausgehen فعل بيتفصل: gehe في المكان التاني و hinaus في الآخر.",
          "qAr": "صحّح ترتيب الجملة الألمانية. المعنى: هخرج شوية.",
          "solutionAr": "هخرج شوية."
        }
      ]
    }
  ]
});
