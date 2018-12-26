/**
 * A program that asks you for your name and prints it 10 times in ALL CAPS
 */

var readLine = require('readline-sync');
var userInput = readLine.question('What is your name?');
for (var i = 0; i < 10; i++){
  console.log(userInput.toUpperCase());  
}
