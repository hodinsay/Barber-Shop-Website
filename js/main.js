// Nav Menu Slide

const menuIcon = document.querySelector(".menu-icon")
const navMenu = document.querySelector("#sideNav")

navMenu.style.right = "-250px"

menuIcon.addEventListener("click", () => {
    if (navMenu.style.right == "-250px"){
        navMenu.style.right = "0"
        menuIcon.src = "img/close.png"
    } else {
        navMenu.style.right = "-250px"
        menuIcon.src = "img/menu.png"
    }
});