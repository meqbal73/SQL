const THEMES=['purple','emerald','cyan','orange','rose','midnight','snow'];
function applySettings(){
 const theme=localStorage.getItem('theme')||'purple';
 const mode=localStorage.getItem('mode')||'dark';
 const lang=localStorage.getItem('lang')||'ar';
 document.documentElement.dataset.theme=theme;
 document.documentElement.dataset.mode=mode;
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.body?.classList.toggle('lang-en',lang==='en');
 document.querySelectorAll('[data-ar][data-en]').forEach(el=>el.textContent=el.dataset[lang]);
 document.querySelectorAll('[data-lang]').forEach(el=>el.classList.toggle('active',el.dataset.lang===lang));
 const modeBtn=document.getElementById('modeToggle'); if(modeBtn) modeBtn.textContent=mode==='dark'?'☀':'☾';
}
function setLang(lang){localStorage.setItem('lang',lang);applySettings();window.dispatchEvent(new CustomEvent('languagechange',{detail:lang}));}
function setTheme(theme){localStorage.setItem('theme',theme);applySettings();}
function toggleMode(){localStorage.setItem('mode',(localStorage.getItem('mode')||'dark')==='dark'?'light':'dark');applySettings();}
function copyText(text){navigator.clipboard?.writeText(text);showToast(localStorage.getItem('lang')==='en'?'Copied':'تم النسخ');}
function showToast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function setupHeader(){
 document.querySelector('.nav-toggle')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
 document.getElementById('modeToggle')?.addEventListener('click',toggleMode);
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
 document.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.themeChoice)));
}
document.addEventListener('DOMContentLoaded',()=>{applySettings();setupHeader();const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));});
