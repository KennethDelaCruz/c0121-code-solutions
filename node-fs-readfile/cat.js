const fs = require('fs');
const processArray = process.argv.slice(2);

processArray.forEach(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
