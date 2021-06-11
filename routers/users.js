const express = require('express');
var multer  = require('multer')

const router = express.Router();
const userValidar = require('../validar/useValidar');
const userController = require('../controllers/UserController.js');

var upload = multer({ dest: './public/uploads/' })


router.get('/', userController.index);
router.get('/search', userController.search);
router.get('/create', userController.viewCreate);
router.post('/create', upload.single('avatar') ,userValidar.userValidar ,userController.postCreate);
router.get('/:_id', userController.show)

module.exports = router


