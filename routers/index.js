const routerUser = require('./users.js');
const routerAuth = require('./auth.js');

function router(app) {
    app.use('/user',routerUser);
    app.use('/auth',routerAuth);
    // app.use('/users',routerUser);

};

module.exports = router;