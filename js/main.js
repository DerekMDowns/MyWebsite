// Toggle mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const upperNav = document.querySelector(".upper-nav");
const loginItem = document.querySelector(".upper-menu .item:first-child"); // Login/Sign-Up item
const cartItem = document.querySelector(".upper-menu .item:last-child"); // Cart item

function toggleMenu() {
    menu.classList.toggle("active");
    const icon = menu.classList.contains("active") ? "fa-times" : "fa-bars";
    toggle.querySelector("a i").className = `fas ${icon} fa-3x`; // Update the toggle icon
}

// Adjust menu items for responsiveness
function adjustDisplayOfMenuItems() {
    if (window.innerWidth <= 768) {
        // Hide label text for "Login/Sign-Up" and "Cart" but keep icons visible
        const loginIcon = loginItem.querySelector("i"); // User icon
        const cartIcon = cartItem.querySelector("i"); // Cart icon
        const loginText = loginItem.querySelector("a"); // Login/Sign-Up link
        const cartText = cartItem.querySelector("a"); // Cart link

        // Hide text and keep icons
        if (loginText) {
            loginText.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = ""; // Clear the text label
                }
            });
        }
        if (cartText) {
            cartText.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = ""; // Clear the text label
                }
            });
        }

        // Reposition icons to the left of the toggle button
        menu.insertBefore(cartItem, toggle); // Move cart icon
        menu.insertBefore(loginItem, toggle); // Move login icon

        upperNav.style.display = "none"; // Hide upper-nav completely in mobile view
    } else {
        // Restore labels and positions for desktop view
        const loginText = loginItem.querySelector("a");
        const cartText = cartItem.querySelector("a");

        // Restore text labels
        if (loginText) loginText.textContent = " Login/Sign-Up";
        if (cartText) cartText.innerHTML = '<i class="fas fa-shopping-cart"></i>';

        // Move items back to their original positions
        upperNav.querySelector(".upper-menu").appendChild(loginItem);
        upperNav.querySelector(".upper-menu").appendChild(cartItem);

        upperNav.style.display = "flex"; // Show the upper-nav in desktop view
    }
}

// Initial adjustment when the page loads
document.addEventListener("DOMContentLoaded", adjustDisplayOfMenuItems);

// Adjust menu when window resizes
window.addEventListener("resize", adjustDisplayOfMenuItems);

// Add event listener for toggle button
toggle.addEventListener("click", toggleMenu, false);

// Close submenu from anywhere
function closeSubmenu(e) {
    if (!menu.contains(e.target) && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}
document.addEventListener("click", closeSubmenu, false);
