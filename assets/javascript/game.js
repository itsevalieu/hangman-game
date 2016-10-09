//Objects
var worldPlaces = {
	rome: ["Colosseum", "Pantheon", "Vatican City", "Trevi Fountain", "Sistene Chapel", "Roman Forum"],
	madrid: ["Plaza Mayor", "Retiro Park", "Temple of Debod", "El Rastro"],
	tokyo: ["Akihabara", "Shinjuku", "Harajuku", "Shibuya"],
	london: ["Big Ben", "London Eye", "Buckingham Palace", "Westminster Abbey", "Hyde Park", "Tower Bridge"],
	athens: ["Parthenon", "Acropolis", "Olympic Stadium"],
	paris: ["Eiffel Tower", "Notre Dame", "The Louvre", "Arc de Triomphe"],
	//Array to contain all of worldPlaces' arrays ^above^; "this" refers to the object it is within;
	cities: [this.rome, this.madrid, this.tokyo, this.london, this.athens, this.paris]
}

//Functions

	//need to call array from worldPlaces object
console.log(worldPlaces.cities.length);
for(i=0; i<worldPlaces.cities.length; i++){
	worldPlaces.cities[i];
}

function word(x){


}

//Script Below
//1. Must capture user's input key:
	document.onkeyup = function(event){
		//2. Defines userGuess and stores a char key input; converts to LowerCase:
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		if(userGuess != [A-Za-z ])
	}

//for(i=0; i<word.length)
//_.charAt(#); -> returns a character of a string, based on number position
//_.charAt(_.length-1); = > shows last character in string