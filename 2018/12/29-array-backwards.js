// function that takes one argument that is a array, and return the same array backwards
var array = [1, 2, 3, 4, 5]
function arrayBackwards(arr) {
    var arrTwo = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arrTwo.push(arr[i])
    }
    return arrTwo
}
console.log(arrayBackwards(array));