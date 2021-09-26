const Product = require('../models/product');

//For Retrieving the Products
const getAddProducts = (req,res,next)=> {
    res.render('add-product', {
        'pageTitle' : 'Add Product'  
    });
}


//For Adding the Products
const addProduct = (req,res,next)=> {
    let data = {
        "book_title" : req.body.product,
        "email" : req.body.email,
        "book_description" : req.body.message,
    }; 
    const product = new Product(data);
    product.save();

    res.redirect('/');
}

const mainPage = (req,res,next)=> {
    
    //fetchAll is a static Funcion
    Product.fetchAll((products)=> {
        res.render('shop', {
            'pageTitle' : 'Home | Welcome to the Store',
            'prods'  : products    
        });
    })
}

exports.getAddProducts = getAddProducts;
exports.addProduct = addProduct;
exports.mainPage = mainPage;