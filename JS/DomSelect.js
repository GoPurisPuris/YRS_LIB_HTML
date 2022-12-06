let pictures = document.querySelectorAll('.pic');
let slot = document.querySelector('.equip-slot');
let equipPicture = document.querySelector('.equip-pic');

// ลาก
function dragPic( event ) {
    event.dataTransfer.setData('text/plain' , event.target.id);
    console.log(event.target.id);
}

pictures.forEach( (picture) => {
    picture.addEventListener('dragstart' , dragPic);
})

// วาง 
function dragOverPicture(event) {
    event.preventDefault();
}

function dropPicture(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#' + id);
    equipPicture.src = image.src ;
}

slot.addEventListener('dragover' , dragOverPicture);
slot.addEventListener('drop' , dropPicture);
