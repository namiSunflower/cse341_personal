const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/owner');

router.get('/', ownerController.getOwners);

router.get('/:_id', ownerController.getOwner);

router.post('/', ownerController.createOwner);

module.exports = router;