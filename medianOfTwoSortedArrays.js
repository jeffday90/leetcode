var findMedianSortedArrays = function(nums1, nums2) {
  const totalArr = nums1.concat(nums2).sort((a, b) => a - b);
  let median = Math.floor(totalArr.length / 2);
  let result;
    
  if (totalArr.length % 2 === 0) {
     median = Math.floor(totalArr.length / 2);
     result = (totalArr[median] + totalArr[median-1]) / 2;
  } else {
     result = totalArr[median];
  }
  return result;  
};