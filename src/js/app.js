import {speak, main } from "./SpeechRecognition.js";
import {getImagesVoitures, getImagesAnimaux} from "./images.js";

console.log("loading app.js");


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
  console.log("speechSynthesis supported");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis supported";
  
  main();

 //  A REFACTO POUR FAIRE PROPRE
  let result = document.getElementById("result");

  let modeTitle = document.getElementById("currentMode");
  let mode = "learn"; // default setting
  
  let playButton = document.getElementById("play")
  let modeButton = document.getElementById("modeButton");
  modeButton.addEventListener("click", function (e) {
    if (mode == "learn") {
      mode = "play";
      modeTitle.innerHTML = "Play";
      modeButton.innerHTML = "click to Learn";
      // activate play button 
      playButton.removeAttribute("disabled")
    } else {
      mode = "learn";
      modeTitle.innerHTML = "Learn";
      modeButton.innerHTML = "click to Play";
      playButton.setAttribute("disabled", "");
      cleanResult()
    }
  });


  playButton.addEventListner("click", function(e) {
       
  })

  // introduire une streak une fois que ca fonctionnera 
  let divImages =  document.getElementById('reco');
  let images = getImagesVoitures();
  let score = document.getElementById("score")
  images.forEach(image => {
    divImages.appendChild(image);

    image.addEventListener("click", function (e) {
      console.log("img clicked")
      if (mode == "learn") {
        speak(image.alt);
      } else {
        // handle game here 
        // choisir un nombre en fonction de la taile du nombre de fils 
         
        // dire le nom de l alt par la voix
        speak(image.alt)

        // attendre la reponse de l utilisateur
        // si c est bon dire bravo et ajouter un point

      }

    });
  });

  //
} else {
  alert("speechSynthesis not supported, try another browser");
  document.getElementById("isSupported").innerHTML =
    "speechSynthesis not supported";
}
