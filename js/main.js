// JavaScript functionality for the Sung Jinwoo website

document.addEventListener('DOMContentLoaded', function() {
    // Play the intro once on page load, with a button to dismiss it immediately.
    const introScreen = document.getElementById('intro-screen');
    const introSkip = document.getElementById('intro-skip');
    if (introScreen) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dismissIntro = function() {
            if (introScreen.classList.contains('is-leaving')) {
                return;
            }
            introScreen.classList.add('is-leaving');
            window.setTimeout(function() {
                introScreen.remove();
            }, 850);
        };

        if (introSkip) {
            introSkip.addEventListener('click', dismissIntro);
        }
        window.setTimeout(dismissIntro, prefersReducedMotion ? 3200 : 5800);
    }

    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }
});