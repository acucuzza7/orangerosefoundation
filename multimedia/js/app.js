document.addEventListener("DOMContentLoaded", function () {
  const logoImg = document.getElementById("nav-logo-img");

  // Define your logo image paths
  const desktopLogo = "https://img1.wsimg.com/isteam/ip/163be76b-063f-4dc3-89dc-56d7cddae036/Logo%20website.png";
  const mobileLogo = "multimedia/images/orange_rose.png";

  function updateLogo() {
    if (window.innerWidth <= 768) {
      // Mobile
      logoImg.src = mobileLogo;
      logoImg.style.display = "block";
    } else {
      // Desktop
      logoImg.src = desktopLogo;
      logoImg.style.display = "block";
    }
  }

  // Run on page load
  updateLogo();

  // Update on resize
  window.addEventListener("resize", updateLogo);
});






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