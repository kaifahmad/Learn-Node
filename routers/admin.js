const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=> {
    res.send(`
    <html>
<body>

<h2>HTML Forms</h2>

<form action="/product" method="POST">
  <label for="product">Enter Product's name:</label><br>
  <input type="text" id="product" name="product" value="Television"><br>
  <label for="prod_id">Enter poduct Id:</label><br>
  <input type="number" id="prod_id" name="prod_id" value="26"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>
    `); 
});

router.post('/product',(req,res,next)=> {
    console.log(req.body.product);
    res.redirect('/');
})

module.exports = router;