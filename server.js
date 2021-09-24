
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routers/admin');
const shopRoutes = require('./routers/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);
//Use Allows to Add a middleware Function in between request and the Response



app.listen(4000);
