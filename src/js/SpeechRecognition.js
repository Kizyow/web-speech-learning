export class SpeechRecognition {
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

  init = function () {
    // elements
    let button = document.getElementById("speak");
    let speechMsgInput = document.getElementById("speech-msg");
    let voiceSelect = document.getElementById("voice");
    // Get the attribute controls.
    let volumeInput = document.getElementById("volume");
    let rateInput = document.getElementById("rate");
    let pitchInput = document.getElementById("pitch");
    let phrase  = document.getElementById("phrase");

    // add event listeners
    button.addEventListener("click", speak);
    speechMsgInput.addEventListener("change", changeTextHandler);
    voiceSelect.addEventListener("change", changeVoiceHandler);
    volumeInput.addEventListener("change", changeVolumeHandler);
    rateInput.addEventListener("change", changeRateHandler);
    pitchInput.addEventListener("change", changePitchHandler);

    speak.addEventListener("click", speak => {
        let text = phrase.value;
        this.setText(text);
        this.speak();
    });

  };
}
