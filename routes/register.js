const express = require('express');
const router = express.Router();
const {body, validationResult } = require('express-validator');
const {ensureAuth} = require('../middlewares/googleAuth');
const validation = require('../middlewares/adminValidate');

const adminController = require('../controllers/admin');

router.post('/', validation,
     (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()});
    }else{
        next()
    }},
 ensureAuth, adminController.registerAdmin);

module.exports = router;

