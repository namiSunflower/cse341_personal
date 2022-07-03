const {body} = require('express-validator');


const adminRegister= [
    body('password').isLength({min:3}).withMessage('Invalid password length! Password must be at least 3 characters long')
];

module.exports = adminRegister;