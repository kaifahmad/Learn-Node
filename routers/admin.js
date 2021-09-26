const path = require('path');

const express = require('express');
const router = express.Router();

//From Controller
const productsController = require('../controller/products');

router.get('/add-product',productsController.getAddProducts);

router.post('/add-product',productsController.addProduct);

module.exports = router;