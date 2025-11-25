// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙'; // Moon for light mode
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️'; // Sun for dark mode
    }
});

// Form submission with alert
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your feedback! We appreciate your input.');
    feedbackForm.reset(); // Optional: Reset the form after submission
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
