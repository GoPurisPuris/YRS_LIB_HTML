const title = document.querySelector('.box-answer');
const addButton = document.querySelector('.button');
const box = document.querySelector('.box5');

function remove(event) {
    event.target.parentNode.remove();
}

function addTodo () {
    //กล่อง
    const boxAnswer = document.createElement('div');
    boxAnswer.classList.add('box3');

    //ข้อความในกล่อง
    const text = document.createElement('h3');
    text.innerHTML = title.value;

    //ปุ่มลบ
    const buttonRemove = document.createElement('button');
    buttonRemove.type = 'button';
    buttonRemove.classList.add('box4');
    buttonRemove.innerHTML = 'ลบ';
    buttonRemove.addEventListener('click' , remove);

    //ข้อความ + ปุ่มลบ => กล่อง 
    boxAnswer.append(text,buttonRemove);

    //กล่อง => กล่องคำตอบ
    box.append(boxAnswer);

    // append = เมื่อกดสร้าง จะสร้างอันล่าสุด ลงไปด้านล่าง
    // prepend = เมื่อกดสร้าง จะสร้างอันล่าสุด ต่อขึ้นด้านบน
}

addButton.addEventListener('click' , addTodo);