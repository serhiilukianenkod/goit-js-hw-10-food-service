import menuItems from './menu.json';
import menuTamplate from './tamplates/menu.hbs'
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//theam switcher
const checkboxSwich = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const menu = document.querySelector('.js-menu')

if (!localStorage.getItem('Theme')) {
  localStorage.setItem('Theme', Theme.LIGHT);
  body.classList.add(Theme.LIGHT);
} else {
  body.classList.add(localStorage.getItem('Theme'));
}

if (localStorage.getItem('Theme') === Theme.DARK)
  checkboxSwich.setAttribute('checked', 'true');

checkboxSwich.addEventListener('change', () => {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    localStorage.setItem('Theme', Theme.LIGHT);
    body.classList.replace(Theme.DARK, Theme.LIGHT);
  } else {
    localStorage.setItem('Theme', Theme.DARK);
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
});

///menu
let markup = '';
console.log(menuTamplate(menuItems[0]));
menuItems.forEach(item => markup += menuTamplate(item));
menu.insertAdjacentHTML('beforeend', markup);
