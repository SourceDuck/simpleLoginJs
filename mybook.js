var database = [
	{
	username: "jack",
	password: "secret"
	},
		{
	username: "pete",
	password: "sticks"
	}
];

var newsFeed = [
	{
	username: "Bob",
	timeline: "So tired of all that learning"
	},
	{
	username: "Bob",
	timeline: "So tired of all that learning"
	}
];

var userNamePrompt = prompt("Whats your user name?");
var passwordPrompt = prompt("Whats your password?");

function signIn(usrnm, pswrd) {
	if (usrnm === database[0].username && 
		pswrd === database[0].password) {
		console.log(newsFeed);
	} 
	if (usrnm === database[1].username && 
		pswrd === database[1].password) {
		console.log(newsFeed);
	}

	else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);