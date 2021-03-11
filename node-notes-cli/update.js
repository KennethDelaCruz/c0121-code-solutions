module.exports = x => {
  const fs = require('fs');
  const data = require('./data.json');
  data.notes[x] = process.argv[4];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
};
