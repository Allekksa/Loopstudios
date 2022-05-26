const burgerOpen = document.querySelector('.burger');
const burgerClose =  document.querySelector('.menu__close');
const navList = document.querySelector('.nav__list');
const headerBurger = document.querySelector('.header__burger');
const openMenu = document.querySelector('.open__menu');
const headerContainer = document.querySelector('.header__container')
burgerOpen.addEventListener('click', () => {
  navList.style.display = 'flex';
  headerBurger.style.display = 'none';
  burgerClose.style.display = 'block';
  openMenu.style.flexDirection = "column";
  openMenu.style.justifyContent = "flex-start";
  headerContainer.classList.add('menu__header');
  headerContainer.style.display = "flex";




});

burgerClose.addEventListener('click', () => {
  navList.style.display = 'none';
  burgerClose.style.display = 'none';
  burgerOpen.style.display = 'flex';
  openMenu.style.flexDirection = "row";
  openMenu.style.justifyContent = "space-between";
  openMenu.style.alignItems = "flex-start";
  headerContainer.style.display = "block";
  headerContainer.classList.remove('menu__header');
})