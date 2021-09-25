const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routers/admin');
const shopRoutes = require('./routers/shop');

app.use(bodyParser.urlencoded({extended:false}));

// Making the File directory public in Order to link the assets to  the html files
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);
//Use Allows to Add a middleware Function in between request and the Response



app.listen(4000);
