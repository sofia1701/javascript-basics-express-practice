const express = require('express');

const stringsRouters = require('./routers/strings');
const numbersRouters = require('./routers/numbers');
const booleansRouters = require('./routers/booleans');
const arraysRouters = require('./routers/arrays');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouters);
app.use('/numbers', numbersRouters);
app.use('/booleans', booleansRouters);
app.use('/arrays', arraysRouters);

module.exports = app;
