/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 暴力求解
    /* for(let i = 0; i < nums.length-1;i++){
        for(j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j]==target){
                return [i, j];
            }
        }
    } */
    // hash缓存
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];
        if (!isNaN(hash[element])) {// 注意这里返回的有可能是0！
            return [hash[element], i]
        } else {
            hash[nums[i]] = i;
        }
    }
    return []
};
