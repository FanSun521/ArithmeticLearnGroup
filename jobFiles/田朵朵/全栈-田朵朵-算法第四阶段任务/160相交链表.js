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
 var getIntersectionNode = function(headA, headB) {
    var pionerA = headA;
    var pionerB = headB;
    if(headA === null || headB === null) {
        return null;
    }
    if(headA === headB) {
        return headA;
    }
    var lengthA = 0;
    var lengthB = 0;
    while(headA) {
        lengthA ++;
        headA = headA.next;
    }
    while(headB) {
        lengthB++;
        headB = headB.next;
    }
    if(lengthA > lengthB) {
        for(let i = lengthB; i < lengthA; i++) {
            pionerA = pionerA.next;
        }
    } else if(lengthA < lengthB) {
        for(let j = lengthA; j < lengthB; j++) {
            pionerB = pionerB.next;
        }
    }
    while(pionerA && pionerB) {
        if(pionerA === pionerB) {
            return pionerA;
        }
        pionerA = pionerA.next;
        pionerB = pionerB.next;
    }
};