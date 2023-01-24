import {
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonSoundForest,
    buttonSoundCafeteria,
    buttonSoundRain,
    buttonSoundFireplace,
    buttonSoundForest2,
    buttonSoundRain2,
    buttonSoundCafeteria2,
    buttonSoundFireplace2,
    darkMode, 
    lightMode,
    darkTimer,
    buttonWhite,
    controlFlorest,
    controlRain,
    controlCafeteria,
    controlFireplace} from"./elements.js"

    var darkModeActive = false;

export default function Events({controls, timer, sound}) {
buttonPlay.addEventListener('click', function(){
    timer.countDown()
    sound.buttonAudio()
    })
    
    buttonMore.addEventListener('click', function(){
    timer.moreMinutes()
    sound.buttonAudio()
    })
    
    buttonLess.addEventListener('click', function(){
    timer.anyLessMinutes()
    sound.buttonAudio()
    })
    
    buttonStop.addEventListener('click',function() {
        controls.reset()
        timer.Stop()
        sound.buttonAudio()
        sound.stopSound()
    })
    
    
    buttonSoundForest.addEventListener('click', function(){
    controls.Florest()
    sound.buttonAudio()
    sound.florest.play()
    buttonWhite[0].classList.add('select')
    })
    
    buttonSoundForest2.addEventListener('click', function(){
    controls.FlorestBlue()
    sound.buttonAudio()
    sound.florest.pause()
    if (!darkModeActive){
        buttonWhite[0].classList.remove('select')
    }
    })
    
    buttonSoundRain.addEventListener('click', function(){
    controls.Rain()
    sound.buttonAudio()
    sound.rain.play()
    buttonWhite[1].classList.add('select')
    })
        
    buttonSoundRain2.addEventListener('click', function(){
    controls.RainBlue()
    sound.buttonAudio()
    sound.rain.pause()
    if (!darkModeActive){
        buttonWhite[1].classList.remove('select')
    }
    })
    
    buttonSoundCafeteria.addEventListener('click', function(){
    controls.Cafeteria()
    sound.buttonAudio()
    sound.cafeteria.play()
    buttonWhite[2].classList.add('select')
    })
    
    
    
    buttonSoundCafeteria2.addEventListener('click', function(){
    controls.CafeteriaBlue()
    sound.buttonAudio()
    sound.cafeteria.pause()
    if (!darkModeActive){
    buttonWhite[2].classList.remove('select')
    }
    })
        
    buttonSoundFireplace.addEventListener('click', function(){
    controls.Fireplace()
    sound.buttonAudio()
    sound.fireplace.play()
    buttonWhite[3].classList.add('select')
    })
        

    buttonSoundFireplace2.addEventListener('click', function(){
        controls.FireplaceBlue()
        sound.buttonAudio()
        sound.fireplace.pause()
        if (!darkModeActive) {
          buttonWhite[3].classList.remove('select')
        }
    })
    
    darkMode.addEventListener('click', function(){
        controls.changeAllInputs()
        controls.darkModeOn()
        controls.darkmodeTransition()
        sound.buttonAudio()
        document.body.classList.add("darkmode");
        darkTimer.classList.add("darkmode");
        darkModeActive = !darkModeActive;
    })

    lightMode.addEventListener('click', function(){
        controls.changeOneInput()
        controls.lightModeOn()
        controls.lightModeTransition()
        sound.buttonAudio()
        document.body.classList.remove("darkmode")
        darkTimer.classList.remove("darkmode")
        darkModeActive = false;
    })

    controlFlorest.addEventListener('input', function(){
        sound.florest.volume = this.value / 100
    })

    controlRain.addEventListener('input', function(){
        sound.rain.volume = this.value / 100
    })

    controlCafeteria.addEventListener('input', function(){
        sound.cafeteria.volume = this.value / 100
    })
  
    controlFireplace.addEventListener('input', function(){
        sound.fireplace.volume = this.value / 100
    })

} 