// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("active");
    // Update the icon based on menu state
    const icon = menu.classList.contains("active") ? "fa-times" : "fa-bars";
    toggle.querySelector("a").innerHTML = `<i class='fas ${icon} fa-3x'></i>`;
}

toggle.addEventListener("click", toggleMenu, false);

// Activate Submenu
const items = document.querySelectorAll(".item");

function toggleItem(e) {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else {
        menu.querySelector(".submenu-active")?.classList.remove("submenu-active");
        this.classList.add("submenu-active");
    }
    e.stopPropagation();
}

items.forEach(item => {
    item.querySelector(".submenu")?.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
});

// Close Submenu From Anywhere
function closeSubmenu(e) {
    if (!menu.contains(e.target)) {
        menu.querySelector(".submenu-active")?.classList.remove("submenu-active");
    }
}

document.addEventListener("click", closeSubmenu, false);

// Adjust Menu for Viewport
function adjustMenuForViewport() {
    const loginItem = document.querySelector('.upper-menu .item:first-child'); // Assuming the login is the first item
    const upperNav = document.querySelector('.upper-nav ul');

    if (window.innerWidth <= 768) {
        // Change the login item to just show the "fa-user" icon next to "fa-bars"
        loginItem.innerHTML = `<a href="logIn.html"><i class="fas fa-user"></i></a>`;
        menu.insertBefore(loginItem, toggle); // Move next to the toggle button
    } else {
        // Move the login item back to its original place and restore its full content if above 768px
        loginItem.innerHTML = `<a href="logIn.html"><i class="fas fa-user"></i> Login</a>`;
        upperNav.insertBefore(loginItem, upperNav.firstChild); // Move it back to the upper nav
    }
}

document.addEventListener('DOMContentLoaded', adjustMenuForViewport);
window.addEventListener('resize', adjustMenuForViewport);
