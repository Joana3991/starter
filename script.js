'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsShow = document.querySelectorAll('.show-modal');

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

}

for (let i = 0; i < btnsShow.length; i++){
  btnsShow[i].addEventListener('click', openModal);
}
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
