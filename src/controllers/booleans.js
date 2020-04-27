const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

module.exports = {
  negate: (req, res) => {
    res.status(200);
    res.json({ result: negate(req.body.value) });
  },
  truthiness: (req, res) => {
    res.status(200);
    res.json({ result: truthiness(req.body.value) });
  },
  isOdd: (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (!number) {
      res.status(400);
      res.json({ error: 'Parameter must be a number.' });
    } else {
      res.status(200);
      res.json({ result: isOdd(number) });
    }
  },
  startsWith: (req, res) => {
    const { character } = req.params;
    const { string } = req.params;
    if (character.length > 1) {
      res.status(400);
      res.json({ error: 'Parameter "character" must be a single character.' });
    } else {
      res.status(200);
      res.json({ result: startsWith(character, string) });
    }
  },
};
