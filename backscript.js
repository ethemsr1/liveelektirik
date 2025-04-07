document.addEventListener('DOMContentLoaded', function() {
    // Background slider rotation
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function rotateSlides() {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show current slide
        slides[currentSlide].classList.add('active');
    }
    
    // Start automatic rotation
    setInterval(rotateSlides, 2500); // Change slide every 5 seconds
});