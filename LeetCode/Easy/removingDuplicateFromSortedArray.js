/*
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var index = 1;
    while(index < nums.length) {
        if(nums[index-1] === nums[index]) {
            nums.splice(index-1, 1);
            index = index - 1;
        }else {
            index = index + 1;
        }
    }

    return nums.length;
};
