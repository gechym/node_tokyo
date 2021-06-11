const routerUser = require('./users.js');
const routerAuth = require('./auth.js');
const loginUser = require('../middlewares/loginUsre.js');
const routerProd = require('./prod.js');

function router(app) {
    app.use('/user',  loginUser.loginUser,routerUser);
    app.use('/auth',routerAuth);
    app.use('/prod',routerProd);
    // app.use('/users',routerUser);

};

module.exports = router;