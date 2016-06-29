/**
 * Created by ratan_000 on 6/28/2016.
 */

var subsets = function(nums) {
    var result = [],
        len = nums.length;

    nums.sort(function(a, b) {
        return a - b;
    });

    helper(nums, 0, len - 1, [], result);

    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);

    var i;

    for (i = start; i <= end; i++) {
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}

console.log(subsets([1,2,3]));