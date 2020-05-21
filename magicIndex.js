// when item in array is equal to index
    // only one


function magicIndex(arr) {
    let start = 0;
    let end = arr.length-1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === mid) return true;

        if (arr[mid] < mid) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return false;
}


magicIndex([-10, -5, 2, 2, 2, 3, 4, 6, 9])
