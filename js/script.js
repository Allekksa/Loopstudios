const burger = document?.querySelector('.burger');
const menu = document?.querySelector('.burger-menu');
const nav = document?.querySelector('.header__nav');
const header = document?.querySelector('.header');
const body = document?.querySelector('body');
burger?.addEventListener('click', ()=>{
  
  nav?.classList.toggle('nav--active');
  header?.classList.toggle('menu--visible');
  menu?.classList.toggle('burger-menu--active');
  burger?.classList.toggle('burger--active');
  body?.classList.toggle('stop-scroll');

})
