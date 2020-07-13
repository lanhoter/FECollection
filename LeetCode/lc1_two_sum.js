/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    if (!Array.isArray(nums) || Object.prototype.toString.call(target) !== "[object Number]")
        return;
    let arr = [],
        i,
        j,
        len = nums.length;
    for (i = 0; i < len; ++i) {
        j = arr[target - nums[i]];
        if (j !== undefined) return [j, i];
        arr[nums[i]] = i;
    }
}


let twoSum2 = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
      if (map.has(nums[i])) {
        return [map.get(nums[i]), i];
      } else {
        map.set(target - nums[i], i);
      }
    }
  };

console.log(twoSum([3, 3], 6))