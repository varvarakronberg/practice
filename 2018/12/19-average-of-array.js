/**
 * 2. var list = [3, 4, 157, 6, 70]
 * Print the sum of all numbers of the array
 */
var list = [3, 4, 157, 6, 70];
function avg(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    result /= arr.length;
    return result;
}
console.log(avg(list));