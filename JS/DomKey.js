let image = document.querySelector('.pic');
let nextButton = document.querySelector('.next');
let beforeButton = document.querySelector('.before');

let imageIndex = 0;
let images = ['Adam.jpg' , 'Lilith.jpg' , 'Sachiel.jpg' , 'Ramiel.jpg' , 'Shamshel.jpg' , 'Israfel.jpg' , 'Gaghiel.jpg'];

function prevImage() {
    if (imageIndex > 0) {
        imageIndex--;
        image.src = images[imageIndex];
    }
}
function nextImage() {
    if (imageIndex < images.length - 1) {
        imageIndex++;
        image.src = images[imageIndex];
    }
}

function Keyup(event) {
    if (event.key === 'ArrowLeft') {
        prevImage();
    }
    else if (event.key === 'ArrowRight') { 
        nextImage();
    }
}

document.addEventListener('keyup' , Keyup);
nextButton.addEventListener('click' , nextImage);
beforeButton.addEventListener('click' , prevImage);