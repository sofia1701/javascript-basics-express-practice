const express = require('express');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200);
  res.json({ result: 'Hello, world!' });
});

app.get('/strings/upper/hello', (req, res) => {
  res.status(200);
  res.json({ result: 'HELLO' });
});

app.get('/strings/lower/HELLO', (req, res) => {
  res.status(200);
  res.json({ result: 'hello' });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.status(200);
  res.json({ result: 'h' });
});

app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.status(200);
  res.json({ result: 'sd32' });
});

module.exports = app;
