function onloadCookies() {
    var name = searchCookie("AccountName");
    if (!name) {
        name = prompt("Enter name") ?? "DEFAULT_NAME";
        addCookie("AccountName", name);
    }
    document.getElementsByClassName('header-line__user-name')[0].innerText = name;
}

function addCookie(cname, cvalue) {
    document.cookie = `${cname}=${cvalue};`; // expires on browser reload
}

function delCookie(cname) {
    document.cookie = `${cname}=;expires=${new Date(0)}`; //already expired
}

function searchCookie(cname) {
    let cookieString = `; ${document.cookie}`;
    let cookieStringParts = cookieString.split(`; ${cname}=`);
    return (cookieStringParts.length === 2 ? cookieStringParts[1].split(';').shift() : null);
}