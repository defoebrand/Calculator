
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
				if(secndOperand.length < 6){
				secndOperand += i
				display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secndOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});}
			} else {
				if(result){primeOperand = ""; result = "";}
				if(primeOperand.length < 6){
				primeOperand += i;
				display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});}
			}//if symbol 
				});//addEventListener - click

		} else {

// = = = = =  == = = Non-integer Inputs = = = = = = = = = = =

			switch(i){
				case 10: button.textContent = "+/-";
					 button.addEventListener("click", function(){
						if(symbol){
							secndOperand = Number(secndOperand) * -1;
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secndOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							primeOperand = primeOperand * -1;
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
								
								display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + secndOperand;
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
						secndOperand = "";
						symbol = "";
						result = "";
							});//addEventListener - click
				continue;

				case 14: button.textContent = "+";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "+";
						display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 15: button.textContent = "-";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "-";
						display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 16: button.textContent = "/";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "/";
						display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 17: button.textContent = "*";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "*";
						display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
							});//addEventListener - click
				continue;

				case 18: button.textContent = "%";
					 button.addEventListener("click", function(){
					if(symbol){enter();}
						result = "";
						symbol = "%";
						display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
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
							secndOperand = secndOperand.substring(0, secndOperand.length - 1);
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secndOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							primeOperand = primeOperand.substring(0, primeOperand.length - 1);;
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
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
							secndOperand = 1 / secndOperand;
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secndOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							primeOperand = 1 / primeOperand;
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
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
							secndOperand = Math.PI.toLocaleString('en', {maximumFractionDigits:4, useGrouping:false})
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol + Number(secndOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} else {
							primeOperand = Math.PI.toLocaleString('en', {maximumFractionDigits:4, useGrouping:false})
							display.textContent = Number(primeOperand).toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
						} //if symbol
									});//addEventListener - click
				continue;

				case 28: button.textContent = "Pwr";
					 button.addEventListener("click", function(){
						if(symbol){enter();}
							symbol = "^";
							display.textContent = primeOperand.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false}) + symbol;
								});//addEventListener - click
				continue;

			}//switch
		}//if - else
	}//for i


// = = = = =  == = = Operating Functions = = = = = = = = = = =


	function enter(){
		if(result){display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
		} else {
			switch(symbol){

				case "+": result = Number(primeOperand) + Number(secndOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false})
				break;

				case "-": result = Number(primeOperand) - Number(secndOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "/": result = Number(primeOperand) / Number(secndOperand);
					if(result == Infinity){alert("BOOM!");location.reload();}
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false})
				break;

				case "*": result = Number(primeOperand) * Number(secndOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "^": result = Math.pow(primeOperand,secndOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "%": result = Number(primeOperand) % Number(secndOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

				case "√": result = Math.sqrt(primeOperand);
					  display.textContent = result.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});
				break;

			default: result = primeOperand.toLocaleString('en', {maximumFractionDigits:3, useGrouping:false});

			}//switch symbol

			primeOperand = result;
			secndOperand = "";
			symbol = "";
		}//if result
	}//func enter



