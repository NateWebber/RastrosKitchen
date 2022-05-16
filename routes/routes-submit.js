const express = require('express');
const bodyToJSON = require('../utilities/body-to-JSON');
const router = express.Router();

const JSONParser = require('../utilities/body-to-JSON')

//database stuff
const RastroDAO = require('../database/dao');
const RecipeRepository = require('../database/recipe-repository');

const dao = new RastroDAO('./database/database.sqlite3');
const recipeRepo = new RecipeRepository(dao);

//middleware
//TODO learn exactly why this is necessary
router.use((req, res, next) => {
    console.log("submit router!")
    console.log(`url: ${req.url}`)
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.redirect('/submit/step-1-basics');
});

//begin recipe submission process
router.get('/step-1-basics', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "../scripts/submit-basics.js"
    };
    res.render('submit-basics.html', { data: data });
});

//take basics and move to step 2 (ingredients)
router.post('/step-2-ingredients', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "../scripts/submit-ingredients.js"
    };
    console.log("post method on step-2-ingredients");
    console.log(`post method body: ${req.body}`);
    data["basics_json"] = req.body;

    res.render('submit-ingredients.html', { data: data });
});

//take basics + ingredients and move to step 3 (instructions)
router.post('/step-3-instructions', (req, res) => {
    let data = {
        page_title: "Submit",
        script: "../scripts/submit-instructions.js"
    };
    console.log("post method on step-3-ingredients");
    console.log(`post method body: ${JSON.stringify(req.body)}`);
    let parsedJSON = bodyToJSON.step2ToJSON(req.body);
    console.log(`parsed JSON: ${JSON.stringify(parsedJSON)}`);
    data["ingredients_json"] = parsedJSON;

    res.render('submit-instructions.html', { data: data });
});

router.post('/finish', (req, res) => {
    recipeRepo.createTable();
    let data = {
        page_title: "Submit"
    }
    console.log('post method to finish');
    console.log(`post method body: ${JSON.stringify(req.body)}`);
    let parsedJSON = bodyToJSON.step3ToJSON(req.body);
    console.log(`parsed JSON: ${JSON.stringify(parsedJSON)}`);
    data["finished_json"] = parsedJSON;

    recipeRepo.create(JSON.stringify(parsedJSON), parsedJSON["Recipe-Title"]);

    res.render('submit-finish.html', {data: data})
})

module.exports = router;