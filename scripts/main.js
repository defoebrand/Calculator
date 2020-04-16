const root = document.documentElement;
//root.style.setProperty("--testVar1", var1);
//root.style.setProperty('--testVar2', key);

const container = document.querySelector("#container");


const calculator = document.querySelector("#calculator");
container.appendChild(calculator);

const display = document.createElement("div");
display.classList.add("display");
calculator.appendChild(display);

const readOut = document.createElement("p");
readOut.classList.add("readOut");
display.appendChild(readOut);

const keypad = document.createElement("p");
keypad.classList.add("keypad");
calculator.appendChild(keypad);

let calc;
let numbers1;
let numbers2;
let symbol;

// ========== Create buttons ============= 

for(let j = 0; j < 19; j++) {

    let div = document.querySelector(`#square${j}`);
    div.classList.add(`buttons`);


if(j < 10){
    div.textContent = `${j}`;
}
else {div.textContent = "";
}

	div.addEventListener("click", function(){

if(j >=0 || j <= 9){
	readOut.textContent += div.textContent;
	numbers2 = readOut.textContent;
	readOut.style.setProperty('--testVar2', div.textContent);
}//if 0-9


if(j == 10){
	symbol = "/";
	numbers1 = readOut.textContent;// + symbol;
	readOut.textContent = "";
}// if j 10

if(j == 11){
	readOut.textContent += ".";
}// if j 11



if(j == 12){

   if (symbol == "*") {
	readOut.textContent = Number(numbers1) * Number(numbers2);
   }// if *
   else if (symbol == "/") {
	readOut.textContent = Number(numbers1) / Number(numbers2);
   }// if /
   else if(symbol == "+"){
//	calc += Number(readOut.textContent);
	readOut.textContent = Number(numbers1) + Number(numbers2);
//	readOut.style.setProperty('--testVar2', numbers1);
   }//if +
   else if (symbol == "-") {
	readOut.textContent = Number(numbers1) - Number(numbers2);
   }// if -

}//if j 12

if(j == 13){
symbol = "*";
  numbers1 = readOut.textContent;// + symbol;
readOut.textContent = "";
}// if j 13


if(j == 14){
symbol = "+";
  numbers1 = readOut.textContent;// + symbol;
readOut.textContent = "";
}// if j 14

if(j == 15){
symbol = "-";
  numbers1 = readOut.textContent;// + symbol;
readOut.textContent = "";
}// if j 15



if(j == 16){
	readOut.textContent = "";
	numbers1 = 0;
	numbers2 = 0;
	symbol = "";
}//if j 16

if(j == 18){
	readOut.textContent = Number(readOut.textContent) * -1;
}//if j 18


});

    keypad.appendChild(div);



}//for j

// ========================================
// ======= Keypress function ==============

document.addEventListener('keydown', event => {
//	let code = event.keyCode || event.which;
	let key = event.key;

if(key >=0 || key < 10){
	readOut.textContent += key;
	numbers2 = readOut.textContent;
	readOut.style.setProperty('--testVar2', numbers2);
} //if key 0


if (key == "*"){
//numbers1 = readOut.textContext;
symbol = key;
  numbers1 = readOut.textContent;// + symbol;
readOut.textContent = "";
//readOut.textContent = Number(readOut.textContent) + symbol;
} //if *
else if (key == "/"){
event.preventDefault();
//calc = Number(readOut.textContent) * Number(readOut.textContent);
symbol = key;
  numbers1 = readOut.textContent;// + symbol;
readOut.textContent = "";
}//if /
else if (key == "+"){
//calc = Number(readOut.textContent) * Number(readOut.textContent);
symbol = key;
  numbers1 = readOut.textContent;// + symbol;
readOut.textContent = "";
}//if +
else if (key == "-"){
//calc = Number(readOut.textContent) * Number(readOut.textContent);
symbol = key;
  numbers1 = numbers2;// + symbol;
readOut.textContent = numbers1 + symbol;
}//if -



if (key == "Enter"){

   if (symbol == "*") {
	readOut.textContent = Number(numbers1) * Number(numbers2);

   }// if *
   else if (symbol == "/") {
	readOut.textContent = Number(numbers1) / Number(numbers2);
   }// if /
   else if(symbol == "+"){
//	calc += Number(readOut.textContent);
	readOut.textContent = Number(numbers1) + Number(numbers2);
//	readOut.style.setProperty('--testVar2', numbers1);
   }//if +
   else if (symbol == "-") {
	readOut.textContent = Number(numbers1) - Number(numbers2);
   }// if -

//	calc += Number(readOut.textContent);
//	readOut.style.setProperty('--testVar2', numbers1);



}//if Enter

if(key == "."){
	readOut.textContent += ".";
}// if j 11







}); //keydown function

// ==============================================



