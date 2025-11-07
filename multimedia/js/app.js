






// --- Toggle mobile menu ---
const toggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Optional: Close when clicking a link (for smoother UX)
navList.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    navList.classList.remove('show');
  }
});