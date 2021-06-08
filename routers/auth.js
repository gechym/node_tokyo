const express = require('express');
const router = express.Router();
// const userValidar = require('../validar/useValidar');
const authController = require('../controllers/AuthController.js');

router.get('/login',authController.login);
router.post('/login',authController.postLogin);

module.exports = router