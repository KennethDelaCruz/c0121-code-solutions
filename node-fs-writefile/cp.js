const fs = require('fs');
const copyFile = process.argv[2];
const newFile = process.argv[3];

fs.readFile(copyFile, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(newFile, data, 'utf8', err => {
    if (err) throw err;
  });
});
