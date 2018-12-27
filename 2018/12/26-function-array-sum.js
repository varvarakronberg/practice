/**
 * 1. Write a function that calculates a sum of array
 * 2. Print a sum of a sample array, generated randomly, of 5-10 elements, each number in the range 0-100.
 */
var inputNumbers = [1, 1, 2, 2, 3, 3];
var inputNumbers2 = [10, 1, 2, 2, 3, 3];
console.log(arraySum(inputNumbers));
console.log(arraySum(inputNumbers2));

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

