const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

module.exports = {
  sayHello: (req, res) => {
    res.status(200);
    res.send({ result: sayHello(req.params.string) });
  },
  uppercase: (req, res) => {
    res.status(200);
    res.send({ result: uppercase(req.params.string) });
  },
  lowercase: (req, res) => {
    res.status(200);
    res.send({ result: lowercase(req.params.string) });
  },
  firstCharacters: (req, res) => {
    const length = req.query.length || 1;
    res.status(200);
    res.send({ result: firstCharacters(req.params.string, length) });
  },
};
