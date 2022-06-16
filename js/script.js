const burger = document?.querySelector('.burger');
const menu = document?.querySelector('.burger-menu');
const nav = document?.querySelector('.header__nav');
const header = document?.querySelector('.header');
const body = document?.querySelector('body');
const navItems = nav?.querySelectorAll('a');

burger?.addEventListener('click', ()=>{
  
  nav?.classList.toggle('nav--active');
  header?.classList.toggle('menu--visible');
  menu?.classList.toggle('burger-menu--active');
  burger?.classList.toggle('burger--active');
  body?.classList.toggle('stop-scroll');

})

navItems.forEach(el => {
  el.addEventListener('click', ()=>{
  nav?.classList.remove('nav--active');
  header?.classList.remove('menu--visible');
  menu?.classList.remove('burger-menu--active');
  burger?.classList.remove('burger--active');
  body?.classList.remove('stop-scroll');
  })
});