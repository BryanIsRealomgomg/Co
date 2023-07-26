const startButton = document.getElementById("startButton");
const instructionsDiv = document.getElementById("instructions");
const gameContainerDiv = document.getElementById("gameContainer");
const pixelManVideo = document.getElementById("pixelManVideo");

function startGame() {
    startButton.classList.add("fade-out"); // Add fade-out animation class to the button
    gameContainerDiv.style.display = "block"; // Show the game container
    gameContainerDiv.classList.add("fade-out"); // Add fade-out animation class to the game container
    pixelManVideo.style.display = "block";
    pixelManVideo.play();

    setTimeout(function() {
        pixelManVideo.classList.add("fade-out");
        redirectToWebsite();
    }, 15000);
}

function redirectToWebsite() {
    // Change the URL to the desired website
    window.location.href = "https://bryanisrealomgomg.github.io/Hiii/"; // Replace this URL with your desired website URL
}

startButton.addEventListener("click", startGame);
