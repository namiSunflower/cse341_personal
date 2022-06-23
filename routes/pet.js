const express = require('express');
const router = express.Router();

const petController = require('../controllers/pet');

router.get('/', petController.getPets);

router.get('/:_id', petController.getPet);

router.post('/', petController.createPet);

module.exports = router;