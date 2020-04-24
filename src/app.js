const express = require('express');

const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200);
  res.send({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200);
  res.send({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200);
  res.send({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  res.status(200);
  res.send({ result: firstCharacters(req.params.string, length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400);
    res.json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200);
    res.json({ result: add(a, b) });
  }
});

module.exports = app;
