function recipeBodyToJSON(recipe_data) {
    console.log("parsing submitted recipe into JSON...");
    let jsonRecipe = {};
    console.log("RECIPE TO BE PARSED: ");
    console.log(recipe_data);
    /*
    * submitted data will have name format of "Set-X-Ingredient-Y"
    * so if we call string.split('-'), we can expect the set index to be result[1], and the ingredient index to be result[3]
    */
    for (let entry in recipe_data) {
        console.log(`entry: ${entry}`);
        let jsonValue = recipe_data[entry];
        console.log(`jsonValue: ${jsonValue}`);
        let bodyKey = entry;
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
            //jsonRecipe["set_" + set_index].push(jsonEntry);
            jsonRecipe["set_" + set_index].push(jsonValue);

        }
        else {
            //jsonRecipe["set_" + set_index] = [jsonEntry];
            jsonRecipe["set_" + set_index] = [jsonValue];

        }
    }
    return jsonRecipe;
}

module.exports = {
    bodyToJSON: function(recipe_data){
        return recipeBodyToJSON(recipe_data);
    }
};