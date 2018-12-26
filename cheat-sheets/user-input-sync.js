/**
 * this code relies on readline-sync package
 * to install it, run:
 * npm install readline-sync
 */

var userInput = require('readline-sync');
var userName = userInput.question('What\'s your name? ');
console.log(`You name is ${userName}!`);