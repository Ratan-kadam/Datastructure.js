/*
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str = s.split('');
    var lastIndex = s.length-1;

    for(var i=0; i< Math.ceil(str.length/2); i++) {
        var temp = str[i];
        str[i] = str[lastIndex];
        str[lastIndex] = temp;
        lastIndex--;
    }

    return str.join('');
};
