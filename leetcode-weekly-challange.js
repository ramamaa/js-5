// median of triangle
let nums = [2, 1, 3, 2, 1, 3];
// output 5
let numbers = [1, 1, 10, 10, 10, 10];
// output 20
function triangle(nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length - 2; k++) {
        let filtered = nums.filter((num) => {
          if (
            num[i] + num[j] >
            num[k]
            // num[i] + num[k] > num[j] ||
            // num[j] + num[k] > num[i]
          ) {
            return (nums = [num[i], num[j], num[k]]);
          }
        });
        return filtered;
      }
    }
  }
}
let triangleS = triangle(nums);
console.log(triangleS);
