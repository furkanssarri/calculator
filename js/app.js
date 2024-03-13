// Constants
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const utilities = document.querySelectorAll(".utility");
const buttons = document.querySelectorAll(".button");
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

         } else if (e.target.value === "ac") {
            displayFirst.textContent = "";
            displaySecond.textContent = "";
            firstOperand = "";
            secondOperand = "";
            operator = null;
         } else if (e.target.value === "point") {
            displaySecond.textContent += ".";
         } else if (e.target.value === "sqrt") {
            let sqrt = Math.sqrt(firstOperand);
            displaySecond.textContent = "";
            displayResults(true);
            evaluate(sqrt);
         } else if (e.target.value === "c") {
            deleteNum();
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
         } else {
            operate(firstOperand, secondOperand, operator);
            displayResults(true);
         }
      });
   });

   // Listen to the keypress
   window.addEventListener("keypress", e => {
      let keyValue = e.key;
      if (e.key === "Enter") keyValue = "equals";
      if (e.key === "+") keyValue = "addition";
      if (e.key === "-") keyValue = "subtraction";
      if (e.key === "*") keyValue = "multiplication";
      if (e.key === "/") keyValue = "division";
      if (e.key === "%") keyValue = "modulus";
      if (e.key === "v") keyValue = "sqrt";
      if (e.key === ".") keyValue = "point";
      buttons.forEach(button => {
         if (button.value == keyValue) {
            button.click();
         }
      });
   });

   window.addEventListener("keydown", e => {
      let keyValue = e.key;
      if (e.key === "Escape") keyValue = "ac";
      if (e.key === "Backspace") keyValue = "c";
      // Backspace delete soon to be implemented.
      utilities.forEach(utility => {
         if (utility.value == keyValue) {
            utility.click();
         }
      });
   });
}


// Code

function deleteNum() {
   let currentValue = displaySecond.textContent = displaySecond.textContent
      .toString()
      .slice(0, -1);
   if (!firstOperand) {
      firstOperand = currentValue;
   } else {
      secondOperand = currentValue;
   }

}



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
      case "modulus":
         oprText = "%";
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

