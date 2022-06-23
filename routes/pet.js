const express = require('express');
const router = express.Router();

const petController = require('../controllers/pet');

router.get('/pets', petController.getPets);

router.get('/:_id', petController.getPet);

router.post('/newPet', petController.createPet);

module.exports = router;