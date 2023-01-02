//Take the array arr and add one to every element, return the resulting array.
function plusOne(arr) {
    return arr.map(x => x + 1);
}
module.exports = plusOne;




//Using the squareRoot function, map each element in the array arr to its square root. Return the new array
function squareRoot(arr) {
    return arr.map(Math.sqrt);
}
module.exports = squareRoot;




//Take a single number n and return n squared.
function squared(n) {
    return n*n;
}
module.exports = squared;





//Given an array of elements in squaredMap, return an array with each element squared
const squared = require('./squared');
function squaredMap(arr) {
    return arr.map(squared);
}
module.exports = squaredMap;





//Given an array of players, add 10 to their score. Return a new array with these additional points. Each player will be an object with the following two properties:
//id - a number uniquely identifying the player
//score - a number representing the player's points
function addScore(arr) {
    return arr.map((x, i) => {
        if (i <= 2) {
            x.score += 10;
        }
        return x;
    });
}
module.exports = addScore;






//modify our addScore function to only add 10 points to the first 3 players.
function addScore(arr) {
    return arr.map((x, i) => {
        if (i <= 2) {
            x.score += 10;
        }
        return x;
    });
}
module.exports = addScore;
