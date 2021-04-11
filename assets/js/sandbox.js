/**
 * 
 * @param {function} how 
 * @param {string} whatToSay 
 */
 function saySomething(how, whatToSay){
  //console.log(whatToSay);
  how(whatToSay);
}

function sum(a,b){
  return a + b;
}

function withLog(fn){
  return function(...args){
    const result = fn(...args);
    console.log(result);
    return result;
  }
}

/*const sumWithLog = withLog(sum);

const getFullName = function(name, surname){
  return `${name} ${surname}`
}

const getFullNameWithLog = withLog(getFullName);*/

const res = getFullNameWithLog('John', 'Smith');

const txt = 'test';

console.log(Number.isNaN(NaN));  //true
console.log(Number.isNaN(txt)); //false
console.log(Number.isNaN(Number(txt))); //true