// Constants
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const utilities = document.querySelectorAll(".utility");
const buttons = document.querySelectorAll(".buton");
const displayFirst = document.querySelectorAll(".display-area span");
// const displaySecond = document.querySelectorAll(".display-area span");
// Variables
let a;
let b;
let operator;
let utility;
let result;
let sum;
let secondOperand;
let firstOperand;




// eventListeners
eventListeners();

function eventListeners() {
   // buttons.forEach(buton => {
   //    buton.addEventListener("click", determineValues);
   // });

   digits.forEach(digit => {
      digit.addEventListener("click", (e) => {
         if (operator === undefined) {
            displayFirst.textContent += e.target.value;
            firstOperand = parseInt(displayFirst.textContent);
         } else {
            displayFirst.textContent += e.target.value;
            secondOperand = parseInt(displayFirst.textContent);
         }
      });
   });

   operators.forEach(o => {
      o.addEventListener("click", (e) => {
         if (e.target.value !== "equals") {
            operator = e.target.value;
            // displaySecond.textContent += displayFirst.textContent;
            displayFirst.textContent = "";
         } else {
            operate(firstOperand,secondOperand,operator);
         }
      });
   });
}


// Code



function add(a, b) {
   result = a + b;
   evaluate(result);
   return result;
}

function subtract(a, b) {
   result = a - b;
   evaluate(result);
   return result;
}

function multiply(a, b) {
   result = a * b;
   evaluate(result);
   return result;
}

function division(a, b) {
   result = a / b;
   evaluate(result);
   return result;
}

function evaluate(result) {
   let tempResult = result;
   displayFirst.textContent = result;
   firstOperand = tempResult;
}

function operate(a, b, operator, result) {
   if (operator === "addition") {
      add(a, b);
   } else if (operator === "subtraction") {
      subtract(a, b);
   } else if (operator === "multiplication") {
      multiply(a, b);
   } else if (operator === "division") {
      division(a, b);
   } else {
      console.log(`Make a decision first.`);
   }
}