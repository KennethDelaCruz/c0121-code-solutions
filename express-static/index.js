const path = require('path');
const express = require('express');
const app = express();

const joined = path.join(__dirname, 'public');
console.log(joined);

const document = express.static(joined);

app.listen(3000, () => {
  console.log('server is on');
});
app.use(document);
