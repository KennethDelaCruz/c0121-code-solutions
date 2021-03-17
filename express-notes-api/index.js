const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const data = require('./data.json');
  res.status(200).json(data.notes);
});

app.get('/api/notes/:id', (req, res) => {
  const data = require('./data.json');
  const id = req.params.id;
  if (!parseInt(id) || id < 0) {
    res.status(400).send({ error: 'ID must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).send(`cannot find id ${id}`);
  }
  res.status(200).json(data.notes[id]);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ error: 'request does not exist' });
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
    if (err) {
      res.status(500).send({ error: 'there is no such file or directory' });
    }
    res.status(201).json(newObject);
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const data = require('./data.json');
  if (!data.notes[id]) {
    res.status(404).send({ error: 'notes id does note exist' });
  }
  delete data.notes[id];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'unexpected error has occured' });
    }
    res.status(204).send('');
  });
});

app.listen(3000, () => {
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const data = require('./data.json');
  let content = '';
  for (const prop in req.body) {
    content = prop;
  }
  if (Object.keys(req.body).length === 0 || !data.notes[id]) {
    res.status(400).send({ error: 'notes/id doesnt exist OR there is no content to send' });
  } else if (!data.notes[id][content]) {
    res.status(400).send({ error: 'notes/id content does not exist' });
  }
  data.notes[id][content] = req.body[content];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'unexpected error has occured' });
    }
    res.status(200).json(data.notes);
  });

});
