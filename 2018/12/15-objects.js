var students = [
    {
        'id': 1,
        'firstName': 'Vasya',
        'grades': [3, 3, 4]
    }, {
        'id': 2,
        'firstName': 'Masha',
        'grades': [5, 5, 5]
    }, {
        'id': 3,
        'firstName': 'Petya',
        'grades': [2, 1, 1]
    }, {
        'id': 4,
        'firstName': 'Misha',
        'grades': [4, 2, 3]
    }
];

/***
 * Create a function that takes a list of students as an argument and prints information about them in the following format:
 * <id> <name> <average_grade>
 * ex: 1 Vasya 3.3333
 */

for (var i = 0; i < students.length; i++) {

    var student = students[i];
    var numGrades = student.grades.length;
    var sum = 0;
    for (var j = 0; j < numGrades; j++) {
        sum += student.grades[j];
    }
    console.log(student.id + ' ' + student.firstName + ' ' + sum / numGrades);
}

// sum/elmt.length