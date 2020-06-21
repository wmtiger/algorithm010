// N 叉树的层序遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    // 首次想到的方法,遍历
    /* let list = [];
    let idx = 0;
    let arr = [root];
    let next = []
    while (arr.length) {
        let n = arr.shift();
        if (!list[idx]) list[idx] = [];
        list[idx].push(n.val);
        if (n.children && n.children.length) {
            next.push(...n.children);
        }
        if (!arr.length && next.length) {
            arr = next;
            next = []
            idx++;
        }
    }
    return list; */

    // 参考题解后的递归
    let list = [];

    function helper(node, level){
        if(!node) return;
        list[level] = list[level] || [];
        list[level].push(node.val);
        // 这里for的遍历，时间耗时比forEach少？为啥？
        for(let i = 0,n=node.children.length; i < n;i++){
            helper(node.children[i],level+1)
        }
        // node.children.forEach(n=>{
        //     helper(n, level+1);
        // })
    }

    helper(root,0)

    return list;
};