// !!! WARNING !!!
// this JS is absolutely disgusting, but time is of the essence...
// and I have no time, so please understand

document.querySelector('#carousel__img-1').addEventListener('click',
function() {
    document.querySelector('.modal-1').classList.remove('is-hidden');
});

document.querySelector('#carousel__img-2').addEventListener('click',
function() {
    document.querySelector('.modal-2').classList.remove('is-hidden');
});

document.querySelector('#carousel__img-3').addEventListener('click',
function() {
    document.querySelector('.modal-3').classList.remove('is-hidden');
});

document.querySelector('#modal__close-1').addEventListener('click', 
function() {
    document.querySelector('.modal-1').classList.add('is-hidden');
});

document.querySelector('#modal__close-2').addEventListener('click', 
function() {
    document.querySelector('.modal-2').classList.add('is-hidden');
});

document.querySelector('#modal__close-3').addEventListener('click', 
function() {
    document.querySelector('.modal-3').classList.add('is-hidden');
});