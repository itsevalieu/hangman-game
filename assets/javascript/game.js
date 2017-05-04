var object = {
	wordBank = ["rome", "madrid", "tokyo", "london", "athens", "paris"],
	wins = 0,
	losses = 0,
	chances = 7,
	chooseWord = function() {
		var word = wordBank[Math.floor(Math.random() * this.wordBank.length)];
		return word;
	}
};

var userGuess;
var lettersGuessed = []; //userInput should be pushed to end of array
var underscore = [];

console.log(word);

// //Functions
// function resetGame(){
// 	var chances =  7;
// 	var lettersGuessed = [];
// 	var underscore = [];
// 	var index = 0;
// 	var userGuess;
// 	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	
// 	document.getElementById("chances").textContent = chances;
// }

// document.getElementById("instructions").innerHTML = "Instructions: Press any key to get started!";

// //call startGame function to begin
// document.onkeyup = function(event){
// 	startGame();
// }

// function startGame(){
// 	document.getElementById("instructions").innerHTML = "Instructions: Click a letter to guess!";
// 	document.getElementById("noOfWins").textContent = wins;
// 	document.getElementById("chances").textContent = chances;
// 	document.getElementById("hiddenWord").textContent = underscore.join(" ");
// 	document.getElementById("showLettersGuessed").textContent = lettersGuessed.join(" ");
// 	//will pick up on userGuesses
// 	document.onkeyup = function(event){
		

// 	document.getElementById("hiddenWord").textContent = underscore.join(" ");	

// }
// function endGame() {
// 	//For loop for allowing the player to keep playing until guesses run out:
// 	for(var g = 1; g < chances; g++){
// 		lettersGuessed[g]; //*NEED TO TEST RUN
// 		document.getElementById("showLettersGuessed").textContent = lettersGuessed.join(" ");
// 	}
// 	if(totalGuesses === 0){
// 		document.getElementById("instructions").innerHTML = "Out of guesses! You lost! Please click another key to reset the game!";
// 		document.getElementById("hiddenWord").textContent = cityWord;
// 		document.onkeyup = function(event) {
// 			resetGame();
// 			startGame();
// 		}
// 	}else if(underscore.join("") === cityWord) {
// 		document.getElementById("instructions").innerHTML = "Wow! You win! Please click another key to reset the game!";
// 		wins++;
// 		//document.getElementById("noOfWins").textContent = wins;
// 		document.onkeyup = function(event) {
// 			resetGame();
// 			startGame();
// 		}

// 	}
// }
// function checkGuess(x) {
// 	var userGuess = x;
// 	//2. Defines userGuess and stores a char key input; converts to LowerCase:
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// 	var userGuessLength = userGuess.length;
// 	lettersGuessed.push(userGuess);

// 	//Logic for checking if true or not
// 	for (var i = 0; i < userGuessLength; i++){
// 		if(userGuess === cityWord.charAt(i)){
// 			underscore[i] = cityWord.charAt(i);
// 			console.log(userGuess);

// 		} else if(userGuess !== cityWord.charAt(i)){
// 			totalGuesses--;
// 		}
// 	}
// }
// function win() {

// }
// function loss() {}
// function resetGame() {}
// function hideWord() {
// 	for(var h = 0; h < word.length; h++){
// 		underscore[h] = "_";
// 		document.getElementById("hiddenWord").textContent = underscore.join(" ");
// 	}
	
// }
