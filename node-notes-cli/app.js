const data = require('./data.json');

if (process.argv[2] === 'read') {
  const read = require('./read.js');
  if (process.argv[3]) {
    const index = process.argv[3];
    return console.log(`${index}: ${data.notes[index]}`);
  }
  read(data.notes);
}
