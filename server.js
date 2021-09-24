
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


//Use Allows to Add a middleware Function in between request and the Response
app.use('/about',(req,res,next)=> {
    res.send(`
    <html>
<body>

<h2>HTML Forms</h2>

<form action="/product" method="POST">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>
    `); 
});

app.post('/product',(req,res,next)=> {
    console.log(req.body.fname);
    res.redirect('/');
})

app.use('/',(req,res,next)=> {
    res.send(`<h1>Kaif's Express Server</h1>`)
});
app.listen(4000);
