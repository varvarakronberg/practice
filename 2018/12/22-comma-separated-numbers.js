/**
 * 1. Program that takes a number from a user (e.g. x), and prints all numbers from 1 to x on the screen, separated by commas
 */

var readline = require('readline-sync');

var userInput = readline.question('Number:');
while (isNaN(userInput)) {
    console.log("Must input numbers");
    var userInput = readline.question('Number:');
}

var oneToUserInput = [];
for (var value = 1; value <= userInput; value++) {
    oneToUserInput.push(value);
}
console.log (oneToUserInput.join (','));


