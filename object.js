var person = {
	name : 'Mike',
	country : 'US',
	isValid : true,
	skills : ['Java', 'JS']
}

function print(message){
	var div = document.write(message);
	return div
}

var message = '<p>Hello, my name is: ' + person.name + '.</p>';
person.name = 'Janet';
message += person.name;
//print(message + "\n");

/*for(var key in person){
	console.log(key+":"+person[key]);
}*/

document.write(`Hello, ${person.name}!`);