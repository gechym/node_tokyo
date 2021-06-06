const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js');

router.get('/', userController.index);
router.get('/search', userController.search);
router.get('/create', userController.viewCreate);
router.post('/create', userController.postCreate);
router.get('/:id', userController.show)

module.exports = router


