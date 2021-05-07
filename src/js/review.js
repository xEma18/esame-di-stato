// DOM
const arrLeft = document.querySelector('.arr-left');
const arrRight = document.querySelector('.arr-right');
const reviewContainer = document.querySelector('.review-container');
const reviews = [...reviewContainer.querySelectorAll('.review')];

// State
const state = {
  curSlide: 0,
  maxSlide: reviews.length - 1,
};

// Logic
reviews.forEach((node, i) => {
  node.style.transform = `translateX(${101 * i}%)`;
});

const changeSlide = function () {
  reviews.forEach((node, i) => {
    node.style.transform = `translateX(${(i - state.curSlide) * 101}%)`;
  });
};

// Listeners
arrRight.addEventListener('click', e => {
  e.preventDefault();

  state.curSlide++;
  if (state.curSlide > state.maxSlide) {
    console.log('aaaaa');
    state.curSlide = 0;
  }

  changeSlide();
});

arrLeft.addEventListener('click', e => {
  e.preventDefault();

  state.curSlide--;
  if (state.curSlide < 0) {
    console.log('bbbbb');
    state.curSlide = state.maxSlide;
  }

  changeSlide();
});
