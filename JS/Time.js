let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

let random = document.getElementById('randomButton');
let stop = document.getElementById('stopButton');
let output = document.getElementById('boxAnswer');

random.addEventListener('click', () => {
/*    
    setTimeout( () => {
        let n = abc.length;
        let index = Math.floor(Math.random() * n );
        let abcBox = abc[index];
        output.innerHTML = abcBox;
    },1000);
*/
    Timeout = setInterval(() => {
        let n = abc.length;
        let index = Math.floor(Math.random() * n );
        let abcBox = abc[index];
        output.innerHTML = abcBox;
    },1000)
});

stop.addEventListener('click', () => {
    clearInterval(Timeout);
});

// setTimeout = พอกดจะขึ้นมาเพียงครั้งเดียว
// setInterval = พอกดจะขึ้นมาเรื่อยๆ
// clearInterval/clearTimeout = พอกดจะหยุด
