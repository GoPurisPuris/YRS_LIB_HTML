let inputnumber = document.getElementById('input-number')
let runbutton = document.getElementById('run-button')
let output = document.getElementById('output')

function printMultiply() {
    let numb = Number(inputnumber.value);
    let outputnumb = '';

    for (let i = 1; i <= 5; i++){
        outputnumb += '<p>';
        outputnumb += numb + ' ^ ' + i + ' = ' + (numb ** i);
        outputnumb += '</p>';
    }

    output.innerHTML = outputnumb;
}

runbutton.addEventListener('click', printMultiply)