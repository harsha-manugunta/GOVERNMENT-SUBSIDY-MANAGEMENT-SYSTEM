
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
  ourText = "please put the value that you wanted to change in your profile, name , email , phone number , profile photo ...and click on update button ,thank you"
  utterThis.text = ourText
  synth.speak(utterThis)
  
}