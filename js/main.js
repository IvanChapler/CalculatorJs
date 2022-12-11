"use strict"

let a = '';
let b = '';
let sign = '';
let result = '';
let field = document.getElementById('field');

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const actions = ['/', '+', '-', '*'];


document.querySelectorAll('button').forEach(item => {
    let key = item.textContent;

    item.addEventListener('click', function() {
        field.textContent = '';

        if (a != '' && sign != '' && numbers.includes(key)) {
            b += key;
            field.textContent = b
            console.log(a, b, sign)
        } else if (numbers.includes(key)) {
            a += key;
            field.textContent = a;
            console.log(a, b, sign)
        }
        
        if (sign === '' && actions.includes(key)) {
            field.textContent = key;
            sign = key;
            console.log(a, b, sign)
        } 
        

        if (key === '=') {
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
}


