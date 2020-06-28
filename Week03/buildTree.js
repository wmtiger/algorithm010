/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    if (preorder.length != inorder.length || !preorder.length) return null;

    let n = new TreeNode(preorder[0]);

    function helper(node, preorder, inorder) {
        if (!preorder.length) return node;

        let leftPre = []
        let rightPre = []
        let leftIn = []
        let rightIn = []
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] == node.val) {
                let leftNum = i - 0;
                leftPre = preorder.slice(1, 1 + leftNum)
                rightPre = preorder.slice(1 + leftNum)
                leftIn = inorder.slice(0, leftNum)
                rightIn = inorder.slice(i+1)
                if (leftPre.length) {
                    node.left = new TreeNode(leftPre[0])
                } 
                if (rightPre.length) {
                    node.right = new TreeNode(rightPre[0])
                }
                break;
            }
        }

        helper(node.left, leftPre, leftIn)
        helper(node.right, rightPre, rightIn)
    }

    helper(n, preorder, inorder);

    return n;
};

let n = buildTree([3, 9, 20, 15, 7],
    [9, 3, 15, 20, 7]);
console.log(n);
