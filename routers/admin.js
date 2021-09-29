const path = require('path');

const express = require('express');
const router = express.Router();

//From Controller
const adminController = require('../controller/admin');

// /admin/add-product => GET Request
router.get('/add-product',adminController.getAddProducts);
// /admin/product => GET Request
router.get('/products',adminController.products);
// /admin/add-product => POST Request
router.post('/add-product',adminController.addProduct);

module.exports = router;