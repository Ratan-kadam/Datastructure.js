/*
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(number) {
if(number === 0) {
    return 0;
}


/* divide the number with 5 get the result if result > 0
divide the the same number with 25 and so on
add all the division.
*/


var count = 0;
for(var i=5 ; Math.floor(number/i) >= 1; i= i*5) {
    count = count + Math.floor(number/i);
}

return count;

};
