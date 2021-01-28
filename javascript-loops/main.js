/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  for (let i = 0; i < 10; i++) {
    numbers.push(currentNumber);
    currentNumber = currentNumber + 1;
  }
  return numbers;
}

console.log(getNumbersToTen(0));

function getNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  for (let i = 0; i < 10; i++) {
    evenNumbers.push(currentNumber);
    currentNumber = currentNumber + 2;
  }
  return evenNumbers;
}

console.log(getNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = [];

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log(repeatWord('sup', 4));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter('what'));

function doubleAll(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push((numbers[i] * 2));
  }
  return doubled;
}

var rNumbers = [2, 4, 7, 8];
console.log(doubleAll(rNumbers));

var something = {
  title: 'a book about something',
  author: 'by someone',
  isbn: '123-something-something'
};

function getKeys(object) {
  const keys = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

console.log(getKeys(something));

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log(getValues(something));
