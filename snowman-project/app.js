// alphabet array
const alphabetArray =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// array of words to be randomly selected
const wordsArray = ['cowboys', 'falcons', 'giants']

// array for random word to be pushed into
let answerArray = []


// random word selector
let randomWordGeneration = wordsArray[Math.floor(Math.random() * wordsArray.length)]

// getting elements
const intro = document.getElementById('intro')

//letters to choose from
const letterButtons = document.getElementById('letter-buttons')

// where the secret word with _ _ _'s will be
const secretWord = document.getElementById('secret-word')

// where the remaining guesses go
const guessesRemaining = document.getElementById('guesses-remaining')

// Ul for letter buttons
const letters = document.getElementById('letters')

// Generate buttons for alphabet
const generateAlphabetButtons = () => {

    // loop to iterate through alphabet and apply attributes and create element
    for (i = 0; i < alphabetArray.length; i++) {
        const listItems = document.createElement('button')
        listItems.setAttribute('class', 'alphabet')
        listItems.innerHTML = alphabetArray[i]
        letterButtons.appendChild(listItems)     
    }
}
// inspired by https://www.youtube.com/watch?v=XP8kR64KD9o&ab_channel=jinx30
// get buttons displayed with _ based on number or letters in randomly generated word
const showSecretWord = () => {
    for (let letter of randomWordGeneration) {
        let secretWordButton = document.createElement('button')
        secretWordButton.classList.add('displayed')
        secretWordButton.innerText = '_'
        secretWord.appendChild(secretWordButton)
    }
}

showSecretWord()

generateAlphabetButtons()

