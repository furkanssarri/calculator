// Constants
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const utilities = document.querySelectorAll(".utility");
const buttons = document.querySelectorAll(".buton");
const displayFirst = document.querySelector(".display-area span:first-child");
const displaySecond = document.querySelector(".display-area span:last-child");

// Variables
let a;
let b;
let operator = null;
let utility;
let result;
let sum;
let secondOperand;
let firstOperand;
let oprText;




// eventListeners
eventListeners();

function eventListeners() {
   utilities.forEach(utility => {
      utility.addEventListener("click", e => {
         if (e.target.value === "modulus") {
            return;
         } else if (e.target.value === "ac") {
            displayFirst.textContent = "";
            displaySecond.textContent = "";
            firstOperand = "";
            secondOperand = "";
            operator = null;
         }
      })
   });

   digits.forEach(digit => {
      digit.addEventListener("click", (e) => {
         if (operator === null) {
            displaySecond.textContent += e.target.value;
            firstOperand = displaySecond.textContent;
         } else {
            displaySecond.textContent += e.target.value;
            secondOperand = displaySecond.textContent;
         }
      });
   });

   operators.forEach(o => {
      o.addEventListener("click", (e) => {
         if (e.target.value !== "equals") {
            if (firstOperand && secondOperand && operator) {
               operate(firstOperand, secondOperand, operator);
               displaySecond.textContent = "";
               operator = e.target.value;
               getOprText(operator);
               displayResults(false);
            } else {
               operator = e.target.value;
               getOprText(operator);
               displayFirst.textContent += `${firstOperand} ${oprText} `;
               displaySecond.textContent = "";
            }
         } else if (e.target.value === ".") {
            return displaySecond.textContent += ".";
         } 
         else {
            operate(firstOperand, secondOperand, operator);
            displayResults(true);
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

function modulus(a, b) {
   result = a % b;
   evaluate(result);
   return result;
}

function evaluate(result) {
   let tempResult = result;
   displaySecond.textContent = result;
   firstOperand = tempResult;
}

function operate(a, b, operator) {
   a = Number(a);
   b = Number(b);
   if (operator === "addition") {
      add(a, b);
   } else if (operator === "subtraction") {
      subtract(a, b);
   } else if (operator === "multiplication") {
      multiply(a, b);
   } else if (operator === "division") {
      division(a, b);
   } else if (operator === "modulus") {
      modulus(a, b);
   } else {
      console.log(`Make a decision first.`);
   }
}

function getOprText(operator) {
   oprText;
   switch (operator) {
      case "addition":
         oprText = "+"
         break;
      case "subtraction":
         oprText = "-";
         break;
      case "multiplication":
         oprText = "x";
         break;
      case "division":
         oprText = "÷";
         break;
      default: return "";
         break;
   }
   return oprText;
}


function displayResults(isEquals) {
   if (!isEquals) {
      displayFirst.textContent += `${secondOperand} ${oprText} `;
   }
   if (isEquals) {
      // displayFirst.textContent += `${secondOperand} = `;
      displayFirst.textContent = "";
   }
}

