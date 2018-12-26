/**
 * 1. Program that takes a number from a user (e.g. x), and prints all numbers from 1 to x on the screen, separated by commas
 */
// var readLine = require('readline-sync');
// var userInput = readLine.question('Number?');
// for (var i = 1; i < userInput; i++) {
//     process.stdout.write(`${i},`);
// }
// process.stdout.write(userInput);
// console.log();

// //ver 2
// var arr = [];
// for (var i = 1; i <= userInput; i++) {
//     arr.push(i);
// }
// console.log(arr.join('-'));

/**
 * 2. var list = [3, 4, 157, 6, 70]
 * Print the sum of all numbers of the array
 */
var list = [3, 4, 157, 6, 70]

console.log(arraySum(list));

function arraySum(arr) {
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i]
    };
    return result;
}

 var list = [3, 4, 157, 6, 70].reduce(add, 0);

function add(a, b) {
    return a + b;
}

// console.log(list);
/**
 * 3. Using the same array, for each number of the array (e.g. x), print numbers 1 to x (comma separated), each sequence on new line
 */
