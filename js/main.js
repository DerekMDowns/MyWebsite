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