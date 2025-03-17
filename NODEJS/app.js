const http = require('http');
const fs = require('fs'); // Import the file system module to read HTML files

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML

    // Read the HTML file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error loading the HTML file');
        } else {
            res.end(data); // Send the HTML file content as a response
        }
    });
});

const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server run aguthu da http://${host}:${port}/`);
});
