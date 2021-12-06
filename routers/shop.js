const path = require('path');

const express = require('express');
const router = express.Router();

//From Controller
const shopController = require('../controller/shop'); 
const userController = require('../controller/user'); 

router.get('/',shopController.index);
router.get('/products',shopController.productList);
router.get('/products/:productId',shopController.singleProd);
router.post('/add-to-cart',shopController.postAddtoCart); 
router.post('/remove-from-cart',shopController.postRemovefromCart); 
router.get('/cart',shopController.cart); 
router.get('/orders',shopController.orders); 
router.get('/checkout',shopController.checkout);


// User register and login routes
router.get('/registeration',userController.getRegisteration);
router.post('/registeration',userController.postRegisteration);
//Login and Register

module.exports = router;