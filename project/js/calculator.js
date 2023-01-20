var buttons = document.querySelectorAll('.keypad button');
var display = document.querySelector('.display');
var display_history = document.querySelector('.display-history');
var operator = '';
var firstNumber = '';
var secondNumber = '';

var answer = "";
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.innerHTML;
        if (value === 'C') {
            display.innerHTML = '';
            display_history.innerHTML = '';
            operator = '';
            answer = "";
            firstNumber = '';
            secondNumber = '';
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (answer != ""){
                display.innerHTML = answer;
            }
            operator = value;
            firstNumber = display.innerHTML;
            display.innerHTML += operator;
        } else if (value === '=') {
            secondNumber = display.innerHTML.split(operator)[1];
            if (operator === '+') {
                display_history.innerHTML = display.innerHTML
                answer = parseInt(firstNumber) + parseInt(secondNumber)
                display.innerHTML = "= " + answer;
                
            } else if (operator === '-') {
                display_history.innerHTML = display.innerHTML
                answer = parseInt(firstNumber) - parseInt(secondNumber)
                display.innerHTML = "= " + (parseInt(firstNumber) - parseInt(secondNumber));
            } else if (operator === '*') {
                display_history.innerHTML = display.innerHTML
                answer = parseInt(firstNumber) * parseInt(secondNumber)
                display.innerHTML = "= " + (parseInt(firstNumber) * parseInt(secondNumber));
            } else if (operator === '/') {
                display_history.innerHTML = display.innerHTML
                answer = parseInt(firstNumber) / parseInt(secondNumber)
                display.innerHTML = "= " + (parseInt(firstNumber) / parseInt(secondNumber));
            }
            } else {
            display.innerHTML += value;
            }
            });
            }