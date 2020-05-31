/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // set the prev, current to null head
    let [prev, current] = [null, head]
    
    // iterate through current 
    
    // current.next = prev
    // prev = current
    // current = current.next
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    
    // return the head
    return prev;
};