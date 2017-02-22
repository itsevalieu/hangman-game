
var wordBank = ["rome", "madrid", "tokyo", "london", "athens", "paris"];
var cityWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var wins = 0; //should increment
var totalGuesses = 8; //should decrement
var userGuess;
var lettersGuessed = []; //userInput should be pushed to end of array
var underscore = [];



console.log(cityWord);

//Functions
function resetGame(){
	var totalGuesses =  8;
	var lettersGuessed = [];
	var underscore = [];
	var index = 0;
	var userGuess;
	cityWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	
	document.getElementById("chances").textContent = totalGuesses;
}

document.getElementById("instructions").innerHTML = "Instructions: Press any key to get started!";

//call startGame function to begin
document.onkeyup = function(event){
	startGame();
}

function startGame(){
	document.getElementById("instructions").innerHTML = "Instructions: Click a letter to guess!";
	document.getElementById("noOfWins").textContent = wins;
	document.getElementById("chances").textContent = totalGuesses;
	document.getElementById("hiddenWord").textContent = underscore.join(" ");
	document.getElementById("showLettersGuessed").textContent = lettersGuessed.join(" ");
	//will pick up on userGuesses
	document.onkeyup = function(event){
	
	//2. Defines userGuess and stores a char key input; converts to LowerCase:
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var userGuessLength = userGuess.length;
	lettersGuessed.push(userGuess);
	for(var h = 0; h < cityWord.length; h++){
		underscore[h] = "_";
		document.getElementById("hiddenWord").textContent = underscore.join(" ");
	}
	//For loop for allowing the player to keep playing until guesses run out:
	for(var g = 1; g < totalGuesses; g++){
		lettersGuessed[g]; //*NEED TO TEST RUN
		document.getElementById("showLettersGuessed").textContent = lettersGuessed.join(" ");
	}

	//Logic for checking if true or not
	for (var i = 0; i < userGuessLength; i++){
		if(userGuess === cityWord.charAt(i)){
			underscore[i] = cityWord.charAt(i);
			console.log(userGuess);

		} else if(userGuess !== cityWord.charAt(i)){
			totalGuesses--;
		}
	}
	document.getElementById("hiddenWord").textContent = underscore.join(" ");	

	if(totalGuesses === 0){
		document.getElementById("instructions").innerHTML = "Out of guesses! You lost! Please click another key to reset the game!";
		document.getElementById("hiddenWord").textContent = cityWord;
		document.onkeyup = function(event) {
			resetGame();
			startGame();
		}
	}else if(underscore.join("") === cityWord) {
		document.getElementById("instructions").innerHTML = "Wow! You win! Please click another key to reset the game!";
		wins++;
		//document.getElementById("noOfWins").textContent = wins;
		document.onkeyup = function(event) {
			resetGame();
			startGame();
		}

	}

	}
}
