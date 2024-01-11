
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
  ourText = "hi user please enter your name , email , phone number and password to get connected with our app"
  utterThis.text = ourText
  synth.speak(utterThis)
  
}