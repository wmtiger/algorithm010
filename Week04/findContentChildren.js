/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // 将两个数组排序，然后用两个下标不断判断
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let gi = 0, si = 0;
    while (si < s.length && gi <g.length) {
        if (s[si] >= g[gi]) {
            gi++;
        }
        si++;
    }
    return gi;
};

let n = findContentChildren([1, 6, 4, 2, 3], [1, 1, 3, 5, 8, 9, 10, 33]);
console.log(n);