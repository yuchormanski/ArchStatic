function getFullYear() {
  return new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector(".footer-year");
  if (yearElement) {
    yearElement.textContent = getFullYear();
  }
});

function toggleMenu() {
  const menu = document.querySelector(".mobile_menu");
  let menuList = document.querySelector(".mobile_menu_list");
  if (menuList.style.display === "grid") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "grid";
  }
}
