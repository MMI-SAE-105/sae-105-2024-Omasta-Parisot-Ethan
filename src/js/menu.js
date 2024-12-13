document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("header__menu");
    const closeBtn = document.getElementById("closebtn");

    // Ouvrir le menu
    burgerIcon.addEventListener("click", () => {
        menu.style.left = "0";
        burgerIcon.classList.add("open");
    });

    // Fermer le menu
    closeBtn.addEventListener("click", () => {
        menu.style.left = "-250px";
        burgerIcon.classList.remove("open");
    });
});