const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".dropdown a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked=false;
    });
});