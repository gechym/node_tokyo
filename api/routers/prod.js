const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');

router.get('/prod',prodController.product);
router.post('/prod',prodController.create);



module.exports = router;