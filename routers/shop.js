const path = require('path');

const express = require('express');
const router = express.Router();

//From Controller
const productsController = require('../controller/products'); 

router.get('/',productsController.mainPage);


module.exports = router;