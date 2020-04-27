const express = require('express');

const router = express.Router();
const { add, subtract, multiply, divide, remainder } = require('../controllers/numbers');

router.get('/add/:a/and/:b', add);
router.get('/subtract/:b/from/:a', subtract);
router.post('/multiply', multiply);
router.post('/divide', divide);
router.post('/remainder', remainder);

module.exports = router;
