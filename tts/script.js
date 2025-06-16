const input = document.getElementById('input');
const btn = document.getElementById('btn');

const textToSpeech = ()=> {
    let text = input.value;
    const voice = new speechSynthesisUtterance(text);
    window.SpeechSynthesis.speak(voice);
}

btn.addEventListener('click', textToSpeech);