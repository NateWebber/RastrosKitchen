console.log("This is the submit page!");

let ingredient_set1_index = 1;

let ingredient_set1_addButton = document.getElementById("add-ingredient-set1");

let ingredient_set1_removeButton = document.getElementById("remove-ingredient-set1");

let ingredient_set1_form = document.getElementById("form-ingredient-set1");

ingredient_set1_addButton.onclick = function () {
    addFieldToIngredientForm(ingredient_set1_form);
}

ingredient_set1_removeButton.onclick = function () {
    removeFieldFromIngredientForm(ingredient_set1_form);
}

function addFieldToIngredientForm(form) {
    console.log("adding field");
    ingredient_set1_index += 1;
    let newLabel = document.createElement("label");
    newLabel.htmlFor = "input-ingredient-set1-ingredient" + ingredient_set1_index;
    newLabel.textContent = "Ingredient " + ingredient_set1_index + ": ";
    newLabel.id = "label-ingredient-set1-ingredient" + ingredient_set1_index;
    let newField = document.createElement("input");
    newField.id = "input-ingredient-set1-ingredient" + ingredient_set1_index;
    newField.type = "text";
    newField.name = "ingredient" + ingredient_set1_index;
    form.insertBefore(newLabel, ingredient_set1_addButton);
    form.insertBefore(newField, ingredient_set1_addButton);
    let newBreak = document.createElement("br");
    newBreak.className = "break-ingredient-set1-ingredient" + ingredient_set1_index;
    let newBreak2 = newBreak.cloneNode();
    form.insertBefore(newBreak, ingredient_set1_addButton);
    form.insertBefore(newBreak2, ingredient_set1_addButton);
};

function removeFieldFromIngredientForm(form) {
    if (ingredient_set1_index == 1) {
        alert("You need at least 1 ingredient!");
        return;
    }
    console.log("removing field");
    let fieldToRemove = document.getElementById("input-ingredient-set1-ingredient" + ingredient_set1_index);
    let labelToRemove = document.getElementById("label-ingredient-set1-ingredient" + ingredient_set1_index);
    let breaks = document.getElementsByClassName("break-ingredient-set1-ingredient" + ingredient_set1_index);
    while (breaks[0]) {
        form.removeChild(breaks[0]);
    }
    form.removeChild(fieldToRemove);
    form.removeChild(labelToRemove);
    ingredient_set1_index -= 1;
};