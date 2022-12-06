let topheader = document.querySelector('.header');
let box = document.querySelector('.boxSmall');
let lastscrollY = 0;

window.addEventListener('scroll' , () => {
    if (window.scrollY > lastscrollY) {
        topheader.classList.add('hide');
    }
    else {
        topheader.classList.remove('hide');
    }
    lastscrollY = window.scrollY;
})