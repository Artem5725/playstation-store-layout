function show_list(elem) {
    let content = document.getElementById(elem);
    hide_all_lists(content);
    if (content.style.display !== "block") {
        content.style.display = "block";
        setTimeout(callbackShowList.bind(null, content), 1); // little delay between make content display as block, and animate it

        // rotate button
        rotateButton(this, 180);
    } else {
        hide_list(content);
    }
}

function callbackShowList(content) {

    content.style.top = "100%";
    content.style.opacity = "1";
    content.style.transition = "top 0.5s";
}

function hide_list(content) {
    content.style.display = "none";
    content.style.top = "200%";
    content.style.opacity = "0";
    content.style.transition = "top 0.5s";

    // rotate button
    // !!! previousSibling white space is also element
    let buttonParent = content.previousSibling.previousSibling; // go to face element and then inside it to button
    rotateButton(buttonParent.getElementsByTagName("button")[0], 0);
}

function hide_all_lists(except) {
    let elems = document.getElementsByClassName('dropdown-list__content_from-bot-slide');
    // Todo: for other types of dropdown content effects (if use)
    for (let elem of elems) {
        if (elem === except) {
            continue;
        }
        if (elem.style.opacity === "1") {
            hide_list(elem);
            break; /* only 1 other list can be dropped down */
        }
    }
}

function rotateButton(button, deg) {
    button.style.transform = `rotate(${deg}deg)`;
    button.style.transitionDuration = "0.5s";
}


