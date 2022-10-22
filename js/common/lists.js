function show_list(elem) {
    let content = document.getElementById(elem);
    hide_all_lists(content);
    content.style.display = "block";
    /* !!! add arguments to callback function via bind
        1st param (null) will be used as this in function
        other params - arguments of function
     */
    setTimeout(callback_show_list.bind(null, content), 1) // little delay between make content display as block, and animate it

}

function callback_show_list(content) {
    content.style.top = "100%";
    content.style.opacity = "1";
    content.style.transition = "top 0.5s";
}

function hide_list(content) {
    content.style.display = "none";
    content.style.top = "200%";
    content.style.opacity = "0";
    content.style.transition = "top 0.5s";
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



