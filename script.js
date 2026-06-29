const btn=document.querySelector('.menu-button'),nav=document.querySelector('.nav');
if(btn&&nav){
  const close=()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','メニューを開く')};
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('click',e=>{
    if(!nav.classList.contains('open'))return;
    if(nav.contains(e.target)||btn.contains(e.target))return;
    close();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}

const targets=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const ob=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}})},{threshold:.12});
  targets.forEach(el=>ob.observe(el));
}else{
  targets.forEach(el=>el.classList.add('show'));
}
