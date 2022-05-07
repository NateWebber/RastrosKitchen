const http = require('http');

const path = require('path');

const express = require('express');

const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');


const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

//app.set("app_name", "Rastro's Kitchen")

nunjucks.configure('templates', {
    autoescape: true,
    express: app,
    watch: true
});

app.get('/', (req, res) => {
    let data = {
        page_title: "Home"
    };
    res.render('index.html', { data: data });
});

app.get('/submit', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "scripts/submit.js"
    };
    res.render('submit.html', { data: data });
})

app.post('/submit', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "scripts/submit.js"
    };
    console.log("post method on /submit");
    console.log(req.body);
    data["submitted_recipe"] = req.body;
    res.render('submit.html', { data: data });
})

app.get('*', (req, res) => {
    let data = {
        page_title: "404"
    };
    res.render('404.html', { data: data });
})

app.listen(port, () => {
    console.log(`RASTRO: Server listening on port ${port}`);
})