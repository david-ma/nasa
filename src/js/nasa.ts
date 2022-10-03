console.log('Running Nasa.ts')

// @ts-ignore
const speechStuff = webkitSpeechRecognition

function speak(text) {
  console.log('speaking', text)

  var msg = new SpeechSynthesisUtterance()
  msg.text = text
  window.speechSynthesis.speak(msg)
}

const conversation = d3.select('#conversation')

function addToConversation(text, who = 'bot') {
  conversation
    .append('tr')
    .append('td')
    .append('p')
    .classed(who, true)
    .text(text)

  // var objDiv = document.getElementById('divExample')
  // objDiv.scrollTop = objDiv.scrollHeight
  // objDiv.scrollTop = objDiv.scrollHeight

  if (who === 'user') {
    botResponse()
  } else {
    speak(text)
  }
}

var responses = [
  'There are 8 planets in our solar system',
  'The sun is a star',
  'The sun is the center of our solar system',
  'The sun is 93 million miles away',
  'The sun is 109 times the diameter of the earth',
]

function botResponse() {
  addToConversation(responses.shift(), 'bot')
}

function doThing() {
  speak('Hello, welcome to our nasa app')
}

const getSpeech = () => {
  const recognition = new speechStuff()
  recognition.lang = 'en-US'
  recognition.start()

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript

    // If first word is computer
    if (speechResult.split(' ')[0] === 'computer') {
      const validText = speechResult.split(' ').slice(1).join(' ')
      //capitalise first word of validText
      const firstWord = validText.split(' ')[0]
      const restOfText = validText.split(' ').slice(1).join(' ')
      const capitalisedFirstWord =
        firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
      const capitalisedText = capitalisedFirstWord + ' ' + restOfText + '.'
      addToConversation(capitalisedText, 'user')
      // d3.select('#userInput').attr('value', capitalisedText)
    } else {
      d3.select('#userInput').attr(
        'value',
        `Voice commands must start with "computer"`
      )
    }
  }

  recognition.onend = () => {
    console.log('it is over')
    recognition.stop()

    getSpeech()
  }

  recognition.onerror = (event) => {
    console.log('something went wrong: ' + event.error)
    // d3.select('#userInput').attr('value', "I'm sorry, I didn't catch that")
    addToConversation("I'm sorry, I didn't catch that", 'bot')
  }
}

function closeModal() {
  console.log('closing modal..?')
  d3.select('#modal_background').remove()

  addToConversation(
    `NTRS includes hundreds of thousands of items containing scientific and technical information (STI) that were created or funded by NASA. How may I help you?`
  )

  getSpeech()
}
