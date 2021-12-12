// Assignment code here


finalArray = [];
function lowercaseGenerator () {
  var result = " ";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = password.length;
  for (var i = 0; i< length; i++) {
    result += characters.charAt(Math.floor(Math.random() * passwordLength));
  }
  result.toLowerCase
  return result;
}
console.log(lowercaseGenerator());

function uppercaseGenerator() {
  String.toUppercase()
}

function numericGenerator () {
  Number()
}

//function specialGenerator () {
  //String.
//}

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
  }
  else {
    console.log("Thanks");
  }

  var confirmUpperCase = window.confirm("Would you like to include uppercase characters?")
  if (confirmUpperCase === true) {
    finalArray.push(uppercaseGenerator)
  }
    else {
      console.log("Thanks")
    }


  var confirmNumeric = window.confirm("Would you like to include numeric characters?")
  if (confirmNumeric === true) {
    finalArray.push(numericGenerator)
    }

  //var confirmSpecialChar = window.confirm("Would you like to include special characters?")
  //if (confirmSpecialChar === true) {
    //finalArray.push(specialGenerator)
  //}

  }

  function randomNumber() {
    finalArray
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