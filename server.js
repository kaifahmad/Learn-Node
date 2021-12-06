const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "view");

const adminRoutes = require("./routers/admin");
const shopRoutes = require("./routers/shop");
const authRoutes = require("./routers/auth");

app.use(bodyParser.urlencoded({ extended: false }));

//Using the Session middleware
app.use(
  session({ secret: "kaifahmad111", resave: false, saveUninitialized: false })
);

// Making the File directory public in Order to link the assets to  the html files
app.use(express.static(path.join(__dirname, "public")));

app.use(`/admin`, adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
//Use Allows to Add a middleware Function in between request and the Response

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 | Page not found!" });
});

app.listen(4000);
