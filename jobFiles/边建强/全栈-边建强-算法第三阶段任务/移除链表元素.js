/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head
    let pre = null
    
    while(current !== null){
        if(current.val === val){
            if(pre === null){
            head = current.next
        }else{
            pre.next = current.next
        }
    }else{
        pre = current
    }
    current = current.next
    }
    return head
    };