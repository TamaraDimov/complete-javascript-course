//1 Values and Variables
let country = 'Macedonia';
let continent = 'Europe';
let population = 2;

console.log(country + ',' + continent + ',' + population + 'milion people');

//2 Data Types

let isIsland = false;
let language;

console.log(typeof isIsland, population, country, language);

//3 let, const and var
language = 'macedonian';
isIsland = true;

//4 Basic Operators
let halfPopulation = population / 2;
console.log(population + 1); //population++
let populationFinland = 6;

const isTrue = population >= populationFinland;
console.log(isTrue);

console.log(
  country +
    ' ' +
    'is in' +
    ' ' +
    continent +
    ' ' +
    'and its' +
    ' ' +
    population +
    ' ' +
    'milion people speaks' +
    ' ' +
    language
);

let stringLiteral = `${country} in is ${continent} and it is ${population} milion people speaks ${language}`;

console.log(stringLiteral);

// if else statement

let day = 'saturday';

if (day === 'monday') {
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log(' Prepare teory leasons');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log(' it is friday');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('WEEKEND👌');
} else {
  ('not a valid day');
}

let age = 23;
let drink2;

if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

//ternaty operator

age >= 18
  ? console.log('i like to drink wine')
  : console.log('i like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
