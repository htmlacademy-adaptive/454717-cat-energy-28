const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainНeader = document.querySelector('.main-header');

mainНeader.classList.remove('no-js');

mainHeaderToggle.addEventListener('click', () => mainНeader.classList.toggle('is-open'));
