function inputPromise( title , delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberInput = Number(prompt(title));
            if (isNaN(numberInput)) {
                reject(new Error('***ใส่ตัวเลข'));
                return;
            }
            resolve(numberInput);
        }, delay);
    });
}

let weight = 0;
let height = 0;

inputPromise('น้ำหนัก(กิโลกรัม)' , 1000)
.then((result) => {
    weight = result;
    return inputPromise('ส่วนสูง(เมตร)', 1500); 
})
.then((result) => {
    height = result;
    setTimeout(() => {
        const bmi = weight/(height**2);
        alert('ค่า BMI = ' + bmi);
    }, 2000);
})
.catch((error) => {
    alert(error.message);
});

const lyricBox = document.querySelector('.lyric');

function lyricPromise(lyric) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lyricElement = document.createElement('h5');
            lyricElement.innerHTML = lyric;
            lyricBox.append(lyricElement);
            resolve();
        }, 3000);
    })
}

lyricPromise('นานกว่าจะลงไป')
.then(() => {
    return lyricPromise('กว่าจะเบิร์นทิ้งมันยากเท่าไหร่')
})
.then(() => {
    return lyricPromise('ลดลงไปได้ซักโลไม่ง่าย')
})
.then(() => {
    lyricPromise('อดข้าวเย็นมา กะว่าคืนนี้ จะนอนหลับไว')
})