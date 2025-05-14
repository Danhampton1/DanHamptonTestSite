const facts = [
  "This is my first attempt at coding",
  "I used AI to help me learn cus idk how to do it",
  "Labradors are the best dogs",
  "i've ran out of things to show up when you push the button",
];

document.getElementById("factBtn").addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factBox").textContent = randomFact;
});