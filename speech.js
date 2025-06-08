const synth = window.speechSynthesis;

const textToSpeech = (string) => {
    let voice = new SpeechSynthesisUtterance(string);
    voice.text = string;
    voice.lang = "en";
    voice.volume = 1;
    voice.rate = 1;
    voice.pitch = 1;
    synth.speak(voice);
}