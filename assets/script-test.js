// Declares a variable that will be used in conjunction with a mouse click
var generateBtn = document.querySelector("#generate");

// Declare variables to be used globally. 
let passLength;
let passLowercase;
let passUppercase;
let passNumeric;
let passSpecial;

function testprompt()  {
    while (isNaN(passLength) || passLength > 128 || passLength < 8) {
        passLength = prompt("How many characters does your password need to be? \n(Enter a number from 8 to 128)", "");
    }
    // if (!passLength) {
        // return;
    // } else {
    console.log(passLength);
    let passLowercase = confirm("Include lowercase characters? \nPress OK for yes, Cancel for no", "");
    console.log(passLowercase);
    let passUppercase = confirm("Include uppercase characters? \nPress OK for yes, Cancel for no", "");
    console.log(passUppercase);
    let passNumeric = confirm("Include numeric characters? \nPress OK for yes, Cancel for no", "");
    console.log(passNumeric);
    let passSpecial = confirm("Include special characters? (For example: !#$%&, etc.) \nPress OK for yes, Cancel for no", "");
    console.log(passSpecial);
    }
    function passCreate() {
        for (let i = 0; i < passLength; i++) {
            
        }
    }

generateBtn.addEventListener("click", testprompt);



// PLAN OF ATTACK:

// FIXED! Button doesn't seem to activate anything, fix that
// FIXED! Add PROMPTs for password criteria:
//    128 character > Length >= 8 characters
//    Whether or not to include: lowercase, uppercase, numeric, or special chars.
// Ensure each prompt is validated (possible ===, ||, &&, type stuff)
// After all prompts, generate password based on answers.
// Password gets displayed directly or through an ALERT.
// NEW ISSUE: Allow user to cancel out of prompts.


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


