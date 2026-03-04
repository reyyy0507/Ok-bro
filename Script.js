// ⭐ stars
const createStar = () => {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animationDuration = (3 + Math.random() * 5) + "s";

  star.addEventListener("click", () => {
    star.style.transform = "scale(2)";
    star.style.opacity = "0";
    setTimeout(() => star.remove(), 300);
  });

  document.body.appendChild(star);
  setTimeout(() => star.remove(), 8000);
};

setInterval(createStar, 300);

// ⌨️ typing effect
const text = "Hi jay,my love";
let index = 0;
const typingElement = document.getElementById("typing");

function typeText() {
  if (typingElement && index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 120);
  }
}
typeText();

// 💬 reveal message
function revealMessage() {
  const msg = document.getElementById("secret");
  if (msg) msg.style.display = "block";
}

// 🎮 story game
let scene = 0;

function choiceOne() {
  const text = document.getElementById("scene-text");
  const choices = document.getElementById("choices");

  text.innerText =
    "You stayed. And somehow, that meant everything.";
  choices.innerHTML = `<button onclick="nextScene()">Continue</button>`;
}

function choiceTwo() {
  const text = document.getElementById("scene-text");
  const choices = document.getElementById("choices");

  text.innerText =
    "You tried to leave… but this story wasn’t done with you yet.";
  choices.innerHTML = `<button onclick="nextScene()">Continue</button>`;
}

function nextScene() {
  document.getElementById("scene-text").innerText =
    "Thank you for being here. This was made with love.";
  document.getElementById("choices").style.display = "none";
}// 📖 page 2 story interaction
let part = 0;

const storyParts = [
  "You have no idea how much you mean to me. You've brought so much joy, love, and happiness into my life, and I am so thankful for you.",

  "You are my everything, my reason for waking up in the morning, and the person I want to spend the rest of my life with.",

  "I promise to always love you, to always support you, and to always be there for you, no matter what.",

  "You are my heart, my soul, and my forever. I love you more than you'll ever know, and I can't wait to see what the future holds for us.",

  "I really hope I'm enough for you. Sometimes I feel like I'm not, and that scares me.",

  "I’m scared you’ll find someone better. Someone who can give you everything I can’t.",

  "Is it crazy of me to feel this way? Please tell me it is. Tell me I’m more than enough. Tell me you’ll always be here."
];

function nextPart() {
  const text = document.getElementById("scene2-text");
  const choices = document.getElementById("scene2-choices");

  if (!text) return;

  if (part < storyParts.length) {
    text.innerText = storyParts[part];
    part++;
  } else {
    choices.innerHTML = `<a href="page3.html"><button>Continue</button></a>`;
  }
}
