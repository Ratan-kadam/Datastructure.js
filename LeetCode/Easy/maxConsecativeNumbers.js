/*
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var str = nums.join('');
    var strArr = str.split('0');

    /* on char you split that is not part of the arr
    input : [1,0,1,1,0,0,0,0,0,1,1,1]
    output after str.split('0'):  [ '1', '11', '', '', '', '', '111' ]

    */
    var max=0;

    for(var i=0 ;i < strArr.length;i++) {
         if(strArr[i].length > max) {
             max = strArr[i].length;
         }
    }

    return max;
};
