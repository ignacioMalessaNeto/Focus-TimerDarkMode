import Sounds from"./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js";
import { 
    minutesDisplay,
    secondsDisplay,
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
    buttonWhite} from "./elements.js";



const controls = Controls(
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
    buttonWhite)

const sound = Sounds()

const timer = Timer({ minutesDisplay, 
    secondsDisplay, 
    resetControls : controls.reset,
    sound
})


Events({controls, sound, timer})
