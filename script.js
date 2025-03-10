// Simple form submission alert (for demonstration)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Add animation on scroll
const elements = document.querySelectorAll('.fade-in, .slide-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

elements.forEach(element => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
});
