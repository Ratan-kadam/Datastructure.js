/*
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};

/* 38 output - 2
 (3 + 8 = 11 ==> 1+1 => 2)
 */

/* another solution */
 var addDigits = function(num) {
    if(num < 10) {
        return num;
    } else {
        var arr = (num + '').split('');
        var ret = arr.reduce(function(prev, cur) {
                return parseInt(prev, 10) + parseInt(cur, 10);
                });
        return addDigits(ret);
    }
};
