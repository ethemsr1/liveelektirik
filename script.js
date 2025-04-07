  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.getElementById('menu');
  
  menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          
          window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
          });
          
          if (menu.classList.contains('active')) {
              menu.classList.remove('active');
          }
      });
  });
  
  // Testimonial Slider
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialNavButtons = document.querySelectorAll('.testimonial-nav button');
  
  testimonialNavButtons.forEach(button => {
      button.addEventListener('click', () => {
          const index = button.getAttribute('data-index');
          
          testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
          
          testimonialNavButtons.forEach(btn => {
              btn.classList.remove('active');
          });
          
          button.classList.add('active');
      });
  });
  
  // Fade in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkFade() {
      fadeElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight - 100) {
              element.classList.add('active');
          }
      });
  }
  
  // Initial check
  checkFade();
  
  // Check on scroll
  window.addEventListener('scroll', checkFade);
  
  // Form Submission
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would normally add AJAX code to submit the form
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
  });