const db = require('../db/index.js');
module.exports.loginUser = function(req, res, next){
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }

    var user = db.get('user').find({id : req.signedCookies.userId }).value();
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    res.locals._user = user;
    // res.locals._host = req.get('host'); để lấy tên host
    
    next();
} 

