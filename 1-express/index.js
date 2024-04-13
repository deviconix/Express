const express = require('express');
const app = express();

// init handlebars
const hbs = require('express-handlebars');
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");


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
const APP_PORT = 8080;
app.listen(APP_PORT, function () {
    console.log('Listen port :', APP_PORT);
    console.log('Server Run ...');
});
