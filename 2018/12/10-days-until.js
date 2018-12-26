var readlineSync = require('readline-sync');
////

function askUserForDate() {
    var year = readlineSync.question("what is the year?");
    var month = readlineSync.question("what is the month?");
    var day = readlineSync.question("what is the day?");
    var userInputDate = new Date(year, month - 1, day);
    return userInputDate;
}

var date = askUserForDate();
var today = new Date();
var timeDiff = Math.abs(today.getTime() - date.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

console.log("days until " + date.toDateString() + ": " + diffDays);