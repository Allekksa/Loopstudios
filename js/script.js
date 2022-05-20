const burgerOpen = document.querySelector('.burger');
const burgerClose =  document.querySelector('.menu__close');
navList = document.querySelector('.nav__list');
headerBurger = document.querySelector('.header__burger');
burgerOpen.addEventListener('click', () => {
  navList.style.display = 'flex';
  headerBurger.style.display = 'none';
  burgerClose.style.display = 'block';
});

burgerClose.addEventListener('click', () => {
  navList.style.display = 'none';
  burgerClose.style.display = 'none';
  burgerOpen.style.display = 'flex';
})