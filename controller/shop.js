// Controller File

const Product = require('../models/product');


//For the Shop Page (get request on /shop)
const productList = (req,res,next)=> {
    
    //fetchAll is a static Funcion
    Product.fetchAll().then(([rows,feildData]) =>{
        res.render('shop/product-list', {
            'pageTitle' : 'Shop | All Products',
            'prods' : rows ,
            'path' : '/product-list'  
        });
    })
}

//For the Single Product page (get request on /shop)
const singleProd = (req,res,next)=> {
    
    //fetchAll is a static Funcion
    Product.findById(req.params.productId).then(([row]) =>{
        res.render('shop/product-detail', {
            'pageTitle' : `Shop | ${row[0]['Name']}`,
            'prod' : row[0] ,
            'path' : '/product-list'  
        });
    })
}

//For the Shop Index page (get request on /index)
const getIndex = (req,res,next)=> {
    
    res.render('shop/index', {
        'pageTitle' : 'Shop',
        'path' : '/'  
    });
}

//For the Shop cart page (get request on /cart)
const getCart = (req,res,next)=> {
    
    res.render('shop/cart', {
        'pageTitle' : 'Cart',
        'path' : '/cart'  
    });
}

//For the Shop Index page (get request on /index)
const getCheckout = (req,res,next)=> {
    
    res.render('shop/checkout', {
        'pageTitle' : 'Shop',
        'path' : '/checkout'  
    });
}

//For the Orders page (get request on /index)
const getOrders = (req,res,next)=> {
    
    res.render('shop/orders', {
        'pageTitle' : 'Orders',
        'path' : '/orders'  
    });
}


exports.productList = productList;
// exports.mainPage = mainPage;
exports.index = getIndex;
exports.cart = getCart;
exports.orders = getOrders;
exports.checkout = getCheckout;
exports.singleProd = singleProd;