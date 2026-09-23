/* ===================== flashcards ===================== */
const VOCAB_VISUAL_RULES = [
  [/u-bahn|مترو/,"🚇"],[/straßenbahn|ترام/,"🚊"],[/haltestelle|موقف|محطة/,"🚏"],
  [/bahnsteig|gleis|رصيف|سكة/,"🚉"],[/verspät|تأخير|rechtzeitig|pünktlich|ميعاد/,"⏱️"],
  [/stau|زحمة/,"🚗🚙"],[/baustelle|أعمال|تصليح طريق/,"🚧"],[/einsteigen|يركب/,"🚪⬆️"],
  [/aussteigen|ينزل/,"🚪⬇️"],[/umsteigen|يغيّر المواصلة/,"🔄🚆"],[/verpassen|تفوته/,"🏃💨"],
  [/fahrplan|zeitplan|terminplaner|جدول/,"🗓️"],[/fahrkarte|eintrittskarte|monatskarte|تذكرة|اشتراك/,"🎫"],
  [/führerschein|رخصة/,"🪪"],[/leihrad|fahrrad|عجلة/,"🚲"],[/kreuzung|تقاطع/,"➕🛣️"],
  [/ampel|إشارة المرور/,"🚦"],[/abbiegen|umleitung|umleiten|تحويل|ينعطف/,"↪️"],
  [/geradeaus|مستقيم|على طول/,"⬆️"],[/weg besch|wegbeschreibung|وصف الطريق/,"🗺️"],
  [/fußgänger|مشاة/,"🚶"],[/ziel|هدف|وجهة/,"🎯"],[/kaution|ضمان|تأمين مالي/,"💶🔒"],
  [/kundenservice|خدمة العملاء/,"🎧"],[/reservier|يحجز/,"📅✅"],[/versichert|مؤم/,"🛡️"],
  [/computer|كمبيوتر/,"💻"],[/nähe|قريب|الجوار/,"📍"],[/tarif|تعريفة|السعر/,"💶"],
  [/kinderwagen|عربة أطفال/,"👶"],[/bistro|restaurant|مطعم/,"🍽️"],[/ausfahrt|مخرج الطريق/,"🛣️➡️"],
  [/sperrung|إغلاق/,"⛔"],[/abfahrt|مغادرة/,"🚆➡️"],[/ankunft|وصول/,"➡️🏁"],
  [/strecke|مسار|خط السير|verbindung/,"〰️🗺️"],[/verkehr|مواصلات|مرور/,"🚌"],
  [/öffentlich|عمومي|عام/,"🏙️"],[/unterwegs|في الطريق|متنقل/,"🧳"],
  [/vorteil|ميزة/,"👍"],[/nachteil|عيب/,"👎"],[/download|herunterladen|يحمّل/,"📱⬇️"],
  [/ausleihen|يستعير|zurückgeben|يرجّع/,"🤝📦"],

  [/prüfung|امتحان/,"📝"],[/bestehen|ينجح/,"✅🎓"],[/durchfallen|يرسب/,"❌📝"],
  [/lernen|lernstoff|stoff|يذاكر|يتعلم|المنهج/,"📚"],[/auswendig|يحفظ/,"🧠"],
  [/wiederholen|يراجع|يعيد/,"🔁"],[/konzentrier|يركّز/,"🎯👀"],[/vorbereit|يستعد/,"📋"],
  [/pause|استراحة/,"☕"],[/vokabel|مفردة/,"🔤"],[/karteikarte|فلاش كارد/,"🗂️"],
  [/wörterbuch|قاموس|nachschlagen|يبحث عن كلمة/,"📖🔎"],[/ratschlag|نصيحة/,"💡"],
  [/fehler|خطأ|غلطة/,"⚠️"],[/verbessern|يحسّن|يصحح/,"📈"],[/üben|يتدرب|يتمرن/,"✍️"],
  [/präsentation|vortrag|عرض تقديمي|محاضرة/,"📊"],[/publikum|جمهور/,"👥"],
  [/thema|موضوع/,"💬"],[/einleitung|مقدمة/,"🚪"],[/hauptteil|الجزء الرئيسي/,"🧱"],
  [/schluss|خاتمة/,"🏁"],[/deutlich|واضح/,"🔊"],[/nervös|متوتر|prüfungsangst|رهبة/,"😰"],
  [/notiz|ملاحظة|stichpunkt|نقطة مختصرة/,"🗒️"],[/zertifikat|شهادة/,"📜"],
  [/erfahrung|خبرة/,"🧭"],[/berufsalltag|روتين.*شغل/,"💼"],[/regel|قاعدة/,"📏"],
  [/beschriften|يلصق|markieren|علامة|لون/,"🏷️"],[/nachsprechen|يردد/,"🗣️"],
  [/blickkontakt|بصري/,"👀"],[/gliederung|هيكل|تقسيم/,"🧩"],[/rückmeldung|رأي|تغذية/,"💬✅"],
  [/folie|شريحة/,"🖥️"],[/lernstrategie|استراتيجية/,"♟️"],[/aussprache|النطق/,"👄"],
  [/zusammenfassung|ملخص/,"📝"],

  [/sportart|نوع رياضة|sport\b|الرياضة/,"🏅"],[/verein|نادي/,"🏟️"],[/training|trainieren|تمرين|يتدرب/,"🏋️"],
  [/mannschaft|teamgeist|فريق|روح الفريق/,"🤝⚽"],[/fan|مشجع|zuschauer|مشاهد/,"📣"],
  [/spiel|مباراة|finale|النهائي/,"⚽"],[/stadion|إستاد/,"🏟️"],[/gewinnen|sieg|فوز|يكسب/,"🏆"],
  [/verlieren|niederlage|خسر|هزيمة/,"😞"],[/tor\b|جول/,"🥅⚽"],[/wettkampf|مسابقة|منافسة/,"🏁"],
  [/teilnehmen|يشارك/,"🙋"],[/helm|خوذة/,"⛑️"],[/ausrüstung|معدات|عدّة/,"🎒"],
  [/mitglied|عضو/,"🪪👤"],[/begeisterung|حماس|jubeln|يهلل|anfeuern|يشجع/,"🙌"],
  [/hoffnung|hoffen|أمل|يأمل/,"🌟"],[/enttäusch|محبط|خيبة/,"😔"],[/verabred|موعد.*حد/,"🤝🕒"],
  [/vorschlag|vorschlagen|اقتراح|يقترح/,"💡💬"],[/zustimmen|يوافق/,"👍"],[/ablehnen|يرفض/,"🙅"],
  [/\bfit\b|لياق/,"💪"],[/bewegung|حركة/,"🏃"],[/schiedsrichter|الحكم/,"🧑‍⚖️⚽"],
  [/klappen|تنجح|schaffen|ينجز/,"✅"],[/kletter|تسلق/,"🧗"],[/aufgeregt|متحمس/,"😮"],
  [/mut machen|يشجّع شخص/,"🤗"],[/verletz|يُصاب/,"🤕"],[/aufwärmen|إحماء/,"🔥"],
  [/durchhalten|يصمد/,"💪⏳"],[/unentschieden|تعادل/,"🤝"],[/ausdauer|تحمّل/,"🏃‍♂️"],

  [/nachbar|الجيرة|الجار/,"🏘️"],[/mieter|مستأجر/,"🔑"],[/vermieter|صاحب البيت|مؤجّر/,"🏠🔑"],
  [/\bmiete|الإيجار/,"💶🏠"],[/lärm|ضوضاء|دوشة/,"🔊"],[/laut.*leise|عالي الصوت|هادئ/,"🔊🔉"],
  [/beschwer|يشتكي/,"😠💬"],[/stören|يزعج/,"🚫🔊"],[/entschuldig|يعتذر/,"🙏"],
  [/gefallen|معروف|خدمة/,"🤝"],[/gießen|يسقي/,"🪴💧"],[/briefkasten|صندوق البريد/,"📬"],
  [/treppenhaus|بيت السلم/,"🪜"],[/aufzug|أسانسير/,"🛗"],[/keller|بدروم|قبو/,"🏚️⬇️"],
  [/umziehen|umzug|يعزّل|انتقل.*بيت/,"🚚📦"],[/karton|كرتونة|kiste|صندوق/,"📦"],
  [/packen|auspacken|يوضّب/,"🧳"],[/einrichten|möbel|يأثث|أثاث/,"🛋️"],[/regal|رف/,"🗄️"],
  [/haustier|حيوان أليف/,"🐶"],[/füttern|يطعم/,"🥣🐾"],[/hausordnung|قواعد.*عمارة/,"📋🏠"],
  [/\bruhe|الهدوء|ruhezeit/,"🤫"],[/klingeln|يرن الجرس/,"🔔"],[/vorbeikommen|يزور/,"🚪👋"],
  [/kümmern|يهتم/,"🤲"],[/abstellen|يركن|يحط/,"🅿️"],[/erlauben|verboten|يسمح|ممنوع/,"✅🚫"],
  [/fest\b|حفلة|احتفال/,"🎉"],[/heimweh|الحنين/,"🏠💭"],[/wohngemeinschaft|wg-|سكن مشترك/,"🏠👥"],
  [/mitbewohner|زميل السكن/,"👥"],[/putzplan|التنظيف/,"🧹📅"],[/aufräumen|يرتّب/,"🧹"],
  [/müll|القمامة/,"🗑️"],[/rücksicht|يراعي|مراعاة/,"🤝"],[/zuverlässig|ملتزم|ثقة/,"✅🤝"],
  [/nebenkosten|مصاريف إضافية/,"🧾"],[/einziehen|ينتقل للسكن/,"📦🏠"],[/gemeinschaft|مجتمع مترابط/,"🫶"],

  [/\bzeit\b|الوقت/,"⏰"],[/freizeit|وقت الفراغ/,"🌤️"],[/vergehen|يمضي|dauern|يستغرق/,"⌛"],
  [/verbringen|يقضي.*وقت/,"🕰️"],[/stress|ضغط|مرهق/,"😵‍💫"],[/termin|موعد رسمي/,"📅"],
  [/kalender|أجندة/,"🗓️"],[/planen|plan\b|خطة|يخطط/,"📝"],[/wunsch|يتمنى|أمنية/,"✨"],
  [/traum|يحلم|حلم/,"💭"],[/pflicht|واجب|التزام/,"📌"],[/erholen|يستجم|يرتاح/,"🌴"],
  [/entspannen|يسترخي/,"🧘"],[/feierabend|بعد الشغل/,"🌇"],[/alltag|الحياة اليومية|روتين/,"🔄"],
  [/gewohnheit|عادة/,"🔁"],[/regelmäßig|بانتظام/,"📆"],[/selten|häufig|نادر|كثير/,"📊"],
  [/langeweile|ملل|langweilen/,"🥱"],[/genießen|يستمتع/,"😊"],[/ausflug|رحلة قصيرة/,"🚌🌳"],
  [/eilig|مستعجل/,"🏃⏱️"],[/verschieben|aufschieben|يؤجل/,"➡️📅"],[/wäsche|الغسيل/,"🧺"],
  [/ärgern|يتضايق/,"😤"],[/warten|يستنى/,"⌛"],[/freuen|فرحان|متشوق/,"😊"],
  [/sprichwort|مثل|حكمة/,"💬📜"],[/zeitdruck|ضغط الوقت/,"⏱️😣"],[/verschwenden|يضيّع الوقت/,"🗑️⏰"],
  [/lebensphase|مرحلة.*الحياة/,"🌱➡️🌳"],[/erinnerung|يتذكّر|ذكرى/,"📷💭"],[/priorität|أولوية/,"1️⃣"],
  [/erledigen|ينجز/,"✅📋"],[/vornehmen|ينوي/,"🎯"],[/verwirklichen|يحقق حلم/,"🌟🏁"],

  [/unterhaltung|ترفيه|تسلية/,"🎭"],[/musik|الموسيقى/,"🎵"],[/musiker|موسيقي/,"🎼"],
  [/band\b|فرقة موسيقية/,"🎸🥁"],[/lied|أغنية|hit\b/,"🎶"],[/text\b|النص|كلمات الأغنية/,"📄🎵"],
  [/melodie|اللحن/,"🎼"],[/rhythmus|الإيقاع/,"🥁"],[/konzert|حفلة موسيقية/,"🎤"],
  [/festival|مهرجان/,"🎪🎵"],[/bühne|مسرح/,"🎭"],[/auftritt|auftreten|عرض.*مسرح/,"🎤✨"],
  [/instrument|آلة موسيقية/,"🎻"],[/gitarre|جيتار/,"🎸"],[/klavier|بيانو/,"🎹"],
  [/schlagzeug|طبول|درامز/,"🥁"],[/singen|sänger|يغني|مغني/,"🎤"],[/stimme|الصوت/,"🗣️🎵"],
  [/berühmt|مشهور/,"⭐"],[/erfolg|نجاح/,"🏆"],[/album|ألبوم/,"💿"],[/musikstil|نوع الموسيقى/,"🎧"],
  [/rockig|melodisch|روك|لحني/,"🤘🎶"],[/gemälde|لوحة فنية/,"🖼️"],[/maler|رسام/,"🎨"],
  [/ausstellung|معرض/,"🖼️🏛️"],[/künstler|فنان/,"🧑‍🎨"],[/vordergrund|hintergrund|مقدمة الصورة|خلفية الصورة/,"🏞️"],
  [/beschreiben|يوصف/,"🗣️🖼️"],[/zeigen|يعرض|يوضح/,"👉"],[/leinwand|شاشة عرض|قماشية/,"🖼️"],
  [/bildrand|حافة الصورة/,"▣"],[/wirken|انطباع/,"💭"],[/live\b|مباشر/,"🔴"],
  [/refrain|لازمة/,"🔁🎵"],[/stimmung|الأجواء/,"✨"],[/ausverkauft|نفدت/,"🎫❌"],
  [/darstellen|يجسّد|يصور/,"🎨"],[/zugabe|أغنية إضافية/,"👏🎵"],[/handlung|حبكة|أحداث/,"🎬"],
  [/vorstellung|عرض سينمائي|مسرحي/,"🎟️🎭"],[/beeindruckend|مبهر/,"🤩"],[/empfehlen|ينصح|يرشح/,"👍💬"],
  [/rezension|مراجعة|نقد/,"⭐📝"],[/unterhaltsam|ممتع|مسلي/,"😄🎬"]
];

