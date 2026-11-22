const container = document.getElementById("balloon-container");
const colors = ["#ff6b6b", "#38bdf8", "#a78bfa", "#34d399", "#fbbf24", "#fb7185", "#22d3ee", "#c084fc"];

function createBalloon() {
  const balloon = document.createElement("div");
  const color = colors[Math.floor(Math.random() * colors.length)];
  balloon.className = "balloon";
  balloon.style.backgroundColor = color;
  balloon.style.left = Math.random() * 90 + "%";
  container.appendChild(balloon);

  balloon.addEventListener("click", () => {
    if (balloon.classList.contains("pop")) return;
    const rect = balloon.getBoundingClientRect();
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement("div");
      const angle = (i / 12) * 2 * Math.PI;
      const distance = 40 + Math.random() * 40;
      particle.className = "particle";
      particle.style.cssText = `left:${rect.left + rect.width / 2}px;top:${rect.top + rect.height / 2}px;background:${color};--x:${Math.cos(angle) * distance}px;--y:${Math.sin(angle) * distance}px`;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 500);
    }
    balloon.classList.add("pop");
  });

  balloon.addEventListener("animationend", event => {
    if (event.animationName === "fly" || event.animationName === "pop") balloon.remove();
  });
}

setInterval(createBalloon, 800);
