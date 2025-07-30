document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = [
      "resources/golazo-1.png",
      "resources/golazo-2.png",
      "resources/golazo-3.png"
    ];
    let index = 0;
    const img = carousel.querySelector(".carousel-image");

    carousel.querySelector(".prev").addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      img.src = images[index];
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      index = (index + 1) % images.length;
      img.src = images[index];
    });
  });
});
