// Constants
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const utilities = document.querySelectorAll(".utility");
const buttons = document.querySelectorAll(".buton");

// Variables
let total;



// eventListeners
eventListeners();

function eventListeners() {
   buttons.forEach(buton => {
      buton.addEventListener("click", determineValues);
   });
}

function determineValues(e) {
   if (e.target.classList.contains("number")) {
      console.log(`The number ${e.target.id} selected.`);
   } else if (e.target.classList.contains("operator")) {
      console.log(`The operation ${e.target.id} selected.`)
   } else if (e.target.classList.contains("utility")) {
      console.log(`The ${e.target.id} utility buton selected.`)
   }
}


// Code

