/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (!nums) return;
    let j = 0;
    // 80ms，这方法居然慢？
    /* for (let i = 0; i < nums.length; i++) {
        if(nums[i] != 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j++] = temp;
        }
    } */

    // 68ms，这个居然更快
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j++] = nums[i];
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
};