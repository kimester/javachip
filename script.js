function generatePassword() {
  //TODO: your code goes here
  // <button onclick="generatePassword()">Generate Password</button>
  var length = parseInt(
    prompt("Please enter the number of charcter for your pasword")
  );
  if (isNaN(length) || length == null) alert("invalid input ");
  length = prompt("Please Re- enter the number of charcter for your pasword");
}
console.log(length);
var confirmNumbers = confirm("Include Numbers ");
var confirmSymbols = confirm("Include special character ");
var confirmLowerCase = confirm("Include lowercase ");
var confirmUpperCase = confirm("Include uppercase ");

console.log(confirmLowerCase);
console.log(confirmSymbols);
//, confirmNumbers, confirmUpperCase)
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var allAllowedChars = "";
console.log(allAllowedChars);

// if (caps ==yes) {
if (confirmUpperCase === true) {
  //update from list of characters
  allAllowedChars = allAllowedChars + alphabet;
}

if (confirmLowerCase === true) {
  allAllowedChars = allAllowedChars + alphabet.toLowerCase();
}

if (confirmNumbers === true) {
  allAllowedChars = allAllowedChars + "0123456789";
}

if (confirmSymbols === true) {
  allAllowedChars = allAllowedChars + "!@#$%^&*()_+=-{}[]:'<>?,./;";
}

console.log(allAllowedChars);

var randomPasword = "";

for (i = 1; i <= length; i++) {
  //Random pick letters or chars from the allowed list
  var randomIndex = Math.floor(Math.random() * allAllowedChars.length);
  // console.log(randomIndex, "length", allAllowedChars.length);
  var randomChar = allAllowedChars[randomIndex];
  //console.log(randomChar);
  randomPasword = randomPasword + randomChar;
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
