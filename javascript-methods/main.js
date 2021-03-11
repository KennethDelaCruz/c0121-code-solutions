var low = 1;
var med = 5;
var high = 10;

var maximunmValue = Math.max(low, med, high);
console.log('What is the highest number? ', maximunmValue);

var heroes = ['Batman', 'Robin', 'thor', 'captain america'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

console.log(randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('Value of randomaIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero ', randomHero);

var library = [
  {
    title: 'Enders Game',
    author: 'jack'
  },
  {
    title: 'The Amazing Spider Man',
    author: 'Stan Lee'
  },
  {
    title: 'Batman',
    author: 'Bob Kane'
  }
];

console.log(library);

var lastBook = library.pop();
var firstBook = library.shift();

console.log('What is the last book? ', lastBook);
console.log('First book in library: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'Css Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('What is left in the library?', library);

var fullName = 'Kenneth Dela Cruz';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
console.log('What is his first name? ', firstName);

var sayMyName = firstName.toUpperCase();
console.log('....say my name.', sayMyName);
