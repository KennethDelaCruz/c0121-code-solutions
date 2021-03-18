const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const prop in grades) {
    newArray.push(grades[prop]);
  }
  res.json(newArray);
});

app.use(express.json());

app.listen(3000, () => {
});

app.post('/api/grades', (req, res) => {
  const newObject = {
  };
  newObject.id = nextId;
  const reqObject = req.body;
  for (const prop in reqObject) {
    newObject[prop] = reqObject[prop];
  }
  nextId++;
  res.status(201).json(newObject);

});
