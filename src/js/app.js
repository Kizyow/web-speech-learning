import {main, speak} from "./SpeechRecognition.js";
import {getImagesVoitures, getImagesAnimaux} from "./images.js";

const  loadImages = (category) => {
    let divImages = document.getElementById('reco');
    divImages.innerHTML = "";
    const shuffledImages = category.sort((a, b) => 0.5 - Math.random());
    shuffledImages.forEach(image => {
        image.classList.add("grid-item");
        divImages.appendChild(image);

        image.addEventListener("click", function (e) {
            speak(image.alt);
        });
    });
}


const  loadImages = (category) => {
  let divImages = document.getElementById('reco');
  divImages.innerHTML = "";
  const shuffledImages = category.sort((a, b) => 0.5 - Math.random());
  shuffledImages.forEach(image => {
      image.classList.add("grid-item");
      divImages.appendChild(image);

      image.addEventListener("click", function (e) {
          speak(image.alt);
      });
  });
}

// first check if the browser supports the speechSynthesis API
if ("speechSynthesis" in window) {
    document.getElementById("isSupported").innerHTML = "speechSynthesis supported";

    main();

    const buttonAnimaux = document.getElementById("animaux");
    const buttonAuto = document.getElementById("auto");

    buttonAnimaux.addEventListener("click", function (e) {
        loadImages(getImagesAnimaux());
    });

    buttonAuto.addEventListener("click", function (e) {
        loadImages(getImagesVoitures());
    });

} else {
    alert("speechSynthesis not supported, try another browser");
    document.getElementById("isSupported").innerHTML = "speechSynthesis not supported";
}
