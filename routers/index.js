const routerUser = require('./users.js');


function router(app) {
    app.use('/user',routerUser);
    
    // app.use('/users',routerUser);

};

module.exports = router;