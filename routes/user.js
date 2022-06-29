const express = require('express');
const router = express.Router();
const passport = require('passport');
const {ensureAuth} = require('../middlewares/googleAuth')
require('../config/passport')


router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { 
    successRedirect: '/success',
    failureRedirect: '/auth/fail' })
);

router.get('/fail', (req,res)=>{
  res.send('Sorry.. Something went wrong')
})

// router.get('/success', ensureAuth, (req,res, next)=>{
//     res.send('Yay!')
//     next();
// })


// router.get('/logout', (req,res, next)=>{
//     req.logout(req.user, err => {
//         if(err) return next(err);
//         res.send("Logged out")
// });})

module.exports = router;