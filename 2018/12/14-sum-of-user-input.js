/*******
 *
 * 1. Ask user for 3 numbers, if the user enters not a number, ask again (at least once)
 * 2. Ask user for an operator -- + or *. If the user enters something else, ask again (at least once)
 * 3. Give user the answer (either x1+x2+x3 or x1*x2*x3)
 *
 */

var userInput = require('readline-sync');

var x1 = getNumberFromUser('provide first number:');
var x2 = getNumberFromUser('provide second number:');
var x3 = getNumberFromUser('provide third number:');
var op = userInput.question('Choose between + or *:');

function getNumberFromUser(message) {
    var rawInput = userInput.question(message);
    if (isNaN(rawInput)) {
        rawInput = userInput.question(message);
    }
    return rawInput;
}

if (op == '+') {
    console.log(Number(x1) + Number(x2) + Number(x3));
} else if (op == '*') {
    console.log(Number(x1) * Number(x2) * Number(x3));
} else {
    console.log('data input is incorrect');
}

//////////
