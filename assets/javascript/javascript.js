
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.

var wins = [0];
var losses = [0];
var guesses = 10;
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessChoices = [];

// Captures key press 
document.onkeypress = function(userGuess) {
  var userGuess = userGuess || window.key;
  // var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    charCode = userGuess.keyCode || userGuess.which;
    userChoiceText = String.fromCharCode(charCode);
// console.log(userGuess)


    // how to win and lose
    if (userChoiceText === computerChoice){
      (wins ++);
      
    }
    
    if (userGuess != computerChoice) {
        (guesses--);
        
  }
  console.log(userGuess)
  console.log(computerChoice)
  if (guesses === -1) {
    (losses ++);
    // alert("end");
    
  }

if (guesses ===0) {
  guesses = 10;
  losses++;
  guessChoices = []

}

  // how things get displayed
  document.getElementById("userChoiceText").innerHTML += userChoiceText;
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
}

