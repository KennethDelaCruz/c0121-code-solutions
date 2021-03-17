const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  const data = require('./data.json');
  res.status(200).json(data);
});

app.get('/api/notes/:id', (req, res) => {
  const data = require('./data.json');
  const id = req.params.id;
  console.log(typeof id, id);
  if (!id || id < 0) {
    res.status(400).send('ID must be a positive integer');
  } else if (!data.notes[id]) {
    res.status(404).send('ID cannot be found');
  }
  res.status(200).json(data.notes[id]);
});

app.listen(3000, () => {
  console.log('server is active');
});
