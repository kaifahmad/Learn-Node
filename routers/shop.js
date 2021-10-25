const path = require('path');

const express = require('express');
const router = express.Router();

//From Controller
const productsController = require('../controller/shop'); 

router.get('/',productsController.index);
router.get('/products',productsController.productList);
router.get('/cart',productsController.cart); 
router.get('/orders',productsController.orders); 
router.get('/checkout',productsController.checkout);
//router.get('/single-product');


module.exports = router;