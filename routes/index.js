const express = require('express');
const router = express.Router();

router.use('/', require('./home'))
router.use('/register', require('./register'));
router.use('/login', require('./loginAdmin'));
router.use('/logout', require('./logout'));
router.use('/owners', require('./owner'));
router.use('/pets', require('./pet'));
router.use('/auth', require('./user'));
router.use('/success', require('./success'))
module.exports = router;