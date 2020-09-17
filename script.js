var generateBtn = document.querySelector("#generate");

const specialCharacters = "!@#$%^&*()";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pLength = prompt("How Long do you want it???? (between 8 -12 characters please)");
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("FRIGGIN DUDE!! The Length must be 8-128 characters."));

  var numbers = confirm("Do you want numbers in it?");

  var lCase = confirm("Maybe a few lower cases?");

  var uCase = confirm("HOW ABOUT UPPERCASE?");

  var schar = confirm("Do you want to be SPECIAL with special characters?");

  var mCount = 0;

  var minNumbers = "";

  var minLowerCase = "";

  var minUpperCase = "";

  var minSpecialChar = "";

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  if (numbers === true) {
    minNumbers = functionArray.getNumbers();
    mCount++;

  }

  if (lCase === true) {
    minLowerCase = functionArray.getLowerCases();
    mCount++;

  }

  if (uCase === true) {
    minUpperCase = functionArray.getUpperCases();
    mCount++;

  }

  if (schar === true) {
    minSpecialChar = functionArray.getSpecialCharacters();
    mCount++;

  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(pLength) - mCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }
  randomPasswordGenerated += minNumbers;
  randomPasswordGenerated += minLowerCase;
  randomPasswordGenerated += minUpperCase;
  randomPasswordGenerated += minSpecialChar;

  return randomPasswordGenerated;

}