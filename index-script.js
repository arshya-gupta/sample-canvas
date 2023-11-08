const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();

// Load your image
img.src = "ues.png"; // Replace with the path to your image

let isHovered = false;

// Define the image's initial position and scale
let imageX = -15;
let imageY = 3;
let imageScale = 1;

img.onload = function() {
    // Function to draw the image with scaling
    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
            img,
            imageX,
            imageY,
            canvas.width * imageScale,
            canvas.height * imageScale
        );
    }

    // Initial draw
    drawImage();

    // Handle hover events
    canvas.addEventListener("mouseover", function() {
        isHovered = true;
        imageScale = 1.02; // Adjust the scale factor as desired
        drawImage();
    });

    canvas.addEventListener("mouseout", function() {
        isHovered = false;
        imageScale = 1;
        drawImage();
    });

    // Continuously update the canvas
    function animate() {
        if (isHovered) {
            imageScale = 1.02; // Adjust the scale factor as desired
        } else {
            imageScale = 1;
        }
        drawImage();
        requestAnimationFrame(animate);
    }

    animate();
};


