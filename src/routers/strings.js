const express = require('express');

const router = express.Router();
const { sayHello, uppercase, lowercase, firstCharacters } = require('../controllers/strings');

router.get('/hello/:string', sayHello);
router.get('/upper/:string', uppercase);
//router.get('/lower/:string', lowercase);
//router.get('/first-characters/:string', firstCharacters);

module.exports = router;
