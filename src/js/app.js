import SpeechRecognition from "./SpeechRecognition.js";
// first check if the browser supports the speechSynthesis API
if ("speechSynthesis" in window) {
  console.log("speechSynthesis supported");
  document.querySelector(".isSupported").innerHTML =
    "speechSynthesis supported";
  app();
} else {
  alert("speechSynthesis not supported, try another browser");
  document.querySelector(".isSupported").innerHTML =
    "speechSynthesis not supported";
}

const app = () => {
  let sr = new SpeechRecognition();
  sr.init();


};
