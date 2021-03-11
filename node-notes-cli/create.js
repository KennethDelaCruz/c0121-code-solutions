module.exports = x => {
  const fs = require('fs');
  const data = require('./data.json');
  const numberID = data.nextId;
  data.notes[numberID] = x;
  data.nextId++;
  fs.writeFile('./data.json', JSON.stringify(data), 'utf8', err => {
    if (err) throw err;
  });

};
