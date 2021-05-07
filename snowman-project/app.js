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



// *****        GENERATE ALPHABET BUTTONS FUNCTION      ******

const generateAlphabetButtons = () => {

    // loop to iterate through alphabet and apply attributes and create element
    for (i = 0; i < alphabetArray.length; i++) {
        const alphabetButtons = document.createElement('button')
        alphabetButtons.setAttribute('class', 'alphabet')
        alphabetButtons.innerHTML = alphabetArray[i]
        letterButtons.appendChild(alphabetButtons)
        
             
    }
    // adding event listener to each letter button
    const buttonsListener = document.querySelectorAll('.alphabet')
        buttonsListener.forEach((element) => element.addEventListener('click', updateSecretWord))
}


// ******       UPDATE SECRET WORD FUNCTION     *******
const updateSecretWord = (ev) => {
    const secretWordButton = document.querySelectorAll('.displayed')
        for (let i = 0; i < randomWordGeneration.length; i++) {
            
            if (ev.target.innerText === randomWordGeneration[i]) {
               secretWordButton[i].innerText = ev.target.innerText
            }
        }       
    }
    


//      *********   DISPLAY HIDDEN SECRET WORD FUNCTION
// inspired by https://www.youtube.com/watch?v=XP8kR64KD9o&ab_channel=jinx30
// get buttons displayed with _ based on number or letters in randomly generated word
const showSecretWord = () => {
    for (let letter of randomWordGeneration) {
        let secretWordButton = document.createElement('button')
        secretWordButton.classList.add('displayed')
        secretWordButton.setAttribute('id', letter)
        secretWordButton.innerText = "_"
        secretWord.appendChild(secretWordButton)   
    }
    
}


showSecretWord()

generateAlphabetButtons()

