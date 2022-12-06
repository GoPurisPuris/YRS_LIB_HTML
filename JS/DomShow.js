const Button = document.querySelectorAll('.button');

function buttonClick(event) {
    const messageId = event.target.dataset.messageId;
    const message = document.querySelector('#' + messageId);
    message.classList.toggle('show');
}

Button.forEach((button) => {
    button.addEventListener('click', buttonClick)
})