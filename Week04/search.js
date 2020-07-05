/**
 * 有bug，待修复
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    let mid = 0;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (target == nums[mid]) {
            return mid;
        }
        if (nums[mid] >= nums[left]) {
            // 旋转点在右边
            if (nums[mid] > target) {
                if (target == nums[left]) {
                    return left;
                } else if (target > nums[left]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                left = mid + 1;
            }
        } else {
            // 旋转点在左边
            if (target == nums[left]) {
                return left;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1
};

let arr = [7, 8, 9, 11, 14, 15, 17, 2, 4, 5, 6]
arr = [8,9,2,3,4]
let tar = 9
// for (let i in arr) {

//     console.log(i, arr[i], search(arr, arr[i]))
// }
console.log(search(arr, tar))