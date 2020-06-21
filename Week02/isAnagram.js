// 有效的字母异位词

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s == t) return true;
    if (s.length != t.length) return false;

    let arr = new Array(26).fill(0);
    for (let i = 0, n = s.length; i < n; i++) {
        arr[s.charCodeAt(i) - 97]++;
        arr[t.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (arr[i] != 0) return false;
    }
    return true;
};