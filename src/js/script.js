'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// DOM
const overlay = document.querySelector('.overlay');
const loginScreen = document.querySelector('.login');
const loginButton = document.querySelector('.login-btn');

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
