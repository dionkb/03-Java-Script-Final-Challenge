// Declares a variable that will be used in conjunction with a mouse click
// in a specified area of the HTML interface.
let generateBtn = document.querySelector("#generate");

// Declare variables to be used globally. 
let passLength = 0;
let options = [];
let password = '';
let randomString =''

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
    function generatePassword() {
        for (i = 0; i < passLength; i++) {
        let randomChar = Math.floor(Math.random() * options.length);
        randomString += options[randomChar];
        }
    }
    generatePassword();
    let password = randomString;

    // This will allow the randomly created string, password, to be displayed 
    // to the user in the dialog box on screen
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
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
// FIXED! Password gets displayed directly or through an ALERT.
// FIXED! NEW ISSUE: Allow user to cancel out of prompt first prompt.