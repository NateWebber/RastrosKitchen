const express = require('express');
const bodyToJSON = require('../utilities/body-to-JSON');
const router = express.Router();

const JSONParser = require('../utilities/body-to-JSON')
//middleware
//TODO learn exactly why this is necessary
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "scripts/submit.js"
    };
    res.render('submit.html', { data: data });
});

router.post('/', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "scripts/submit.js"
    };
    console.log("post method on /submit");
    console.log(`post method body: ${req.body}`);
    data["submitted_recipe"] = req.body;

    //data["json_recipe"] = JSON.stringify(recipeBodyToJSON(req.body));
    data["json_recipe"] = JSONParser.bodyToJSON(req.body);
    console.log("FINAL PARSED JSON:");
    console.log(data["json_recipe"]);

    res.render('submit.html', { data: data });
});

module.exports = router;