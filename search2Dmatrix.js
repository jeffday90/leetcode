/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false;
    } 
    
    let lineLength = matrix[0].length - 1;
    
    if (lineLength === 0 && matrix.length) {
        lineLength = 1;
    }
    
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][lineLength] === target) {
            return true; 
        } else {
            if (binarySearch(matrix[i], target)) {
                return true;
            }
        }
    }

    return false;
    
};

const binarySearch = (arr, target) => {
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
  }
  return false;
}