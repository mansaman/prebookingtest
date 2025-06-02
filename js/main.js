// Custom JavaScript for Bites POS

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive components
    initNavbarScrollEffect();
    initFormValidation();
    
    console.log('Bites POS JavaScript initialized');
});

// Navbar background effect on scroll
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        // Add shadow based on initial scroll position
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-sm');
        }
        
        // Add/remove shadow on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }
}

// // Basic form validation (additional to Bootstrap's native validation)
// function initFormValidation() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(event) {
//             if (!contactForm.checkValidity()) {
//                 // event.preventDefault();
//                 event.stopPropagation();
//             } else {
//                 // If the form is valid, we'd typically submit to a server
//                 // For demo purposes, let's just show a success message
//                 // event.preventDefault();
//                 showFormSuccess(contactForm);
//             }
            
//             contactForm.classList.add('was-validated');
//         });
//     }
// }

// Show form success message
function showFormSuccess(form) {
    // Create success alert
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-4';
    successDiv.role = 'alert';
    successDiv.innerHTML = `
        <h4 class="alert-heading">Message Sent!</h4>
        <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
    `;
    
    // Clear the form and append success message
    form.innerHTML = '';
    form.appendChild(successDiv);
    
    // Scroll to the success message
    successDiv.scrollIntoView({ behavior: 'smooth' });
}

// Animate elements when they come into view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});







 // Countdown timer (7 days from now)
 function updateCountdown() {
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(now.getDate() + 7);
    
    const diff = endDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 60000);
  
  // Form validation
  (function() {
    'use strict';
    const form = document.getElementById('prebookForm');
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  })();





  
  // Micro-interactions
  document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentNode.querySelector('.underline').style.width = '100%';
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentNode.querySelector('.underline').style.width = '0';
      }
    });
  });
  
  // Animate benefit items on scroll
  const benefitItems = document.querySelectorAll('.benefit-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.1 });
  
  benefitItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(20px)';
    item.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
    observer.observe(item);
  });
