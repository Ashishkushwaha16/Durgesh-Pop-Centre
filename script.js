// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar')) {
        navLinks.classList.remove('active');
      }
    });
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Close mobile menu if open
          navLinks.classList.remove('active');
          
          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // In a real project, you would send this data to a server
        console.log('Form Submission:', { name, email, phone, message });
        
        // Show a success message (you could make this more sophisticated)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
      });
    }
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.service-card, .gallery-item, .testimonial-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-in');
        }
      });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check again on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Gallery item hover effect enhancement
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.classList.add('active');
      });
      
      item.addEventListener('mouseleave', function() {
        this.classList.remove('active');
      });
    });
  });