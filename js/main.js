// Assuming the first three list items in .upper-menu are the search, shopping cart, and login icons in that order

// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const upperMenu = document.querySelector('.upper-menu');
const searchItem = upperMenu.children[0]; // The search icon
const cartItem = upperMenu.children[2]; // The shopping cart icon
const userItem = upperMenu.children[1]; // The user login icon

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("i").classList.remove("fa-times");
        toggle.querySelector("i").classList.add("fa-bars");
    } else {
        menu.classList.add("active");
        toggle.querySelector("i").classList.remove("fa-bars");
        toggle.querySelector("i").classList.add("fa-times");
    }
}

toggle.addEventListener("click", toggleMenu, false);

// Function to adjust the navigation for smaller screens
function adjustNavForSmallScreens() {
    if (window.innerWidth <= 768) {
        // Add search, cart, and user items before the toggle menu item
        menu.insertBefore(searchItem, toggle);
        menu.insertBefore(cartItem, toggle);
        menu.insertBefore(userItem, toggle);
    } else {
        // Move the items back to the upper menu when the screen is larger than 768px
        upperMenu.insertBefore(searchItem, upperMenu.firstChild);
        upperMenu.insertBefore(cartItem, upperMenu.children[1]);
        upperMenu.insertBefore(userItem, upperMenu.children[2]);
    }
}

// Add event listeners for DOM content loaded and window resize
document.addEventListener('DOMContentLoaded', adjustNavForSmallScreens);
window.addEventListener('resize', adjustNavForSmallScreens);
