const data = require('./data.json');
const feature = process.argv[2];

if (feature === 'read') {
  const read = require('./read.js');
  if (process.argv[3]) {
    const index = process.argv[3];
    return console.log(`${index}: ${data.notes[index]}`);
  }
  read(data.notes);
} if (feature === 'create') {
  const create = require('./create.js');
  create(process.argv[3]);
}
