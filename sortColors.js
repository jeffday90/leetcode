/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let num0 = 0;
    let num1 = 0; 
    let num2 = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            num0++;
        } else if (nums[i] === 1) {
            num1++;
        } else {
            num2++;
        }
    }
    
    for (let i = 0; i < num0; i++) {
        nums[i] = 0;
    }
    for (let i = 0; i < num1; i++) {
        nums[num0 + i] = 1;
    }
    for (let i = 0; i < num2; i++) {
        nums[num0 + num1 + i] = 2;
    }
    return nums;
};