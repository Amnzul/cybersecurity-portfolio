// Matrix Rain Animation
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

// Set canvas to fullscreen
function resizeMatrixCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeMatrixCanvas();
window.addEventListener('resize', resizeMatrixCanvas);

const letters = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤャユュヨョラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 20;
const columns = () => Math.floor(canvas.width / fontSize);
let drops = [];

function resetDrops() {
  drops = [];
  for (let x = 0; x < columns(); x++) {
    drops[x] = Math.random() * canvas.height / fontSize;
  }
}
resetDrops();
window.addEventListener('resize', resetDrops);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px Consolas, monospace";
  ctx.fillStyle = "#00ff41";
  for (let i = 0; i < columns(); i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);
