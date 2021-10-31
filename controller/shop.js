// Controller File

const Product = require('../models/product');
const Cart = require('../models/cart');
const { products } = require('./admin');


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

//For Post REqUEST ON THE /add-to-cart
const postAddtoCart = (req,res,next)=> {
    let prod_id = req.body.product_id;
    Cart.getProdById(prod_id).then(([data]) =>{
        if(data[0] == null){
            let newEntry = {
                "product_id" : prod_id,
                "product_qty" : 1,
                "user_id" : 1
            }
            const newProd = new Cart(newEntry);
            newProd.save().then(()=> res.redirect('/products'));
        }
        else {
            Cart.incrementQty(prod_id).then(()=> res.redirect('/cart'))
            //Change the Response After the Cart page is Completed
        }
    })
}

//For the Shop cart page (get request on /cart)
const getCart = (req,res,next)=> {
    Cart.getAllCart().then(([data])=>{
        // Product.getCartItems
        res.render('shop/cart', {
            'pageTitle' : 'Shop | Cart',
            'path' : '/cart',
            'prods': data   
        });
    })
}

//For the Post rquest to remove-from-cart page 
const postRemovefromCart = (req,res,next)=> {
    Cart.deleteById(req.body.product_id).then(()=>{
        res.redirect('/cart');
    })
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
exports.postAddtoCart = postAddtoCart;
exports.postRemovefromCart = postRemovefromCart;