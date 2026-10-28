/* ===================== design: theme, corner shape, text size ===================== */
/* Loaded in <head> so the saved look applies before the first paint. */
const DESIGN_THEMES=[
  {id:'original',name:'Original',ar:'الأصلي · ألوان كل مستوى',colors:['#175b5d','#3b918b','#fffdf9'],radius:14},
  {id:'sunny',name:'Sonnig',ar:'مرح · للأطفال',colors:['#f47b20','#ec4f86','#fff8ec'],radius:22,font:'Nunito:wght@400;700;800'},
  {id:'vivid',name:'Lebendig',ar:'حيوي · للشباب',colors:['#4826cf','#d92a66','#f5f3ff'],radius:16},
  {id:'calm',name:'Ruhig',ar:'هادئ · للكبار',colors:['#2f4c5a','#5d8091','#f3f2ee'],radius:7},
  {id:'clear',name:'Klar',ar:'وضوح عالي · لكبار السن',colors:['#002d57','#00539c','#ffffff'],radius:5,font:'Atkinson+Hyperlegible:wght@400;700'},
  {id:'nature',name:'Natur',ar:'طبيعة · لكل العيلة',colors:['#28602f','#7aac56','#f4f8ef'],radius:18},
  {id:'night',name:'Nacht',ar:'ليلي · مريح للعين بالليل',colors:['#0f2a2c','#22605b','#1b2225'],radius:14,stylesheet:'styles/theme-night.css?v=night-1'}
];
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

function applyDesign(){
  const root=document.documentElement;
  const theme=readDesignSetting('designTheme',DESIGN_THEMES,'original');
  const shape=readDesignSetting('designShape',DESIGN_SHAPES,'auto');
  const text=readDesignSetting('designText',DESIGN_TEXT_SIZES,'normal');
  root.dataset.theme=theme;
  if(shape==='auto') delete root.dataset.shape; else root.dataset.shape=shape;
  if(text==='normal') delete root.dataset.text; else root.dataset.text=text;
  // Only the themes that use their own font or stylesheet load it, and only once.
  const stylesheet=DESIGN_THEMES.find(item=>item.id===theme)?.stylesheet;
  if(stylesheet&&!document.querySelector(`link[data-theme-sheet="${theme}"]`)){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.dataset.themeSheet=theme;
    link.href=stylesheet;
    document.head.appendChild(link);
  }
  const font=DESIGN_THEMES.find(item=>item.id===theme)?.font;
  if(font&&!document.querySelector(`link[data-theme-font="${theme}"]`)){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.dataset.themeFont=theme;
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
        <span class="theme-swatch" style="--swatch-a:${item.colors[0]};--swatch-b:${item.colors[1]};--swatch-c:${item.colors[2]};--swatch-radius:${item.radius}"></span>
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
