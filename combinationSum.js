/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    candidates = candidates.sort((a, b) => a - b);
    let result = [];
    let buffer = [];
    search(0, target);
    return result;
    
    function search(startIndex, target) {
        // if we find matching elements then we can attach to result
        if (target === 0) {
            return result.push(buffer.slice());
        }
        
        // if we get target below 0 it isn't help --> get rid of it
        if (target < 0) {
            return;
        }
        
        // if we hit start index then we return
        if (startIndex === candidates.length) {
            return;
        }
        
        // push the first element into the array
        buffer.push(candidates[startIndex]);
        
        // recursive search with startIndex and target minus the first
        // if we run it with the first element
            // 0, 5, --> target - 2
            // 0, 3, --> target - 2
            // 0, 1, --> target - 2
            // 0 , - 1 return
                // buffer = 2 2 2 2
                
        // then we do search with (1, target - 3) --> -1 return
        search(startIndex, target - candidates[startIndex]);
        
        // then we pop again
        buffer.pop(); // we pop the last 
            // buffer = 2 2 2 // then we do it with 6 and 7... they all                     // close 
        
        // search through every other element in the candidates array
            // next is 3, 2 
            // buffer is 2 2 
        search(startIndex + 1, target);
    }
};