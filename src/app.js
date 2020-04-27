const express = require('express');
const stringsRouters = require('./routers/strings');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouters);

module.exports = app;
