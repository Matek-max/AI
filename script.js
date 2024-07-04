const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');

let skier = {
    x: 100,
    y: 200,
    width: 20,
    height: 40,
    dy: 0
};

let isJumping = false;
let distance = 0;
let animationFrame;

function drawSkier() {
    ctx.fillStyle = 'red';
    ctx.fillRect(skier.x, skier.y, skier.width, skier.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateGame() {
    clearCanvas();
    drawSkier();

    if (isJumping) {
        skier.dy += 0.5; // Gravity effect
        skier.y += skier.dy;

        if (skier.y > 200) {
            skier.y = 200;
            skier.dy = 0;
            isJumping = false;
            distance += Math.round(Math.random() * 100 + 50);
            scoreDisplay.textContent = `Odległość: ${distance} m`;
        }
    }

    animationFrame = requestAnimationFrame(updateGame);
}

function startGame() {
    skier.y = 200;
    skier.dy = -10; // Initial jump force
    isJumping = true;
    distance = 0;
    scoreDisplay.textContent = 'Odległość: 0 m';
    updateGame();
}

startButton.addEventListener('click', startGame);
