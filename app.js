const http = require('http');

const path = require('path');

const express = require('express');

const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');


const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

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
    //console.log(req.body);
    data["submitted_recipe"] = req.body;

    data["json_recipe"] = recipeBodyToJSON(req.body);
    console.log(data["json_recipe"]);

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

function recipeBodyToJSON(recipe_data) {
    console.log("parsing submitted recipe into JSON...");
    let jsonRecipe = {};
    console.log(recipe_data);
    /*
    * submitted data will have name format of "Set-X-Ingredient-Y"
    * so if we call string.split('-'), we can expect the set index to be result[1], and the ingredient index to be result[3]
    */
    for (let entry in recipe_data) {
        console.log(`entry: ${entry}`);
        //let jsonKey = null;
        let jsonValue = recipe_data[entry];
        console.log(`jsonValue: ${jsonValue}`);
        let bodyKey = entry;
        /*for (let i in entry) {
            bodyKey = i;
            console.log(`bodyKey: ${bodyKey}`);
            jsonValue = entry[i];
            console.log(`jsonValue: ${jsonValue}`);
        }*/
        let entry_array = bodyKey.split('-');
        console.log(`entry_array: ${entry}`)
        let set_index = parseInt(entry_array[1]);
        let ingredient_index = parseInt(entry_array[3]);
        console.log(`looking at set ${set_index} - ingredient ${ingredient_index}`);
        let jsonKey = `ingredient_${ingredient_index}`;
        let jsonEntry = {};
        jsonEntry[jsonKey] = jsonValue;
        console.log(`jsonEntry: ${jsonEntry}`);

        if (("set_" + set_index) in jsonRecipe) {
            jsonRecipe["set_" + set_index].push(jsonEntry);
        }
        else {
            jsonRecipe["set_" + set_index] = [jsonEntry];
        }
    }
    return jsonRecipe;
}