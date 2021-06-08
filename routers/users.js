const express = require('express');
const router = express.Router();
const userValidar = require('../validar/useValidar');
const userController = require('../controllers/UserController.js');
const loginUser = require('../middlewares/loginUsre.js');

router.get('/', loginUser.loginUser, userController.index);
router.get('/search',loginUser.loginUser, userController.search);
router.get('/create', loginUser.loginUser, userController.viewCreate);
router.post('/create', userValidar.userValidar ,userController.postCreate);
router.get('/:id',loginUser.loginUser, userController.show)

module.exports = router


