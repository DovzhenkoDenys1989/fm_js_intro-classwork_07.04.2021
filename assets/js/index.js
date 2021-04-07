'use strict';

function countDown(num) {
  //debugger;
  console.log(num);
  if (num > 0) {
    countDown(num - 1); // recursion
  }
  return true; // base
}

const power = (num, exp) => {
  //debugger;
  if (exp <= 1) {
    return num; // base
  }
  return num * power(num, exp - 1); // recursion
};

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const factorialIfs = (n) => {
  if (n <= 1) {
    return 1;
}
  return n * factorial(n - 1);
};