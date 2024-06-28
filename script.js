'use strict';

//FUNCTIONS

function logger() {
  console.log('my name is tamara');
}

//calling / running / invoking function
logger();

// function fruitProcessor(apples, oranges) {
//   let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrange = fruitProcessor(5, 3);
// console.log(appleOrange);

//FUNCTION DECLARATION  -> can call it before defining it :
// const age1 = calcAge1('1991');

function calcAge1(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge1('1991');

//FUNCTION EXPRESSION  -> can NOT call it before defining it

const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2('1991');

console.log(age1, age2);

//ARROW FUNCTION

const calcAge3 = (birthyear, firstName) => {
  let age = 2024 - birthyear;
  let retirement = 62 - age;
  return ` ${firstName} gets retired in ${retirement}years`;
};
console.log(calcAge3(1991, 'Tamara'));
console.log(calcAge3(1982, 'Ivan'));

//function calling other functuion
//CALL BACK FUNCTIONS

let fruitCut = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  let applePieces = fruitCut(apples);
  let orangePieces = fruitCut(oranges);

  return `i want juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
}

console.log(fruitProcessor(2, 3));
