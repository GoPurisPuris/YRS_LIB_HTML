let images = document.querySelectorAll('.pic1');
let bigimage = document.querySelector('.box');

function change(event) {
    bigimage.src = event.target.src;
}

function remove() {
    bigimage.src = '';
}

images.forEach((image) => {
    image.addEventListener('mouseover' , change);
    image.addEventListener('mouseout' , remove);    
});

