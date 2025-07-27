const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
const colors = ["#ffffff", "#ffcce6", "#ffd9ec"];

for (let i = 0; i < 100; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    radius: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 2 + 1,
    swing: Math.random() * 2,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let c of confetti) {
    ctx.beginPath();
    ctx.arc(c.x + Math.sin(c.y * 0.01) * c.swing, c.y, c.radius, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();

    c.y += c.speed;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawConfetti);
}

drawConfetti();


// Mostrar texto con efecto de máquina de escribir
setTimeout(() => {
  document.getElementById("birthday-message").textContent = "¡Feliz cumpleaños!";
}, 4000);

// Mostrar regalo con animación de caída después del texto
setTimeout(() => {
  const giftBox = document.getElementById("gift-box");
  giftBox.style.opacity = "1";
  giftBox.style.transform = "translateY(0)";

  // Después de caer, empieza a agitarse
  setTimeout(() => {
    giftBox.style.animation = "shake 0.5s infinite alternate";
  }, 1000);
}, 7500); // Tiempo total después del inicio

// Mostrar carta al hacer clic
const giftBox = document.getElementById("gift-box");
const letterPopup = document.getElementById("letter-popup");
const closeLetter = document.getElementById("close-letter");

giftBox.addEventListener("click", () => {
  letterPopup.style.display = "flex";
});

closeLetter.addEventListener("click", () => {
  letterPopup.style.display = "none";
});
