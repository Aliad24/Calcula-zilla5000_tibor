'use strict';

const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const reset = document.querySelector('.button__reset');
const sumar = document.querySelector('.button__sumar');
const result = document.querySelector('.result__box');

reset.addEventListener('click', function () {
  input1.value = '';
  input2.value = '';
  result.innerHTML = '';
});

sumar.addEventListener('click', function () {
  const time1 = Number(input1.value);
  const time2 = Number(input2.value);

  if (time1 && time2) {
    const sum = time1 + time2;
    result.innerHTML = sum;
  }
});
