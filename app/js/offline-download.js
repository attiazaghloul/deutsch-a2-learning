/* PWA: Service Worker + Offline banner + Download-lesson */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    // Reload exactly once so an installed mobile PWA immediately reads the
    // data and image paths from the newly activated versioned cache.
    if(sessionStorage.getItem('pwa-v65-reloaded')!=='1'){
      sessionStorage.setItem('pwa-v65-reloaded','1');
      location.reload();
      return;
    }
    showSpeechStatus('تم تحديث التطبيق إلى النسخة الجديدة');
    if($('#offlineDictionaryStatus')) syncOfflineDictionaryStatus();
  });
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js?v=65',{updateViaCache:'none'})
      .then(registration=>registration.update())
      .catch(() => {});
  });
}

// Offline banner
(function(){
  const banner = document.getElementById('offline-banner');
  function sync(){ banner.classList.toggle('show', !navigator.onLine); }
  window.addEventListener('online',  sync);
  window.addEventListener('offline', sync);
  sync();
})();

const OFFLINE_MEDIA_FILE=/\.(?:avif|gif|jpe?g|png|svg|webp|m4a|mp3|ogg|wav|mp4|webm)(?:[?#].*)?$/i;

function addOfflineMediaUrl(value,urls){
  if(typeof value!=='string'||!OFFLINE_MEDIA_FILE.test(value.trim())) return;
  try{
    const url=new URL(value,document.baseURI);
    if(url.origin===location.origin) urls.add(url.href);
  }catch{}
}

function collectOfflineMedia(value,urls,seen=new WeakSet()){
  if(typeof value==='string'){addOfflineMediaUrl(value,urls);return;}
  if(!value||typeof value!=='object'||seen.has(value)) return;
  seen.add(value);
  if(Array.isArray(value)) value.forEach(item=>collectOfflineMedia(item,urls,seen));
  else Object.values(value).forEach(item=>collectOfflineMedia(item,urls,seen));
}

function currentOfflineChapter(){
  const hash=location.hash.replace('#','');
  const a1=hash.match(/^a1\/k(\d+)(?:\/|$)/);
  if(a1) return A1_BOOK.find(chapter=>chapter.num===Number(a1[1]))||null;
  const b1=hash.match(/^b1\.1\/k(\d+)(?:\/|$)/);
  if(b1) return B1_BOOK.find(chapter=>chapter.num===Number(b1[1]))||null;
  const a2=hash.match(/^k(\d+)(?:\/|$)/);
  if(a2) return BOOK.find(chapter=>chapter.num===Number(a2[1]))||null;
  return null;
}

function collectCurrentLessonOfflineUrls(){
  const urls=new Set();
  const chapter=currentOfflineChapter();

  // Include every media reference in the chapter data, not only the active tab.
  if(chapter){
    collectOfflineMedia(chapter,urls);
    TABS.forEach(([id])=>collectOfflineMedia(chapterTabImage(chapter,id),urls));
    if(!chapter.route?.startsWith('a1/')&&!chapter.route?.startsWith('b1.1/')){
      const realPhotoLimit=A2_REAL_PHOTO_LIMIT[chapter.num]||0;
      const extraPhotos=A2_EXTRA_REAL_PHOTOS[chapter.num]||new Set();
      chapter.vocab?.forEach((card,index)=>{
        const scene=index+1;
        if(scene<=realPhotoLimit||extraPhotos.has(scene)){
          addOfflineMediaUrl(`assets/vocab-scenes/k${chapter.num}/${String(scene).padStart(2,'0')}.webp`,urls);
        }
      });
    }
  }

  // Also include media rendered by specialised lesson/listening screens.
  const currentView=document.getElementById('view');
  currentView?.querySelectorAll('img[src],audio[src],audio source[src],video[src],video source[src]').forEach(element=>{
    addOfflineMediaUrl(element.currentSrc||element.src,urls);
  });
  return {chapter,urls:[...urls]};
}

// Download the complete current chapter for offline use.
(function(){
  const dlBtn = document.getElementById('dlBtn');
  if (!dlBtn || !('serviceWorker' in navigator)) return;

  let _handler = null;

  dlBtn.addEventListener('click', function(){
    if (!navigator.onLine) { showSpeechStatus('أنت أوفلاين — لا يمكن التحميل الآن'); return; }

    const lesson=collectCurrentLessonOfflineUrls();
    const urls=lesson.urls;

    if (!urls.length) { showSpeechStatus('لا توجد ملفات وسائط في هذا الدرس'); return; }

    showSpeechStatus(`${lesson.chapter?'جاري تحميل الوحدة كاملة':'جاري تحميل الدرس'}… ${urls.length} ملف`);
    dlBtn.textContent = `⏳ 0/${urls.length}`;
    dlBtn.disabled = true;

    if (_handler) navigator.serviceWorker.removeEventListener('message', _handler);
    _handler = function(e){
      if (!e.data) return;
      if(e.data.type==='lesson-cache-progress'){
        dlBtn.textContent=`⏳ ${e.data.done}/${e.data.total}`;
        return;
      }
      if (e.data.type !== 'lesson-cached') return;
      navigator.serviceWorker.removeEventListener('message', _handler);
      _handler = null;
      dlBtn.textContent = e.data.ok?'✓ Saved':'⚠ Retry';
      dlBtn.classList.toggle('cached',e.data.ok);
      dlBtn.disabled = false;
      showSpeechStatus(e.data.ok?'تم حفظ الوحدة كاملة للأوفلاين ✓':`تعذر تحميل ${e.data.failed||1} ملف — حاول مرة أخرى`);
      setTimeout(() => { dlBtn.textContent = '⬇ Download'; dlBtn.classList.remove('cached'); }, 4000);
    };
    navigator.serviceWorker.addEventListener('message', _handler);

    navigator.serviceWorker.ready.then(reg => {
      reg.active.postMessage({ type: 'cache-lesson', urls });
    });
  });
})();
