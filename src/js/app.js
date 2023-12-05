import {speak, main } from "./SpeechRecognition.js";
import {getImagesVoitures, getImagesAnimaux} from "./images.js";

console.log("loading app.js");



// first check if the browser supports the speechSynthesis API
if ("speechSynthesis" in window) {
  console.log("speechSynthesis supported");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis supported";
  
  main();
  
  let divImages =  document.getElementById('reco');
  let images = getImagesVoitures();
  images.forEach(image => {
    image.classList.add("grid-item");
    divImages.appendChild(image);

    image.addEventListener("click", function (e) {
      console.log("img clicked")
      speak(image.alt);
    });
  });

  //
} else {
  alert("speechSynthesis not supported, try another browser");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis not supported";
}
