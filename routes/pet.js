const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middlewares/googleAuth');
const verify = require("../middlewares/verifyToken");

const petController = require('../controllers/pet');

router.get('/', ensureAuth, petController.getPets);

router.get('/:_id', ensureAuth, petController.getPet);

router.post('/', ensureAuth, verify.auth, petController.createPet);

router.put('/:_id', ensureAuth, verify.auth, petController.updatePet);

router.delete('/:_id', ensureAuth, verify.auth, petController.deletePet);

module.exports = router;