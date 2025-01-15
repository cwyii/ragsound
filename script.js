function playSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.currentTime = 0; // Reset the sound to the beginning
  sound.play(); // Play the sound
}
// Global variable to track the currently playing sound
let currentSound = null; 

// Function to play sound and stop any currently playing sound
function playSound(soundId) {
  // Stop the currently playing sound (if any)
  if (currentSound && !currentSound.paused) {
    currentSound.pause();
    currentSound.currentTime = 0; // Reset the sound
  }

  // Play the new sound
  currentSound = document.getElementById(soundId);
  currentSound.play();
}