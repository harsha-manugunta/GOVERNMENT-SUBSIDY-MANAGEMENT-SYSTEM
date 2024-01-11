
const form = document.getElementById("voice")
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let ourText = ""

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility()

form.onclick = (event) => {
  event.preventDefault()
  ourText = "Hi please enter your registered email and password to enter our website"
  utterThis.text = ourText
  synth.speak(utterThis)
  
}