"use strict"

let a = '';
let b = '';
let sign = '';
let result = '0';
let field = document.getElementById('field');

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const actions = ['/', '+', '-', '*'];


document.querySelectorAll('button').forEach(item => {
    let key = item.textContent;

    item.addEventListener('click', function() {
        field.textContent = '';

        if (result != '' && sign === '' && numbers.includes(key)) {
            clearAll();
            a += key;
            field.textContent = a;
            console.log(a, b, sign)
        } else if (a != '' && sign != '' && numbers.includes(key)) {
            b += key;
            field.textContent = b
            console.log(a, b, sign)
        } else if (numbers.includes(key)) {
            a += key;
            field.textContent = a;
            console.log(a, b, sign)
        }
        

        if (a != '' && b != '' && actions.includes(key)) {
            calculate();
            sign = key;
        } else if (actions.includes(key)) {
            field.textContent = key;
            sign = key;
            console.log(a, b, sign)
        }
        

        if (key === '=') {
            calculate();
            clearSign();
        }
        if (key === '+/-') {
            if (b === ''){
                 a = a * -1
                 field.textContent = a
            } else {
                b = b * -1
                field.textContent = b
            }
        }

        function calculate () {

            switch (sign) {
                case '/':
                    result = a / b
                    break
                case '*':
                    result = a * b
                    break
                case '-':
                    result = a - b
                    break
                case '+':
                    result = +a + +b
                    break
            }
            console.log(result)
            
            field.textContent = result;
            a = result;
            b = '';
        }
    })

    
})


document.querySelector('button').onclick = clearAll

function clearAll () {
    a = '';
    b = '';
    sign = '';
    field.textContent = 0;
    result = '';
}

function clearSign () {
    sign = '';
}
