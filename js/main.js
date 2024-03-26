// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("active");
    // Use classList.toggle to simplify adding/removing the "active" class
    const icon = menu.classList.contains("active") ? "fa-times" : "fa-bars";
    // Use the correct class for Font Awesome icons
    toggle.querySelector("a").innerHTML = `<i class='fas ${icon} fa-3x'></i>`;
}

// Ensure this is targeting the correct element, for example, if your toggle is a button, it should be button.toggle
toggle.addEventListener("click", toggleMenu, false);

// Activate Submenu
const items = document.querySelectorAll(".item");

function toggleItem(e) {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else {
        if (menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
        this.classList.add("submenu-active");
    }
    e.stopPropagation(); // Stop propagation to prevent it from immediately closing in the document click event
}

items.forEach(item => {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        // Consider preventing default if these are links to stop navigation
    }
    // You might want to use keydown and check for specific keys like Enter or Space
    item.addEventListener("keypress", toggleItem, false);
});

// Close Submenu From Anywhere
function closeSubmenu(e) {
    if (!menu.contains(e.target) && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

// This should be on the document to close submenus when clicking outside
document.addEventListener("click", closeSubmenu, false);

// Adjust Menu for Viewport
function adjustMenuForViewport() {
    const upperMenuItems = document.querySelectorAll('.upper-menu .item');
    const toggle = document.querySelector('.toggle');

    if (window.innerWidth <= 768) {
        // Move upper menu items to main menu
        upperMenuItems.forEach(item => {
            item.classList.add('upper-menu-item'); // Add a class for styling
            menu.insertBefore(item, toggle); // Insert before the toggle button
        });
    } else {
        // Move items back to their original position if needed
        const upperNav = document.querySelector('.upper-nav ul');
        upperMenuItems.forEach(item => {
            if (item.classList.contains('upper-menu-item')) { // Check if the item was moved
                item.classList.remove('upper-menu-item'); // Remove the styling class
                upperNav.appendChild(item); // Append back to the upper nav
            }
        });
    }
}

// Run on DOMContentLoaded to handle initial page load
document.addEventListener('DOMContentLoaded', () => {
    adjustMenuForViewport(); // Adjust menu based on initial viewport size
    closeSubmenu(event); // Ensure no submenu is open initially
});

// Run on resize events to handle dynamic adjustments
window.addEventListener('resize', adjustMenuForViewport);
