// Declares a variable that will be used in conjunction with a mouse click
// in a specified area of the HTML interface.
var generateBtn = document.querySelector("#generate");

// Declare variables to be used globally. 
let passLength;
let passLowercase;
let passUppercase;
let passNumeric;
let passSpecial;

function writePassword()  {
    while (isNaN(passLength) || passLength > 128 || passLength < 8) {
        passLength = prompt("How many characters does your password need to be? \n(Enter a number from 8 to 128)", "");
    }
    console.log(passLength);
    let passLowercase = confirm("Include lowercase characters? \nPress OK for yes, Cancel for no", "");
    console.log(passLowercase);
    if (passLowercase === true) {
        let passLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        console.log(passLowercase);
        } else (passLowercase = null);
    let passUppercase = confirm("Include uppercase characters? \nPress OK for yes, Cancel for no", "");
    console.log(passUppercase);
    if (passUppercase === true) {
        let passUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        console.log(passUppercase);
        } else (passUppercase = null);
    let passNumeric = confirm("Include numeric characters? \nPress OK for yes, Cancel for no", "");
    console.log(passNumeric);
    if (passNumeric === true) {
        let passNumeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        console.log(passNumeric);
        } else (passNumeric = null);
    let passSpecial = confirm("Include special characters? (For example: !#$%&, etc.) \nPress OK for yes, Cancel for no", "");
    console.log(passSpecial);
    if (passSpecial === true) {
        let passSpecial = [' ', '!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
        console.log(passSpecial);
        } else (passSpecial = null);
    }
    // var password = generatePassword() {
        // let possChars = [for (let i = 0; i < passLength; i++) {
            
        // }
    // }


    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");
//   
    // passwordText.value = password;

generateBtn.addEventListener("click", writePassword);



// PLAN OF ATTACK:

// FIXED! Button doesn't seem to activate anything, fix that
// FIXED! Add PROMPTs for password criteria:
//    128 character > Length >= 8 characters
//    Whether or not to include: lowercase, uppercase, numeric, or special chars.
// FIXED? Ensure each prompt is validated (possible ===, ||, &&, type stuff)
// After all prompts, generate password based on answers.
// IDEAS: Build an array out of possible computer choices based on user input
//      Ex: [a, b, c, Null,  etc, 1, 2, 3, etc., Null] = True, False, True, False
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


