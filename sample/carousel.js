document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "../assets/images/project1/img1.jpg",
        "../assets/images/project1/img2.jpg"
    ];

    let currentIndex = 0;
    const carouselImages = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    function updateCarousel() {
        carouselImages.innerHTML = `<img src="${images[currentIndex]}" alt="Project Image">`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
});
