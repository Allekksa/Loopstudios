const burger = document.querySelector('.burger-menu');
const headerNav =  document.querySelector('.header__nav')
burger.addEventListener('click', () => {
  headerNav.style.transform = 'translateX(-90%)';
})