const STICKER_VISUAL_RULES = [
  [/sich erinnern|erinnerung/,"history"],[/streng/,"shield-alert"],[/\bfair\b/,"scale"],
  [/praktikum/,"badge"],[/meinung/,"messages-square"],[/sich melden/,"hand"],[/fehlen/,"user-minus"],
  [/medium|medien/,"radio"],[/vorteil/,"circle-plus"],[/nachteil/,"circle-minus"],
  [/zuverlässig/,"shield-check"],[/quelle/,"database"],[/hauptfigur/,"person-standing"],
  [/spannend/,"zap"],[/unterhaltsam/,"popcorn"],[/bewertung/,"chart-no-axes-column-increasing"],
  [/sich wundern/,"circle-alert"],[/aufgeregt|nervös/,"waves"],[/stolz/,"award"],
  [/anlass/,"calendar-heart"],[/sich bedanken/,"hand-heart"],[/stattfinden/,"calendar-check"],
  [/wünschen|wunsch/,"wand-sparkles"],[/ausweis|führerschein/,"id-card"],
  [/voraussetzung/,"list-checks"],[/rundgang/,"footprints"],[/selbstständig/,"user-cog"],
  [/anschluss/,"cable"],[/verbinden/,"link"],[/ausleihen/,"hand-coins"],
  [/ampel/,"signpost"],[/fußgänger/,"person-standing"],[/kaution/,"circle-dollar-sign"],
  [/nähe/,"locate-fixed"],[/bordbistro/,"sandwich"],[/ausfahrt/,"signpost-big"],
  [/sich verfahren/,"map-pin-off"],[/sperrung/,"octagon-x"],[/monatskarte/,"ticket-check"],
  [/abfahrt/,"clock-arrow-down"],[/ankunft/,"clock-arrow-up"],[/umleiten/,"route"],
  [/der verkehr\b/,"traffic-cone"],[/der stoff\b/,"layers"],[/vokabel/,"whole-word"],[/üben|nachsprechen/,"repeat-2"],
  [/die präsentation/,"projector"],[/thema/,"tags"],[/einleitung/,"text-cursor-input"],
  [/hauptteil/,"text"],[/der schluss|deutlich/,"scan-text"],[/regel/,"ruler"],
  [/rückmeldung/,"message-square-reply"],[/lernstrategie/,"workflow"],
  [/zusammenfassung/,"notebook-text"],[/markieren/,"highlighter"],
  [/trainieren/,"biceps-flexed"],[/mannschaft/,"users"],[/der fan/,"fan"],
  [/das spiel/,"gamepad-2"],[/stadion|das tor/,"goal"],[/verlieren/,"badge-x"],
  [/niederlage/,"trending-down"],[/helm/,"hard-hat"],[/ausrüstung/,"backpack"],
  [/begeisterung/,"flame"],[/jubeln/,"party-popper"],[/hoffnung|hoffen/,"sunrise"],
  [/vorschlag/,"message-square-plus"],[/ablehnen/,"thumbs-down"],[/schiedsrichter/,"badge-alert"],
  [/schaffen/,"trophy"],[/kletterwettbewerb/,"mountain"],[/mut machen/,"heart-handshake"],
  [/zuschauer/,"binoculars"],[/sich verletzen/,"bandage"],[/durchhalten/,"battery-full"],
  [/unentschieden/,"equal"],[/nachbar/,"fence"],[/nachbarschaft/,"building-2"],
  [/mieter/,"key"],[/vermieter/,"key-square"],[/die miete/,"receipt"],
  [/lärm/,"volume-2"],[/stören/,"bell-off"],[/sich entschuldigen/,"heart-handshake"],
  [/gefallen/,"hand-helping"],[/gießen/,"droplets"],[/keller/,"warehouse"],
  [/einrichten/,"sofa"],[/möbel/,"armchair"],[/regal/,"library"],[/füttern/,"utensils"],
  [/die ruhe\b/,"volume-off"],[/klingeln/,"bell-ring"],[/vorbeikommen/,"door-open"],
  [/sich kümmern/,"heart-handshake"],[/erlauben|verboten/,"shield-ban"],
  [/wohngemeinschaft/,"house-plus"],[/wg-kasse/,"piggy-bank"],[/putzplan/,"clipboard-check"],
  [/aufräumen/,"spray-can"],[/rücksicht/,"hand-heart"],[/ruhezeit/,"moon"],
  [/wg-casting/,"users-round"],[/gemeinschaft/,"network"],
  [/die zeit\b/,"clock"],[/vergehen/,"timer"],[/verbringen/,"hourglass"],
  [/stress/,"gauge"],[/planen/,"calendar-range"],[/der plan/,"map"],[/traum|träumen/,"cloud-moon"],
  [/pflicht/,"clipboard-list"],[/alltag/,"sunrise"],[/gewohnheit/,"repeat-2"],
  [/selten|häufig/,"chart-no-axes-column"],[/langeweile|sich langweilen/,"meh"],
  [/genießen/,"smile"],[/eilig/,"fast-forward"],[/wäsche/,"washing-machine"],
  [/warten/,"hourglass"],[/zeit verschwenden/,"clock-alert"],[/sich zeit nehmen/,"alarm-clock-plus"],
  [/lebensphase/,"milestone"],[/sich vornehmen/,"list-todo"],[/verwirklichen/,"badge-check"],
  [/unterhaltung/,"messages-square"],[/festival/,"tent"],[/auftreten/,"mic-vocal"],
  [/klavier/,"piano"],[/schlagzeug/,"drum"],[/singen/,"mic"],[/sänger/,"mic-vocal"],
  [/\bhit\b/,"disc-3"],[/album/,"album"],[/rockig|melodisch/,"radio-tower"],
  [/vordergrund.*hintergrund/,"layers-2"],[/leinwand/,"projector"],[/vordergrund/,"scan-line"],
  [/hintergrund/,"gallery-horizontal"],[/wirken/,"sparkles"],[/\blive\b/,"radio-tower"],
  [/refrain/,"repeat-2"],[/ausverkauft/,"ticket-x"],[/beeindruckend/,"sparkles"],
  [/freizeit|hobby|erholen|entspannen/,"sun"],
  [/empfehlen|empfehlung|vorschlagen|raten/,"thumbs-up"],
  [/mitbringen|abholen|liefern/,"package"],
  [/anmelden|registrieren|mitglied werden/,"user-plus"],
  [/erleben|erfahrung|abenteuer/,"sparkles"],
  [/tätigkeit|aktivität|beschäftigung/,"list-checks"],
  [/vorstellen|kennenlernen|person|ledig|verheiratet|mitschüler|kollege/,"user-round"],
  [/gemeinsam|gruppe|klasse|team|verein|gast|teilnehm|publikum|bewohner/,"users-round"],
  [/verabred|einverstanden|zusag|handschlag|zusammenarbeit/,"handshake"],
  [/termin|kalender|öffnungszeit|stundenplan|zeitplan/,"calendar-days"],
  [/verschieb|absag|aufschieb|plan ändern/,"calendar-clock"],
  [/pünktlich|verspät|rechtzeitig|zeitdruck|dauer/,"alarm-clock"],
  [/treffpunkt|wohnort|heimat|ort\b|adresse/,"map-pin"],
  [/reservieren|reservierung/,"calendar-check"],
  [/speisekarte|menü/,"notebook-tabs"],
  [/gericht|mahlzeit/,"chef-hat"],
  [/bedienung|kellner/,"concierge-bell"],
  [/vegetarisch|gemüse/,"leaf"],
  [/restaurant|bestellen/,"utensils"],
  [/suppe|essen|lecker|schmecken|satt/,"soup"],
  [/rechnung|trinkgeld|quittung/,"receipt"],
  [/konto|bankkarte|überweisen|einzahlen|abheben|gehalt|geld/,"wallet-cards"],
  [/schule|grundschule|realschule|gymnasium|berufsschule/,"school"],
  [/abschluss|zeugnis|universität|studium|ausbildung|lehre/,"graduation-cap"],
  [/unterricht|schulfach|lernstoff|lesen|buch|wörterbuch/,"book-open"],
  [/hausaufgabe|note|notiz|karteikarte|stichpunkt/,"notebook-pen"],
  [/präsentier|vortrag|gliederung|folie/,"presentation"],
  [/beruf|stelle|arbeit|bewerbung|arbeitgeber|arbeitsplatz/,"briefcase-business"],
  [/betrieb|firma|abteilung|schicht|werkstatt/,"factory"],
  [/prüfung|bestehen|qualifikation|zertifikat/,"file-check-2"],
  [/durchfallen|fehler|falsch|absage/,"circle-x"],
  [/verbessern|erfolg|stärke|leistung/,"badge-check"],
  [/computer|laptop|digital|online|internet|app/,"laptop"],
  [/smartphone|handy|telefonnummer|nachricht/,"smartphone"],
  [/tablet|bildschirm|gerät/,"tablet"],
  [/herunterladen|download/,"cloud-download"],[/hochladen|upload/,"cloud-upload"],
  [/chatten|kommentar|sich unterhalten|gespräch/,"message-circle"],
  [/teilen|weitergeben/,"share-2"],[/speichern/,"save"],[/löschen|müll/,"trash-2"],
  [/suchen|suchmaschine|nachschlagen/,"search"],
  [/film\b|kino|handlung|rolle|schauspiel/,"film"],[/vorstellung|szene|video/,"clapperboard"],
  [/bewerten|rezension|berühmt/,"star"],
  [/gefühl|liebe|freuen|herzlich/,"heart"],[/lustig|fröhlich|glücklich/,"smile"],
  [/traurig|enttäusch|langweilig|heimweh/,"frown"],[/wütend|ärger|beschwer/,"angry"],
  [/feier|fest\b|stimmung|glückwunsch|gratulieren/,"party-popper"],
  [/geschenk|überrasch/,"gift"],[/geburtstag|kuchen/,"cake-slice"],
  [/einladung|e-mail|brief|post/,"mail"],[/beitrag|blog|veröffentlichen|bericht/,"newspaper"],
  [/behörde|bürgerbüro|öffentlich|innenstadt|stadt/,"building-2"],
  [/museum|sehenswürdigkeit|schloss|kulturzentrum/,"landmark"],
  [/formular|antrag|lebenslauf|unterlagen|dokument/,"file-text"],
  [/unterschreib/,"signature"],[/preis|tarif|kosten|eintritt/,"badge-euro"],
  [/bargeld|bezahlen|zahlen/,"banknote"],
  [/stadtplan|führung|weg besch|kreuzung|abbiegen/,"map-pinned"],
  [/straßenbahn|tram/,"tram-front"],
  [/bus|haltestelle|verkehrsmittel/,"bus-front"],
  [/auto|wagen|parken/,"car"],
  [/stau|baustelle|umleitung/,"traffic-cone"],
  [/einsteigen/,"log-in"],[/aussteigen/,"log-out"],
  [/verpassen/,"circle-x"],[/erreichen/,"target"],
  [/zug|bahn|gleis|fahrplan|fahrkarte|umsteigen|abfahren|ankommen/,"train-front"],
  [/verbindung|strecke|umleitung|direkt|route/,"route"],
  [/telefon|anrufen|zurückrufen|durchstellen/,"phone-call"],
  [/hinterlassen|telefonnotiz/,"voicemail"],[/kundenservice|erreichbar/,"headset"],
  [/hören|aussprache|stimme|laut|leise/,"audio-lines"],
  [/musik|melodie|rhythmus|lied/,"music"],[/gitarre|band\b|instrument/,"guitar"],
  [/haus|wohnung|wohnen|viertel|umzieh|einziehen/,"house"],
  [/karton|kiste|packen|auspacken|transport/,"boxes"],[/schlüssel|zugang|passwort/,"key-round"],
  [/sport|training|fit\b|bewegung|aufwärmen/,"dumbbell"],
  [/wettkampf|medaille|finale|gewinnen|sieg/,"medal"],
  [/ziel|priorität|konzentrier|zuständig|verantwortlich/,"target"],
  [/idee|ratschlag|tipp|erklären|verstehen/,"lightbulb"],
  [/foto|fotograf|erinnerung|kamera/,"camera"],[/café|pause|gemütlich/,"coffee"],
  [/fahrrad|leihrad|radtour/,"bike"],[/kochen|koch\b|küche/,"chef-hat"],
  [/sprache|muttersprache|deutsch|übersetzen/,"languages"],
  [/ausland|welt|herkunft|international/,"globe"],[/kindheit|baby|kinderwagen/,"baby"],
  [/versichert|sicherheit|schutz/,"shield-check"],[/reparatur|werkzeug|mechaniker/,"wrench"],
  [/baustelle|techniker|aufbauen/,"hard-hat"],[/helfen|unterstütz|weiterhelfen/,"handshake"],
  [/weg|richtung|geradeaus|ausgang/,"move-right"],[/wiederholen|zurückgeben|regelmäßig/,"refresh-cw"],
  [/richtig|erledigen|bestätigen|fertig/,"circle-check"],[/frage|unbekannt|information/,"circle-help"],
  [/werbung|anfeuern|ankündigung|ansage/,"megaphone"],[/sehen|blickkontakt|zeigen/,"eye"],
  [/aufgabe|checkliste|organisieren|vorbereiten/,"list-checks"],
  [/schreiben|beschriften|text\b|rechtschreibung/,"spell-check-2"],[/lernen|auswendig|denken|wissen/,"brain"],
  [/reise|flug|urlaub|ausflug/,"plane"],[/park|garten|natur|baum/,"trees"],
  [/bild|gemälde|ausstellung|darstellen/,"image"],[/maler|künstler|kreativ/,"paintbrush"],
  [/theater|bühne|veranstaltung|auftritt|konzert/,"theater"]
];

