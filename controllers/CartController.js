const db = require('../db/index.js');

class CartController {
    addToCart(req, res, next){
        var productId = req.params.id;
        var sessionId = req.signedCookies.sessionId;

        if(!sessionId){
            res.redirect('/prod');
            return;
        }

        var count = db
        .get('sessions')
        .find({'id' : sessionId})
        .get('cart.' + productId)
        .value();
        
        db.get('sessions')
        .find({'id' : sessionId})
        .set('cart.' + productId, count + 1)
        .write();

        console.log(db.get('sessions').find({'id' : sessionId}).get('cart.' + productId).value());

        var array = db.get('sessions').value();

        array.forEach(element => {
            console.log(element.cart);
        });

        res.redirect('/prod');
    }
}


module.exports = new CartController();
