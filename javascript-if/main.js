/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var result = number < 5;
  return result;
}

function isEven(number) {
  var result1 = number % 2;
  var result2 = result1 === 0;
  return result2;
}

function startsWithJ(string) {
  var result = string[0] === 'J';
  return result;
}

function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age > 21) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH < 7) {
    return 'acid';
  } else if (pH < 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH Levels';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return 'We\'re the Warner Brothers!';
  } else if (name === 'wakko') {
    return 'We\'re the Warner Brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight Everybody!';
  }
}
