const express = require('express');

const router = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../controllers/arrays');

router.post('/element-at-index/:index', getNthElement);
router.post('/to-string', arrayToCSVString);
router.post('/append', addToArray2);
router.post('/starts-with-vowel', elementsStartingWithAVowel);
router.post('/remove-element', removeNthElement2);

module.exports = router;
