// Assignment code here

var specialChar = "!@#$%^&*()";
var finalArray = [];
var passwordGenerated = "";
var minimumCount = 0;

var minimumLowercase= "";
var minimumUppercase = "";
var minimumNumeric = "";
var minimumSpecialChar = "";

function lowercaseGenerator (passwordLength) {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function uppercaseGenerator() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65)); 
}

function numericGenerator () {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function specialGenerator () {
  return specialChar[Math.floor(Math.random() * specialChar.length)]
}


function generatePassword() {
  var passwordLength = window.prompt("How many characters do you want your password to contain? (Choose a number between 8 and 128)")
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Okay");
  }
  else {
    window.alert("Please choose a number between 8 and 128");
    return;
  }

  var confirmLowerCase = window.confirm("Would you like to include lowercase characters?")
  if (confirmLowerCase === true) {
    finalArray.push(lowercaseGenerator)
    minimumCount++;
  }

  var confirmUpperCase = window.confirm("Would you like to include uppercase characters?")
  if (confirmUpperCase === true) {
    finalArray.push(uppercaseGenerator)
    minimumCount++;
  }

  var confirmNumeric = window.confirm("Would you like to include numeric characters?")
  if (confirmNumeric === true) {
    finalArray.push(numericGenerator)
    minimumCount++;
    }

  var confirmSpecialChar = window.confirm("Would you like to include special characters?")
  if (confirmSpecialChar === true) {
    finalArray.push(specialGenerator)
    minimumCount++;

  }

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var stringChosen = Math.floor(Math.random() * 4);

    passwordGenerated += stringChosen;

  }

  passwordGenerated += minimumLowercase;
  passwordGenerated += minimumUppercase;
  passwordGenerated += minimumNumeric;
  passwordGenerated += minimumSpecialChar;

  return passwordGenerated;

  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);