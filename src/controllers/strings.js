const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

module.exports = {
  sayHello: (req, res) => {
    res.status(200);
    res.send({ result: sayHello(req.params.string) });
  },
};
