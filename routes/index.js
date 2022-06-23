const express = require('express');
const router = express.Router();

router.use('/owners', require('./owner'));
router.use('/pets', require('./pet'));

module.exports = router;