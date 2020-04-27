const express = require('express');

const router = express.Router();
const { sayHello, uppercase, lowercase, firstCharacters } = require('../controllers/strings');

router.get('/hello/:string', sayHello);

module.exports = router;
