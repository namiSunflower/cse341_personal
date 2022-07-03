const {body} = require('express-validator');

const ownerRegister = [
    body('firstName').matches(/^[A-Za-z\s]+$/).withMessage('Invalid first name! Name must be alphabetic.'),
    body('lastName').isLength({min:2}).withMessage('Invalid last name length! Last name must be at least 2 characters long'),
    body('lastName').matches(/^[A-Za-z\s]+$/).withMessage('Invalid last name! Name must be alphabetic.'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email format!'),
    body('phone').isLength({min: 6, max: 10}).withMessage('Invalid phone length! Phone must be at least 6 digits long and will not exceed 10 digits.')
];


module.exports = ownerRegister;