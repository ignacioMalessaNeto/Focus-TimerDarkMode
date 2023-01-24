export default function Controls(
    buttonSoundForest,
    buttonSoundForest2,
    buttonSoundCafeteria,
    buttonSoundCafeteria2,
    buttonSoundRain,
    buttonSoundRain2,
    buttonSoundFireplace,
    buttonSoundFireplace2,
    darkMode, 
    lightMode,
    svgDark,
    svgDark2,
    svgDark3,
    svgDark4,
    darkbutton,
    darkbutton2,
    darkbutton3,
    darkbutton4,
    darkbuttonBorder,
    darkbuttonBorder2,
    darkbuttonBorder3,
    darkbuttonBorder4,
    blueDark,
    blueDark2,
    blueDark3,
    blueDark4,
    buttonWhite) {
        
function darkModeOn() {
    darkMode.classList.add('hide')
    lightMode.classList.remove('hide')
}
        
function lightModeOn() {
    darkMode.classList.remove('hide')
    lightMode.classList.add('hide')
}

function darkmodeTransition() {
    svgDark.classList.add("darkmode")
    svgDark2.classList.add("darkmode")
    svgDark3.classList.add("darkmode")
    svgDark4.classList.add("darkmode")
    darkbutton.classList.add("darkmode")
    darkbutton2.classList.add("darkmode")
    darkbutton3.classList.add("darkmode")
    darkbutton4.classList.add("darkmode")
    darkbuttonBorder.classList.add("darkmode")
    darkbuttonBorder2.classList.add("darkmode")
    darkbuttonBorder3.classList.add("darkmode")
    darkbuttonBorder4.classList.add("darkmode")
    blueDark.classList.add("darkmode")
    blueDark2.classList.add("darkmode")
    blueDark3.classList.add("darkmode")
    blueDark4.classList.add("darkmode")
}         


function lightModeTransition() {
    svgDark.classList.remove("darkmode")
    svgDark2.classList.remove("darkmode")
    svgDark3.classList.remove("darkmode")
    svgDark4.classList.remove("darkmode")
    darkbutton.classList.remove("darkmode")
    darkbutton2.classList.remove("darkmode")
    darkbutton3.classList.remove("darkmode")
    darkbutton4.classList.remove("darkmode")
    darkbuttonBorder.classList.remove("darkmode")
    darkbuttonBorder2.classList.remove("darkmode")
    darkbuttonBorder3.classList.remove("darkmode")
    darkbuttonBorder4.classList.remove("darkmode")
    blueDark.classList.remove("darkmode")
    blueDark2.classList.remove("darkmode")
    blueDark3.classList.remove("darkmode")
    blueDark4.classList.remove("darkmode")
}

function changeAllInputs() {
    for (let input of buttonWhite) {
        input.classList.add('select');
    }
}

function changeOneInput(){
    for (let input of buttonWhite) {
        input.classList.remove('select');
    }
}
    

function Florest() {
    buttonSoundForest.classList.add('hide')
    buttonSoundForest2.classList.remove('hide')
}

function FlorestBlue() {
    buttonSoundForest.classList.remove('hide')
    buttonSoundForest2.classList.add('hide')
}

function Rain() {
    buttonSoundRain.classList.add('hide')
    buttonSoundRain2.classList.remove('hide')
}

function RainBlue() {
    buttonSoundRain.classList.remove('hide')
    buttonSoundRain2.classList.add('hide')
}

function Cafeteria() {
    buttonSoundCafeteria.classList.add('hide')
    buttonSoundCafeteria2.classList.remove('hide')
}

function CafeteriaBlue() {
    buttonSoundCafeteria.classList.remove('hide')
    buttonSoundCafeteria2.classList.add('hide')
}

function Fireplace() {
    buttonSoundFireplace.classList.add('hide')
    buttonSoundFireplace2.classList.remove('hide')
}

function FireplaceBlue() {
    buttonSoundFireplace.classList.remove('hide')
    buttonSoundFireplace2.classList.add('hide')
}
function reset() {
    buttonSoundForest.classList.remove('hide')
    buttonSoundForest2.classList.add('hide')
        
    buttonSoundRain.classList.remove('hide')
    buttonSoundRain2.classList.add('hide')
    
    buttonSoundCafeteria.classList.remove('hide')
    buttonSoundCafeteria2.classList.add('hide')
    
    buttonSoundFireplace.classList.remove('hide')
    buttonSoundFireplace2.classList.add('hide')
}

return{ 
    reset,
    Florest,
    FlorestBlue,
    Rain,
    RainBlue,
    Cafeteria,
    CafeteriaBlue,
    Fireplace,
    FireplaceBlue,
    lightModeOn,
    darkModeOn,
    darkmodeTransition,
    lightModeTransition,
    changeAllInputs,
    changeOneInput,
   }
} 