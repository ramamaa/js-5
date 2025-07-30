// Longest subarray with maximum betwiseand 2419
let nums = [100, 5, 5];
function findMaxNumber(nums) {
  let maxNumber = nums[0];
  nums.forEach((num) => {
    if (num > maxNumber) {
      return (maxNumber = num);
    }
  });
  return maxNumber;
}
let maxNumber = findMaxNumber(nums);
function totalNumber(nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === maxNumber) {
      count++;
    }
  }
  return count;
}
let totalNumber1 = totalNumber(nums);
console.log(totalNumber1);
