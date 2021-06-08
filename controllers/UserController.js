const db = require('../db/index.js');
const shortid = require('shortid');


class UserController {

    //GET /user/
    index(req, res)  {
        res.render('user/index',{
            users : db.get('user').value(),
        });
    }

    //GET /user/search
    search(req, res)  { 
        var q = req.query.q;
        var kq = db.get('user').value().filter(use => {
            return use.name.toLowerCase().indexOf(q.toLowerCase().trim())  !== -1;
        });
        res.render('user/index',{
            users : kq
        });
    }

    //GET /user/show/:id    
    show(req, res) {
        var id = req.params.id;
        console.log(id);
        var use = db.get('user').find({ id : id }).value();
        console.log(use)
        res.render('user/view', {
            user : use,
        })
    }
    
    //GET /user/create
    viewCreate(req, res) {
        res.render('user/create');
    }

    // POST /user/create
    postCreate(req, res){
        req.body.id = shortid.generate();

        console.log(res.locals);
        
        db.get('user').push(req.body).write();
        res.redirect('/user');
    }


}

module.exports = new UserController();