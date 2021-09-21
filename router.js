const fs = require('fs');

const reqHandler = (req,res)=>{
    if(req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <form action="/credentials" method = "post">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
        </form> 
        `);
    }
    else if(req.url == '/credentials' && req.method == "POST") {
        
        const body = [];
        req.on('data', (chunk)=> {
            body.push(chunk);
        });
        req.on('end', ()=> {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFileSync('Credentials.txt', parsedBody);
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
    }
    else {
        console.log(req.url);
        res.write(`
        <h1> Hello Kaif</h1>
        `);
    }
    res.end();
}
module.exports = reqHandler;