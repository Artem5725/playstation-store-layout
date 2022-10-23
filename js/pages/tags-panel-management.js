function basic_prepare_filter_panel() {
    // checkboxes
    let elems = document.getElementsByClassName('catalog-content__filter-elem-checkbox');
    for (let elem of elems) {
        elem.addEventListener('change', function () {
            if (this.checked) {
                add_tag(this);
            } else {
                remove_tag(this);
            }
        })
    }
    // buttons
    elems = document.getElementsByClassName("catalog-content__filter-button");
    for (let elem of elems) {
        elem.addEventListener('click', function () {
            if (!check_tag_is_set(this)) {
                add_tag(this);
            }
        })
    }
}


function add_tag(elem) {
    document.getElementById("panel-tag").innerHTML = make_tag(elem.value) + document.getElementById("panel-tag").innerHTML;
}

function remove_tag(elem) {
    document.getElementById("panel-tag").innerHTML = document.getElementById("panel-tag").innerHTML.replace(make_tag(elem.value), "");
}

function drop_checkbox(elem) {
    let elem_to_drop = document.getElementById(elem.value.toLowerCase() + "-single-filter")
    if (elem_to_drop !== null && elem_to_drop.tagName.toLowerCase() === "input") // buttons in filter panel hae no ids
    {
        elem_to_drop.checked = false;
    }
}

function remove_tag_and_checkbox(elem) {
    remove_tag(elem);
    drop_checkbox(elem);

}

function remove_all_tags() {
    let all_chosen_tags = document.getElementsByClassName('catalog-content__single-tag-button'); // like press all close buttons
    while (all_chosen_tags.length !== 0) { // can't use for, because after element is deleted iterator will skip one element each iteration
        remove_tag_and_checkbox(all_chosen_tags[0]);
    }
}

function make_tag(elem_value) {
    return `<div class="tag catalog-content__single-tag"><div class="catalog-content__single-tag-text"> ${elem_value.toUpperCase()}</div><button value="${elem_value}" onclick="remove_tag_and_checkbox(this);" class="catalog-content__single-tag-button"><i class="bi bi-x"></i></button></div>`;
}

function check_tag_is_set(elem) {
    return (document.getElementById("panel-tag").innerHTML.indexOf(elem.value.toUpperCase()) !== -1);
}