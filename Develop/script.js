// Assignment code here

var passwordCriteria = [confirmLowerCase,]

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
    function generateLowerCase() {
      return String.charAt(0).toUpperCase() + String.slice(1);
    }
  }
  else {
    


  }

  var confirmUpperCase = window.confirm("would you like to include uppercase characters?")
  if (confirmUpperCase = true) {
    console.log ("Okay");
  }
    else {
      console.log("Thanks")
    }
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