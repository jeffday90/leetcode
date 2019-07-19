/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    let result = [];
    
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (target === nums[mid]) {
            let midPlus = mid + 1;
            let midMinus = mid - 1;
            if (target === nums[midMinus] && target === nums[midPlus]){
                while (target === nums[midPlus + 1]) {
                  midPlus++;
                }
                while (target === nums[midMinus - 1]) {
                  midMinus--;
                }
                result.push(midMinus, midPlus);
                break;
            } else if (target === nums[midPlus]) {
                while(target === nums[midPlus + 1]) {
                  midPlus++;
                }
                result.push(mid, midPlus);
                break;
            } else if (target === nums[midMinus]) {
                while (target === nums[midMinus - 1]) {
                  midMinus--;
                }
                result.push(midMinus, mid);
                break;
            } else {
                result.push(mid, mid);
                break;
            }
            
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    if (result.length) {
        return result;
    } else {
        return [-1, -1]
    }
    
};