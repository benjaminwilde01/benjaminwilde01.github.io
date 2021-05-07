// alphabet array
const alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(alphabet.length)
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
    for (i = 0; i < alphabet.length; i++) {
        const listItems = document.createElement('li')
        listItems.setAttribute('id', 'alphabet')
        listItems.innerHTML = alphabet[i]
        letters.appendChild(listItems)
        // console.log(letters)
        // letterButtons.appendChild(letters)
    
    }
}

generateAlphabetButtons()

