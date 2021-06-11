const express = require('express');
const router = express.Router();

const cartController = require('../controllers/CartController.js');

router.get('/',function(req, res, next) {
    res.send('test');
})
router.get('/add/:id',cartController.addToCart);

module.exports = router;