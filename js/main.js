// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (window.innerWidth <= 768) {
        // Move the login and cart items next to the toggle button
        const upperNavItems = document.querySelectorAll('.upper-menu .item');
        upperNavItems.forEach(item => {
            menu.insertBefore(item, toggle);
        });
    }
    menu.classList.toggle("active");
    const icon = menu.classList.contains("active") ? "fa-times" : "fa-bars";
    toggle.querySelector("a i").className = `fas ${icon} fa-3x`; // Update the class to change the icon
}

toggle.addEventListener("click", toggleMenu, false);

// Function to adjust the display of menu items based on window size
function adjustDisplayOfMenuItems() {
    const upperNav = document.querySelector(".upper-nav");
    const upperNavItems = document.querySelectorAll('.upper-menu .item');
    if (window.innerWidth <= 768) {
        upperNavItems.forEach(item => {
            menu.insertBefore(item, toggle); // Move the login and cart items next to the toggle
        });
        upperNav.style.display = 'none'; // Hide the upper-nav
    } else {
        upperNavItems.forEach(item => {
            upperNav.querySelector('.upper-menu').appendChild(item); // Move the items back to the upper-nav
        });
        upperNav.style.display = 'flex'; // Show the upper-nav
    }
}

// Initial adjustment when the page loads
document.addEventListener('DOMContentLoaded', adjustDisplayOfMenuItems);

// Adjustment when window resizes
window.addEventListener('resize', adjustDisplayOfMenuItems);

// Close Submenu From Anywhere
function closeSubmenu(e) {
    if (!menu.contains(e.target) && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

document.addEventListener("click", closeSubmenu, false);
