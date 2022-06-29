//OAUTH2
const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middlewares/googleAuth')

router.get('/', ensureAuth, (req,res, next)=>{
    res.send('You have successfully logged in!')
    next();
})


module.exports = router;
