import { main, speak } from "./SpeechRecognition.js";
import { getImagesVoitures, getImagesAnimaux } from "./images.js";

const s = (e) => {
  speak(e.target.alt);
};

const loadImages = (category) => {
  let currentMode = document.getElementById("currentMode").innerHTML;

  let divImages = document.getElementById("reco");
  divImages.innerHTML = "";
  const shuffledImages = category.sort((a, b) => 0.5 - Math.random());
  shuffledImages.forEach((image) => {
    image.classList.add("grid-item");
    divImages.appendChild(image);

    image.addEventListener("click", s);
  });
};

const targetCard = (images) => {
  let randomImage = images[Math.floor(Math.random() * images.length)];

  speak(randomImage.alt);

  // regard si le prochain click est sur la bonne carte puis on enlève l'event listener
  let clickListener = function (e) {
    if (e.target === randomImage) {
      speak("Bravo");
      for (let image of images) {
        image.removeEventListener("click", clickListener);
      }
    } else {
      speak("Essaie encore");
    }
  };

  for (let image of images) {
    image.addEventListener("click", clickListener);
  }
};

// first check if the browser supports the speechSynthesis API
if ("speechSynthesis" in window) {
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis supported";

  main();

  const buttonAnimaux = document.getElementById("animaux");
  const buttonAuto = document.getElementById("auto");

  buttonAnimaux.addEventListener("click", function (e) {
    loadImages(getImagesAnimaux());
  });

  buttonAuto.addEventListener("click", function (e) {
    loadImages(getImagesVoitures());
  });

  let modeStates = ["Learn", "Play"];
  let mode = document.getElementById("currentMode");

  let switchModeBtn = document.getElementById("modeButton");
  let playBtn = document.getElementById("play");
  switchModeBtn.addEventListener("click", function (e) {
    console.log("switch mode");
    let images = document.getElementById("reco").children;
    // if there is no image, we generate animals images
    if (images.length === 0) {
      loadImages(getImagesAnimaux());
      images = document.getElementById("reco").children;
    }

    if (mode.innerHTML === modeStates[0]) {
      mode.innerHTML = modeStates[1];
      playBtn.removeAttribute("hidden");
      for (let image of images) {
        image.removeEventListener("click", s);
      }
    } else {
      mode.innerHTML = modeStates[0];
      playBtn.setAttribute("hidden", true);
      for (let image of images) {
        image.addEventListener("click", s);
      }
    }
  });

  playBtn.addEventListener("click", function (e) {
    let currentMode = document.getElementById("currentMode").innerHTML;
    if (currentMode === modeStates[1]) {
      let images = document.getElementById("reco").children;

      // if there is no image, we generate animals images
      if (images.length === 0) {
        loadImages(getImagesAnimaux());
        images = document.getElementById("reco").children;
      }

      targetCard(images);
    }
  });
} else {
  alert("speechSynthesis not supported, try another browser");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis not supported";
}
