const http = require('http');

const path = require('path');

const express = require('express');

const app = express();

const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const port = process.env.PORT || 8080;

//master static directory
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/submit', require('./routes/routes-submit'));
app.use('/', require('./routes/routes-main')); //404 handling is here so it needs to be on the "bottom"

nunjucks.configure('templates', {
    autoescape: true,
    express: app,
    watch: true
});

app.listen(port, () => {
    console.log(`RASTRO: Server listening on port ${port}`);
})
