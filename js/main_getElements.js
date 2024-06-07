"use strict";
//INPUT FIELDS
const input1 = document.getElementById("input1"); //input is string --> we need to convert it to number
const input2 = document.getElementById("input2");

//BUTTONS
const btnReset = document.getElementById("button-reset");
const btnSumar = document.getElementById("button-sumar");
const btnRestar = document.getElementById("button-restar");
const btnVerificar = document.getElementById("button-zulu");
const btnMultiplicar = document.getElementById("button-multiplicar");
const btnDividir = document.getElementById("button-dividir");
const btnReservado = document.getElementById("button-reservado");
const btnImprimir = document.getElementById("button-imprimir");

//OUTPUT FIELD
const result = document.getElementById("result-box");

//VARIABLES
let number1, number2;

// debugger;

//DATA VALIDATION
function validationInput(data1, data2) {
  if (isNaN(data1) || isNaN(data2) || data1 === "" || data2 === "") {
    result.textContent = "Error:not a number";
    return false;
  } else {
    return true;
  }
}
function dataToNumber(value1, value2) {
  //DATA CONVERSION
  number1 = Number(value1);
  number2 = Number(value2);

  //ERROR CHECKING
  if (number1 === undefined || number2 === undefined) {
    console.error("parse error");
    // return false
  }
}

//OPERATIONS
// const sum = input1 + input2;     //WRONG = you cant sum two natural nodes

//SUMAR/ADD/PLUS
function sumValues(string1, string2) {
  if (validationInput(string1, string2)) {
    dataToNumber(string1, string2);
    return number1 + number2;
  } else {
    return false;
  }
}

//RESTAR/SUBTRACT/MINUS
function subtractValues(string1, string2) {
  if (validationInput(string1, string2)) {
    dataToNumber(string1, string2);
    return number1 - number2;
  } else {
    return false;
  }
} 

//DIVIDIR/DIVIDE
function dividirValues(string1, string2) {
  if (validationInput(string1, string2)) {
    dataToNumber(string1, string2);
    return number1 / number2;
  } else {
    return false;
  }
} 

//MULTIPLICAR/MULTIPLY
function multiplicarValues(string1, string2) {
  if (validationInput(string1, string2)) {
    dataToNumber(string1, string2);
    return number1 * number2;
  } else {
    return false;
  }
}

//THIS SHOULD SHOW THE FINAL FIGURE. TBD
function showResults() {
  return (result.textContent = "placeholder");
}

//EVENT LISTENERS
btnImprimir.addEventListener("click", function () {
  result.textContent = showResults();
});

btnSumar.addEventListener("click", function () {
  if (sumValues(input1.value, input2.value)) {
    result.textContent = sumValues(input1.value, input2.value);
  } else {
    result.textContent = "Error";
  }
});
btnRestar.addEventListener("click", function () {
  if (subtractValues(input1.value, input2.value)) {
    result.textContent = subtractValues(input1.value, input2.value);
  } else {
    result.textContent = "Error";
  }
});
btnDividir.addEventListener("click", function () {
  if (dividirValues(input1.value, input2.value)) {
    result.textContent = dividirValues(input1.value, input2.value);
  } else {
    result.textContent = "Error";
  }
});
btnMultiplicar.addEventListener("click", function () {
  if (multiplicarValues(input1.value, input2.value)) {
    result.textContent = multiplicarValues(input1.value, input2.value);
  } else {
    result.textContent = "Error";
  }
});

btnVerificar.addEventListener("click", function () {
  if (validationInput(input1.value, input2.value)) {
    return (result.textContent = "data is valid");
  } else {
    return (result.textContent = "data is Invalid");
  }
});

btnReservado.addEventListener("mouseover", function () {
  result.textContent = "comming soon";
  btnReservado.title = "Reservated for future use";
});

//RESET
btnReset.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  result.innerHTML = "";
});
