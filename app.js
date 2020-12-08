const holographicElement = document.getElementById("holographic");

function updateHolographicBackground(value) {
  const percentage = value * 100;
  holographicElement.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
  const x = event.clientX;
  const width = document.documentElement.clientWidth;
  const value = x / width;
  updateHolographicBackground(value);
}
