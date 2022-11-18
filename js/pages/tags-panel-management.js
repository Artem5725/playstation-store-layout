function Tag(valueOfTagRemoveButton) {
    let tag = document.createElement('div');
    tag.className = "tag catalog-content__single-tag";
    let name = document.createElement('div');
    name.className = "catalog-content__single-tag-text";
    name.appendChild(document.createTextNode(valueOfTagRemoveButton.toUpperCase()));
    let btn = document.createElement('button');
    btn.value = valueOfTagRemoveButton;
    btn.className = "catalog-content__single-tag-button";
    let icon = document.createElement('i');
    icon.className = "bi bi-x";
    btn.appendChild(icon);
    tag.appendChild(name);
    tag.appendChild(btn);
    return tag;
}

function addTag(valueOfTagRemoveButton) {
    let cleanButton = document.getElementsByClassName('catalog-content__clean-tags-button')[0];
    document.getElementById("panel-tag").insertBefore(Tag(valueOfTagRemoveButton), cleanButton);
}

function removeTagByValue(valueOfTagRemoveButton) {
    let tagElement = document.getElementById("panel-tag").querySelector(`[value="${valueOfTagRemoveButton}"]`).parentElement;
    removeTagElement(tagElement);
}

function removeTagElement(tagElement) {
    document.getElementById("panel-tag").removeChild(tagElement);
}

function dropCheckbox(valueOfCheckbox) {// there are 2 catalog-content__filter-block, but only in first there are checkboxes
    let checkbox = document.getElementsByClassName('catalog-content__filter-block')[0].querySelector(`[value="${valueOfCheckbox}"]`);
    if (checkbox) { // buttons will have null, as they have no checkboxes
        checkbox.checked = false;
    }
}

function removeTagAndCheckboxCallback(buttonRemoveElement) {
    removeTagElement(buttonRemoveElement.parentElement);
    dropCheckbox(buttonRemoveElement.value);
}

function removeAllTags() {
    // remove tags
    let allTags = document.getElementsByClassName('catalog-content__single-tag');
    while (allTags.length !== 0) { // can't use for, because after element is deleted iterator will skip one element each iteration
        removeTagElement(allTags[0]);
    }
    // remove checks
    let allCheckBoxes = document.getElementsByClassName('catalog-content__filter-elem-checkbox');
    for (let checkBox of allCheckBoxes) {
        checkBox.checked = false;
    }
}

function checkTagIsSet(buttonAddElement) {
    let valueOfTagRemoveButton = buttonAddElement.value;
    return document.getElementById("panel-tag").querySelector(`[value="${valueOfTagRemoveButton}"]`);
}