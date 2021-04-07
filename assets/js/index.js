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