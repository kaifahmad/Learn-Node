const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);

    // Hards Exits the Event Loop
    // process.exit();
})

server.listen(4000); 