/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const map = new Map();
    
    node = head;
    
    while(node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    
    // map is now a copy of node
    
    node = head;
    
    while(node) {
        const copy = map.get(node);
        copy.next = map.get(node.next) || null;
        copy.random = map.get(node.random) || null;
        node = node.next;
    }

    return map.get(head)
};

function copyRandomList(head) {
  const copies = [];
  let [node, i] = [head, 0];

  while (node) {
    copies.push(new Node(node.val));
    node.i = i;
    node = node.next;
    i++;
  }

  [node, i] = [head, 0];

  while (node) {
    const copy = copies[i];
    copy.next = node.next ? copies[node.next.i] : null;
    copy.random = node.random ? copies[node.random.i] : null;
    node = node.next;
    i++;
  }

  copies.forEach(node => delete node.i);

  return copies[0];
}