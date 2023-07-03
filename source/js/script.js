const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainНeader = document.querySelector('.main-header');
const contactsMapWrapper = document.querySelector('.contacts__map-wrapper');

mainНeader.classList.remove('no-js');
contactsMapWrapper.classList.remove('no-js');

mainHeaderToggle.addEventListener('click', () => mainНeader.classList.toggle('is-open'));
