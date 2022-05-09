console.log("This is the submit page!");

let set_indices = [1];

let set_count = 1;

let ingredient_set1_addButton = document.getElementById("add-ingredient-set1");

let ingredient_set1_removeButton = document.getElementById("remove-ingredient-set1");

let add_set_button = document.getElementById("add-set");

let remove_set_button = document.getElementById("remove-set");

let ingredient_form = document.getElementById("form-ingredient");

ingredient_set1_addButton.onclick = function () {
    addFieldToIngredientForm(1);
}

ingredient_set1_removeButton.onclick = function () {
    removeFieldFromIngredientForm(1);
}

add_set_button.onclick = function(){
    addSetToForm();
}

remove_set_button.onclick = function(){
    removeSetFromForm();
}

function addSetToForm(){
    console.log("adding set...");
    //increase set_count and add a ingredient index to the list
    set_count += 1;
    set_indices.push(1);
    //create div for set
    let newDiv = document.createElement("div");
    newDiv.id = "div-set" + set_count;
    //create the header
    let newSetHeader = document.createElement("h3");
    newSetHeader.textContent = "Set " + set_count + ":";
    newSetHeader.className = "header-ingredient";
    newSetHeader.id = "header-ingredient-set" + set_count;
    //create the first input's label
    let newLabel = document.createElement("label");
    newLabel.htmlFor = "input-ingredient-set" + set_count + "-ingredient" + set_indices[set_count - 1];
    newLabel.textContent = "Ingredient " + set_indices[set_count - 1] + ": ";
    newLabel.id = "label-ingredient-set" + set_count + "-ingredient" + set_indices[set_count - 1];
    newLabel.className = "label-ingredient-set" + set_count;
    //create the first input
    let newField = document.createElement("input");
    newField.id = "input-ingredient-set" + set_count + "-ingredient" + set_indices[set_count - 1];
    newField.type = "text";
    newField.name = "Ingredient " + set_indices[set_count - 1];
    newField.className = "input-ingredient-set" + set_count;
    //insert the elements
    newDiv.appendChild(newSetHeader);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newField);
    //insert breaks (may be not necessary/removed once CSS styling is done)
    let newBreak = document.createElement("br");
    newBreak.className = "break-ingredient-set" + set_count + "-ingredient" + set_indices[set_count - 1];
    let newBreak2 = newBreak.cloneNode();
    newDiv.appendChild(newBreak);
    newDiv.appendChild(newBreak2);
    ingredient_form.insertBefore(newDiv, add_set_button);
}

function removeSetFromForm(){
    if (set_count == 1){
        alert("You need at least 1 set of ingredients!");
        return;
    }
    console.log("removing set...");
    /*let headerToRemove = document.getElementById("header-ingredient-set" + set_count);
    let fieldsToRemove = document.getElementsByClassName("input-ingredient-set" + set_count);
    let labelsToRemove = document.getElementsByClassName("label-ingredient-set" + set_count);
    let breaksToRemove = document.getElementsByClassName("break-ingredient-set" + set_count);
    ingredient_form.removeChild(headerToRemove);
    while (fieldsToRemove[0]){
        ingredient_form.removeChild(fieldsToRemove[0]);
    }
    while (labelsToRemove[0]){
        ingredient_form.removeChild(labelsToRemove[0]);
    }
    while (breaksToRemove[0]){
        ingredient_form.removeChild(breaksToRemove[0]);
    }*/
    let divToRemove = document.getElementById("div-set" + set_count);
    ingredient_form.removeChild(divToRemove);
    set_count -= 1;
    set_indices.pop();

}

/*function addFieldToIngredientForm(form) {
    console.log("adding field");
    ingredient_set1_index += 1;
    let newLabel = document.createElement("label");
    newLabel.htmlFor = "input-ingredient-set1-ingredient" + ingredient_set1_index;
    newLabel.textContent = "Ingredient " + ingredient_set1_index + ": ";
    newLabel.id = "label-ingredient-set1-ingredient" + ingredient_set1_index;
    let newField = document.createElement("input");
    newField.id = "input-ingredient-set1-ingredient" + ingredient_set1_index;
    newField.type = "text";
    newField.name = "Ingredient " + ingredient_set1_index;
    form.insertBefore(newLabel, ingredient_set1_addButton);
    form.insertBefore(newField, ingredient_set1_addButton);
    let newBreak = document.createElement("br");
    newBreak.className = "break-ingredient-set1-ingredient" + ingredient_set1_index;
    let newBreak2 = newBreak.cloneNode();
    form.insertBefore(newBreak, ingredient_set1_addButton);
    form.insertBefore(newBreak2, ingredient_set1_addButton);
};*/

/*function removeFieldFromIngredientForm(form) {
    if (ingredient_set1_index == 1) {
        alert("You need at least 1 ingredient in a set! (You can remove a set with the "Remove Set" button)");
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
};*/