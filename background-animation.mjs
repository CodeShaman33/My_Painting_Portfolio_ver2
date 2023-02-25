const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const runes = [
  "ᚠ",
  "ᚢ",
  "ᚦ",
  "ᚨ",
  "ᚱ",
  "ᚲ",
  "ᚷ",
  "ᚹ",
  "ᚺ",
  "ᚾ",
  "ᛁ",
  "ᛃ",
  "ᛇ",
  "ᛈ",
  "ᛉ",
  "ᛊ",
  "ᛏ",
  "ᛒ",
  "ᛖ",
  "ᛗ",
  "ᛚ",
  "ᛜ",
  "ᛟ",
  "ᛞ",
];

class Rune {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.fontSize = Math.random() * 50 + 10;
    this.runeIndex = Math.floor(Math.random() * runes.length);
    //run funtion 
  }

  draw() {
    ctx.font = `${this.fontSize}px sans-serif`;
    ctx.fillStyle = "#425570";
    ctx.fillText(runes[this.runeIndex], this.x, this.y);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }
}

const runeParticles = [];

for (let i = 0; i < 1002; i++) {
  runeParticles.push(new Rune());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < runeParticles.length; i++) {
    runeParticles[i].draw();
    runeParticles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();