/*
var message = "Hello from Treehouse!";
alert(message);
document.write("<h1> Welcome to JS World!</h1>");
var visitorName = prompt("What is your name?");
document.write("Hello, " + visitorName);
console.log(visitorName);
console.log("Program Complete!");

function alertRandom(){
	var randomNumber = Math.floor(Math.random()*6)+1;
	alert(randomNumber);
	return randomNumber;
}
alertRandom();
alert(alertRandom());
console.log(alertRandom());

var count = 0;
while(count < 26){
  document.write("ABC");
  count += 1;
}

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  console.log(num);
  return num;
}

do {
	guess = prompt("Guess a number?");
	guessCount += 1;
	if(parseInt(guess) === randomNumber){
		correctGuess = true;
	}
} while (!correctGuess)
document.write("You have made: "+guessCount+"guesses!");
*/

var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB(){
	return Math.floor(Math.random() * 256 );
}
for(var i=1; i<=100; i+=1){
	red = randomRGB();
	green = randomRGB();
	blue = randomRGB();
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);
console.log(html);