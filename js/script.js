const burgerOpen = document.querySelector('.burger');
const burgerClose =  document.querySelector('.burger__close');
const navList = document.querySelector('.nav__list');
const headerContainer = document.querySelector('.header__container');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');


burgerOpen.addEventListener('click', () => {
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'flex';
  navList.classList.add('nav__list--burger');
  headerContainer.classList.add('open--burger-menu');
  headerMenu.classList.add('header__burger-menu');
  headerLogo.style.marginBottom = '160px'

});

burgerClose.addEventListener('click', () => {
  burgerClose.style.display = 'none';
  burgerOpen.style.display = 'flex';
  navList.classList.remove('nav__list--burger');
  headerContainer.classList.remove('open--burger-menu');
  headerMenu.classList.remove('header__burger-menu')
  headerLogo.style.marginBottom = '0'

})