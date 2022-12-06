/*
let message = document.getElementById('box1');
message.innerHTML = 'บิ๊กตู่';
*/

/*
let messages = document.getElementsByClassName('box');
for (i=0 ; i < messages.length ; i++){
    messages[i].innerHTML = 'ไม่รู้ใคร';
}
*/

/*
let messages = document.querySelectorAll('.box');
messages.forEach((message) => {
    message.innerHTML = 'ครับผม';
});
*/

/*
let messages = document.querySelector('#box2');
messages.innerHTML = 'สวัสดีครับ';
*/


/*
let messages = document.querySelector('.box');
messages.innerHTML = 'สวัสดีครับ';
*/

//----------------------------------------------------------

let boxShow = document.querySelector('#box4');
let buttonShow = document.querySelector('#buttonShow')

buttonShow.addEventListener( 'click' , () => {
    if (boxShow.style.display === 'none') {
        boxShow.style.display = 'block';
    } 
    else {
        boxShow.style.display = 'none';
    }
});

//-----------------------------------------------------------

let body = document.body;
let Theme = document.querySelector('#buttonTheme');
let Box = document.querySelectorAll('.box');

Theme.addEventListener( 'click' , () => {
    body.classList.toggle('dark-theme');
    Box.forEach((Boxs) => {
        Boxs.classList.toggle('dark-theme-box');
    });
});


let change = document.querySelector('#buttonColor1');
let allbox = document.querySelectorAll('.box');

change.addEventListener( 'click', () => {
        allbox.forEach( (all) => {
            all.classList.toggle('dark-yellow-box');
        });    
});

//-----------------------------------------------------------