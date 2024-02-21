var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var birthYear = prompt("Please enter your birth year:");
var age = 2024 - birthYear;
var outputMessage = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";

document.getElementById("output").innerText = outputMessage;