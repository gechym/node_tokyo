const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController.js');

router.get('/',prodController.index);


module.exports = router;