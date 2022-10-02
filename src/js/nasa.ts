

console.log("Running Nasa.ts");


// @ts-ignore
const SpeechRecognition = webkitSpeechRecognition

function speak(text) {
  console.log('speaking', text)

  var msg = new SpeechSynthesisUtterance()
  msg.text = text
  window.speechSynthesis.speak(msg)
}

const conversation = d3.select('#conversation')

function addToConversation(text) {
  conversation
    .append('tr')
    .append('td')
    .append('p')
    .classed('computer', true)
    .text(text)
}

function doThing() {
  speak('Hello, welcome to our nasa app')
}

addToConversation(
  `We can help you location the information you need, read a collection of PDF files, summarize those files, and produce statistical reports through 3 simple steps.`
)

const getSpeech = () => {
  const recognition = new SpeechRecognition()
  recognition.lang = 'en-US'
  recognition.start()

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript
    console.log(speechResult)
    //document.querySelector("#speech-div").textContent = speechResult;

    d3.select('#userInput').attr('value', speechResult)

    // getGif(speechResult)
  }

  recognition.onend = () => {
    console.log('it is over')
    recognition.stop()

    getSpeech()
  }

  recognition.onerror = (event) => {
    console.log('something went wrong: ' + event.error)
  }
}

// d3.post("https://ntrs.nasa.gov/api/citations/search", {
//   'Content-Type': 'application/json',
//   'body': {
//     q: "hi tell me about the moon"
//   }
// }).results(d => {
//   console.log("your results are:", d)
// })
