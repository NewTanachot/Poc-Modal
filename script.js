'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShow = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal')

const openModal = function() {          // function expression
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {            // function expression
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnShow.length; ++i)
  btnShow[0].addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);    // use function name

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') 
    closeModal();   
});


console.log(modal.classList);
