
var wordBank = ["rome", "madrid", "tokyo", "london", "athens", "paris"];
var wins = 0; //should increment
var totalGuesses = 8; //should decrement
var arrayOfLettersGuessed = []; //userInput should be pushed to end of array
var underscore = [];


//Functions
function resetGame(){
	var totalGuesses =  8;
	var lettersGuessed = [];
	var underscore = [];
}

function startGame(){
	alert("Please guess a letter.");
	var cityWord = wordBank[Math.floor(Math.random() * word.length)];
	var wordDiv = document.getElementById("hiddenWord");
	checkLetter();
	

	wordDiv.innerHTML = cityWord;
}

function checkLetter(){
	for(var u=0; u < word.length; u++){
		var guessesLeft = document.getElementById("chances");
		var lag = document.getElementById("showLettersGuessed");
		//var arrayOfLettersGuessed = [];
		arrayOfLettersGuessed.push(userGuess); 
		
		for(var a=0; a < arrayOfLettersGuessed.length; a++){
			var letterGuessed = document.createElement("div");	
			letterGuessed.innerHTML = arrayOfLettersGuessed[a];
			lag.appendChild(letterGuessed);
	}
		if(userGuess === cityWord.charAt(u)){
			 
		}else{
			totalGuesses--;
			guessesLeft.innerHTML = totalGuesses;

		}
	}
}

/*-------------Script Begins-------------*/

startGame();
//1. Must capture user's input key:
document.onkeyup = function(event){
	//2. Defines userGuess and stores a char key input; converts to LowerCase:
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		

}

/*------------Script Ends--------------*/


/*if(got word){
	var wins = 0;
	var totalWins = document.getElementById("noOfWins");
	wins++;
	totalWins.innerHTML = wins;
}*/

//for(i=0; i<word.length)
//_.charAt(#); -> returns a character of a string, based on number position
//_.charAt(_.length-1); = > shows last character in string


