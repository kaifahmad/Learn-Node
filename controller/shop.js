// Controller File

const Product = require("../models/product");
const Cart = require("../models/cart");
const Cart_Item = require("../models/cart-item");

//Require Util Current Date
const date = require("../util/current-date");

//For the Shop Page (get request on /shop)
const productList = (req, res, next) => {
  //fetchAll is a static Funcion
  Product.fetchAll().then(([rows, feildData]) => {
    res.render("shop/product-list", {
      pageTitle: "Shop | All Products",
      prods: rows,
      path: "/product-list",
    });
  });
};

//For the Single Product page (get request on /shop)
const singleProd = (req, res, next) => {
  //fetchAll is a static Funcion
  Product.findById(req.params.productId).then(([row]) => {
    res.render("shop/product-detail", {
      pageTitle: `Shop | ${row[0]["Name"]}`,
      prod: row[0],
      path: "/product-list",
    });
  });
};

//For the Shop Index page (get request on /index)
const getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Shop",
    path: "/",
  });
};

//For POST REQUEST ON THE /add-to-cart
const postAddtoCart = (req, res, next) => {
  let user_id = 3;
  //change
  let prod_id = req.body.product_id;

  Cart.getCartId(user_id).then(([cart_id]) => {
    if (cart_id.length == 0) {
      let data = {
        created_At: date,
        updated_At: date,
        user_id: user_id,
      };
      const newCart = new Cart(data);
      newCart.save().then(() => {
        Cart.getCartId(user_id).then(([cart_id]) => {
          let data = {
            created_At: date,
            updated_At: date,
            product_id: prod_id,
            cart_id: cart_id[0].ID,
          };
          const newItem1 = new Cart_Item(data);
          newItem1.save().then(() => {
            res.redirect("/cart");
          });
        });
      });
    } else {
      Cart_Item.totalCartItems(cart_id[0].ID, prod_id).then(([data]) => {
        if (data[0].totalItems == 0) {
          //Create new Item
          let data = {
            created_At: date,
            updated_At: date,
            cart_id: cart_id[0].ID,
            product_id: prod_id,
          };

          const newItem = new Cart_Item(data);
          newItem.save().then(() => {
            res.redirect("/cart");
            //change
          });
        } else {
          //Increment by one where prod_id AND CART_ID EXIXTS in cart_items
          Cart_Item.incrementQty(cart_id[0].ID, prod_id).then(() => {
            res.redirect("/cart");
            //change
          });
        }
      });
    }
  });
};

//For the Shop cart page (get request on /cart)
const getCart = (req, res, next) => {
  Cart_Item.getAllCart(3).then(([data]) => {
    //change
    // Product.getCartItems
    res.render("shop/cart", {
      pageTitle: "Shop | Cart",
      path: "/cart",
      prods: data,
    });
  });
};

//For the Post rquest to remove-from-cart page
const postRemovefromCart = (req, res, next) => {
  Cart_Item.removeById(req.body.product_id, req.body.cart_id).then(() => {
    res.redirect("/cart");
  });
};

//For the Shop Index page (get request on /index)
const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Shop",
    path: "/checkout",
  });
};

//For the Orders page (get request on /index)
const getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
};

exports.productList = productList;
// exports.mainPage = mainPage;
exports.index = getIndex;
exports.cart = getCart;
exports.orders = getOrders;
exports.checkout = getCheckout;
exports.singleProd = singleProd;
exports.postAddtoCart = postAddtoCart;
exports.postRemovefromCart = postRemovefromCart;
