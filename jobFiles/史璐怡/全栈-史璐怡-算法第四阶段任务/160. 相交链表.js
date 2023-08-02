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
    let p = headA, q = headB;
    if(!headA || !headB){
        return null;
    }
    if(headA === headB){
        return headA;
    }
    
    let lenA = 0, lenB = 0;
    while(headA){
        lenA++;
        headA = headA.next;
    }
    while(headB){
        lenB++;
        headB = headB.next;
    }
    // 计算差值，长链表先走差值，再同时移动
    if(lenA>lenB){
        for(let i=lenB;i<lenA;i++){
            p = p.next;
        }    
    }else if(lenA<lenB){
        for(let i=lenA;i<lenB;i++){
            q = q.next;
        }
    }
    while(p && q){
    if (p === q){
        return p;
    }
    p = p.next;
    q = q.next;
    }
};