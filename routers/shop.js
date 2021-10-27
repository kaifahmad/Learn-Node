const path = require('path');

const express = require('express');
const router = express.Router();

//From Controller
const shopController = require('../controller/shop'); 

router.get('/',shopController.index);
router.get('/products',shopController.productList);
router.get('/products/:productId',shopController.singleProd);
router.get('/cart',shopController.cart); 
router.get('/orders',shopController.orders); 
router.get('/checkout',shopController.checkout);
//router.get('/single-product');


module.exports = router;