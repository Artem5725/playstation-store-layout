function onloadCookies() {
    var name = searchCookie("AccountName");
    if (!name) {
        name = prompt("Enter name") ?? "DEFAULT_NAME";
        addCookie("AccountName", name);
    }
    document.getElementsByClassName('header-line__user-name')[0].innerText = name;
}

function onloadFilterPanel() {
    // clean
    removeAllTags();
    // checkboxes
    document.body.addEventListener('change', listTagsCallback);
}

function listTagsCallback(obj) {
    if (obj.target.className.includes('catalog-content__filter-elem-checkbox')) {
        obj.target.checked ? addTag(obj.target.value) : removeTagByValue(obj.target.value);
    }
}

function onloadButtons() {
    // buttons
    document.body.addEventListener('click', listButtonsCallback);
}

function listButtonsCallback(obj) {
    if (obj.target.className.includes('bi bi-chevron-down')) { // drop down icon inside button
        showList(obj.target.parentElement);
    } else if (obj.target.className.includes('catalog-content__filter-button')) {
        if (!checkTagIsSet(obj.target)) {
            addTag(obj.target.value);
        }
    } else if (obj.target.className.includes('bi bi-x')) { // cross icon inside button on tag
        removeTagAndCheckboxCallback(obj.target.parentElement);
    }
}

