var bookArray = [
  {
    isbn: 123456789,
    title: 'This is book 1 ',
    author: 'Douglas Douglas'
  },
  {
    isbn: 234567890,
    title: 'This is book 2 ',
    author: 'Kyle Kyle'
  },
  {
    isbn: 3456789012,
    title: 'This is book 13 ',
    author: 'Michael Michael'
  }
];

console.log('What is the typeof value for bookArray:', typeof bookArray);

var arrayString = JSON.stringify(bookArray);

console.log('What is the typeof after JSON:', typeof arrayString);

var manualString = JSON.stringify({ numberID: 45, name: 'Kenneth' });

console.log('What is the type of for manualString:', typeof manualString);

var objectJSON = JSON.parse(manualString);

console.log('Does it come out as an object?', typeof objectJSON);

console.log('What is NumberID:', objectJSON.numberID);
