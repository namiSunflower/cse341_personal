const express = require('express');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const OwnerValidate = require('../models/OwnerValidate');

const ownerController = require('../controllers/owner');

router.get('/', ownerController.getOwners);

router.get('/:_id', ownerController.getOwner);

router.post('/', 
body('firstName').matches(/^[A-Za-z\s]+$/).withMessage('Invalid first name! Name must be alphabetic.'),
body('lastName').isLength({min:2}).withMessage('Invalid last name length! Last name must be at least 2 characters long'),
body('lastName').matches(/^[A-Za-z\s]+$/).withMessage('Invalid last name! Name must be alphabetic.'),
body('email').isEmail().normalizeEmail().withMessage('Invalid email format!'),
body('phone').isLength({min: 6, max: 10}).withMessage('Invalid phone length! Phone must be at least 6 digits long and will not exceed 10 digits.'),
     (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
    }else{
        next()
    }}
    , ownerController.createOwner);

router.put('/:_id',[
    OwnerValidate,
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
        }else{
            next()
    }}],ownerController.updateOwner);

router.delete('/:_id', ownerController.deleteOwner);

module.exports = router;