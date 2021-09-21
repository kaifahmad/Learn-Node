const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');

    res.write(`
    <h1> Hello Kaif</h1>
    `);
    res.end();
})

server.listen(4000);  