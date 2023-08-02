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

//暴力强行解法，将headA与headB都遍历进行对比，时间复杂度爆炸
var getIntersectionNode = function (headA, headB) {
    //若headA或headB为null
    if(headA === null || headB === null){
        return 0
    }
    let curA = headA
    //对headA进行遍历
    while(curA){
        let curB = headB
        //对headB进行遍历
        while (curB) {
            //若两者后续相交
            if(curA === curB){
                return curA
            }
            curB = curB.next
        }
        curA = curA.next
    }
};