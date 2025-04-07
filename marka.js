document.addEventListener('DOMContentLoaded', function() {
    // Brand data with image paths
    const brands = [
        { name: "Vestel", url: "#", image: "images/vestel.png" },
        { name: "Bosch", url: "#", image: "images/bosch.png" },
        { name: "Arzum", url: "#", image: "images/Arzum.png" },
        { name: "Philips", url: "#", image: "images/philips.png" },
        { name: "Hager", url: "#", image: "images/hager.png" },
        { name: "Schneider Electric", url: "#", image: "images/schneider.png" },
        { name: "Siemens", url: "#", image: "images/siemens.png" },
        { name: "ECA", url: "#", image: "images/eca.png" },
        { name: "Öznur Kablo", url: "#", image: "images/oznurkablo.png" },
        { name: "Nexans", url: "#", image: "images/nexans.png" },
        { name: "HES Kablo", url: "#", image: "images/heskablo.png" },
        { name: "emas", url: "#", image: "images/emas.png" }
    ];
    
    const brandScrollerLogos = document.getElementById('brandScrollerLogos');
    
    // Create original logos
    brands.forEach(brand => {
        createLogoElement(brand);
    });
    
    // Clone logos for seamless infinite scroll
    const originalLogos = document.querySelectorAll('.brand-scroller-logo');
    originalLogos.forEach(logo => {
        const clonedLogo = logo.cloneNode(true);
        brandScrollerLogos.appendChild(clonedLogo);
    });
    
    // Function to create logo elements
    function createLogoElement(brand) {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'brand-scroller-logo';
        
        // Create wrapper link if URL exists
        if (brand.url) {
            const logoLink = document.createElement('a');
            logoLink.href = brand.url;
            logoLink.style.textDecoration = 'none';
            logoLink.style.display = 'flex';
            logoLink.style.flexDirection = 'column';
            logoLink.style.alignItems = 'center';
            
            logoLink.innerHTML = `
                <img src="${brand.image}" alt="${brand.name} logo">
                <span>${brand.name}</span>
            `;
            
            logoDiv.appendChild(logoLink);
        } else {
            logoDiv.innerHTML = `
                <img src="${brand.image}" alt="${brand.name} logo">
                <span>${brand.name}</span>
            `;
        }
        
        brandScrollerLogos.appendChild(logoDiv);
    }
    
    // Control functionality
    let isPlaying = true;
    let currentDirection = 'left';
    let currentSpeed = 30;
    
    const pauseBtn = document.getElementById('pauseBtn');
    const reverseBtn = document.getElementById('reverseBtn');
    const speedBtn = document.getElementById('speedBtn');
    
    // Pause/play button
    pauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            brandScrollerLogos.style.animationPlayState = 'paused';
            pauseBtn.textContent = '▶️';
        } else {
            brandScrollerLogos.style.animationPlayState = 'running';
            pauseBtn.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    });
    
    // Direction change button
    reverseBtn.addEventListener('click', function() {
        if (currentDirection === 'left') {
            brandScrollerLogos.classList.remove('scroll-left');
            brandScrollerLogos.classList.add('scroll-right');
            currentDirection = 'right';
        } else {
            brandScrollerLogos.classList.remove('scroll-right');
            brandScrollerLogos.classList.add('scroll-left');
            currentDirection = 'left';
        }
    });
    
    // Speed change button
    speedBtn.addEventListener('click', function() {
        if (currentSpeed === 30) {
            currentSpeed = 15;
            speedBtn.textContent = '🚀';
        } else if (currentSpeed === 15) {
            currentSpeed = 45;
            speedBtn.textContent = '🐢';
        } else {
            currentSpeed = 30;
            speedBtn.textContent = '⚡';
        }
        
        // Update animation speed
        document.documentElement.style.setProperty(
            '--animation-duration', 
            `${currentSpeed}s`
        );
        
        // Restart animation with new duration
        brandScrollerLogos.style.animation = 'none';
        setTimeout(() => {
            if (currentDirection === 'left') {
                brandScrollerLogos.style.animation = `brandScrollerSlideLeft ${currentSpeed}s linear infinite`;
            } else {
                brandScrollerLogos.style.animation = `brandScrollerSlideRight ${currentSpeed}s linear infinite`;
            }
        }, 10);
    });
    
    // Initialize with default speed
    document.documentElement.style.setProperty('--animation-duration', `${currentSpeed}s`);
});