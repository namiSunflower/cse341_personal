const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/owner');

router.get('/owners', ownerController.getOwners);

router.get('/:_id', ownerController.getOwner);

router.post('/newOwner', ownerController.createOwner);

module.exports = router;