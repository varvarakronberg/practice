var userInput = require('readline-sync');
function calculateYearTotal(weeklyAllowance) {
    return weeklyAllowance * 52
}


//userInput.question('')


var weeklyAllowance = userInput.question('How much money you get per week?');
if (isNaN(weeklyAllowance)) {
    console.log("Must input numbers");
}
else {
    var yeartotal = calculateYearTotal(weeklyAllowance);
    console.log(yeartotal);
}