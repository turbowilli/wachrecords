const menu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.mobile-menu .close');
openBtn?.addEventListener('click',()=>menu?.classList.add('open'));
closeBtn?.addEventListener('click',()=>menu?.classList.remove('open'));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
