// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'}); //write a response to the client
//     res.end('Welcome to Dominos!'); //end the response
// }

// httpServer.listen(8081);

// module.exports = httpServer;

import express from 'express';

const app = express();

const PORT = 8081;

const data = require('./data');

app.get('/welcome',  (req, res) => {

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send('Welcome to Dominos!')
    // res.send('Welcome to Dominos!')
})

app.get('/contact',  (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
})

app.listen(PORT, () => {
    console.log(`Node and express server is running ${PORT}`)
})