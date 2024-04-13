const express = require('express');
const app = express();

// route root
app.get('/', function (req, res) {
    res.send('Hello world :-)');
});

// run server
const APP_PORT = 8080;
app.listen(APP_PORT, function () {
    console.log('Listen port :', APP_PORT);
    console.log('Server Run ...');
});
