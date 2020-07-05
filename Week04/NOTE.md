学习笔记

使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方

思路：每次查找都和左右边界进行比较，最后可以找到旋转点

先找到旋转点，然后再分左右进行查找，或者直接将旋转点两端连接成新数组查找

``` js
var searchSort2 = function (arr) {
    let left = 0, right = arr.length - 1;
    let mid = 0;
    while (left <= right) {
        if (right - left == 1) {
            return right;
        }
        mid = left + ((right - left) >> 1);
        if (arr[mid] > left) {
            // 旋转点在右边
            left = mid;
        } else {
            // 旋转点在左边
            right = mid;
        }
    }
    return -1
}
```