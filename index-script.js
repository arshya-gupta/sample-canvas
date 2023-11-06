window.onload = function() {
  // Get the canvas element and its 2D rendering context
  const canvas = document.getElementById("mapCanvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("Canvas not supported in this browser.");
    return;
  }

  // Set specific coordinates for the square
  const squareX = 80; // X-coordinate
  const squareY = 40; // Y-coordinate
  let squareSize = 5;
  let isHovered = false;

  // Function to draw the square
  function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(squareX, squareY, squareSize*2, squareSize);
  }

  // Function to handle hover event
  canvas.addEventListener("mouseover", () => {
    isHovered = true;
    squareSize = 10; // Increase the square size on hover
    drawSquare();
  });

  canvas.addEventListener("mouseout", () => {
    isHovered = false;
    squareSize = 5; // Restore the original square size on hover out
    drawSquare();
  });

  // Initial draw
  drawSquare();
};
