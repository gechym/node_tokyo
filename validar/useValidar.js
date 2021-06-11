module.exports.userValidar = function (req, res, next) {
    var errs =[]
        if(!req.body.name){
            errs.push('Tên không được để trống');
        }

        if(!req.body.phone){
            errs.push('SĐT không được để trống');
        }
        if(errs.length){
            res.render('user/create', {
                errs : errs,
                values : req.body
            })
            return
        }
        next();
}
// cách 2 
// module.exports = function userValidar(req, res, next) {
//     var errs =[]
//         if(!req.body.name){
//             errs.push('Tên không được để trống');
//         }

//         if(!req.body.phone){
//             errs.push('SĐT không được để trống');
//         }

//         if(errs.length){
//             res.render('user/create', {
//                 errs : errs,
//                 values : req.body
//             })
//             return
//         }

//         next();
// }

//--> userValidar