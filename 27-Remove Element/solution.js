/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  function findNextSwapIndex(nums, swapIndex, val, currentIndex) {
    while (nums[swapIndex] === val && swapIndex > currentIndex) {
      swapIndex--;
    }
    return swapIndex;
  }

  let i = 0;
  let swapIndex = findNextSwapIndex(nums, nums.length - 1, val, i);

  if (swapIndex === 0) {
    if (nums[0] === val) {
      return 0;
    }
    return 1;
  }

  for (; i < swapIndex; i++) {
    if (nums[i] === val) {
      let temp = nums[swapIndex];
      nums[swapIndex] = nums[i];
      nums[i] = temp;
      swapIndex = findNextSwapIndex(nums, swapIndex, val, i);
    }
  }

  return swapIndex + 1;
};
