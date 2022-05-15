function step2ToJSON(recipe_data) {
    console.log("parsing submitted step 2 into JSON...");
    let jsonRecipe = {
        ingredients: {}
    };
    console.log("RECIPE TO BE PARSED: ");
    console.log(recipe_data);
    /*
    * submitted data will have name format of "Set-X-Ingredient-Y"
    * so if we call string.split('-'), we can expect the set index to be result[1], and the ingredient index to be result[3]
    */
    for (let entry in recipe_data) {
        console.log(`entry: ${entry}`);
        if (entry == "Recipe-Title") {
            console.log(`found title as ${recipe_data[entry]}`);
            jsonRecipe["Recipe-Title"] = recipe_data[entry];
            continue;
        }
        if (entry == "Recipe-Description") {
            console.log(`found description as ${recipe_data[entry]}`);
            jsonRecipe["Recipe-Description"] = recipe_data[entry];
            continue;
        }
        let jsonValue = recipe_data[entry];
        console.log(`jsonValue: ${jsonValue}`);
        let bodyKey = entry;
        let entry_array = bodyKey.split('-');
        console.log(`entry_array: ${entry_array}`)
        let set_index = parseInt(entry_array[1]);
        let ingredient_index = parseInt(entry_array[3]);
        console.log(`looking at set ${set_index} - ingredient ${ingredient_index}`);
        let jsonKey = `ingredient_${ingredient_index}`;
        let jsonEntry = {};
        jsonEntry[jsonKey] = jsonValue;
        console.log(`jsonEntry: ${jsonEntry}`);
        if (("set_" + set_index) in jsonRecipe["ingredients"]) {
            //jsonRecipe["set_" + set_index].push(jsonEntry);
            jsonRecipe["ingredients"]["set_" + set_index].push(jsonValue);

        }
        else {
            //jsonRecipe["set_" + set_index] = [jsonEntry];
            jsonRecipe["ingredients"]["set_" + set_index] = [jsonValue];

        }
    }
    return jsonRecipe;
}

function step3ToJSON(recipe_data) {
    console.log("parsing submitted step 3 into JSON...");
    let jsonRecipe = {
        ingredients: {},
        instructions: {}
    };
    console.log("RECIPE TO BE PARSED: ");
    console.log(recipe_data);
    /*
    * submitted data will have name format of "Set-X-Ingredient-Y"
    * so if we call string.split('-'), we can expect the set index to be result[1], and the ingredient index to be result[3]
    */
    for (let entry in recipe_data) {
        console.log(`entry: ${entry}`);
        if (entry == "Recipe-Title") {
            console.log(`found title as ${recipe_data[entry]}`);
            jsonRecipe["Recipe-Title"] = recipe_data[entry];
            continue;
        }
        if (entry == "Recipe-Description") {
            console.log(`found description as ${recipe_data[entry]}`);
            jsonRecipe["Recipe-Description"] = recipe_data[entry];
            continue;
        }
        let jsonValue = recipe_data[entry];
        console.log(`jsonValue: ${jsonValue}`);
        let bodyKey = entry;
        let entry_array = bodyKey.split('-');
        console.log(`entry_array: ${entry_array}`);
        let entry_type = entry_array[2];

        //add an ingredient
        if (entry_type == "Ingredient") {
            let set_index = parseInt(entry_array[1]);
            let ingredient_index = parseInt(entry_array[3]);
            console.log(`looking at set ${set_index} - ingredient ${ingredient_index}`);
            let jsonKey = `ingredient_${ingredient_index}`;
            let jsonEntry = {};
            jsonEntry[jsonKey] = jsonValue;
            console.log(`jsonEntry: ${jsonEntry}`);

            if (("set_" + set_index) in jsonRecipe["ingredients"]) {
                //jsonRecipe["set_" + set_index].push(jsonEntry);
                jsonRecipe["ingredients"]["set_" + set_index].push(jsonValue);
            }
            else {
                //jsonRecipe["set_" + set_index] = [jsonEntry];
                jsonRecipe["ingredients"]["set_" + set_index] = [jsonValue];
            }
        }
        //add an instruction
        else {
            let set_index = parseInt(entry_array[1]);
            let instruction_index = parseInt(entry_array[3]);
            console.log(`looking at set ${set_index} - instruction ${instruction_index}`);
            let jsonKey = `instruction_${instruction_index}`;
            let jsonEntry = {};
            jsonEntry[jsonKey] = jsonValue;
            console.log(`jsonEntry: ${jsonEntry}`);

            if (("set_" + set_index) in jsonRecipe["instructions"]) {
                //jsonRecipe["set_" + set_index].push(jsonEntry);
                jsonRecipe["instructions"]["set_" + set_index].push(jsonValue);
            }
            else {
                //jsonRecipe["set_" + set_index] = [jsonEntry];
                jsonRecipe["instructions"]["set_" + set_index] = [jsonValue];
            }
        }

    }
    return jsonRecipe;
}

module.exports = {
    step2ToJSON: function (recipe_data) {
        return step2ToJSON(recipe_data);
    },
    step3ToJSON: function (recipe_data) {
        return step3ToJSON(recipe_data)
    }
};