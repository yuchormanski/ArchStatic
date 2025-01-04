function getFullYear() {
  return new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector(".footer-year");
  if (yearElement) {
    yearElement.textContent = getFullYear();
  }
});
