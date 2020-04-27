const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

module.exports = {
  add: (req, res) => {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      res.status(400);
      res.json({ error: 'Parameters must be valid numbers.' });
    } else {
      res.status(200);
      res.json({ result: add(a, b) });
    }
  },
  subtract: (req, res) => {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      res.status(400);
      res.json({ error: 'Parameters must be valid numbers.' });
    } else {
      res.status(200);
      res.json({ result: subtract(a, b) });
    }
  },
  multiply: (req, res) => {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (!req.body.a || !req.body.b) {
      res.status(400);
      res.json({ error: 'Parameters "a" and "b" are required.' });
    } else if (Number.isNaN(a) || Number.isNaN(b)) {
      res.status(400);
      res.json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } else {
      res.status(200);
      res.json({ result: multiply(a, b) });
    }
  },
  divide: (req, res) => {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (b === 0) {
      res.status(400);
      res.json({ error: 'Unable to divide by 0.' });
    } else if (a === 0) {
      res.status(200);
      res.json({ result: 0 });
    } else if (!req.body.a || !req.body.b) {
      res.status(400);
      res.json({ error: 'Parameters "a" and "b" are required.' });
    } else if (Number.isNaN(a) || Number.isNaN(b)) {
      res.status(400);
      res.json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } else {
      res.status(200);
      res.json({ result: divide(a, b) });
    }
  },
  remainder: (req, res) => {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (b === 0) {
      res.status(400);
      res.json({ error: 'Unable to divide by 0.' });
    } else if (a === 0) {
      res.status(200);
      res.json({ result: 0 });
    } else if (!req.body.a || !req.body.b) {
      res.status(400);
      res.json({ error: 'Parameters "a" and "b" are required.' });
    } else if (Number.isNaN(a) || Number.isNaN(b)) {
      res.status(400);
      res.json({ error: 'Parameters must be valid numbers.' });
    } else {
      res.status(200);
      res.json({ result: remainder(a, b) });
    }
  },
};
