document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // // Opretter et objekt for at kortlægge sygdomsnavne til deres lydfiler
  const audioFiles = {
    pest: "audio/voicebooking-speech.mp3",
    kopper: "audio/voicebooking-speech (1).mp3",
    tuberkulose: "audio/voicebooking-speech (2).mp3",
    polio: "audio/voicebooking-speech (3).mp3",
    AIDS: "audio/voicebooking-speech (4).mp3",
    ebola: "audio/voicebooking-speech (5).mp3",
  };

  // Vælg alle links (sygdomsikoner)
  const links = document.querySelectorAll("#epidemier a");

  // Hent lydafspillerelementet
  const audioPlayer = document.getElementById("audioPlayer");

  const playedDiseases = new Set();

  // Tilføjer klikbegivenhedslytter til hvert link
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Forhindre standardlinkadfærden

      // Få sygdomsnavnet fra attributten 'data-disease'
      const disease = this.getAttribute("data-disease");

      // Tjek om sygdommen har en lydfil
      if (audioFiles[disease]) {
        // Hvis lyden allerede afspilles, skal du stoppe den først
        if (!audioPlayer.paused) {
          audioPlayer.pause(); // Stop den aktuelle lyd
          audioPlayer.currentTime = 0; // Reset audio til start
        }

        // Indstil lydkilden til den korrekte fil
        audioPlayer.src = audioFiles[disease];

        // Afspil lyden
        audioPlayer.play().catch((error) => {
          console.error("Error playing audio:", error);
        });

        // Marker denne sygdom som spillet
        playedDiseases.add(disease);

        // Tjek om alle 6 sygdomme er blevet spillet
        if (playedDiseases.size === Object.keys(audioFiles).length) {
          // Omdiriger til 'færdig.html' siden, når alle lydfiler er blevet afspillet
          setTimeout(() => {
            window.location.href = "færdig.html";
          }, 33000); // Forsink omdirigeringen med 1 sekund for at lade den sidste lyd afslutte afspilningen
        }
      } else {
        console.error("Audio file not found for this disease:", disease);
      }
    });
  });
});
