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
function clearAnswerBar(){
	document.getElementById('answer').innerHTML = null
}
function saveDisplayedToMemory(){
	memory = input
	firstInput = false
}

function resetOperatorColor(){
	operators.forEach(oper =>{
		oper.style.backgroundColor = "#fcc";
	})
}

function colorOperator(operator){
	// let value = operator.value == '+' ? 'add' : operator.value == '-' ? 'subtract' : operator.value == '*' ? 'multiply' : 'divide'
	// console.log(document.getElementsByClassName(value))
	resetOperatorColor()
	operator.style.backgroundColor = "#cfc";
	coloredOperator = operator
}

const clear = document.querySelector('#clear')
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.add, .subtract, .multiply, .divide')
const equal = document.querySelector('.equal')
const comma = document.querySelector('.comma')
const backspace = document.querySelector('#backspace')

let firstInput = true
let input = 0
let memory = 1
let operatorValue = null
let answer = null
let clearViewNextNumberClick = false
let chooseNumberOrOperator = 1 // If I press a number after equal I want to start from a new calculation. If I press operator I want to continue operation on current number.
let operatorMarkedColor = false
let coloredOperator = null

numbers.forEach(number => {
	number.addEventListener('click', function (e){
		if(document.getElementById('answer').textContent !== '0'){
			if (clearViewNextNumberClick){
				if(chooseNumberOrOperator == 2){
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
		}
	})
})

operators.forEach(operator => {
	operator.addEventListener('click', e => {
		operatorValue = operator.value
		if (firstInput){
			saveDisplayedToMemory()
		}
		chooseNumberOrOperator = 1
		clearViewNextNumberClick = true
		colorOperator(operator)
	})
})
clear.addEventListener('click', e => {
	clearAnswerBar()
	resetOperatorColor()
	input = 0
	memory = 0
	firstInput = true
})

comma.addEventListener('click', e => {
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
		resetOperatorColor()
		answer = operate(input, memory, operatorValue)
		if (!Number.isInteger(answer)){
			answer = Math.round(answer*100000)/100000
		}
		document.getElementById('answer').innerHTML = answer
		memory = answer
		clearViewNextNumberClick = true
		chooseNumberOrOperator = 2
	}
	
})

document.onkeypress = e => {
    e = e || window.event;
    console.log(e)
};