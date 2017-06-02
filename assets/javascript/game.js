var stats = {
	wordBank: ["rome", "madrid", "tokyo", "london", "athens", "paris", "toledo", "sacramento", "kyoto"],
	guessedLetters: ["a", "b"],
	word: "",
	hiddenWord: [],
	wins: 0,
	losses: 0,
	chances: 7,
	chooseWord: function() {
		this.word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		return this.word;
	},
	hideWord: function() {
		this.hiddenWord = this.word.split("");
		var hiddenWordLength = this.hiddenWord.length;
		console.log(hiddenWordLength);

		for(var i = 0; i < hiddenWordLength; i++) {
			this.hiddenWord[i];
		}
		
		return this.hiddenWord;
	}
};
//	======================================================================
//	Game Sequence
//	======================================================================
startGame();


//	======================================================================
//	Functions
//	======================================================================
function startGame() {
	document.getElementById("instructions").innerHTML = "Instructions: Press any key to get started!";
	document.getElementById("chances").textContent = stats.chances;
	document.getElementById("wins").textContent = stats.wins;
	document.getElementById("losses").textContent = stats.losses;
	document.getElementById("guessedLetters").textContent = stats.guessedLetters.join(" ");
	stats.chooseWord();
	stats.hideWord();
	document.getElementById("hiddenWord").textContent = stats.hiddenWord.join(" ");
}




// 	document.getElementById("hiddenWord").textContent = underscore.join(" ");
// 	//will pick up on userGuesses
// 	document.onkeyup = function(event){
		

// 	document.getElementById("hiddenWord").textContent = underscore.join(" ");	
// }

// var userGuess;
// var lettersGuessed = []; //userInput should be pushed to end of array
// var underscore = [];
// stats.chooseWord();
// console.log(stats.word);

// //split up word into array
// var array = stats.word.split("");
// console.log(array);
// var pos = stats.word.search("o");
// console.log(pos);



/* Pseudo Code

start function
once document ready, 
reset stats
onkey up, start game (function)
(function) randomly pick hidden word, show value as _ _ _

 (-on key, save letter
compare letter to word string
if right, show letter in word, replace _
if wrong, decrease chance by 1)
repeat

(while chance > 0){ play game } 
 chance = 0 {
	increase losses by 1,
	end game, 

	if user choose play again, choose new word
	repeat
}

 
*/ 



// do { //check user's guess

// 	//call startGame function to begin
// 	document.onkeyup = function(event){
// 		startGame();
// 	}
// 	//get user's guess on key up

// 	for(var i = 0; i < word.length; i++){
// 		if(guess === word[i]) {
// 			//show letter(s)
// 		} else {
// 			stats.chances --;
// 		}
// 	}
	
// } while (stats.chances > 0);








// //=========Functions==========//
// function resetGame(){
// 	var chances =  7;
// 	var lettersGuessed = [];
// 	var underscore = [];
// 	var index = 0;
// 	var userGuess;
// 	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	
// 	document.getElementById("chances").textContent = chances;
// }


// function endGame() {
//  	//For loop for allowing the player to keep playing until guesses run out:
//  	for(var g = 1; g < chances; g++){
//  		lettersGuessed[g]; //*NEED TO TEST RUN
//  		document.getElementById("showLettersGuessed").textContent = lettersGuessed.join(" ");
//  	}
//  	if(totalGuesses === 0){
//  		console.log("cat");
//  	}
//  	return 0;
// };

// user guesses recorded; 		

// //organize below

// document.getElementById("instructions").innerHTML = "Out of guesses! You lost! Please click another key to reset the game!";
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
