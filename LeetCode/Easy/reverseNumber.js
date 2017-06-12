/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var minus;
    var rev="0";

    if(x < 0) {
        minus = true;
        x = Math.abs(x);
    }

    while(x) {
        rev = rev + x % 10;
        x = Math.floor(x / 10) ;
    }

    if (rev >= 2147483648) {
        return 0;
    }

    if (minus) {
        return parseInt(rev) * -1;
    }


    return parseInt(rev);
};
