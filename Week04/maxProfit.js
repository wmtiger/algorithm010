/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0;
    let m = 0;
    for(let i = 1,n=prices.length; i < n; i++){
        const p = prices[i] - prices[i-1];
        if(p>0) m+=p
    }
    return m
};