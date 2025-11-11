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
  { question: "What US State has the most domestic violence cases?", answer: "Oklahoma has the highest lifetime rate of domestic violence victimization for both women (49.1\%) and men (40.7\%)." },
  { question: "How many children are affected by domestic violence?", answer: "Anywhere between 3 and 10 million children are exposed to domestic violence in the United States every year." },
  { question: "Do most domestic violence incidents get reported to the police?", answer: "No, the majority of domestic violence incidents go unreported to the police." }  
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