function showList(buttonShow) {
    let content = buttonShow.parentElement.nextElementSibling;// from button to face, from face to content
    hideAllLists(content);
    if (content.style.display !== "block") {
        content.style.display = "block";
        setTimeout(showListCallback.bind(null, content), 1); // little delay between make content display as block, and animate it
        // rotate button
        rotateButton(buttonShow, 180);
    } else {
        hideList(content);
    }
}

function showListCallback(listContent) { //+
    listContent.style.top = "100%";
    listContent.style.opacity = "1";
    listContent.style.transition = "top 0.5s";
}

function hideList(listContent) {// +
    listContent.style.display = "none";
    listContent.style.top = "200%";
    listContent.style.opacity = "0";
    listContent.style.transition = "top 0.5s";
    // rotate button
    let button = listContent.previousElementSibling.querySelector("button"); // go to face element and then inside it to button
    rotateButton(button, 0);
}

function hideAllLists(listContentToLeaveVisible) {
    let listContents = document.getElementsByClassName('dropdown-list__content_from-bot-slide');
    // Todo: for other types of dropdown content effects (if use)
    for (let listContent of listContents) {
        if (listContent === listContentToLeaveVisible) {
            continue;
        }
        if (listContent.style.opacity === "1") {
            hideList(listContent);
            break; /* only 1 other list can be dropped down */
        }
    }
}

function rotateButton(button, deg) { //+
    button.style.transform = `rotate(${deg}deg)`;
    button.style.transitionDuration = "0.5s";
}


