//Given the array of events, sort them by the month that they occur in and return the sorted array.
//Each object in the events array will have properties event and month
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(array) {
    array.sort((a, b) => {
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
    });
}

module.exports = sortByMonth;






// Given an array of students, sort first by graduated then by grade like in the example above.
// Each object in the students array will have properties id, graduated and grade
function sortStudents(students) {
    students.sort((a, b) => {
        if (a.graduated && !b.graduated) {
            return -1;
        }
        if (b.graduated && !a.graduated) {
            return 1;
        }
        return b.grade - a.grade;
    });
}
module.exports = sortStudents;






//Given an array of strings, sort the strings in descending order ('c','b','a'...) and return the resulting sorted array.
function sortStringsDown(array) {
    array.sort((a, b) => {
        return b.localeCompare(a);
    });
}
module.exports = sortStringsDown;






//Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.
function sortStringsUp(array) {
    array.sort((a, b) => {
        return a.localeCompare(b);
    });
}
module.exports = sortStringsUp;





//Given an array of numbers sort them in descending order and return the array.
function sortDown(array) {
    array.sort((a, b) => b - a);
}
module.exports = sortDown;





// Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array.
function sortUp(array) {
    array.sort((a, b) => a - b);
}
module.exports = sortUp;
