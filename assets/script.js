// This will pull the id="generate" portion of the html and store it in a variable
// for use at a later time (See "Add event listener" below).
// var generateBtn = document.querySelector("#generate");

// Sets up a function called writePassword to be called when the user 
// clicks the "Generate Password" button
// function writePassword() {
  // 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ACCEPTANCE CRITERIA:

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// PLAN OF ATTACK:

// Button doesn't seem to activate anything, fix that
// Add PROMPTs for password criteria:
//    128 character > Length >= 8 characters
//    Whether or not to include: lowercase, uppercase, numeric, or special chars.
// Ensure each prompt is validated (possible ===, ||, &&, type stuff)
// After all prompts, generate password based on answers.
// Password gets displayed directly or through an ALERT.