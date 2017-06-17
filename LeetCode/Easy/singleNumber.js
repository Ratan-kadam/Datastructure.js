/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0;
    for(var i=0; i<nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
};

/*
input :[1, 2, 1]
output : 2;
*/