const STICKER_FALLBACKS = {
  1:["user-round","calendar-days","utensils","map-pin","handshake"],
  2:["school","graduation-cap","book-open","presentation","file-check-2"],
  3:["smartphone","laptop","message-circle","film","share-2"],
  4:["heart","smile","party-popper","gift","newspaper"],
  5:["building-2","landmark","file-text","wallet-cards","map-pinned"],
  6:["briefcase-business","phone-call","train-front","theater","factory"],
  7:["bus-front","train-front","route","map-pin","bike"],
  8:["book-open","brain","notebook-pen","presentation","file-check-2"],
  9:["dumbbell","medal","users-round","target","heart"],
  10:["house","users-round","boxes","key-round","handshake"],
  11:["alarm-clock","calendar-days","target","plane","heart"],
  12:["music","guitar","theater","image","star"]
};

const STICKER_CHAPTER_ACCENTS = {
  1:["user-round","users-round","handshake","calendar-check","map-pin","sun","coffee","utensils","chef-hat","receipt","heart","languages"],
  2:["school","book-open","graduation-cap","notebook-pen","brain","presentation","file-check-2","badge-check","whole-word","ruler","history","lightbulb"],
  3:["smartphone","laptop","message-circle","wifi","download","upload","save","share-2","film","camera","radio","star"],
  4:["heart","smile","frown","angry","gift","party-popper","cake-slice","mail","hand-heart","sparkles","calendar-heart","newspaper"],
  5:["building-2","landmark","file-text","id-card","wallet-cards","banknote","map-pinned","signpost","badge-euro","key-round","search","circle-check"],
  6:["briefcase-business","factory","users-round","phone-call","headset","train-front","calendar-days","theater","clipboard-check","message-circle","route","clock"],
  7:["bus-front","train-front","tram-front","bike","car","route","map-pin","signpost-big","traffic-cone","ticket-check","clock-arrow-down","clock-arrow-up"],
  8:["book-open","brain","notebook-text","whole-word","presentation","projector","highlighter","ruler","repeat-2","file-check-2","message-square-reply","workflow"],
  9:["dumbbell","medal","trophy","goal","users","flame","heart","sunrise","activity","mountain","battery-full","award"],
  10:["house","users-round","key","boxes","armchair","sofa","bell-ring","hand-helping","heart-handshake","clipboard-check","volume-off","washing-machine"],
  11:["clock","timer","hourglass","calendar-range","target","star","cloud-moon","list-todo","milestone","sunrise","plane","alarm-clock-plus"],
  12:["music","mic-vocal","piano","drum","radio-tower","film","theater","image","projector","star","popcorn","album"]
};

