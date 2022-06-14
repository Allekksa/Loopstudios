const burgerOpen = document?.querySelector('.burger');
const burgerClose = document?.querySelector('.burger-close');
const nav = document?.querySelector('.header__nav');
const header = document?.querySelector('.header');

burgerOpen?.addEventListener('click', ()=>{
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'block';
  nav.style.display = 'flex';
  header.classList.add('menu--visible');
})

burgerClose?.addEventListener('click', ()=>{
  burgerOpen.style.display = 'block';
  burgerClose.style.display = 'none';
  nav.style.display = 'none';
  header.classList.remove('menu--visible');

  
  
})