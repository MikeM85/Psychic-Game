
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.

var wins = [0];
var losses = [0];
var guesses = 10;


// Captures key press 
document.onkeypress = function(userGuess) {
  var userGuess = userGuess || window.key;
  var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    charCode = userGuess.keyCode || userGuess.which;
    userChoiceText = String.fromCharCode(charCode);
// console.log(userGuess)


    // how to win and lose, reset guesses after wining
    if (userChoiceText === computerChoice){
      (wins ++);
      guesses = 10;
      alert("one point!")
      
    }
    
    if (userGuess != computerChoice) {
        (guesses--);
        
  }
  
  if (guesses === -1) {
    (losses ++);
   
    
  }
// reset if lost
if (guesses ===0) {
  guesses = 10;
  losses++;
  
  alert("lost!")

}


  // how things get displayed
  document.getElementById("userChoiceText").innerHTML += userChoiceText;
  document.getElementById("guesses").innerHTML = guesses;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
}
