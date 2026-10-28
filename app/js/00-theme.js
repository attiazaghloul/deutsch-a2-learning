/* ===================== design: theme, corner shape, text size ===================== */
/* Loaded in <head> so the saved look applies before the first paint. */
// colors: two main colours, an accent and the page; dark themes share theme-night.css
const DESIGN_THEMES=[
  {id:'original',name:'Original',ar:'الأصلي · ألوان كل مستوى',colors:['#175b5d','#3b918b','#e9a23b','#fffdf9'],radius:14},
  {id:'auto',name:'Automatisch',ar:'تلقائي · نهار وليل زي الجهاز',colors:['#175b5d','#0f2a2c','#86d6ca','#fffdf9'],radius:14},
  {id:'sunny',name:'Sonnig',ar:'مرح · للأطفال',colors:['#f26b1d','#1387c4','#e2457f','#fff8ec'],radius:22,font:'Nunito:wght@400;700;800'},
  {id:'candy',name:'Bonbon',ar:'حلويات · للأطفال',colors:['#d6337a','#7b52d1','#178f80','#fff5f9'],radius:24,font:'Nunito:wght@400;700;800'},
  {id:'vivid',name:'Lebendig',ar:'حيوي · للشباب',colors:['#3d22c9','#0a7fa6','#e0245e','#f6f5ff'],radius:16},
  {id:'ocean',name:'Ozean',ar:'بحر · لكل الأعمار',colors:['#0d4a8f','#0a8793','#d9772b','#f1f7fc'],radius:17},
  {id:'nature',name:'Natur',ar:'طبيعة · لكل العيلة',colors:['#28602f','#7aac56','#b87420','#f4f8ef'],radius:18},
  {id:'desert',name:'Wüste',ar:'دافي · للكبار',colors:['#a8461f','#117f80','#b8801a','#faf4ea'],radius:12},
  {id:'calm',name:'Ruhig',ar:'هادئ · للكبار',colors:['#2f4c5a','#5d8091','#9a7038','#f3f2ee'],radius:7},
  {id:'clear',name:'Klar',ar:'وضوح عالي · لكبار السن',colors:['#002d57','#00539c','#7d4a00','#ffffff'],radius:5,font:'Atkinson+Hyperlegible:wght@400;700'},
  {id:'night',name:'Nacht',ar:'ليلي · مريح للعين',colors:['#0f2a2c','#22605b','#86d6ca','#1b2225'],radius:14,dark:true},
  {id:'midnight',name:'Mitternacht',ar:'ليلي بنفسجي',colors:['#1d1844','#4c3598','#f0b84e','#1b1a30'],radius:17,dark:true}
];
const DARK_STYLESHEET='styles/theme-night.css?v=night-2';
const DESIGN_SHAPES=[
  {id:'auto',name:'Wie Thema',ar:'حسب الثيم',radius:null},
  {id:'round',name:'Rund',ar:'دائري',radius:9},
  {id:'soft',name:'Weich',ar:'ناعم',radius:5},
  {id:'square',name:'Eckig',ar:'مربّع',radius:1}
];
const DESIGN_TEXT_SIZES=[
  {id:'normal',name:'A',ar:'عادي',size:13},
  {id:'large',name:'A',ar:'كبير',size:16},
  {id:'xlarge',name:'A',ar:'كبير جدًا',size:19}
];

function readDesignSetting(key,allowed,fallback){
  try{
    const value=localStorage.getItem(key);
    return allowed.some(item=>item.id===value)?value:fallback;
  }catch{return fallback;}
}

const prefersDark=window.matchMedia?.('(prefers-color-scheme: dark)');

