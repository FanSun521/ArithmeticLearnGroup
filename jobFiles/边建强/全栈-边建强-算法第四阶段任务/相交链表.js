/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var    getListLen = function (head){
    var len = 0
    if(head !== null){
    while(head){
        head = head.next
        len++
    }}
    return len
    }
var getIntersectionNode = function(headA, headB) {
    curA = headA
    curB = headB
    lenA = getListLen(headA)
    lenB = getListLen(headB)
    if(lenA < lenB){
        [curA , curB] = [curB , curA];
        [lenA , lenB] = [lenB , lenA]
    }
    let i = lenA-lenB
    while(i--  >0){
        curA = curA.next
    }
    while(curA && curA!==curB){
        curA = curA.next
        curB = curB.next
    }
    return curA

};