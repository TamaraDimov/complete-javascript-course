let js = 'amazing';
console.log(js);
// declaring variable and assinging a value

let javaScriptIsFun = true;
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

//undefined variable
let year;
console.log(year);
console.log(typeof year);
year = 1991;

//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 =>  2*2*2

//Assigment operators
let x = 10 + 5; // 15
x += 10; //x = x + 10
x *= 4; //x= x*4 = 100
x++; //x+1
x--; //x-1

//Comparison operators >, < , >= , <=
console.log(ageJonas > ageSarah); //true

const isFullAge = ageSarah >= 18;
const averageAge = (ageJonas + ageSarah) / 2;

//5 FALSY VALUES : 0, '', undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean('string')); // true

const money = 0;
if (money) {
  console.log("Don't stend it all");
} else {
  console.log('you should get a job');
}
