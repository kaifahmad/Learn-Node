const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');


router.get('/add-product',(req,res,next)=> {
    res.render('add-product', {
        'pageTitle' : 'Add Product',
        'prods'  : products    
    });
});

const products = [];

router.post('/add-product',(req,res,next)=> {
    products.push({
        "book_title" : req.body.product,
        "email" : req.body.email,
        "book_description" : req.body.message,
    });
    console.log(products);
    res.redirect('/');
})

exports.routes = router;
exports.products = products;