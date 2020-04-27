const express = require('express');

const router = express.Router();
const { negate, truthiness, isOdd, startsWith } = require('../controllers/booleans');

router.post('/negate', negate);
router.post('/truthiness', truthiness);
router.get('/is-odd/:number', isOdd);
router.get('/:string/starts-with/:character', startsWith);

module.exports = router;