const STICKER_CARD_IDS = new WeakMap();
let stickerCardId = 0;
[...A1_BOOK, ...BOOK, ...B1_BOOK].forEach(chapter => chapter.vocab.forEach(card => {
  STICKER_CARD_IDS.set(card, stickerCardId++);
}));

const A2_REAL_PHOTO_LIMIT = {
  1:40, 2:40, 3:34, 4:36, 5:34, 6:40,
  7:136, 8:49, 9:49, 10:52, 11:49, 12:52
};
const A2_EXTRA_REAL_PHOTOS = {
  7:new Set([140,144,145])
};

function stableWordHash(value){
  return [...value].reduce((hash,char)=>(hash*31+char.codePointAt(0))>>>0,7);
}

function fallbackVocabSticker(v,chapterData,label='DE'){
  const category=v.cat||(chapterData?.num?`Kapitel ${chapterData.num}`:'Wortschatz');
  const text=`${v.w||''} ${v.d||''} ${v.ar||''}`.toLocaleLowerCase('de');
  const rule=VOCAB_VISUAL_RULES.find(([pattern])=>pattern.test(text));
  const chapterIcon={1:'🧳🌍',2:'📱⚙️',3:'🔄🌱',4:'💼🤝',5:'🌱♻️',6:'🚀🎵'}[chapterData?.num]||'🗂️';
  const visual=rule?.[1]||chapterIcon;
  return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
    <div class="fc-emoji" aria-hidden="true">${visual}</div>
    <span class="sticker-category">${escapeHtml(category)}</span>
  </div>`;
}

function vocabVisual(v,chapter){
  const chapterData=[...A1_BOOK, ...BOOK, ...B1_BOOK].find(item=>item.vocab?.includes(v));
  if(chapterData?.route?.startsWith('a1/')){
    return `<div class="fc-visual fc-visual--full" role="img" aria-label="${escapeHtml(v.w)}">
      ${v.img?`<img class="fc-scene" src="${v.img}" alt="" width="420" height="420" loading="eager" decoding="async">`:
      `<div class="level-code" style="margin:auto">A1</div>`}
      <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
    </div>`;
  }
  if(!chapterData){
    return fallbackVocabSticker(v, null, 'DE');
  }
  if(chapterData.route?.startsWith('b1.1/')){
    // B1.1 photos are generated per word and reviewed before they ship; a card
    // without one stays picture-free rather than borrowing a loose match.
    if(v.img){
      // A few abstract words carry a short looping story instead of one photo;
      // its first frame (v.still) is shown when the reader asks for less motion.
      const scene = v.still
        ? `<picture><source media="(prefers-reduced-motion: reduce)" srcset="${escapeHtml(v.still)}"><img class="fc-scene" src="${escapeHtml(v.img)}" alt="" width="420" height="420" loading="eager" decoding="async"></picture>`
        : `<img class="fc-scene" src="${escapeHtml(v.img)}" alt="" width="420" height="420" loading="eager" decoding="async">`;
      return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
        ${scene}
        <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
      </div>`;
    }
    return `<div class="fc-visual fc-visual--plain" role="img" aria-label="${escapeHtml(v.w)}">
      <div class="level-code" style="margin:auto">B1</div>
      <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
    </div>`;
  }
  if(v.img){
    return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
      <img class="fc-scene" src="${escapeHtml(v.img)}" alt="" width="420" height="420" loading="eager" decoding="async">
      <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
    </div>`;
  }
  const cardIndex=chapterData.vocab.indexOf(v);
  const realPhotoLimit=A2_REAL_PHOTO_LIMIT[chapterData.num]||0;
  const sceneIndex=cardIndex+1;
  const hasExtraPhoto=A2_EXTRA_REAL_PHOTOS[chapterData.num]?.has(sceneIndex);
  if(cardIndex<0 || (cardIndex>=realPhotoLimit && !hasExtraPhoto)) return fallbackVocabSticker(v, chapterData, 'A2');
  const sceneNumber=String(sceneIndex).padStart(2,'0');
  return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
    <img class="fc-scene" src="assets/vocab-scenes/k${chapterData.num}/${sceneNumber}.webp"
      alt="" width="420" height="420" loading="eager" decoding="async">
    <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
  </div>`;
}