function applyDesign(){
  const root=document.documentElement;
  const chosen=readDesignSetting('designTheme',DESIGN_THEMES,'original');
  const shape=readDesignSetting('designShape',DESIGN_SHAPES,'auto');
  const text=readDesignSetting('designText',DESIGN_TEXT_SIZES,'normal');
  // "auto" follows the device: Nacht when it is in dark mode, else Original
  const theme=chosen==='auto'?(prefersDark?.matches?'night':'original'):chosen;
  const item=DESIGN_THEMES.find(entry=>entry.id===theme);
  root.dataset.theme=theme;
  if(item?.dark) root.dataset.dark=''; else delete root.dataset.dark;
  if(shape==='auto') delete root.dataset.shape; else root.dataset.shape=shape;
  if(text==='normal') delete root.dataset.text; else root.dataset.text=text;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',item?.colors[0]||'#175b5d');
  // Only the themes that use their own font or stylesheet load it, and only once.
  if(item?.dark&&!document.querySelector('link[data-theme-sheet]')){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.dataset.themeSheet='dark';
    link.href=DARK_STYLESHEET;
    document.head.appendChild(link);
  }
  const font=item?.font;
  if(font&&!document.querySelector(`link[data-theme-font="${font}"]`)){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.dataset.themeFont=font;
    link.href=`https://fonts.googleapis.com/css2?family=${font}&display=swap`;
    document.head.appendChild(link);
  }
}

function saveDesignSetting(key,value){
  try{localStorage.setItem(key,value);}catch{}
  applyDesign();
  renderDesignSettings();
}

function renderDesignSettings(){
  const holder=document.getElementById('designSettings');
  if(!holder) return;
  const theme=readDesignSetting('designTheme',DESIGN_THEMES,'original');
  const shape=readDesignSetting('designShape',DESIGN_SHAPES,'auto');
  const text=readDesignSetting('designText',DESIGN_TEXT_SIZES,'normal');
  holder.innerHTML=`
    <div class="theme-grid" role="group" aria-label="Thema">
      ${DESIGN_THEMES.map(item=>`<button type="button" class="theme-card" data-design-theme="${item.id}" aria-pressed="${item.id===theme}">
        <span class="theme-swatch${item.id==='auto'?' is-auto':''}" style="--swatch-a:${item.colors[0]};--swatch-b:${item.colors[1]};--swatch-c:${item.colors[2]};--swatch-page:${item.colors[3]};--swatch-radius:${item.radius}"><i></i><i></i><i></i></span>
        <b>${item.name}</b><small dir="rtl">${item.ar}</small></button>`).join('')}
    </div>
    <div class="theme-options" role="group" aria-label="Ecken">
      ${DESIGN_SHAPES.map(item=>`<button type="button" class="theme-option" data-design-shape="${item.id}" aria-pressed="${item.id===shape}">
        ${item.radius===null?'':`<span class="shape-preview" style="border-radius:${item.radius}px"></span>`}${item.name} <small dir="rtl">${item.ar}</small></button>`).join('')}
    </div>
    <div class="theme-options" role="group" aria-label="Schriftgröße">
      ${DESIGN_TEXT_SIZES.map(item=>`<button type="button" class="theme-option" data-design-text="${item.id}" aria-pressed="${item.id===text}">
        <span style="font-size:${item.size}px;font-weight:700">${item.name}</span> <small dir="rtl">${item.ar}</small></button>`).join('')}
    </div>
    <p class="design-hint" dir="rtl">الاختيار بيتحفظ على الجهاز ده. «وضوح عالي» مع خط «كبير» أريح لضعاف النظر.</p>`;
}

applyDesign();
prefersDark?.addEventListener?.('change',applyDesign);
document.addEventListener('DOMContentLoaded',()=>{
  renderDesignSettings();
  document.getElementById('designSettings')?.addEventListener('click',event=>{
    const button=event.target.closest('button');
    if(!button) return;
    if(button.dataset.designTheme) saveDesignSetting('designTheme',button.dataset.designTheme);
    else if(button.dataset.designShape) saveDesignSetting('designShape',button.dataset.designShape);
    else if(button.dataset.designText) saveDesignSetting('designText',button.dataset.designText);
  });
});
