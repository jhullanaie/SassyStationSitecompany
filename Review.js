let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
 
   
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

   
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}