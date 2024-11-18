"use strict";

// funktion til at omdirigering, når lyden er færdig
function handleAudioEnd() {
  window.location.href = "main.html"; // < efter lyden er færdig bliver man sendt til
}

const audio = document.getElementById("myAudio");

audio.addEventListener("ended", handleAudioEnd);
