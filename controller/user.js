const User = require("../models/users");

//Require Util Current Date
const date = require("../util/current-date");

//get request for registeration page
const getRegisteration = (req, res, next) => {
  res.render("user/register", {
    pageTitle: "Shop | Registeration",
    path: "/registeration",
  });
};

//post request for registeration page
const postRegisteration = (req, res, next) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_role: req.body.user_role,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save().then(() => {
    res.redirect("/");
  });
};

const getLogin = (req, res, next) => {
  res.render("user/login", {
    pageTitle: "Shop | Login",
    path: "/login",
  });
};

const postLogin = (req, res, next) => {
  console.log("We in login form submition!!!");
  req.session.isLoggedIn = true;
  //   res.setHeader("Set-Cookie", "loggedIn = true");
  res.redirect("/");
};

exports.getRegisteration = getRegisteration;
exports.postRegisteration = postRegisteration;
exports.getLogin = getLogin;
exports.postLogin = postLogin;
