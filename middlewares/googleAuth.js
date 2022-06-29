module.exports = {
    ensureAuth: (req, res, next)=>{
        if(req.isAuthenticated()){
            console.log("Authenticated");
            return next();
        }else{
            console.log("Not Authenticated");
            res.redirect('/');
        }
    }
}