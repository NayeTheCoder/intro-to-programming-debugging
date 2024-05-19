const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber; // declared targetNumber
let attempts = 0; // attempts set to 0 then counter set to 5 for attempts
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  const remainingAttempts = maxNumberOfAttempts - attempts;

  //this hide function not working. Does it need moved down after creating the function?
  // I didn't notice a difference when I uncommented it again.
//hideAllMessages();

  if (guess === targetNumber) {
    // numberOfGuessesMessage.style.display = "none";
    // numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    tooHighMessage.style.display = 'none';
    tooLowMessage.style.display = 'none';
    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  //moved the lines around and created another else if so that when guessed correclty it doesn't show the attempts left or other lines 
  else if (guess !== targetNumber && guess < targetNumber) {
      tooLowMessage.style.display = '';
      tooHighMessage.style.display = 'none';
          // Do I need to move this bottom section within the second if statement so that it doesn't show this for the first if statement?

    //set this bottom line equal to "none" 
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    } 
    else if (guess !== targetNumber && guess > targetNumber){
      numberOfGuessesMessage.style.display = "";
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
      tooLowMessage.style.display = 'none';
      tooHighMessage.style.display='';
    }

  
//line below had 4 equal signs
if (attempts === maxNumberOfAttempts) {
  submitButton.disabled = true;
  guessInput.disabled = true;
}

guessInput.value = '';

resetButton.style.display = '';
}
function hideAllMessages() {
  //removed <= from elementIndex < messages.length;
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

//the word function below was misspelled
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  //disabled in first line was misspelled
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();


