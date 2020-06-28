/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let arr = []
    function gen(left, right, s) {
        if (s.length >= 2 * n) {
            arr.push(s);
            return;
        }

        if (left < n) {
            gen(left+1, right, s + '(')
        }
        if (right < left){
            gen(left, right+1, s + ')')
        }

    }

    gen(0, 0, '')
    return arr;

};