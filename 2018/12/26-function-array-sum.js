/**
 * 1. Write a function that calculates a sum of array
 * 2. Print a sum of a sample array, generated randomly, of 5-10 elements, each number in the range 0-100.
 */

var newarr = Array.from(
    { length: 5 + Math.floor(Math.random() * 5) },
    () => Math.floor(Math.random() * 100));
console.log(newarr, arraySum(newarr));



/**
 * 
 * @param numbers Array[int]
 */
function arraySum(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

