
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

let firstOperand = "";
let secondOperand = "";
let memReg = "0";
let symbol;
let result = "";
let test = "";

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
				if(secondOperand.length < 6){
				secondOperand += i
				display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});}
			} else {
				if(result){firstOperand = ""; result = "";}
				if(firstOperand.length < 6){
				firstOperand += i;
				display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});}
			}//if symbol 
				});//addEventListener - click

		} else {

// = = = = =  == = = Additional Buttons = = = = = = = = = = =

			switch(i){
				case 10: button.textContent = "+/-";
					 button.addEventListener("click", function(){
						if(symbol){
							secondOperand = Number(secondOperand) * -1;
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							firstOperand = firstOperand * -1;
							display.textContent = firstOperand;
						} //if symbol
								});//addEventListener - click
				continue;

				case 11: button.textContent = ".";
					 button.addEventListener("click", function(){
						if(symbol){
							if(secondOperand.includes(".")){}
							else{
								secondOperand += "."
								display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + secondOperand;
								}//if second
						} else {
							if(firstOperand.includes(".")){}
							else{
								firstOperand += ".";
								display.textContent = firstOperand;
								}//if first
						}//if symbol 
								});//addEventListener - click
				continue;

				case 12: button.textContent = "ENT";
					 button.addEventListener("click", enter);//addEventListener - click
				continue;

				case 13: button.textContent = "CE";
					 button.addEventListener("click", function(){
						display.textContent = "0";
						firstOperand = "";
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
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 15: button.textContent = "-";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "-";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 16: button.textContent = "/";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "/";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 17: button.textContent = "*";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "*";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 18: button.textContent = "%";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "%";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
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
					 button.addEventListener("click", function(){
						if(symbol){
							secondOperand = secondOperand.substring(0, secondOperand.length - 1);
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							firstOperand = firstOperand.substring(0, firstOperand.length - 1);;
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} //if symbol
								});//addEventListener - click
				continue;

				case 21: button.textContent = "MC";
					 button.addEventListener("click", function(){
						display.textContent = "0";
						memReg = display.textContent;
							});//addEventListener - click
				continue;

				case 22: button.textContent = "1/x";
					 button.addEventListener("click", function(){
						if(symbol){
							secondOperand = 1 / secondOperand;
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							firstOperand = 1 / firstOperand;
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} //if symbol
								});//addEventListener - click
				continue;

				case 23: button.textContent = "conv";
					 button.addEventListener("click", function(){
						alert("Conversion feature to be added");
						symbol = "&";
							});//addEventListener - click
				continue;

				case 24: button.textContent = "MR";
					 button.addEventListener("click", function(){
						display.textContent = memReg.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
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
							secondOperand = Math.PI.toLocaleString('en', {maximumFractionDigits:4, useGrouping:false})
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							firstOperand = Math.PI.toLocaleString('en', {maximumFractionDigits:4, useGrouping:false})
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} //if symbol
									});//addEventListener - click
				continue;

				case 28: button.textContent = "Pwr";
					 button.addEventListener("click", function(){
						if(symbol){enter();}
							symbol = "^";
							display.textContent = firstOperand.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
								});//addEventListener - click
				continue;

			}//switch for non-integers
		}//if integer
	}//for i to end button creation


// = = = = =  == = = Operating Functions = = = = = = = = = = =


	function enter(){
		if(result){display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
		} else {
			switch(symbol){

				case "+": result = Number(firstOperand) + Number(secondOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false})
				break;

				case "-": result = Number(firstOperand) - Number(secondOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "/": result = Number(firstOperand) / Number(secondOperand);
					if(result == Infinity){alert("BOOM!");location.reload();}
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false})
				break;

				case "*": result = Number(firstOperand) * Number(secondOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "^": result = Math.pow(firstOperand,secondOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "%": result = Number(firstOperand) % Number(secondOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "√": result = Math.sqrt(firstOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

			default: result = firstOperand.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});

			}//switch symbol

			firstOperand = result;
			secondOperand = "";
			symbol = "";
		}//if result
	}//func enter




// = = = = =  == = = Keyboard Support = = = = = = = = = = =



document.addEventListener("keydown", function(event){
let keyPress = event.key;


		if(keyPress >= 0 && keyPress <= 9){
			if(symbol){
				if(secondOperand.length < 6){
				secondOperand += keyPress
				display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});}
			} else {
				if(result){firstOperand = ""; result = "";}
				if(firstOperand.length < 6){
				firstOperand += keyPress;
				display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});}
			}//if symbol 
		}//if keyPress

		else {
			switch(keyPress){
				case "+":
					if(symbol){enter();}
						result = "";
						symbol = "+";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
				break;

				case "-":
					if(symbol){enter();}
						result = "";
						symbol = "-";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
				break;

				case "*":
					if(symbol){enter();}
						result = "";
						symbol = "*";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
				break;

				case "/": event.preventDefault();
					if(symbol){enter();}
						result = "";
						symbol = "/";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
				break;

				case "^":
					if(symbol){enter();}
						symbol = "^";
						display.textContent = firstOperand.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
				break;

				case "%":
					if(symbol){enter();}
						result = "";
						symbol = "%";
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
				break;

				case "Delete":
						display.textContent = "0";
						firstOperand = "";
						secondOperand = "";
						symbol = "";
						result = "";
							
				break;

				case "Enter": enter();
				break;

				case "Backspace":
					if(symbol){
						secondOperand = secondOperand.substring(0, secondOperand.length - 1);
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secondOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
					} else {
						firstOperand = firstOperand.substring(0, firstOperand.length - 1);;
						display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
					} //if symbol
				break;

				case ".":
					if(symbol){
						if(secondOperand.includes(".")){}
						else{
							secondOperand += "."
							display.textContent = Number(firstOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + secondOperand;
							}//if second
					} else {
						if(firstOperand.includes(".")){}
						else{
							firstOperand += ".";
							display.textContent = firstOperand;
							}//if first
					}//if symbol 
				break;

				case "Escape": location.reload();
				break;

			}//switch keyPress

		}//else non-integer keyPress



});//keyboard support






