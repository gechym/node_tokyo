const md5 = require('md5');
const db = require('../db/index.js');


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
        var md5Password = md5(password);
        // db.get('user').find('user')
        if(use.password !== md5Password){
            res.render('auth/login', {
                errs : ['Email hoặc mật khẩu không đúng'],
                value : req.body
            });
            return;
        }
        res.cookie('userId', use.id, {
            signed : true,
        });
        res.redirect('/user');
    }
}
module.exports = new AuthController();