let fcState = null;
function initFlash(c){
  const start = $('#fcStart'), stop = $('#fcStop'), area = $('#fcArea'), list = $('#vocList');
  const showCards = () => {
    fcState = {cards:[...c.vocab].sort(()=>Math.random()-.5), chapter:c.num, i:0, flipped:false};
    list.style.display='none'; start.style.display='none'; stop.style.display='block';
    drawFC();
  };
  start.addEventListener('click', showCards);
  stop.addEventListener('click', () => {
    fcState=null; list.style.display='block'; start.style.display='block'; stop.style.display='none';
    area.innerHTML='';
  });
  showCards();
}
function drawFC(){
  const a = $('#fcArea'); if(!fcState) return;
  const v = fcState.cards[fcState.i];
  a.innerHTML = `
  <div class="flashcard ${fcState.flipped?'is-flipped':''}" id="fcCard" role="button" tabindex="0"
    aria-label="Karte umdrehen: ${escapeHtml(v.w)}" aria-pressed="${fcState.flipped}"
    onclick="flipFC()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();flipFC()}">
    <div class="flashcard-inner">
      <div class="flashcard-face flashcard-front" aria-hidden="${fcState.flipped}">${vocabVisual(v,fcState.chapter)}<div class="big">${fmtWord(v.w)}</div>
        <div class="hint">Karte umdrehen: Bedeutung und Beispiele</div></div>
      <div class="flashcard-face flashcard-back" aria-hidden="${!fcState.flipped}"><div class="fc-back-copy"><div class="fc-back-label">Bedeutung & Beispiele</div>
        <div class="big" style="font-size:20px">${fmtWord(v.w)}</div>
        <div class="fdef">${v.d}</div>${v.ex?`<div class="fex">„${v.ex}“</div>`:''}${ar(v.ar)}</div></div>
    </div>
  </div>
  <div class="fc-nav">
    <button class="btn btn-ghost" onclick="navFC(-1)">← zurück</button>
    <span class="cnt">${fcState.i+1} / ${fcState.cards.length}</span>
    <button class="btn btn-green" onclick="navFC(1)">weiter →</button>
  </div>`;
}
function flipFC(){
  if(!fcState)return;
  fcState.flipped=!fcState.flipped;
  const card=$('#fcCard');
  card?.classList.toggle('is-flipped',fcState.flipped);
  card?.setAttribute('aria-pressed',String(fcState.flipped));
  card?.querySelector('.flashcard-front')?.setAttribute('aria-hidden',String(fcState.flipped));
  card?.querySelector('.flashcard-back')?.setAttribute('aria-hidden',String(!fcState.flipped));
}
function navFC(d){
  fcState.i = (fcState.i + d + fcState.cards.length) % fcState.cards.length;
  fcState.flipped=false; drawFC();
}
