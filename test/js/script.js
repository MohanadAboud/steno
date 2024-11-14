document.addEventListener("DOMContentLoaded", function () {
  // Create an object to map disease names to their respective audio files
  const audioFiles = {
    pest: "audio/voicebooking-speech.mp3",
    kopper: "audio/voicebooking-speech (1).mp3",
    tuberkulose: "audio/voicebooking-speech (2).mp3",
    polio: "audio/voicebooking-speech (3).mp3",
    AIDS: "audio/voicebooking-speech (4).mp3",
    ebola: "audio/voicebooking-speech (5).mp3",
  };

  // Select all the links (disease icons)
  const links = document.querySelectorAll("#epidemier a");

  // Get the audio player element
  const audioPlayer = document.getElementById("audioPlayer");

  // Create a set to track played diseases
  const playedDiseases = new Set();

  // Add click event listener to each link
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior

      // Get the disease name from the 'data-disease' attribute
      const disease = this.getAttribute("data-disease");

      // Check if the disease has an audio file
      if (audioFiles[disease]) {
        // If the audio is already playing, stop it first
        if (!audioPlayer.paused) {
          audioPlayer.pause(); // Stop the current audio
          audioPlayer.currentTime = 0; // Reset the audio to the beginning
        }

        // Set the audio source to the correct file
        audioPlayer.src = audioFiles[disease];

        // Play the audio
        audioPlayer.play().catch((error) => {
          console.error("Error playing audio:", error);
        });

        // Mark this disease as played
        playedDiseases.add(disease);

        // Check if all 6 diseases have been played
        if (playedDiseases.size === Object.keys(audioFiles).length) {
          // Redirect to the 'færdig.html' page once all audios have been played
          setTimeout(() => {
            window.location.href = "færdig.html";
          }, 1000); // Delay the redirect by 1 second to allow the last audio to finish playing
        }
      } else {
        console.error("Audio file not found for this disease:", disease);
      }
    });
  });
});
