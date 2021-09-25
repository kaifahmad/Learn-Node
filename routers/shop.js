const path = require('path');

const express = require('express');
const router = express.Router();

const adminData = require('./admin');

const rootDir = require('../util/path');

router.get('/',(req,res,next)=> {

    res.render('shop', {
        'pageTitle' : 'Home | Welcome to the Store',
        'prods'  : adminData.products    
    });
});


module.exports = router;