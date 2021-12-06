const path = require("path");

const express = require("express");
const router = express.Router();

//From Controller
const adminController = require("../controller/admin");

// /admin/add-product => GET Request
router.get("/add-product", adminController.getAddProducts);

// /admin/add-product => POST Request
router.post("/add-product", adminController.addProduct);

//Edit PRODUCTS edit-product/1
router.get("/edit-product/:productId", adminController.getEditProduct);

//Edit PRODUCTS edit-product POST request
router.post("/edit-product", adminController.postEditProduct);

//Delete Existing PRODUCTS by Id
router.get("/delete-product/:productId", adminController.deleteProduct);

// /admin/product => GET Request
router.get("/products", adminController.products);

module.exports = router;
