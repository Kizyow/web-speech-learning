import {currentLang, main, speak} from "./SpeechRecognition.js";
import {getImagesVoitures, getImagesAnimaux, getImagesComposants} from "./images.js";

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
            let congrats = currentLang === "fr-FR" ? "Bravo" : "Congrats";
            speak(congrats);
            e.target.classList.add("success")
            for (let image of images) {
                image.removeEventListener("click", clickListener);
                setTimeout(() => {
                    image.classList.remove("fail", "success");
                }, 1000);
            }
        } else {
            let tryagain = currentLang === "fr-FR" ? "Essaie encore" : "Try again";
            e.target.classList.add("fail")
            speak(tryagain);
        }
    };

    for (let image of images) {
        image.addEventListener("click", clickListener);
    }
};

// first check if the browser supports the speechSynthesis API
if ("speechSynthesis" in window) {

    main();


    const buttonAnimaux = document.getElementById("animaux");
    const buttonAuto = document.getElementById("auto");
    const buttonComposants = document.getElementById("composants");
    const voiceSelect = document.getElementById("voice");

    voiceSelect.addEventListener("change", function (e) {
        let divImages = document.getElementById('reco');
        if (currentLang === "en-US" || currentLang === "en-GB") {
            divImages.innerHTML = "Choose a category";
        } else {
            divImages.innerHTML = "Choississez une catégorie";
        }
    });

    buttonAnimaux.addEventListener("click", function (e) {
        buttonAnimaux.classList.add("selected");
        buttonAuto.classList.remove("selected");
        buttonComposants.classList.remove("selected");
        loadImages(getImagesAnimaux());
    });

    buttonAuto.addEventListener("click", function (e) {
        buttonAuto.classList.add("selected");
        buttonAnimaux.classList.remove("selected");
        buttonComposants.classList.remove("selected");
        loadImages(getImagesVoitures());
    });

    buttonComposants.addEventListener("click", function (e) {
        buttonComposants.classList.add("selected");
        buttonAnimaux.classList.remove("selected");
        buttonAuto.classList.remove("selected");
        loadImages(getImagesComposants());
    });

    let modeStates = ["Apprendre le vocabulaire", "Jeu de reconnaissance"];
    let mode = document.getElementById("currentMode");

    let switchModeBtn = document.getElementById("modeButton");
    let playBtn = document.getElementById("play");
    switchModeBtn.addEventListener("click", function (e) {
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

            Array.from(images).forEach(image => {
                image.classList.remove("fail", "success")
                image.replaceWith(image.cloneNode(true));
            });

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
}
