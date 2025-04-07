 // Filter functionality
 document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter products
            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Reset animation
            const marquee = document.querySelector('.marquee');
            marquee.style.animation = 'none';
            setTimeout(() => {
                marquee.style.animation = 'marquee 30s linear infinite';
            }, 10);
        });
    });
    
    // Manual scrolling functionality
    const marquee = document.querySelector('.marquee');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    marquee.addEventListener('mousedown', (e) => {
        isDown = true;
        marquee.style.animationPlayState = 'paused';
        marquee.style.cursor = 'grabbing';
        startX = e.pageX - marquee.offsetLeft;
        scrollLeft = marquee.scrollLeft;
    });
    
    marquee.addEventListener('mouseleave', () => {
        isDown = false;
        marquee.style.cursor = 'grab';
        marquee.style.animationPlayState = 'running';
    });
    
    marquee.addEventListener('mouseup', () => {
        isDown = false;
        marquee.style.cursor = 'grab';
        marquee.style.animationPlayState = 'running';
    });
    
    marquee.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - marquee.offsetLeft;
        const walk = (x - startX) * 2;
        marquee.style.transform = `translateX(${walk}px)`;
    });
    
    // Touch events for mobile
    marquee.addEventListener('touchstart', (e) => {
        isDown = true;
        marquee.style.animationPlayState = 'paused';
        startX = e.touches[0].pageX - marquee.offsetLeft;
        scrollLeft = marquee.scrollLeft;
    });
    
    marquee.addEventListener('touchend', () => {
        isDown = false;
        marquee.style.animationPlayState = 'running';
    });
    
    marquee.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - marquee.offsetLeft;
        const walk = (x - startX) * 2;
        marquee.style.transform = `translateX(${walk}px)`;
    });
});