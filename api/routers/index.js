const routerApiProd = require('./prod.js');

function router(app){
    app.use('/api',routerApiProd);
}

module.exports = router;





