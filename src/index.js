import './style.css';
import { Home } from './home.js';
import { About } from './about.js';
import { Menu } from './menu.js';

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('nav button');

const pages = {
  home: Home(),
  about: About(),
  menu: Menu(),
};

content.appendChild(pages['menu']);

buttons.forEach((button) => {
  button.addEventListener('click', ({ currentTarget }) => {
    const page = currentTarget.dataset.tab;
    content.textContent = '';
    content.appendChild(pages[page]);
  });
});
