let answers = document.querySelectorAll('.input');
let errorShow = document.querySelector('.show');
let answerForm = document.querySelector('.answer-form');

/*
// change = เมื่อพิมพ์เสร็จต้องไปคลิกข้างนอก ถึงจะแสดงผล
function checkAnswers() {
    let toolong = false;
    answers.forEach((answer) => {
        if (answer.value.length > 15) {
            toolong = true;
        }
    });
    if (toolong) {
        errorShow.style.display = 'block';
    }
    else {
        errorShow.style.display = 'none';
    }
}

answers.forEach((answer) => {
    answer.addEventListener('change', checkAnswers);
});
*/
//--------------------------------------------------------------------------------------
/*
// input = จะแสดงผลขณะพิมพ์ทันที
function checkAnswers() {
    let toolong = false;
    answers.forEach((answer) => {
        if (answer.value.length > 15) {
            toolong = true;
        }
    });
    if (toolong) {
        errorShow.style.display = 'block';
    }
    else {
        errorShow.style.display = 'none';
    }
}

answers.forEach((answer) => {
    answer.addEventListener('input', checkAnswers);
});
*/
//----------------------------------------------------------------------------------------------------------------
// submit = ต้องกดปุ่มส่งข้อมูลก่อน หากเป็นไปตามเงื่อนไข ข้อมูลจะถูกส่งไปยังเซิร์ฟเวอร์ แต่หากไม่ตรงตามเงื่อนไขจะแสดงข้อความที่กำหนด
function checkAnswers(event) {
    let toolong = false;
    answers.forEach((answer) => {
        if (answer.value.length > 15) {
            toolong = true;
        }
    });
    if (toolong) {
        errorShow.style.display = 'block';
        event.preventDefault();
    }
}

answerForm.addEventListener('submit', checkAnswers);