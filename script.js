function dropdownMenuOpenOne() {
    const menuDropdownOne = document.getElementsByClassName('nav__Menu__Links__DropdownList')[0];
    const arrowUp = document.getElementsByClassName('arrowUp')[0];

    if (menuDropdownOne.classList == "nav__Menu__Links__DropdownList") {
        menuDropdownOne.classList.add("nav__Menu__Links__DropdownListClosedOne")
        arrowUp.src = "./images/icon-arrow-up.svg"
    } else {
        menuDropdownOne.classList.remove("nav__Menu__Links__DropdownListClosedOne")
        arrowUp.src = "./images/icon-arrow-down.svg"
    }

}

function dropdownMenuOpenTwo() {
    const menuDropdownTwo = document.getElementsByClassName('nav__Menu__Links__DropdownList__two')[0];
    const arrowUp = document.getElementsByClassName('arrowUp')[1];

    if (menuDropdownTwo.classList == "nav__Menu__Links__DropdownList__two") {
        menuDropdownTwo.classList.add("nav__Menu__Links__DropdownListClosedTwo")
        arrowUp.src = "./images/icon-arrow-up.svg"
    } else {
        menuDropdownTwo.classList.remove("nav__Menu__Links__DropdownListClosedTwo")
        arrowUp.src = "./images/icon-arrow-down.svg"
    }

}

