function add(x, y){ return x + y }
function subtract(x, y){ return y - x }
function multiply(x, y){ return x * y }
function divide(x, y){ return y / x }

function operate(x, y, operator){
	x = Number(x)
	y = Number(y)
	switch (operator) {
		case '+' :
			return add(x, y, operator);
		case '-' : 
			return subtract(x, y, operator);
		case '*' :
			return multiply(x, y, operator);
		case '/' :
			return divide(x, y, operator);
	}
}
function clearBar(){
	document.getElementById('answer').innerHTML = null
}
function saveDisplayedToMem(){
	memory = input
	firstInput = false
}

const clear = document.querySelector('#clear')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operators')
const equal = document.querySelector('.equal')
const comma = document.querySelector('.comma')
const backspace = document.querySelector('#backspace')

let firstInput = true
let input = 0
let memory = 1
let operatorValue = null
let answer = null
let usedComma = false
let clearViewNextNumberClick = false

numbers.forEach(number => {
	number.addEventListener('click', function (e){
		if (clearViewNextNumberClick){
			input = document.getElementById('answer').innerHTML = number.value;
			clearViewNextNumberClick = false
		}else{
			input = document.getElementById('answer').innerHTML += number.value;	
		}
		
		
	})
})

operators.forEach(operator => {
	operator.addEventListener('click', e => {
		operatorValue = operator.value
		if (firstInput){
			saveDisplayedToMem()
		}
		clearViewNextNumberClick = true
	})
})
clear.addEventListener('click', e => {
	clearBar()
	input = 0
	memory = 0
	firstInput = true
})

comma.addEventListener('click', e => {
	if(Number.isInteger(Number(document.querySelector('#answer').innerText))){
		document.getElementById('answer').innerHTML = input + '.'
		usedComma = true
	}
})

backspace.addEventListener('click', e => {
	document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML.slice(0, -1)
})

equal.addEventListener('click', e => {
	if(input==0 && memory==0 && operatorValue=="/"){
		document.getElementById('answer').innerHTML = "Yeah right bud. XD"
		firstInput=true
	}
	else if((input || memory) && operatorValue){
		answer = operate(input, memory, operatorValue)
		document.getElementById('answer').innerHTML = answer
		memory = answer
	}
})

