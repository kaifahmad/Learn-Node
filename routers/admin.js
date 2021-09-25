const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');


router.get('/add-product',(req,res,next)=> {
    res.sendFile(path.join(rootDir,'view','add-product.html'));
});

router.post('/add-product',(req,res,next)=> {
    console.log("Product Name: ",req.body.product);
    res.send(`<h1>Thanks for your Response  </h1>`);
    // res.redirect('/');
})

module.exports = router;