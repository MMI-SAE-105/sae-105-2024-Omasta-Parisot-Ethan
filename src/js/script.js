var header__menu = document.getElementById("Myheader__menu")
var openbtn = document.getElementById("openbtn")
var closebtn = document.getElementById("closebtn")

openbtn.addEventListener("click", openNav);
closebtn.addEventListener("click", closeNav);

function openNav() {
    console.log("Ouverture du menu");
    header__menu.classList.add("active")
}

function closeNav() {
    console.log("Fermeture du menu");
    header__menu.classList.remove("active")
}
