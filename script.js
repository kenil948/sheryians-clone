
const menu = document.querySelector(".mobile-menu");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", () => {
    menu.classList.add("show");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
})
