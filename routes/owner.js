const express = require('express');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const OwnerValidate = require('../models/OwnerValidate');

const ownerController = require('../controllers/owner');

router.get('/', ownerController.getOwners);

router.get('/:_id', ownerController.getOwner);

router.post('/',  [
     OwnerValidate,
     (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
    }}], ownerController.createOwner);

router.put('/:_id',[
    OwnerValidate,
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
    }}],ownerController.updateOwner);

router.delete('/:_id', ownerController.deleteOwner);

module.exports = router;