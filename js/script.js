//Requesting input values for the password
let firstName = prompt('Qual è il tuo nome'); //First name
let lastName = prompt('Qual è il tuo cognome'); //Last name
let favColor = prompt('Quale è il tuo colore preferito?'); //Favorite color

//Concatenate the input values and the number 21 inside var concat
let concat = `${firstName}${lastName}${favColor}21`;

//Write concat in the h1 with id: 'password' inside the html document
document.getElementById('password').innerHTML = concat;