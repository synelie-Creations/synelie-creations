const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const customForm = document.querySelector(".custom-form");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});

customForm.addEventListener("submit", (event) => {
  event.preventDefault();
 
window.location.href = "mailto:infosyneliecreations@gmail.com?subject=Custom Order Request";
});
const lightboxImages = document.querySelectorAll('.lightbox-img');

let currentImageIndex = 0;

const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.innerHTML = `
  <span class="lightbox-close">&times;</span>
  <img src="" alt="Expanded artwork">
  <div class="lightbox-nav">
    <button id="prevImage">Previous</button>
    <button id="nextImage">Next</button>
  </div>
`;

document.body.appendChild(overlay);

const overlayImg = overlay.querySelector('img');
const closeBtn = overlay.querySelector('.lightbox-close');
const prevBtn = overlay.querySelector('#prevImage');
const nextBtn = overlay.querySelector('#nextImage');

lightboxImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImageIndex = index;
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
  overlayImg.src = lightboxImages[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % lightboxImages.length;
  overlayImg.src = lightboxImages[currentImageIndex].src;
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
document.querySelectorAll('.inquiry-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
