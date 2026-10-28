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
new MutationObserver(()=>centerActiveTabs(view)).observe(view,{childList:true});
