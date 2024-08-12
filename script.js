const list2 = [
  '"Begum sahiba 🖤..."',
  '"Humourrrrrrr 🤥"',
  '"I love you so much muffinnn"',
  '"I Love you so much humairaaaa ❤️"',
  `"Hehe"`,
  '"I just wanna see you happy"',
  '"I wish you were here by my side"',
  '"I love you soo muchhhhhhhh',
];

let currentIndex = 0;
const changeInterval = 4000;

function getNextReason() {
  const reason = list2[currentIndex];
  currentIndex = (currentIndex + 1) % list2.length;
  return reason;
}

function showLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");
  setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
          loadingScreen.style.display = "none";
          showContent();
      }, 1000);
  }, 2000);
}

function showContent() {
  const reasonElement = document.getElementById("listH");
  const heartElement = document.getElementById("heart");

  setTimeout(() => {
      reasonElement.style.display = "block";
      heartElement.style.display = "block";

      reasonElement.style.opacity = "0";
      heartElement.style.opacity = "0";

      reasonElement.innerText = getNextReason();

      setTimeout(() => {
          reasonElement.style.transition = "opacity 1s ease";
          reasonElement.style.opacity = "1";
      }, 100);

      setTimeout(() => {
          heartElement.style.transition = "opacity 1s ease";
          heartElement.style.opacity = "1";
      }, 500);

      setInterval(() => {
          reasonElement.innerText = getNextReason();
      }, changeInterval);
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  showLoadingScreen();
});

function createFallingHeart(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.getElementById("heart-container").appendChild(heart);

  const size = Math.random() * 20 + 30;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  heart.addEventListener('animationend', () => {
      heart.remove();
  });
}

document.addEventListener("mousemove", (event) => {
  createFallingHeart(event.clientX, event.clientY);
});
