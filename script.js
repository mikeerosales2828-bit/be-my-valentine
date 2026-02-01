const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const messages = [
  "Are you sure? 😳",
  "Think again 🥺",
  "I put effort into this 😭",
  "Ok but like… really?",
  "Last chance 💔"
];

let i = 0;

noBtn.addEventListener("click", () => {
  noBtn.textContent = messages[i++ % messages.length];
  yesBtn.style.transform = `scale(${1 + i * 0.1})`;
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});
