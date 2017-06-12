/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var map =[];

    for(var i=0; i < len ; i++) {
        map[nums[i]] = i; // populating all the values in map with value as index .. we just need the keys
    }

    for(i=0; i < len ; i++) {
        tobeSearched = target - nums[i]; // target - current element i.e. element will search in the maps.
        if(map[tobeSearched]) {
            console.log([map[tobeSearched] , nums[i]]);
            return [map[tobeSearched] , i]; // retuning index
        }
    }

    return [];
};
