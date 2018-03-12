const display = document.getElementById("display");
display.innerHTML = 0;

let numbers = [];
let op = [];
let edot = 1;
let dot = false;
let number = 0;
let memory = 0;

let btn = (div) => {
	console.log(div);
	switch(div.className) {
		case "n1 btn":
			addNumber(1);
			break;
		case "n2 btn":
			addNumber(2);
			break;
		case "n3 btn":
			addNumber(3);
			break;
		case "n4 btn":
			addNumber(4);
			break;
		case "n5 btn":
			addNumber(5);
			break;
		case "n6 btn":
			addNumber(6);
			break;
		case "n7 btn":
			addNumber(7);
			break;
		case "n8 btn":
			addNumber(8);
			break;
		case "n9 btn":
			addNumber(9);
			break;
		case "n0 btn":
			addNumber(0);
			break;
		case "dot btn":
			dot = true;
			break;
		case "clear btn":
			resetNumber();
			break;
		case "plus btn":
			plus();
			break;
		case "minus btn":
			minus();
			break;
		case "times btn":
			times();
			break;
		case "div btn":
			div();
			break;
		case "change btn":
			number = - number;
			break;
		case "raise btn":
			raise();
			break;
		case "equals btn":
			show();
			break;
		case "set btn":
			memory = 0;
			break;
		case "add btn":
			memory = memory + (number / edot);
			break;
		case "sub btn":
			memory = memory - (number / edot);
			break;
		case "get btn":
			resetNumber;
			number = memory;
			break;
		
		
	}
	display.innerHTML = number / edot;
}

let addNumber = (n) => {
	if(dot) edot = edot * 10;
	number = number * 10 + n;
}

let resetNumber = () => {
	dot = false;
	edot = 1;
	number = 0;
}

let plus = () => {
	numbers.push(number/edot);
	solve();
	resetNumber();
	op.push("+")
}

let minus = () => {
	numbers.push(number/edot);
	solve();
	resetNumber();
	op.push("-")
}

let times = () => {
	numbers.push(number/edot);
	solve();
	resetNumber();
	op.push("x");
}

let raise = () => {
	numbers.push(number/edot);
	solve();
	resetNumber();
	op.push("**");
}

let div = () => {
	numbers.push(number/edot);
	solve();
	resetNumber();
	op.push("/");
}

let solve = () => {
	const a = op.pop();
	if(a !== undefined) {
		switch(a) {
			case "+":
				numbers.push(numbers.pop() + numbers.pop());
				break;
			case "-":
				tmp_num = numbers.pop();
				numbers.push(numbers.pop() - tmp_num);
				break;
			case "x":
				numbers.push(numbers.pop() * numbers.pop());
				break;
			case "/":
				tmp_num = numbers.pop();
				numbers.push(numbers.pop() / tmp_num);
				break;
			case "**":
				tmp_num = numbers.pop();
				numbers.push(numbers.pop() ** tmp_num);
				break;
		}
	}
}

let show = () => {
	numbers.push(number/edot);
	solve();
	resetNumber();
	number = numbers.pop();
	numbers = [];
	numbers.push(number);
}