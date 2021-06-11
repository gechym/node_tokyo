const db = require('../db/index.js'); 



class ProdController {
    index(req, res, next){
        var page = parseInt(req.query.page) || 1;// số trang 
        var perPage = 4 ;// số các thẻ trong cùng một trang 
        
        var start = (page - 1) * perPage;
        var end = perPage * page;
    
        // localStorage.setItem('page',JSON.stringify(page));
        // var test = window.localStorage;


        // phần code để fix bằng sẽ fix bằng req.local
        // if(req.signedCookies.userId){
        //     res.clearCookie("fixxCmnrBug");
        // }else{
        //     res.cookie('fixxCmnrBug' ,'ádkjhasdkjhasdkjhaskdhaksjd');
        // }

        res.cookie('page', page);

        res.render('products/prod',{
            product : db.get('product').value().slice(start, end)
        });
    }
}


module.exports = new ProdController();