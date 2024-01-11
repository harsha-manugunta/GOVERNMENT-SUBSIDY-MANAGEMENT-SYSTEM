
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
  ourText = "here is the profile of the analyst with score , please look at the score once before you start your deal , and then put sample crop pictures , quantity of crop , place and your valuable query, then click on post and wait for some time will get back to you with the upcoming notifications... "
  utterThis.text = ourText
  synth.speak(utterThis)
  
}