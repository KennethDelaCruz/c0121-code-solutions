function convertMinutestoSecond(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  var elFirstName = person.firstName;
  return elFirstName;
}

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];

}

var lelouchViBrittania = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};

var colors = ['yellow', 'green', 'blue', 'red'];

console.log('How many seconds are in an hour? ', convertMinutestoSecond(60));
console.log('How do we greet Kenneth?', greet('Kenneth'));
console.log('What is the area of 100x100?', getArea(100, 100));
console.log("What is Mr. Lamperouge's first name again? ", getFirstName(lelouchViBrittania));
console.log('What is the last element in Colors?', getLastElement(colors));
