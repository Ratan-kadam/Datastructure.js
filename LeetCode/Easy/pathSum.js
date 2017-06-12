/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null) {
        return false;
    }

    return hasSum(root, sum, 0);
};

    function hasSum(myRoot, sum, currSum) {
        if(myRoot === null) {
            return false;
        }

        currSum = currSum + myRoot.val; // adding current value sum

        if( sum === currSum && myRoot.left === null && myRoot.right === null) {
            return true;
        }

        return hasSum(myRoot.left, sum, currSum) || hasSum(myRoot.right, sum, currSum);
    }
