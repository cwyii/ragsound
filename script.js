function playSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.currentTime = 0; // Reset the sound to the beginning
  sound.play(); // Play the sound
}
