/* my mad lib */

function doMadLib() {

	alert("Here is your mad lib");

	var color = prompt("What is your favorite color?");
	var animal = prompt("What is your favorite animal?");
	var friend1 = prompt("Name a friend");
	var friend2 = prompt("Name another friend");
	var game = prompt("Name a game you play at school");
	var adj1 = prompt("Give me an adjective");
	var phrase = prompt("What is a common phrase");
	var topic = prompt("Give me a conversation topic");
	var food = prompt("What is your favorite food");
	var name = prompt("What would you name your new pet");

	var story =
		"Once upon a time there was a <span class= 'v'>" + 
		color + 
		"</span> <span class= 'v'>" + 
		animal + 
		"</span> at St. Mark's." + 
		" My friends <span class= 'v'>" + 
		friend1 + 
		"</span> and <span class= 'v'>" + 
		friend2 + 
		"</span> decided to play <span class= 'v'>" + 
		game + 
		"</span> with it. " + 
		"It was a very <span class= 'v'>" + 
		adj1 + 
		"</span> player. My friends found out that it could talk" +
		" and it said <span class= 'v'>" + 
		phrase + 
		"</span>. They had a conversation about <span class= 'v'>" + 
		topic + 
		"</span> and ordered <span class= 'v'>" +
		food + 
		"</span>. They named the animal <span class= 'v'>" + 
		name + 
		"</span> and kept it as the school pet.";

		document.getElementById("finalMadLib").innerHTML = story;



}