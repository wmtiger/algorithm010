/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0, ten = 0;
    for (let i = 0, n = bills.length; i < n; i++) {
        let b = bills[i];
        if (b == 5) {
            five++;
        } else if (b == 10) {
            five--;
            ten++;
        } else {
            if (ten > 0) {
                ten--;
                five--
            } else {
                five -= 3;
            }
        }
        if (ten < 0 || five < 0) return false;
    }
    return true;
};

let a = lemonadeChange([10, 10]);
console.log(a);