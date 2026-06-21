const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lightbox-img");

  images.forEach(function (img) {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", function () {
      const overlay = document.createElement("div");
      overlay.className = "simple-lightbox";

      overlay.innerHTML = `
        <span class="simple-lightbox-close">&times;</span>
        <img src="${img.src}" alt="${img.alt}">
      `;

      document.body.appendChild(overlay);

      overlay.addEventListener("click", function () {
        overlay.remove();
      });
    });
  });
});
