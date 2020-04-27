const express = require('express');

const stringsRouters = require('./routers/strings');
const numbersRouters = require('./routers/numbers');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouters);
app.use('/numbers', numbersRouters);

module.exports = app;
