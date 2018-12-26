/**
 * A game:
 * 5x5 sqaure
 * Empty field is printed as .
 * Player is printed as *
 * User input:
 *  w - up
 *  s - down
 *  a - left
 *  d - right
 */

var player_position = { x: 0, y: 0 };

/**
 * ! while forever
 *  take user input
 *  change user position accordingly
 *  ! print board
 */
var readline = require('readline-sync');
printBoard(player_position);

while (true) {
    //take user input
    var userInput = readline.question('> ');

    //change user position accordingly
    handleUserInput(userInput, player_position);

    //print board
    printBoard(player_position);
}


//
function handleUserInput(move, pos) {
    if (move == 'w') {
        if (pos.y > 0) pos.y--;
    }

    if (move == 's') {
        if (pos.y < 4) pos.y++;
    }

    if (move == 'a') {
        if (pos.x > 0) pos.x--;
    }

    if (move == 'd') {
        if (pos.x < 4) pos.x++;
    }    
}

function printBoard(pos) {

    for (var y = 0; y < 5; y++) {
        for (var x = 0; x < 5; x++) {
            if (x == pos.x && y == pos.y) {
                process.stdout.write(`*`);
            }
            else {
                process.stdout.write(`.`);
            }

        }
        console.log();
    }
    console.log();
}

