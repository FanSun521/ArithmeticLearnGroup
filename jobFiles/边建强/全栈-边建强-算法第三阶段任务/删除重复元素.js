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
var deleteDuplicates = function(head) {
    let current = head
    let arr=[]
    let pre = current
    while(current!== null){
        if(arr.indexOf(current.val) !== -1 ){
            pre.next = current.next
        }else{
            arr.push(current.val)
            pre = current
        }
        current = current.next
    }
    return head
    };