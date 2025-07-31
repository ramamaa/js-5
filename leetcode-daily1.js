// Longest subarray with maximum betwiseand 2419
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let maxNumber = nums[0];
    nums.forEach((num) => {
        if (num > maxNumber) {
            return (maxNumber = num);
        }
    });
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === maxNumber) {
            count++;
        }
    }
    return count;
};