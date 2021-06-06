const express = require('express');
const router = express.Router();
const db = require('../db/index.js');
const shortid = require('shortid');

router.get('/', (req, res) => {
    res.render('user/index',{
        users : db.get('user').value(),
    });
});

router.get('/search', (req, res) => {
    var q = req.query.q;
    var kq = db.get('user').value().filter(use => {
        return use.name.toLowerCase().indexOf(q.toLowerCase().trim())  !== -1;
    });
    res.render('user/index',{
        users : kq
    });
});

router.get('/create', (req, res) => {
    res.render('user/create');
});


router.post('/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get('user')
    .push(req.body)
    .write();
    res.redirect('/user');
});


router.get('/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    var use = db.get('user').find({ id : id }).value();
    console.log(use)
    res.render('user/view', {
        user : use,
    })
})
module.exports = router


