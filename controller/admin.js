const Product = require('../models/product');

//For Retrieving the get request of Add-Products(get request on /add-product)
const getAddProducts = (req,res,next)=> {
    res.render('admin/add-product', {
        'pageTitle' : 'Add Product',
        'path' : '/'  
    });
}

//For Adding the Products (post request on /add-product)
const postAddProduct = (req,res,next)=> {
    let data = {
        "book_title" : req.body.product,
        "book_price" : req.body.price,
        "book_description" : req.body.description,
    }; 
    const product = new Product(data);
    product.save();

    res.redirect('/index');
}

//For the Shop Page (get request on /shop)
const products = (req,res,next)=> {
    
    //fetchAll is a static Funcion
    Product.fetchAll((products)=> {
        res.render('admin/products', {
            'pageTitle' : 'Shop | All Products',
            'prods' : products ,
            'path' : '/products'  
        });
    })
}

// Exporting
exports.getAddProducts = getAddProducts;
exports.addProduct = postAddProduct;
exports.products = products;