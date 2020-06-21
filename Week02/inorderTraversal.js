/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let arr = []
    function loop(node) {
        if(!node)return;
        loop(node.left);
        arr.push(node.val);
        loop(node.right);
    }
    loop(root);
    return arr;
};