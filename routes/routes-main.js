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
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    let data = {
        page_title: "Home"
    };
    res.render('index.html', { data: data });
});

router.get('/browse', (req, res) => {
    let data = {
        page_title: "Browse",
        recipes: []
    }

    recipeRepo.getAll().then((rows) => {
        for (let i = 0; i < rows.length; i++){
            console.log(rows[i])
            data.recipes.push(JSON.parse(rows[i].recipe));
        }
    }).then(() =>{
        console.log("DATA RECIPES")
        console.log(data["recipes"])
        res.render('browse.html', { data: data })
    } )

})

router.get('*', (req, res) => {
    let data = {
        page_title: "404"
    };
    res.render('404.html', { data: data });
})

module.exports = router;