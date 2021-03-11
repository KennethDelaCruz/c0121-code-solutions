module.exports = x => {
  const fs = require('fs');
  const data = require('./data.json');
  delete data.notes[x];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
};
