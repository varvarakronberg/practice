/**
 * 1. Write a function that asks user for a password, and if it's correct it prints "CORRECT!", otherwise it prints "INCORRECT!"
 * 2. Change the code so that there's no console.log calls in the checking function itself.
 */
var readLine = require('readline-sync');

passwordCheck(correct, incorrect);
function correct() {
    console.log('CORRECT');
}

function incorrect() {
    console.log("INCORRECT");
}

function passwordCheck(success, fail) {
    var userInput = readLine.question('password:');
    if (userInput != 'password') {
        fail();
    } else {
        success();
    }
}
