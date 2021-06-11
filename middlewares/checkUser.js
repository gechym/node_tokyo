
const db = require('../db/index.js');
module.exports.checkUser = function(req, res, next){
   if(req.cookies.userId){
        res.redirect('/');
        return;
    }
    var user = db.get('user').find({id : req.signedCookies.userId }).value();
    if(user){
        res.redirect('/');
        return;
    }
    next();
}