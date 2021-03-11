const data = require('./data.json');
const feature = process.argv[2];

if (feature === 'read') {
  const read = require('./read.js');
  if (process.argv[3]) {
    const index = process.argv[3];
    return console.log(`${index}: ${data.notes[index]}`);
  }
  read(data.notes);
} else if (feature === 'create') {
  const create = require('./create.js');
  create(process.argv[3]);
} else if (feature === 'delete') {
  const remove1 = require('./delete.js');
  remove1(process.argv[3]);
} else if (feature === 'update' || feature === 'edit') {
  const update = require('./update.js');
  update(process.argv[3]);
} else {
  console.log('Feature/argument is not found, please redo request');
}
