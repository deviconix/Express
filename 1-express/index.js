const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require("mongoose");

// CONST
const APP_PORT = 8080;
const NAME_DB = 'express01';

// create app
const app = express();

// init handlebars
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// connect to base
mongoose.connect(`mongodb://127.0.0.1:27017/${NAME_DB}`);
const db = mongoose.connection;
db.on('error', function (err) {
    console.error('Error connect :', err);
});

// route root
app.get('/', function (req, res) {
    res.send('Hello world :-)');
});

app.get('/users', function (req, res) {
    //res.send('View Users');
    res.render("users", {
        title: "List USERS demo",
        users: ['user01', 'user02', 'user03']
    })
});

// run server

app.listen(APP_PORT, function () {
    console.log('Listen port :', APP_PORT);
    console.log('Server Run ...');
});
