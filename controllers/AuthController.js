const db = require('../db/index.js');
const shortid = require('shortid');

class AuthController{
    login(req, res){
        res.render('auth/login');
    }

    postLogin(req, res){
        var email = req.body.email;
        var password = req.body.password;

        var use = db.get('user').find({email : email}).value();

        if(!use){
            res.render('auth/login', {
                errs : ['Email hoặc mật khẩu không đúng'],
                value : req.body
            });
            return;
        }
        
        // db.get('user').find('user')
        if(use.password !== password){
            res.render('auth/login', {
                errs : ['Email hoặc mật khẩu không đúng'],
                value : req.body
            });
            return;
        }
        res.cookie('userId', use.id);
        res.redirect('/user');
    }
}
module.exports = new AuthController();