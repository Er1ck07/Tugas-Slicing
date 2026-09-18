const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Toggle mobile navbar view
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Auto-close menu when clicking a link on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});