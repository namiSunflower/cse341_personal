const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middlewares/googleAuth')

const petController = require('../controllers/pet');

router.get('/', ensureAuth, petController.getPets);

router.get('/:_id', ensureAuth, petController.getPet);

router.post('/', ensureAuth, petController.createPet);

router.put('/:_id', ensureAuth, petController.updatePet);

router.delete('/:_id', ensureAuth, petController.deletePet);

module.exports = router;