const tabsButtons = document.querySelectorAll('.tabs_caption');
const tabsItems = document.querySelectorAll('.content_tabs');

tabsButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.tabs_caption.is_active').classList.remove('is_active');
    document.querySelector('.content_tabs.is_active').classList.remove('is_active');
    button.classList.add('is_active');
    tabsItems[index].classList.add('is_active');
  });
})

const sliderButtons = document.querySelectorAll('.slides_radio');
const sliderItems = document.querySelectorAll('.slider_item');

const sliderButtonNext = document.querySelector('.button_next');
const sliderButtonPrev = document.querySelector('.button_previous');

let index = 0;

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.slides_radio.is_active').classList.remove('is_active');
    document.querySelector('.slider_item.is_active').classList.remove('is_active');
    button.classList.add('is_active');
    sliderItems[index].classList.add('is_active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is_active');
  sliderItems[index].classList.remove('is_active');
  if (index === sliderButtons.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  sliderButtons[index].classList.add('is_active');
  sliderItems[index].classList.add('is_active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is_active');
  sliderItems[index].classList.remove('is_active');
  if (!index) {
    index = sliderButtons.length - 1;
  } else {
    index = index - 1;
  }
  sliderButtons[index].classList.add('is_active');
  sliderItems[index].classList.add('is_active');
});


const modalOpenBtn = document.querySelector('.button_delivery');
const modal = document.querySelector('.modal_container');
const modalCloseBtn = document.querySelector('.modal_close_button');

modalOpenBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
modal.classList.add('is_open');
});

modalCloseBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is_open');
  });

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is_open');
  }
});
