// Start listening browser event
// myHeading.addEventListener();

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myParagraph = document.getElementsByTagName('p')[0];
const myParagraph1 = document.getElementsByTagName('p')[1];
const myList = document.getElementsByTagName('li');

myHeading.addEventListener('click', () => {
	myHeading.style.color = 'red';
}); 

myButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

myParagraph.addEventListener('click', () => {
	myParagraph.style.color = 'blue';
});

myParagraph1.addEventListener('click', () => {
	myParagraph1.style.color = 'purple';
});

for(var i=0; i<myList.length; i++){
	myList[i].style.color = 'purple';
}

const errorPurple = document.getElementsByClassName('Not_purple');

for(var i=0; i<errorPurple.length; i++){
	errorPurple[i].style.color = 'red';
}

const events = document.querySelectorAll('li:nth-child(even)')

for(var i=0; i<events.length; i++){
	events[i].style.backgroundColor = 'lightgray';
}