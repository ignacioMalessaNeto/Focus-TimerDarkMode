export default function() {
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

let cafeteria = new Audio("./audios/Cafeteria.wav")

let rain = new Audio("./audios/Chuva.wav")

let florest = new Audio("./audios/Floresta.wav")

let fireplace = new Audio("./audios/Lareira.wav")

cafeteria.loop = true;

rain.loop = true;

florest.loop = true;

fireplace.loop = true;

buttonPressAudio.volume = 0.5

function buttonAudio(){
    buttonPressAudio.play()
}

function stopSound() {
    cafeteria.pause(),
    rain.pause(),
    florest.pause(),
    fireplace.pause()
}

return{
    cafeteria,
    rain,
    florest,
    fireplace,
    buttonAudio,
    stopSound,
}
}