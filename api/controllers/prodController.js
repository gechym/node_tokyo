const db = require('../../db/index.js');

class ProdController {
    product(req, res, next){
        res.json(db.get('product').value())
    }

    create(req, res, next){
        db.get('product').push(req.body).write();
        res.redirect('/api/prod');
    }
}

module.exports = new ProdController();