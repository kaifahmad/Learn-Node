const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

// User register and login routes
router.get("/registeration", userController.getRegisteration);
router.post("/registeration", userController.postRegisteration);

router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);
//Login and Register

module.exports = router;
