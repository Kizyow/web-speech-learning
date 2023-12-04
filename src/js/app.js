import app from "./SpeechRecognition.js";

console.log("loading app.js");

// first check if the browser supports the speechSynthesis API
if ("speechSynthesis" in window) {
  console.log("speechSynthesis supported");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis supported";
  app();
} else {
  alert("speechSynthesis not supported, try another browser");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis not supported";
}
