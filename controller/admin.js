const { response } = require("express");
const Product = require("../models/product");

//For Retrieving the get request of Add-Products(get request on /add-product)
const getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
  });
};

//For Adding the Products (post request on /add-product)
const postAddProduct = (req, res, next) => {
  let data = {
    book_title: req.body.product_name,
    book_price: req.body.price,
    book_description: req.body.description,
    book_category: req.body.category,
    user_id: 1, //We need to change this going further
  };

  const product = new Product(data);
  product
    .save()
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEditProduct = (req, res, next) => {
  // console.log(req.params.productId);
  Product.findById(req.params.productId)
    .then(([product]) => {
      res.render("admin/edit-product", {
        pageTitle: "Admin | Edit Products",
        data: product[0],
        path: "/edit-product",
      });
    })
    .catch((err) => console.log(err));
};

//For Editing the Existing Products (post request on /add-product)
const postEditProduct = (req, res, next) => {
  let data = {
    book_id: req.body.product_id,
    book_title: req.body.product_name,
    book_price: req.body.price,
    book_description: req.body.description,
    book_category: req.body.category,
  };

  // const product = new Product(data);
  Product.updateById(data)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      // console.log(err);
    });
};

const deleteProduct = (req, res, next) => {
  console.log(req.params.productId);
  Product.deleteById(req.params.productId)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

//For the Shop Page (get request on /shop)
const products = (req, res, next) => {
  //fetchAll is a static Funcion
  Product.fetchAll()
    .then(([products]) => {
      res.render("admin/products", {
        pageTitle: "Shop | All Products",
        prods: products,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

// Exporting
exports.getAddProducts = getAddProducts;
exports.addProduct = postAddProduct;
exports.products = products;
exports.getEditProduct = getEditProduct;
exports.postEditProduct = postEditProduct;
exports.deleteProduct = deleteProduct;
