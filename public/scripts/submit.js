console.log("This is the submit page!");

let set_indices = [1];

let set_count = 1;

let ingredient_set1_addButton = document.getElementById("add-ingredient-set1");

let ingredient_set1_removeButton = document.getElementById("remove-ingredient-set1");

let add_set_button = document.getElementById("add-set");

let remove_set_button = document.getElementById("remove-set");

let ingredient_form = document.getElementById("form-ingredient");

ingredient_set1_addButton.onclick = function () {
    addField(1);
}

ingredient_set1_removeButton.onclick = function () {
    removeField(1);
}

add_set_button.onclick = function () {
    addSetToForm();
}

remove_set_button.onclick = function () {
    removeSetFromForm();
}

function addSetToForm() {
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
    newField.name = "Set-" + set_count + "-Ingredient-" + set_indices[set_count - 1];
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

    let newAddButton = document.createElement("input");
    newAddButton.type = "button";
    newAddButton.value = "Add Ingredient";
    newAddButton.id = "add-ingredient-set" + set_count;
    const current_set_count = set_count;
    newAddButton.onclick = function () {
        addField(current_set_count);
    }
    let newRemoveButton = document.createElement("input");
    newRemoveButton.type = "button";
    newRemoveButton.value = "Remove Ingredient";
    newRemoveButton.id = "remove-ingredient-set" + set_count;
    newRemoveButton.onclick = function () {
        removeField(current_set_count);
    }
    let addButtonBreak = document.createElement("br");
    let addButtonBreak2 = document.createElement("br");
    let removeButtonBreak = document.createElement("br");
    let removeButtonBreak2 = document.createElement("br");
    newDiv.appendChild(newAddButton);
    newDiv.appendChild(addButtonBreak);
    newDiv.appendChild(addButtonBreak2);
    newDiv.appendChild(newRemoveButton);
    newDiv.appendChild(removeButtonBreak);
    newDiv.appendChild(removeButtonBreak2);


    ingredient_form.insertBefore(newDiv, add_set_button);
}

function removeSetFromForm() {
    if (set_count == 1) {
        alert("You need at least 1 set of ingredients!");
        return;
    }
    console.log("removing set...");
    let divToRemove = document.getElementById("div-set" + set_count);
    ingredient_form.removeChild(divToRemove);
    set_count -= 1;
    set_indices.pop();

}

function addField(set) {
    console.log("adding field to set" + set + "...");
    //find div and add button for this set
    let setDiv = document.getElementById("div-set" + set);
    let addButton = document.getElementById("add-ingredient-set" + set);
    //increase this set's ingredient index
    set_indices[set - 1] += 1;
    let ingredient_index = set_indices[set - 1]; //store index in variable to simplify
    //make label
    let newLabel = document.createElement("label");
    newLabel.htmlFor = "input-ingredient-set" + set + "-ingredient" + ingredient_index;
    newLabel.textContent = "Ingredient " + ingredient_index + ": ";
    newLabel.id = "label-ingredient-set" + set + "-ingredient" + ingredient_index;
    //make field
    let newField = document.createElement("input");
    newField.id = "input-ingredient-set" + set + "-ingredient" + ingredient_index;
    newField.type = "text";
    newField.name = "Set-" + set + "-Ingredient-" + ingredient_index;
    //add label and field
    setDiv.insertBefore(newLabel, addButton);
    setDiv.insertBefore(newField, addButton);
    //make and add breaks
    let newBreak = document.createElement("br");
    newBreak.className = "break-ingredient-set" + set_count + "-ingredient" + ingredient_index;
    let newBreak2 = newBreak.cloneNode();
    setDiv.insertBefore(newBreak, addButton);
    setDiv.insertBefore(newBreak2, addButton);
}

function removeField(set) {
    if (set_indices[set - 1] == 1) {
        alert("You need at least 1 ingredient in a set! (You can remove a set with the \"Remove Set\" button)");
        return;
    }
    console.log("removing field from set " + set + "...");
    let setDiv = document.getElementById("div-set" + set);
    let fieldToRemove = document.getElementById("input-ingredient-set" + set + "-ingredient" + set_indices[set - 1]);
    let labelToRemove = document.getElementById("label-ingredient-set" + set + "-ingredient" + set_indices[set - 1]);
    let breaks = document.getElementsByClassName("break-ingredient-set" + set + "-ingredient" + set_indices[set - 1]);
    while (breaks[0]) {
        setDiv.removeChild(breaks[0])
    }
    setDiv.removeChild(fieldToRemove);
    setDiv.removeChild(labelToRemove);
    set_indices[set - 1] -= 1;
}
