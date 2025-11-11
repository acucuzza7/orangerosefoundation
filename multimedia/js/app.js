// --- Toggle mobile menu ---
const toggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Optional: Close when clicking a link
navList.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    navList.classList.remove('show');
  }
});

// Flashcards
const flashcards = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" }
];

const container = document.getElementById("flashcard-container");

flashcards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${cardData.question}</div>
      <div class="card-back">${cardData.answer}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});