const express = require('express');
const router = express.Router();
// const userValidar = require('../validar/useValidar');
const authController = require('../controllers/AuthController.js');
const checkUser = require('../middlewares/checkUser');
router.get('/login', checkUser.checkUser ,authController.login);
router.post('/login',authController.postLogin);

module.exports = router