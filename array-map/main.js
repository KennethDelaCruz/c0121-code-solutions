const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = numbers.map(number => number * 2);
console.log(double);

const prices = numbers.map(number => {
  return `$${number}.00`;
});
console.log(prices);

const upperCase = languages.map(language => language.toUpperCase());
console.log(upperCase);

const firstLetters = languages.map(language => language[0]);
console.log(firstLetters);
