//FOR JWT TOKEN
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/', adminController.loginAdmin);

module.exports = router;





