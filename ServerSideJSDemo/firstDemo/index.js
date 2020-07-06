const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notfound.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/about') {
        // res.end('The about page');
        res.end(aboutPage);
    } else if (req.url === '/contact') {
        // res.end('The contact page')
        res.end(contactPage);
    } else if (req.url === '/') {
        // res.end('The home page')
        res.end(homePage);
    } else {
        res.writeHead(404);
        // res.end('page not found');
        res.end(notFoundPage);
    }
})

server.listen(3000);