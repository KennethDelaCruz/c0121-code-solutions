const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const { Console } = require('console');

app.get('/api/notes', (req, res) => {
  const data = require('./data.json');
  res.status(200).json(data);
});

app.get('/api/notes/:id', (req, res) => {
  const data = require('./data.json');
  const id = req.params.id;
  if (!parseInt(id) || id < 0) {
    res.status(400).send('ID must be a positive integer');
  } else if (!data.notes[id]) {
    res.status(404).send(`cannot find id ${id}`);
  }
  res.status(200).json(data.notes[id]);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send('error: request does not exist');
  }
  const data = require('./data.json');
  const newObject = {};
  newObject.id = data.nextId;
  for (const prop in req.body) {
    newObject[prop] = req.body[prop];
  }
  data.notes[data.nextId] = newObject;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
    res.status(201).send('File has been saved!');
  });

});

app.listen(3000, () => {
  console.log('server is active');
});
