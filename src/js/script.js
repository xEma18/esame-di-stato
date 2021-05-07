'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import smoothscroll from 'smoothscroll-polyfill';

import './review';

// smoothscroll.polyfill();

// DOM
const overlay = document.querySelector('.overlay');
const loginScreen = document.querySelector('.login');
const loginButton = document.querySelector('.login-btn');
const navBar = document.querySelector('ul');

const manipulateView = function (method) {
  overlay.classList[method]('hidden');
  loginScreen.classList[method]('hidden');
};

// Listeners
loginButton.addEventListener('click', e => {
  e.preventDefault();

  manipulateView('remove');
});

overlay.addEventListener('click', _ => {
  manipulateView('add');
});

document.addEventListener('keydown', e => {
  const { key } = e;

  if (key === 'Escape') {
    manipulateView('add');
  }
});

navBar.addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target.closest('a');
  if (!target) return;

  goTo(target.hash);
});

const goTo = function (hash) {
  const elementToScroll = document.querySelector(`.${hash.slice(1)}`);
  console.log(elementToScroll);
  elementToScroll.scrollIntoView({
    behavior: 'smooth',
  });
};
