/* ===================== settings sections and menus ===================== */

// Einstellungen shows one section at a time instead of one long page.
function showSettingsSection(section){
  const panel=$('#settingsModal .settings-panel');
  if(!panel) return;
  panel.querySelectorAll('[data-settings-tab]').forEach(tab=>{
    const active=tab.dataset.settingsTab===section;
    tab.setAttribute('aria-selected',String(active));
    tab.tabIndex=active?0:-1;
  });
  panel.querySelectorAll('[data-settings-section]').forEach(row=>{
    row.hidden=row.dataset.settingsSection!==section;
  });
  try{ localStorage.setItem('settingsSection',section); }catch{}
}

function syncSettingSwitches(){
  $$('[data-setting-switch]').forEach(button=>{
    let on=true;
    try{ on=localStorage.getItem(button.dataset.settingSwitch)!=='off'; }catch{}
    button.setAttribute('aria-checked',String(on));
  });
}

document.addEventListener('click',event=>{
  const tab=event.target.closest('[data-settings-tab]');
  if(tab){ showSettingsSection(tab.dataset.settingsTab); return; }
  const toggle=event.target.closest('[data-setting-switch]');
  if(toggle){
    const on=toggle.getAttribute('aria-checked')!=='true';
    try{ localStorage.setItem(toggle.dataset.settingSwitch,on?'on':'off'); }catch{}
    toggle.setAttribute('aria-checked',String(on));
    if(!on&&toggle.dataset.settingSwitch==='tapTranslate') closeTranslationSheet();
  }
});

$('#settingsModal .settings-tabs')?.addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight'].includes(event.key)) return;
  const tabs=[...event.currentTarget.querySelectorAll('[data-settings-tab]')];
  const index=tabs.indexOf(document.activeElement);
  if(index<0) return;
  const next=tabs[(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];
  next.focus();
  showSettingsSection(next.dataset.settingsTab);
});

let savedSection='design';
try{ savedSection=localStorage.getItem('settingsSection')||'design'; }catch{}
showSettingsSection(savedSection);
syncSettingSwitches();
// ui-next.js adds its rows (motion, backup) to the panel later
const settingsPanel=$('#settingsModal .settings-panel');
if(settingsPanel) new MutationObserver(()=>{
  let current='design';
  try{ current=localStorage.getItem('settingsSection')||'design'; }catch{}
  showSettingsSection(current);
}).observe(settingsPanel,{childList:true});

// A row of tabs that scrolls sideways keeps the current tab in sight.
function centerActiveTabs(root=document){
  root.querySelectorAll('.tabs,.feature-tabs').forEach(strip=>{
    const active=strip.querySelector('.tab.active,[aria-selected="true"],[aria-current="page"]');
    if(!active||strip.scrollWidth<=strip.clientWidth) return;
    strip.scrollLeft=active.offsetLeft-(strip.clientWidth-active.offsetWidth)/2;
  });
}

// Fades at the edges show that a tab row scrolls further to that side.
function markTabOverflow(strip){
  const max=strip.scrollWidth-strip.clientWidth;
  if(max<=2){ delete strip.dataset.overflow; return; }
  // scrollLeft counts from the right edge (negative) in right-to-left rows;
  // the attribute names the physical side: "end" fades the right edge
  const pos=Math.abs(strip.scrollLeft);
  const rtl=getComputedStyle(strip).direction==='rtl';
  const moreLeft=rtl?pos<max-2:pos>2;
  const moreRight=rtl?pos>2:pos<max-2;
  strip.dataset.overflow=moreLeft&&moreRight?'both':moreLeft?'start':'end';
}

function refreshTabStrips(root=document){
  centerActiveTabs(root);
  root.querySelectorAll('.tabs,.feature-tabs').forEach(markTabOverflow);
}

document.addEventListener('scroll',event=>{
  if(event.target instanceof Element&&event.target.matches('.tabs,.feature-tabs')) markTabOverflow(event.target);
},true);
new MutationObserver(()=>refreshTabStrips(view)).observe(view,{childList:true});
window.addEventListener('resize',()=>refreshTabStrips(view));
