// Controller File

const Product = require('../models/product');


//For the Home page
// const mainPage = (req,res,next)=> {
    
//     res.render('home', {
//         'pageTitle' : 'Home | Welcome to the Store',
//         'path' : '/'  
//     });

// }

//For the Shop Page (get request on /shop)
const productList = (req,res,next)=> {
    
    //fetchAll is a static Funcion
    Product.fetchAll((products)=> {
        res.render('shop/product-list', {
            'pageTitle' : 'Shop | All Products',
            'prods' : products ,
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
    
    res.render('shop/index', {
        'pageTitle' : 'Shop',
        'path' : '/checkout'  
    });
}


exports.productList = productList;
// exports.mainPage = mainPage;
exports.index = getIndex;
exports.cart = getCart;
exports.checkout = getCheckout;