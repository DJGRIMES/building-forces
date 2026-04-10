// Basic JavaScript for Tom's Handyman Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (if needed)
    const nav = document.querySelector('nav ul');
    
    // Form submission handling
    const contactForm = document.querySelector('.quote-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});