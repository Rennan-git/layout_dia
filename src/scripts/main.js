'use strict';

import '../styles/main.scss';

const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const navLinks = document.querySelectorAll('[data-nav-link]');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
