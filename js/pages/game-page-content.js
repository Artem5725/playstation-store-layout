function changeHeartClicked(element) {
    if(element.clickedMy === true){
        element.clickedMy = false;
        element.style.color = "#302D2D";
        element.style.borderColor = "#302D2D";
    }
    else{
        element.clickedMy = true;
        element.style.color = "#FF0000";
        element.style.borderColor = "#FF0000";
    }
}

function changeHeartEnter(element) {
    element.style.color = "#FFFFFF";
    element.style.borderColor = "#FFFFFF";
}

function changeHeartOut(element){
    if(element.clickedMy === true){
        element.style.color = "#FF0000";
        element.style.borderColor = "#FF0000";
    }
    else{
        element.style.color = "#302D2D";
        element.style.borderColor = "#302D2D";
    }
}

/* Todo all buy-button must redirect to new buy page */
for (let buyButton of document.getElementsByClassName('game-page-content__buy-button')){
    buyButton.style.onclick = "location.href='catalog.html'";
}
