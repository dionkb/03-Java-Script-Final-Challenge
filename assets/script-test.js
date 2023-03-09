// PLAN OF ATTACK:

// Button doesn't seem to activate anything, fix that
var generateBtn = document.querySelector("#generate");
function testprompt()  {
    var passLength = prompt("How many characters does your password need to be? \n(Enter a value from 8 to 128)", "");
    console.log(passLength);
    var passLowercase = confirm("Include lowercase characters? \nPress OK for yes, Cancel for no", "");
    console.log(passLowercase);
    var passUppercase = confirm("Include uppercase characters? \nPress OK for yes, Cancel for no", "");
    console.log(passUppercase);
    var passNumeric = confirm("Include numeric characters? \nPress OK for yes, Cancel for no", "");
    console.log(passNumeric);
    var passSpecial = confirm("Include special characters? (For example: !#$%&, etc.) \nPress OK for yes, Cancel for no", "");
    console.log(passSpecial);
};
generateBtn.addEventListener("click", testprompt);

// Add PROMPTs for password criteria:
//    128 character > Length >= 8 characters
//    Whether or not to include: lowercase, uppercase, numeric, or special chars.
// Ensure each prompt is validated (possible ===, ||, &&, type stuff)
// After all prompts, generate password based on answers.
// Password gets displayed directly or through an ALERT.


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


