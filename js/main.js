// ============================================
// ESTOESCLARITO — MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initSmoothScroll();
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Animate work items
    document.querySelectorAll('.work-item').forEach(item => {
        observer.observe(item);
    });

    // Animate testimonials
    document.querySelectorAll('.testimonial').forEach(testimonial => {
        observer.observe(testimonial);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just '#'
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// UTILITIES
// ============================================

// Add active state to nav links based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === '/')) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();
