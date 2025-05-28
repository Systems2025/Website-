document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open before scrolling
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }

                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('header').offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });

                // Optional: Update active class on nav links (basic version)
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Sticky header (change background on scroll)
    const header = document.getElementById('header');
    const scrollThreshold = 50; // Pixels to scroll before changing header

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollThreshold) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Slightly transparent white
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.backgroundColor = '#fff'; // Original background
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }

        // Active link highlighting on scroll (more advanced - optional)
        let currentSection = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight - 50; // Add some offset
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });


    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (mobileMenuToggle && navbar) {
        mobileMenuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            // Change icon
            if (navbar.classList.contains('active')) {
                mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Close icon
            } else {
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
            }
        });
    }

    // Contact Form (Basic - just prevents default and logs for now)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically use Fetch API or XMLHttpRequest to send data
            // to a backend server or a service like Formspree.
            console.log('Form submitted!');
            alert('Thank you for your message! (This is a demo - form not connected)');
            contactForm.reset(); // Clear the form
        });
    }

    // Add more JS here for carousels (e.g., using Swiper.js), animations (e.g., AOS.js), etc.

});