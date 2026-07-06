function applyTheme(t){
  document.documentElement.dataset.theme=t;
  localStorage.setItem('theme',t);
  const b=document.getElementById('themeToggle');
  if(b)b.textContent=t==='dark'?'☾':'☀';
}
document.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.lang='ar';
  document.documentElement.dir='rtl';
  applyTheme(localStorage.getItem('theme')||'dark');
  document.getElementById('themeToggle')?.addEventListener('click',()=>applyTheme((localStorage.getItem('theme')||'dark')==='dark'?'light':'dark'));
  document.querySelector('.nav-toggle')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
});
function copyText(text){navigator.clipboard?.writeText(text)}
