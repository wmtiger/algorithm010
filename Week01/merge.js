/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    /* let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    for(let a = 0; a<=j;a++){
        nums1[a] = nums2[a];
    } */

    // 优化
    while (n > 0 && m > 0) {
        nums1[m + n - 1] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
    }
    while (n > 0) {
        nums1[n - 1] = nums2[--n];
    }
};

let test = [4, 0, 0, 0, 0, 0]

merge(test,
    1,
    [1, 2, 3, 5, 6],
    5)
console.log(test);
