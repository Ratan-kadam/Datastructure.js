/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = {};
    var totalLen = nums.length;

    for(var i = 0; i< totalLen ;i++) {
        if(map[nums[i]] > 0) {
            map[nums[i]] = map[nums[i]] + 1; // increasing the count
        }else {
            map[nums[i]] = 1;
        }
    }



     for(i = 0; i< totalLen ;i++) {
         if(map[nums[i]] >= Math.ceil(totalLen/2)) {
             return nums[i];
         }
     }


};
