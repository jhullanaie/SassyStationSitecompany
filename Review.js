let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Calculate the offset for the carousel
    const offset = -currentSlide * 100; // Move left by 100% of the current slide
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}