const express = require('express');
const router = express.Router();

router.get('/', (req,res, next)=>{
    req.logout(req.user, err => {
        if(err) return next(err);
        res.send("You have now been logged out")
});})
module.exports = router;
