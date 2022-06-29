const express = require('express');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const OwnerValidate = require('../models/OwnerValidate');
const verify = require("../middlewares/verifyToken")
const ownerController = require('../controllers/owner');
const {ensureAuth} = require('../middlewares/googleAuth')

router.get('/', ensureAuth, verify.auth, ownerController.getOwners);

router.get('/:_id',  ensureAuth, ownerController.getOwner);

router.post('/', 
OwnerValidate,
     (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
    }else{
        next()
    }}
    ,  ensureAuth, ownerController.createOwner);

router.put('/:_id',[
    OwnerValidate,
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
        }else{
            next()
    }}],  ensureAuth, ownerController.updateOwner);

router.delete('/:_id', ensureAuth, ownerController.deleteOwner);

module.exports = router;