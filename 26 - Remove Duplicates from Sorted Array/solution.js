/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let current = nums[0];
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== current) {
            nums[index++] = nums[i];
            current = nums[i];
        }
    }
    return index;
};
