const express = require('express');
const router = express.Router();

/*const path = require('path');
router.use(express.static(path.join(__dirname, 'public')));*/

//database stuff
const RastroDAO = require('../database/dao');
const RecipeRepository = require('../database/recipe-repository');

const dao = new RastroDAO('./database/database.sqlite3');
const recipeRepo = new RecipeRepository(dao);




//middleware
//TODO learn exactly why this is necessary
router.use((req, res, next) => {
    console.log("main router!")
    console.log('Time: ', Date.now());
    next();
});



router.get('/browse', (req, res) => {
    let data = {
        page_title: "Browse",
        recipes: []
    }

    recipeRepo.getAll().then((rows) => {
        for (let i = 0; i < rows.length; i++) {
            console.log(rows[i])
            data.recipes.push(rows[i]);
        }
    }).then(() => {
        console.log("DATA RECIPES")
        console.log(data["recipes"])
        res.render('browse.html', { data: data })
    })

})

router.get('/recipes/:recipeID', (req, res) => {
    console.log("main router called /recipes/:recipeID")
    let data = {};
    recipeRepo.getByID(req.params.recipeID).then((fetched_recipe) => {
        console.log("FETCHED RECIPE:");
        console.log(fetched_recipe);
        data["page_title"] = fetched_recipe["recipe_title"];
        data["recipe_json"] = JSON.parse(fetched_recipe["recipe_json_string"]);
        res.render('recipe.html', { data: data });
    })
})

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