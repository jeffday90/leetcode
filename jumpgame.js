/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums || !nums.length) return false;
    let target = nums.length-1;
    
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= target) {
            target = i;
        }
    }
    
    return target === 0;
};