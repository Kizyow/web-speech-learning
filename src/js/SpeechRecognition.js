export const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    const voiceSelect = document.getElementById("voice");

    msg.text = text;
    msg.volume = 1.0;
    msg.rate = 1.0;
    msg.pitch = 1.0;

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
