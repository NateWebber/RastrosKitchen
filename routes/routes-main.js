const express = require('express');
const router = express.Router();

//middleware
//TODO learn exactly why this is necessary
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    let data = {
        page_title: "Home"
    };
    res.render('index.html', { data: data });
});

router.get('*', (req, res) => {
    let data = {
        page_title: "404"
    };
    res.render('404.html', { data: data });
})

module.exports = router;