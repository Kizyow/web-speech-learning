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
  class SpeechRecognition {
    constructor(text) {
      let utterrance = new SpeechSynthesisUtterance(text);
    }

    speak = function () {
      window.speechSynthesis.speak(utterrance);
    };

    setText = function (text) {
      utterrance.text = text;
    };

    setLanguage = function (language) {
      utterrance.lang = language;
    };

    setVolume = function (volume) {
      uttrance.volume = volume;
    };

    setRate = function (rate) {
      utterrance.rate = rate;
    };

    setPitch = function (pitch) {
      utterrance.pitch = pitch;
    };

    getVoices = function () {
      function loadVoices() {
        // parcourir la liste des voix.
        voices.forEach(function (voice, i) {
          var option = document.createElement("option");
          option.value = voice.name;
          option.innerHTML = voice.name;
          // Add the option to the voice selector.
          voiceSelect.appendChild(option);
        });
      }
    };

    main = function () {
      // elements
      var button = document.getElementById("speak");
      var speechMsgInput = document.getElementById("speech-msg");
      var voiceSelect = document.getElementById("voice");
      // Get the attribute controls.
      var volumeInput = document.getElementById("volume");
      var rateInput = document.getElementById("rate");
      var pitchInput = document.getElementById("pitch");
      
    };
  }
};
