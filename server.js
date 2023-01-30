const http = require('http');
const fs = require('fs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const port = args?.port || 3000; //  backfall to 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // content type as html
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./public/index.html', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.end(data);
    })
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
