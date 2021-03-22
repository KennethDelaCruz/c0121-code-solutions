const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function divide2(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function divide5(element) {
  if (element % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsE(string) {
  if (string.startsWith('E')) {
    return true;
  } else {
    return false;
  }
}

function includesD(string) {
  if (string.includes('D') || string.includes('d')) {
    return true;
  } else {
    return false;
  }
}

console.log(numbers.filter(divide2));
console.log(numbers.filter(divide5));
console.log(names.filter(startsE));
console.log(names.filter(includesD));
