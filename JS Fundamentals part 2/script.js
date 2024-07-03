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

// let fruitCut = (fruit) => fruit * 4;

// function fruitProcessor(apples, oranges) {
//   let applePieces = fruitCut(apples);
//   let orangePieces = fruitCut(oranges);

//   return `i want juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
// }

// console.log(fruitProcessor(2, 3));

//FOR LOOP

// console.log('lifting weights repetition 1');
// console.log('lifting weights repetition 2');
// console.log('lifting weights repetition 3');
// console.log('lifting weights repetition 4');
// console.log('lifting weights repetition 5');
// console.log('lifting weights repetition 6');
//for loop keeps running while condition is true
//   (  start ,  condition, incresing)
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// let jonasArray = [
//   'jonas',
//   'Shmetman',
//   2037 - 1991,
//   'teacher',
//   ['michael', 'peter', 'steven'],
// ];

// // let types = [];

// // for (let i = 0; i <= jonasArray.length; i++) {
// //   console.log(jonasArray[i]);
// // }

// // types[i] = typeof jonasArray[i]; //isto kako
// // types.push(typeof jonasArray[i]);

// // const years = [1991, 2004, 1969, 2020];
// // const ages = [];
// // for (let i = 0; i < years.length; i++) {
// //   ages.push(2037 - years[i]);
// // }
// // console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string') continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === 'number') break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

///////////////////////////////////////
// Looping Backwards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

//WHILE LOOP -> we only need the condition in the brackets and other thing outsidse of it
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//let rep = 1;
//while (rep <= 10) {
//console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
// rep++;
//}

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }
