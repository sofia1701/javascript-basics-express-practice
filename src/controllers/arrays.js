const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

module.exports = {
  getNthElement: (req, res) => {
    const { array } = req.body;
    const { index } = req.params;
    res.status(200);
    res.json({ result: getNthElement(index, array) });
  },
  arrayToCSVString: (req, res) => {
    const { array } = req.body;
    res.status(200);
    res.json({ result: arrayToCSVString(array) });
  },
  addToArray2: (req, res) => {
    const { array } = req.body;
    const { value } = req.body;
    res.status(200);
    res.json({ result: addToArray2(value, array) });
  },
  elementsStartingWithAVowel: (req, res) => {
    const { array } = req.body;
    res.status(200);
    res.json({ result: elementsStartingWithAVowel(array) });
  },
  removeNthElement2: (req, res) => {
    let { index } = req.query || 0;
    const { array } = req.body;
    res.status(200);
    res.json({ result: removeNthElement2(index, array) });
  },
};
