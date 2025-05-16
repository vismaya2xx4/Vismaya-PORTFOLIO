// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(element => {
    observer.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Hover effect for project items
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.project-image img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.project-image img').style.transform = 'scale(1)';
    });
});

// Certificate slider navigation
const certSlider = document.querySelector('.certification-slider');
if (certSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    certSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - certSlider.offsetLeft;
        scrollLeft = certSlider.scrollLeft;
    });
    
    certSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    certSlider.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    certSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - certSlider.offsetLeft;
        const walk = (x - startX) * 2;
        certSlider.scrollLeft = scrollLeft - walk;
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load 