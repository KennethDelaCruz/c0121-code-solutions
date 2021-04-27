const fs = require('fs');
const readFile = process.argv[2];
fs.readFile(readFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
