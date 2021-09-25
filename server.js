const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views','view');

const adminData = require('./routers/admin');
const shopRoutes = require('./routers/shop');

app.use(bodyParser.urlencoded({extended:false}));

// Making the File directory public in Order to link the assets to  the html files
app.use(express.static(path.join(__dirname,'public')));

app.use(adminData.routes);
app.use(shopRoutes);
//Use Allows to Add a middleware Function in between request and the Response

app.use((req,res,next)=>{
    res.status(404).render('404', {'pageTitle' : '404 | Page not found!'}); 
})

app.listen(4000);
