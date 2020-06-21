// 字母异位词分组

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    // 将字符串的特征值输出
    function getStr(s) {
        let arr = new Array(26).fill(0)
        for (let i = 0, n = s.length; i < n; i++) {
            arr[s.charCodeAt(i) - 97]++;
        }
        return arr.join(',');
    }

    // 直接数组法
    let hash = {}
    let idx = -1;
    let arr = [];
    for (let i = 0, n = strs.length; i < n; i++) {
        let s = getStr(strs[i]);
        if (isNaN(hash[s])) {
            hash[s] = ++idx;
        }
        if(!arr[hash[s]]) arr[hash[s]]=[];
        arr[hash[s]].push(strs[i]);
    }
    return arr;

    // hash方法
    /* let hash = {};

    for (let i = 0, n = strs.length; i < n; i++) {
        let s = getStr(strs[i]);
        if (!hash[s]) {
            hash[s] = [strs[i]];
        } else {
            hash[s].push(strs[i]);
        }
    }

    let arr = [];
    for (let key in hash) {
        arr.push(hash[key])
    }
    return arr; */

};

// let a = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
// console.log(a);
