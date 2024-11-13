// JavaScript function to handle redirect when audio finishes
function handleAudioEnd() {
  window.location.href = "main.html"; // Change this to your desired URL
}

// Get the audio element by its ID
const audio = document.getElementById("myAudio");

// Add event listener for the 'ended' event to trigger the redirect
audio.addEventListener("ended", handleAudioEnd);
