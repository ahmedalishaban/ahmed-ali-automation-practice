// burger.js
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    burger.addEventListener("click", function() {
        navLinks.classList.toggle("show"); // Toggle 'show' class
        navLinks.classList.toggle("hidden"); // Toggle 'hidden' class
    });
});

