var removeDuplicates = function (nums) {
    var a = [...new Set(nums)];
    for (var i = 0; i < a.length; i++) nums[i] = a[i];
    return a.length;
};


console.log(removeDuplicates([1, 1, 2]))