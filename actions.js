// page search data
let queryEntries = {'page': 'All'};

/**
 * @description When the window loads, parse the search queries in the URL if there are any then apply them.
 */
window.addEventListener('load', e => {
    for(let queryEntry of location.search.substring(1).split("&")) {
        if(queryEntry != "") {
            let declaration = queryEntry.split("=");
            queryEntries[declaration[0]] = declaration[1];
        }
    }
    setupPage();
});

/**
 * @description Used to hide the alert UI, called when the X is pressed on the alert box.
 */
function closeAlert() {
    document.querySelector(".overlay").hidden = true;
}

/**
 * @param title What should be in the title of the alert.
 * @param information What should be in the body of the alert.
 * @description Used to display the UI's built in alert functionality.
 */
function showAlert(title, information) {
    document.querySelector(".alert .title").innerHTML = title;
    document.querySelector(".alert .information").innerHTML = information;
    document.querySelector(".overlay").hidden = false;
}

/**
 * @description Called to change the category (ex mechanical, cad, etc.)
 * @param target What is the page set to.
 */
function setPage() {
    for(let elm of document.querySelector(".categories").children)
        elm.className = "";
    location.search = "?page=" + event.target.innerText;
}

/**
 * @description Highlights the correct tab in the sidebar and fetches data for the selected page.
 */
function setupPage() {
    for(let elm of document.querySelector(".categories").children) {
        elm.className = "";
        if(elm.innerText == queryEntries.page)
            elm.className = "selected";
    }
    document.querySelector(".page-title").innerHTML = queryEntries.page;
}

/**
 * @description Reads what is in the search bar to try to find the item.
 */
function query() {
    let searchBar = document.querySelector(".search");
    let searchVal = searchBar.value;
    console.log(searchVal);
}