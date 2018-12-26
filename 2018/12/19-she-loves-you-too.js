var readLine = require('readline-sync');
function question() {
    var userInput = readLine.question('who is your favorite girl in the world?');
    return checkName(userInput);
}

function checkName(name)
{
    return !(name.toUpperCase() == 'VARIA'.toUpperCase() || name.toUpperCase() == 'Varya'.toUpperCase() || name.toUpperCase() == 'Varvara'.toUpperCase());

    // var correctNames = ['Varia', 'Varya', 'Varvara']
    // for (var correctName of correctNames)
    // {
    //     if (name.toUpperCase() == correctName.toUpperCase())
    //     {
    //         return false;
    //     }
    // }
    // return true;
}

while (question()) {
    console.log('try again');
}

console.log('She loves you too!');


// while(condition)
// {
//     <code>
// }

// if (condition)
// {
//     nothing
//     go back to line 24;
// }
// !true == false
// !false == true

// var a = 1;
// var b = "asb"
// var c = true;

