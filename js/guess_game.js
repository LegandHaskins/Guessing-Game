//JAVASCRIPT STUFF
//Generate Random Number
var secretNumber = Math.ceil(Math.random()*99);
console.log(secretNumber);

//capture user guess
//compare guess to Random
function playGame()
{
  userGuess = document.getElementById("user-guess").value;
  if (userGuess == secretNumber) changeDisplay("win");
  else if (userGuess > secretNumber) changeDisplay("high");
  else if (userGuess <secretNumber) changeDisplay("low");
  else changeDisplay("error");
}

//change interface
function changeDisplay(winCode)
{
  if (winCode == "win"){
    document.getElementById("display-message").innerText = "!!!!You Won!!!!";
  }
  else if (winCode == "high"){
    document.getElementById("display-message").innerText = "!!TOO HIGH!!";
  }
  else if (winCode == "low"){
    document.getElementById("display-message").innerText = "!!TOO LOW!!";
  }
  else{
    document.getElementById("display-message").innerText = "Not A Number";
  }
}
