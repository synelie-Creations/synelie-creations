document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".lightbox-img");

  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
