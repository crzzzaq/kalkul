
let input = document.querySelector('#display');
let key = document.querySelector('.key')
let keyboard = document.querySelectorAll('.key')
let calc = document.querySelector('#calc');
let result = document.querySelector('#result');
let reset = document.querySelector('#reset');

let exp = '';

for (let key of keyboard) {
    key.addEventListener('click', function () {
        exp = exp + key.textContent;
        input.value = exp;
        console.log(input);
    })
}
result.addEventListener('click', (evt) => {
    exp = eval(display.value);
    display.value = exp;
    exp = ''
})


reset.addEventListener('click', (evt) => {
    evt.preventDefault();
    exp = '';
    display.value = '0'
})