export default () => {
  var button = document.getElementById("speak");
  var speechMsgInput = document.getElementById("phrase");
  var voiceSelect = document.getElementById("voice");
  // Get the attribute controls.
  var volumeInput = document.getElementById("volume");
  var rateInput = document.getElementById("rate");
  var pitchInput = document.getElementById("pitch");

  function loadVoices() {
    console.log("loading voices");
    var voices = window.speechSynthesis.getVoices();
    // parcourir la liste des voix.
    voices.forEach(function (voice, i) {
      console.log(voice.name);
      var option = document.createElement("option");
      option.value = voice.name;
      option.innerHTML = voice.name;
      // Add the option to the voice selector.
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  window.speechSynthesis.onvoiceschanged = function (e) {
    loadVoices();
  };

  function speak(text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    // Set les attributs
    msg.volume = parseFloat(volumeInput.value);
    msg.rate = parseFloat(rateInput.value);
    msg.pitch = parseFloat(pitchInput.value);
    // Si une voix a été sélectionnée, faire les modifications nécessaires.
    if (voiceSelect.value) {
      msg.voice = speechSynthesis.getVoices().filter(function (voice) {
        return voice.name == voiceSelect.value;
      })[0];
    }
    // Ajouter ce texte (parole) à la liste de synthèse.
    window.speechSynthesis.speak(msg);
    console.log("speak: " + text);
  }

  button.addEventListener("click", function (e) {
    console.log("firing event")
    speak(speechMsgInput.value);
  });
};
