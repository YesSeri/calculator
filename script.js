function add(x, y){ return x + y }
function subtract(x, y){ return x - y }
function multiply(x, y){ return x * y }
function divide(x, y){ return x / y }

function operate(x, y, operator){
	switch (operator) {
		case 'add' :
			return add(x, y, operator);
		case 'subtract' : 
			return subtract(x, y, operator);
		case 'multiply' :
			return multiply(x, y, operator);
		case 'divide' :
			return divide(x, y, operator);
	}
}

const clear = document.querySelector('#clear')
const numbers = document.querySelectorAll('.number');
let firstInput = null

numbers.forEach(number => {
	number.addEventListener('click', function (e){
		if (document.getElementById('answer').innerHTML){
			document.getElementById('answer').innerHTML += number.value;
		}else{
			document.getElementById('answer').innerHTML = number.value;
		}
	})
})



clear.addEventListener('click', e => {
	document.getElementById('answer').innerHTML = null
})