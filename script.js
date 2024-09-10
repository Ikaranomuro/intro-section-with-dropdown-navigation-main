function openMenu(){
    hamburguerIconOpen = document.getElementsByClassName('header__hamburguerIcon')[0];
    hamburguerIconClose = document.getElementsByClassName('header__hamburguerClose')[0];
}



function dropdownMenuOpenOne() {
    const menuDropdownOne = document.getElementsByClassName('nav__Menu__Links__DropdownList')[0];
    const arrowUp = document.getElementsByClassName('arrowUp')[0];

    if (menuDropdownOne.classList == "nav__Menu__Links__DropdownList") {
        menuDropdownOne.classList.add("nav__Menu__Links__DropdownListClosedOne")
        menuDropdownOne.style.display = 'flex'
        arrowUp.src = "./images/icon-arrow-up.svg"
    } else {
        menuDropdownOne.classList.remove("nav__Menu__Links__DropdownListClosedOne")
        arrowUp.src = "./images/icon-arrow-down.svg"
         menuDropdownOne.style.display = 'none'
    }

}

function dropdownMenuOpenTwo() {
    const menuDropdownTwo = document.getElementsByClassName('nav__Menu__Links__DropdownList__two')[0];
    const arrowUp = document.getElementsByClassName('arrowUp')[1];

    if (menuDropdownTwo.classList == "nav__Menu__Links__DropdownList__two") {
        menuDropdownTwo.classList.add("nav__Menu__Links__DropdownListClosedTwo")
        menuDropdownTwo.style.display = "flex"
        arrowUp.src = "./images/icon-arrow-up.svg"
    } else {
        menuDropdownTwo.classList.remove("nav__Menu__Links__DropdownListClosedTwo")
        menuDropdownTwo.style.display = "none"
        arrowUp.src = "./images/icon-arrow-down.svg"
    }

}

