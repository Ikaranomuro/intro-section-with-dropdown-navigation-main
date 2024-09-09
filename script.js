function pageClient(){
    const mainImage = document.getElementsByClassName('main__Image')[0];
    const body = document.getElementsByTagName('body')[0];
    if(body.clientWidth <= 400){
        mainImage.innerHTML = ' <img src="./images/image-hero-mobile.png" alt="" class="main__Image">'
        console.log(mainImage)
    } else{
        console.log("não há nada para adicionar")
    }
}


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

