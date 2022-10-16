var list_dropped

function show_list(elem) {
    let content = elem.nextElementSibling;
    content.style.top = "0";
    content.style.opacity = "1";
    content.style.transition = "top 0.5s";
}

function hide_list(content){
    content.style.top = "100%";
    content.style.opacity = "0";
    content.style.transition = "top 0.5s";
}