const express = require('express');
const router = express.Router();
const userValidar = require('../validar/useValidar');
const userController = require('../controllers/UserController.js');

router.get('/', userController.index);
router.get('/search', userController.search);
router.get('/create',userController.viewCreate);
router.post('/create', userValidar.userValidar ,userController.postCreate);
router.get('/:id', userController.show)

module.exports = router


