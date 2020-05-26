/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];
    
    if (!root) return [null];
    
    function addNode(node) {
        res.push(node.val);
        
        if (!node.left) {
            res.push(null);
        } else {
            addNode(node.left);
        } 
        
        if (!node.right) {
            res.push(null);
        } else {
            addNode(node.right);
        }
    }
    
    addNode(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function deserial() {
        const val = data.shift();
        
        if (val === null) {
            return null;
        } else {
            let newNode = new TreeNode(val);
            newNode.left = deserial();
            newNode.right = deserial();
            return newNode;
        }
    }
    
    return deserial();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}