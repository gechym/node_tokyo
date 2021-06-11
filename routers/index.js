const routerUser = require('./users.js');
const routerAuth = require('./auth.js');
const routerProd = require('./prod.js');
const routerCart = require('./cart.js');
const loginUser = require('../middlewares/loginUsre.js');

function router(app) {
    app.use('/user',loginUser.loginUser,routerUser);
    app.use('/auth',routerAuth);
    app.use('/prod', routerProd);
    app.use('/cart', routerCart);
    // app.use('/users',routerUser);

};

module.exports = router;