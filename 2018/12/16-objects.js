var students = [
    {
        'id': 1,
        'firstName': 'Vasya',
        'grades': [3, 3, 4, 3]
    },
    {
        'id': 2,
        'firstName': 'Masha',
        'grades': [5, 5, 5, 4]
    },
    {
        'id': 3,
        'firstName': 'Petya',
        'grades': [2, 1, 1, 2, 5]
    },
    {
        'id': 4,
        'firstName': 'Misha',
        'grades': [4, 2]
    }
]

/***
 * Create a function that takes a list of students as an argument and prints information about them in the following format:
 * <id> <name> <average_grade>
 * ex: 1 Vasya 3.3333
 */

for (var student of students) {
    var avGrade = arrayAverage(student.grades);
    console.log(`${student.id} -- ${student.firstName} ${avGrade}`);
}

/***
 * returns the average of all numbers in the array
 */
function arrayAverage(arr){
    var result = 0
    for (var i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    result /= arr.length;
    return result;
}
