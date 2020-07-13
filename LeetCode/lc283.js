// 283. Move Zeroes
// Easy

// Given an array nums, write a function to move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.


var moveZeroes = function (nums) {
    return nums.toString().replace(/0/g, '9999999999999').split(',').sort((a, b) => a - b).toString().replace(/9999999999999/g, '0').split(',')

};


console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 5, 1]))