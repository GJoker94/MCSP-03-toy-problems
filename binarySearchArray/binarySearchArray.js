/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(arr, target) {
    // O = null or character 
    // I = Sorted Array ,target character
    // C n/a
    // E n/a

    //loop through array
    for(let i = 0, i < arr.length , i++){
        if (arr[i] === target){
            return arr[i];
        } else {
            return null
        }
    }
    // if arr[i] = to target
    
};
binarySearch([1,2,3,4], 2)
