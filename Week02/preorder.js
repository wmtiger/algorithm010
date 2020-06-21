/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// N 叉树的前序遍历

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    var arr = [];

    // 递归
    function helper(root){
        if(!root) return;
        arr.push(root.val);
        root.children.forEach(n=>{
            helper(n);
        })
    }

    helper(root)

    // 遍历
    /* function loop(root) {

        if (!root) return;
        arr.push(root.val)
        root.children.forEach(n => {
            loop(n);
        })
    }

    loop(root) */
    return arr;
};