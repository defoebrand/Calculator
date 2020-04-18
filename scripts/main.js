
// = = = = =  == = =Variable Declaration= = = = = = = = = = =

const body = document.querySelector("body");

const calculator = document.createElement("div");
calculator.classList.add("calculator");
body.appendChild(calculator);

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "Welcome!";
calculator.appendChild(display);

const keypad = document.createElement("div");
keypad.classList.add("keypad");
calculator.appendChild(keypad);

let primeOperand = "";
let secndOperand = "";
let memReg = "0";
let symbol;
let result = "";
let test;

// = = = = =  == = = Loop to create buttons = = = = = = = = = = =

	for(let i = 0; i < 29; i++){
	  let button = document.createElement("button");
		button.classList.add(`buttons`);
		button.classList.add(`button${i}`);
		keypad.appendChild(button);

// = = = = =  == = = Input 0-9 = = = = = = = = = = =

		if(i < 10){
				button.textContent = i;
				button.addEventListener("click", function(){
			if(symbol){
				if(secndOperand.length < 5){
				secndOperand += i
				display.textContent = primeOperand + symbol + secndOperand;}
			} else {
				if(result){primeOperand = ""; result = "";}
				if(primeOperand.length < 7){
				primeOperand += i;
				display.textContent = primeOperand;}
			}//if symbol 
				});//addEventListener - click

		} else {

// = = = = =  == = = Non-integer Inputs = = = = = = = = = = =

			switch(i){
				case 10: button.textContent = "+/-";
					 button.addEventListener("click", function(){
						if(symbol){
							secndOperand = Number(secndOperand) * -1;
							display.textContent = primeOperand + symbol + secndOperand;
						} else {
							primeOperand = Number(display.textContent) * -1;
							display.textContent = primeOperand;
						} //if symbol
								});//addEventListener - click
				continue;

				case 11: button.textContent = ".";
					 button.addEventListener("click", function(){

						if(symbol){
							if(secndOperand.includes(".")){}
							else{
								secndOperand += "."
								display.textContent = primeOperand + symbol + secndOperand;
								}//if secnd
						} else {
							if(primeOperand.includes(".")){}
							else{
								primeOperand += ".";
								display.textContent = primeOperand;
								}//if prime
						}//if symbol 


								});//addEventListener - click
				continue;


				case 12: button.textContent = "ENT";
					 button.addEventListener("click", enter);//addEventListener - click
				continue;

				case 13: button.textContent = "CE";
					 button.addEventListener("click", function(){
						display.textContent = "0";
						primeOperand = "";
						secondOperand = "";
						symbol = "";
result = "";
							});//addEventListener - click
				continue;

				case 14: button.textContent = "+";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "+";
						display.textContent = primeOperand + symbol;
							});//addEventListener - click
				continue;

				case 15: button.textContent = "-";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "-";
						display.textContent = primeOperand + symbol;
							});//addEventListener - click
				continue;

				case 16: button.textContent = "/";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "/";
						display.textContent = primeOperand + symbol;
							});//addEventListener - click
				continue;

				case 17: button.textContent = "*";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "*";
						display.textContent = primeOperand + symbol;
							});//addEventListener - click
				continue;

				case 18: button.textContent = "%";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "%";
						display.textContent = primeOperand + symbol;
							});//addEventListener - click
				continue;

				case 19: button.textContent = "√";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "√";
						enter();
							});//addEventListener - click
				continue;

				case 20: button.textContent = "Bkp";
				continue;

				case 21: button.textContent = "MC";
					 button.addEventListener("click", function(){
						display.textContent = "0";
						memReg = display.textContent;
							});//addEventListener - click
				continue;

				case 22: button.textContent = "b";
				continue;

				case 23: button.textContent = "c";
				continue;

				case 24: button.textContent = "MR";
					 button.addEventListener("click", function(){
						display.textContent = memReg;
							});//addEventListener - click
				continue;

				case 25: button.textContent = "M-";
					 button.addEventListener("click", function(){
						if(!result){enter();}
							memReg = Number(memReg) - Number(result);
								});//addEventListener - click
				continue;

				case 26: button.textContent = "M+";
					 button.addEventListener("click", function(){
						if(!result){enter();}
							memReg = Number(memReg) + Number(result);
								});//addEventListener - click
				continue;

				case 27: button.textContent = "Pi";
					 button.addEventListener("click", function(){
					if(symbol){
							secndOperand = Math.PI.toFixed(4);
							display.textContent = primeOperand + symbol + secndOperand;
						} else {
							primeOperand = Math.PI.toFixed(4);
							display.textContent = primeOperand;
						} //if symbol
									});//addEventListener - click
				continue;

				case 28: button.textContent = "Pwr";
					 button.addEventListener("click", function(){
						if(symbol){enter();}
							symbol = "^";
							display.textContent = primeOperand + symbol;
								});//addEventListener - click
				continue;

			}//switch
		}//if - else
	}//for i


// = = = = =  == = = Operating Functions = = = = = = = = = = =


	function enter(){
		if(result){display.textContent = result.toFixed(3);
		} else {
			switch(symbol){

				case "+": result = Number(primeOperand) + Number(secndOperand);
					  display.textContent = result.toFixed(3);
				break;

				case "-": result = Number(primeOperand) - Number(secndOperand);
					  display.textContent = result.toFixed(3);
				break;

				case "/": result = Number(primeOperand) / Number(secndOperand);
					if(result == Infinity){alert("BOOM!");location.reload();}
					  display.textContent = result.toFixed(3);
				break;

				case "*": result = Number(primeOperand) * Number(secndOperand);
					  display.textContent = result.toFixed(3);
				break;

				case "^": result = Math.pow(primeOperand,secndOperand);
					  display.textContent = result.toFixed(3);
				break;

				case "%": result = Number(primeOperand) % Number(secndOperand);
					  display.textContent = result.toFixed(3);
				break;

				case "√": result = Math.sqrt(primeOperand);
					  display.textContent = result.toFixed(3);
				break;

			default: result = primeOperand.toFixed(3);

			}//switch symbol

			primeOperand = result;
			secndOperand = "";
			symbol = "";
		}//if result
	}//func enter



