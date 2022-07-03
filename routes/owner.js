const express = require('express');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const validation = require('../middlewares/ownerValidate');
const verify = require("../middlewares/verifyToken")
const ownerController = require('../controllers/owner');
const {ensureAuth} = require('../middlewares/googleAuth')

router.get('/', ensureAuth, ownerController.getOwners);

router.get('/:_id',  ensureAuth, ownerController.getOwner);

router.post('/', 
validation,
     (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
    }else{
        next()
    }}
    , ensureAuth, verify.auth, ownerController.createOwner);

router.put('/:_id',
    validation,
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
        }else{
            next()
    }},ensureAuth, verify.auth, ownerController.updateOwner);

router.delete('/:_id', ensureAuth, verify.auth, ownerController.deleteOwner);

module.exports = router;