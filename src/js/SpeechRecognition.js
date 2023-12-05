export const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    const voiceSelect = document.getElementById("voice");

    // Get the attribute controls.
    let volumeInput = document.getElementById('volume');
    let rateInput = document.getElementById('rate');
    let pitchInput = document.getElementById('pitch');
    msg.text = text;
    msg.volume = parseFloat(volumeInput.value);
    msg.rate = parseFloat(rateInput.value);
    msg.pitch = parseFloat(pitchInput.value);

    if (voiceSelect.value) {
        msg.voice = speechSynthesis.getVoices().filter(function (voice) {
            return voice.name === voiceSelect.value;
        })[0];
    }

    window.speechSynthesis.speak(msg);
}

export const loadVoices = () => {
    const voiceSelector = document.getElementById("voice");

    const voices = window.speechSynthesis.getVoices();
    voices.forEach(function (voice, i) {
        const option = document.createElement("option");
        option.value = voice.name;
        option.innerHTML = voice.name;
        voiceSelector.appendChild(option);
    });
}

export function main() {

    loadVoices();

   
    window.speechSynthesis.onvoiceschanged = function (e) {
        loadVoices();
    };

}