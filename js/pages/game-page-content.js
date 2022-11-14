function changeHeart(element) {
    element.style.color = (element.style.color === "rgb(204, 0, 0)") ? "#302D2D" : " rgb(204, 0, 0)";
    element.style.borderColor = (element.style.borderColor === "rgb(204, 0, 0)") ? "#302D2D" : " rgb(204, 0, 0)";
}

function hoverHeart(element){
    element.style.color = "#FFFFFF";
    element.style.borderColor = "#FFFFFF";
}

/* Todo all buy-button must redirect to new buy page */
for (let buyButton of document.getElementsByClassName('game-page-content__buy-button')){
    buyButton.style.onclick = "location.href='catalog.html'";
}
