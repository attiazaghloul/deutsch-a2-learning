# Deutsch A2 Learning

تطبيق تعليمي خفيف لتعلم الألمانية على GitHub Pages، مع محتوى A2 كامل وإضافة قسم A1 داخل نفس المشروع.

**رابط المشروع الأساسي:** https://attiazaghloul.github.io/deutsch-a2-learning/#

**رابط قسم A2 مباشرة:** https://attiazaghloul.github.io/deutsch-a2-learning/#a2

**رابط قسم A1 مباشرة:** https://attiazaghloul.github.io/deutsch-a2-learning/#a1

## المحتوى

- اختيار مستوى من الصفحة الرئيسية: A1 أو A2.
- قسم A1: اثنا عشر درسًا من Netzwerk neu A1.1 وA1.2.
- صور AI حقيقية ومعبرة لكروت مفردات A1، مربوطة بالكلمات الصحيحة.
- صور غلاف للوحدات وصور لموضوعات الدروس داخل A1.
- قسم A2: دروس Netzwerk neu A2.1 وA2.2، القاموس، الأفعال، العبارات، الاستماع، الألعاب، البودكاست، وتدريب الامتحان.
- قسم B1.1: ست وحدات من Netzwerk neu B1.1 مع قاموس وأفعال (مع حروف الجر) وتعبيرات وألعاب ونموذج امتحان Goethe B1.
- خطة يومية ومراجعة متكررة (Review) لكلمات الدروس، مع تصدير واستيراد نسخة احتياطية من التقدم من الإعدادات.
- شرح عربي اختياري وحفظ للتقدم محليًا في المتصفح.

## التشغيل محليًا

لا يحتاج التطبيق إلى تثبيت حزم:

```powershell
python -m http.server 8742 --directory app
```

ثم افتح:

```text
http://localhost:8742
```

## هيكل الكود

- `app/index.html`: الهيكل (Markup) فقط.
- `app/styles/app.css` و`app/styles/ui-next.css`: التنسيقات.
- `app/js/01-core.js` … `app/js/14-quiz-grammar.js`: كود التطبيق مقسّم حسب القسم ويتحمّل بالترتيب ده.
  الكود اللي بيتنفذ فورًا في ملف لازم يستخدم بس دوال من نفس الملف أو ملف قبله.
- `app/data_*.js`: المحتوى. ملفات البودكاست والأصوات المسجلة بتتحمّل عند الحاجة (`LAZY_SCRIPTS` في `01-core.js`).
- `app/sw.js`: الـ Service Worker. رقم الكاش بيتحدّث تلقائيًا وقت النشر (`scripts/stamp_service_worker.js`).

## تسجيل أصوات B1.1

كلمات وجمل B1.1 بتتنطق حاليًا بصوت المتصفح. لتسجيلها بنفس أصوات التطبيق (محتاج إنترنت):

```powershell
pip install -r scripts/requirements-podcast.txt
node scripts/extract_b1_speech_library.js
cd scripts
python generate_b1_fixed_speech.py --voices mia,tarek
```

السكربت بيكتب `app/assets/speech/b1-<voice>.mp3` و`app/data_speech_b1.js`، والتطبيق بيستخدمهم تلقائيًا.
صوتين بس (mia,tarek) حوالي 70MB، والأربعة حوالي 140MB.

## الاختبارات

```powershell
npm test
```

## النشر

يتم نشر محتوى مجلد `app` تلقائيًا على GitHub Pages عند الدفع إلى فرع `main`.
