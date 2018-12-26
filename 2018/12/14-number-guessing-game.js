/*
1. program chooses a number 1 to 10, at random
2. ask user for a guess
3. tell the user if his number is greater or less, or equal than the answer
4. if the quess is incorrect, repeat 2 more times
5. if the user guessed -- print "congratulations", otherwise print "you're a looser"
*/
var min = 1;
var max = 10;

function getRandomArbitraryInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
var randomNumber = getRandomArbitraryInt(min, max)
var readLine = require('readline-sync');

function turn() {
    var userInput = readLine.question('choose a number 1 to 10: ');
    if (userInput > randomNumber) {
        console.log("your number is greater, try again");
        return false;
    }
    else if (userInput < randomNumber) {
        console.log("your number is smaller, try again");
        return false;
    }
    else {
        //console.log("congratulations!");
        return true;
    }

}


// if (turn())
// {
//     console.log("congrats!. game over")
// }
// else if (turn())
// {
//     console.log("congrats!. game over")
// }
// else if (turn())
// {
//     console.log("congrats!. game over")
// }
// else
// {
//     console.log("looser");
// }

var numTurns = 1;
while (!turn()) { numTurns++; }
console.log("you guessed in " + numTurns + " tries!")

// do
//   repeat (userInput, 2)
// while (userInput != randomNumber);

// function repeat(func, times) {
//     func();
//     --times && repeat(func, times);
// }