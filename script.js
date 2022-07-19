let voice = speechSynthesis.getVoices()
let speak = new SpeechSynthesisUtterance()
speak.voice = voice[2]
speak.rate = 0.3
speak.text = ""
window.speechSynthesis.speak(speak)

function speakLetter(btn) {

    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 0.3
    speak.text = "simple "+document.getElementById(btn).innerHTML
    window.speechSynthesis.speak(speak)
}

function speakLetter1(btn) {

    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 0.3
    speak.text = "Capital"+document.getElementById(btn).innerHTML
    window.speechSynthesis.speak(speak)
}

function c(){
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 0.3
    speak.text = "Capital See"
    window.speechSynthesis.speak(speak)

}

function speakColor(color) { 
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 0.3
    speak.text = color
    window.speechSynthesis.speak(speak)
}

function good1() { 
    document.getElementById("simplegood1").style.background = "green"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Very Good"
    window.speechSynthesis.speak(speak)
   
}

function good2() { 
    document.getElementById("simplegood2").style.background = "green"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Very Good"
    window.speechSynthesis.speak(speak)
    
}

function good3() { 
    document.getElementById("simplegood3").style.background = "green"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Very Good"
    window.speechSynthesis.speak(speak)
   
}

function bad1() { 
    document.getElementById("simplebad1").style.background = "red"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Try Again"
    window.speechSynthesis.speak(speak)
    
}

function bad2() { 
    document.getElementById("simplebad2").style.background = "red"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Try Again"
    window.speechSynthesis.speak(speak)
}

function bad3() { 
    document.getElementById("simplebad3").style.background = "red"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Try Again"
    window.speechSynthesis.speak(speak)
}

function capitalb1() { 
    document.getElementById("capitalb1").style.background = "red"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Try Again"
    window.speechSynthesis.speak(speak)
}

function capitalb2() { 
    document.getElementById("capitalb2").style.background = "red"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Try Again"
    window.speechSynthesis.speak(speak)
}

function capitalb3() { 
    document.getElementById("capitalb3").style.background = "red"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Try Again"
    window.speechSynthesis.speak(speak)
}


function capitalg1() { 
    document.getElementById("capitalg1").style.background = "green"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Great work"
    window.speechSynthesis.speak(speak)
}

function capitalg2() { 
    document.getElementById("capitalg2").style.background = "green"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Great work"
    window.speechSynthesis.speak(speak)
}

function capitalg3() { 
    document.getElementById("capitalg3").style.background = "green"
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "Great work"
    window.speechSynthesis.speak(speak)
}




function good() { 
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "very Good"
    window.speechSynthesis.speak(speak)
}

function bad() { 
    let voice = speechSynthesis.getVoices()
    let speak = new SpeechSynthesisUtterance()
    speak.voice = voice[2]
    speak.rate = 1
    speak.text = "try again"
    window.speechSynthesis.speak(speak)
}








