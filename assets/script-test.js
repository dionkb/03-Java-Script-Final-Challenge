// Declares a variable that will be used in conjunction with a mouse click
// in a specified area of the HTML interface.
var generateBtn = document.querySelector("#generate");

// Declare variables to be used globally. 
let passLength = 0;
let options = [];
let password = "";
let generatePassword = "";

// Main portion of code which controls the password generator function.
function writePassword()  {

    // This asks the user how many characters they need the password to be.
    while (isNaN(passLength) || passLength > 128 || passLength < 8) {
        passLength = prompt("How many characters does your password need to be? \n(Enter a number from 8 to 128)", "");
        if (passLength >= 8 && passLength <= 128 && typeof passLength == "number") {
        } else if (passLength === null) {
            return;
        }
    }    

    // This asks if they need to include lowercase letters, and pushes the results
    // to an array ("options") that is compiling all of the inputs.
    let inclLow = confirm("Include lowercase characters? \nPress OK for yes, Cancel for no", "");
    if (inclLow === true) {
        let lower = "abcdefghijklmnopqrstuvwxyz".split('');
        for (i = 0; i < lower.length; i++) {
            options.push(lower[i]);
        }
    }

    // This asks if they need to include uppercase letters, and pushes the results
    // to an array "options" that is compiling all of the inputs.
    let inclUp = confirm("Include uppercase characters? \nPress OK for yes, Cancel for no", "");
    if (inclUp === true) {
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        for (i = 0; i < upper.length; i++) {
            options.push(upper[i]);
        }
    }      

    // This asks if they need to include numerals, and pushes the results
    // to an array "options" that is compiling all of the inputs.
    let inclNum = confirm("Include numeric characters? \nPress OK for yes, Cancel for no", "");
    if (inclNum === true) {
        let numerals = "1234567890".split('');
        for (i = 0; i < numerals.length; i++) {
            options.push(numerals[i]);
        }
    }

    // This asks if they need to include special characters, and pushes the results
    // to an array "options" that is compiling all of the inputs.
    let inclSpec = confirm("Include special characters? \nPress OK for yes, Cancel for no", "");
    if (inclNum === true) {
        let special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
        for (i = 0; i < special.length; i++) {
            options.push(special[i]);
        }
    }

    // This will allow the computer to choose from the "options" array at random
    // and the computer repeats the random selection "passLength" number of times.
    for (i = 0; i < passLength; i++) {
        var randomChar = Math.floor(Math.random() * options.length);
        generatePassword += options[randomChar];
        console.log(generatePassword);
    }
}

// Allows the user to click the button specified earlier, which will
// activate the writePassword function
generateBtn.addEventListener("click", writePassword);


// PLAN OF ATTACK:

// FIXED! Button doesn't seem to activate anything, fix that
// FIXED! Add PROMPTs for password criteria:
//      128 character > Length >= 8 characters
//      Whether or not to include: lowercase, uppercase, numeric, or special chars.
// FIXED! Ensure each prompt is validated (possible ===, ||, &&, type stuff)
// FIXED! After all prompts, generate password based on answers.
//      IDEAS: Build an array out of possible computer choices based on user input
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