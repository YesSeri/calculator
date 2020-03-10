function add(x, y){ return x + y }
function subtract(x, y){ return y - x }
function multiply(x, y){ return x * y }
function divide(x, y){ return y / x }

function operate(x, y, operator){
	x = Number(x)
	y = Number(y)
	switch (operator) {
		case '+' :
			console.log(`${y} ${operator} ${x} = ${add(x, y, operator)}`)
			return add(x, y, operator);
		case '-' : 
			console.log(`${y} ${operator} ${x} = ${subtract(x, y, operator)}`)
			return subtract(x, y, operator);
		case '*' :
			console.log(`${y} ${operator} ${x} = ${multiply(x, y, operator)}`)
			return multiply(x, y, operator);
		case '/' :
			console.log(`${y} ${operator} ${x} = ${divide(x, y, operator)}`)
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
let clearViewNextNumberClick = false
let chooseNumberOrOperator = 1

numbers.forEach(number => {
	number.addEventListener('click', function (e){
		if (clearViewNextNumberClick){
			if(chooseNumberOrOperator == 2){
				console.log('hey')
				memory = 0
				answer = null
				input = 0
				firstInput = true
			}
			input = document.getElementById('answer').innerHTML = number.value;
			clearViewNextNumberClick = false
			chooseNumberOrOperator = 1
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
		chooseNumberOrOperator = 1
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
	console.log(document.getElementById('answer').innerHTML)
	if(Number.isInteger(Number(document.querySelector('#answer').innerText)) && !clearViewNextNumberClick){
		document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML + '.'
	}
})

backspace.addEventListener('click', e => {
	memory = document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML.slice(0, -1)
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
		clearViewNextNumberClick = true
		chooseNumberOrOperator = 2
	}
	
})

