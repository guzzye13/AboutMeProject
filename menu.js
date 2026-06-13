// Wait until the full HTML is parsed before running any JS —
// without this, getElementById would return null because the elements don't exist yet
document.addEventListener("DOMContentLoaded", function () {
  // Cached here at the top so we don't query the DOM repeatedly on every interaction
  const toggle = document.getElementById("darkModeToggle");
  const modeLabel = document.getElementById("modeLabel");
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");

  // "change" fires only when the checkbox value actually changes —
  // more reliable than "click" which can fire without the value changing
  toggle.addEventListener("change", function () {
    if (this.checked) {
      // Adding the class to body triggers all the CSS variable overrides in body.dark-mode
      document.body.classList.add("dark-mode");
      // Update the label so the user knows what mode they just switched to
      modeLabel.textContent = "Dark Mode Enabled";
    } else {
      // Removing the class reverts all variables back to the :root defaults
      document.body.classList.remove("dark-mode");
      modeLabel.textContent = "Light Mode Enabled";
    }
  });

  // Toggle uses classList.toggle so one listener handles both open and close —
  // no need for separate open/close buttons or tracking state manually
  hamburger.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });

  // querySelectorAll targets only the <a> tags inside the nav —
  // we can't attach forEach directly to mainNav because it's a single element not an array
  const navLinks = mainNav.querySelectorAll("a");

  // Each link gets its own listener so any click anywhere in the nav closes the menu —
  // this way the user doesn't have to manually close it after navigating
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });

  // Attached to the document so every click on the page is caught —
  // the contains() checks make sure we only close the menu when clicking *outside* it,
  // so clicking the hamburger or inside the nav still works normally
  document.addEventListener("click", function (e) {
    if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
      mainNav.classList.remove("open");
    }
  });
});
