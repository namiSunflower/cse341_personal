const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middlewares/googleAuth')

const adminController = require('../controllers/admin');

router.post('/', ensureAuth, adminController.registerAdmin);

module.exports = router;