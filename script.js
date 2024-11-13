// script.js
const canvas = document.getElementById('legoCanvas');
const ctx = canvas.getContext('2d');

let motorRunning = false;
let angle = 1;

// Load the gear image
const gearImage = new Image();
gearImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxUpGvnv-hkzS-sjl6OOVuUVpRlWQ4F6ulA&s'; // Path to your gear image

// Function to draw a gear
function drawGear(x, y, radius, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    // Draw the gear image
    ctx.drawImage(gearImage, -radius, -radius, radius * 2, radius * 2);
    ctx.restore();
}

// Function to update the canvas
function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mainGearRadius = 50; // Radius of the main gear
    const drivenGearRadius = 35; // Radius of the driven gear

    // Draw main gear at the center
    drawGear(400, 300, mainGearRadius, angle); // Main gear

    // Calculate the position of the driven gear
    const drivenGearX = 400 + mainGearRadius + drivenGearRadius; // Position it to the right
    const drivenGearY = 300; // Same vertical position

    // Draw driven gear
    drawGear(drivenGearX, drivenGearY, drivenGearRadius, angle * 2); // Driven gear

    if (motorRunning) {
        angle += 0.05; // Increase angle to simulate rotation
    }
    requestAnimationFrame(updateCanvas);
}

// Event listeners for buttons
document.getElementById('startMotor').addEventListener('click', () => {
    motorRunning = true;
});

document.getElementById('stopMotor').addEventListener('click', () => {
    motorRunning = false;
});

// Start the animation after the image is loaded
gearImage.onload = () => {
    updateCanvas();
};