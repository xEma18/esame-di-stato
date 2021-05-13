'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import smoothscroll from 'smoothscroll-polyfill';

import './review';
import './signupCheck';

// smoothscroll.polyfill();

// DOM
const overlay = document.querySelector('.overlay');
const loginScreen = document.querySelector('.login');
const signupScreen = document.querySelector('.signup');
const signupButton = document.querySelector('.signup-btn');
const loginButton = document.querySelector('.login-btn');
const navBar = document.querySelector('ul');
const discoverBtn = document.querySelector('.btn-discover');

const manipulateView = function (method, el) {
  overlay.classList[method]('hidden');

  if (!el) {
    loginScreen.classList[method]('hidden');
    signupScreen.classList[method]('hidden');
    return;
  }

  document.querySelector(`.${el}`).classList[method]('hidden');
};

// Listeners
[loginButton, signupButton].forEach(node =>
  node.addEventListener('click', e => {
    e.preventDefault();

    manipulateView(
      'remove',
      e.target.classList.contains('login-btn') ? 'login' : 'signup'
    );
  })
);

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

discoverBtn.addEventListener('click', function (e) {
  e.preventDefault();

  goTo('#servizi');
});

const goTo = function (hash) {
  const elementToScroll = document.querySelector(`.${hash.slice(1)}`);
  console.log(elementToScroll);
  elementToScroll.scrollIntoView({
    behavior: 'smooth',
  });
};
