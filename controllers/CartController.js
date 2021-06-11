

class CartController {
    addToCart(req, res, next){
        res.send(req.params.id + "Đây là mã sản phẩm");
    }
}


module.exports = new CartController();
