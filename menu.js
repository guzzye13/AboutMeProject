const menuToggle = document.getElementById("menu-toggle");
const dropdown = document.querySelector(".dropdown");
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelectorAll(".dropdown a");


// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked=false;
    });
});

// Close menu when clicking outside
document.addEventListener("mousedown", (event) => {
    if (!menuToggle.checked) return;

    const target = event.target;

    if (
        dropdown.contains(target) ||
        menuIcon.contains(target)
    ) {
        return;
    }

    menuToggle.checked = false;
});

