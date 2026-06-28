const btn=document.querySelector('.menu-button'),nav=document.querySelector('.nav');
if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}))}
const ob=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>ob.observe(el));
