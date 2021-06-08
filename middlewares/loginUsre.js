const db = require('../db/index.js');
module.exports.loginUser = function(req, res, next){
    if(!req.cookies.userId){
        console.log('abc');
        res.redirect('/auth/login');
        return;
    }
    var user = db.get('user').find({id : req.cookies.userId }).value();
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    next();
} 

