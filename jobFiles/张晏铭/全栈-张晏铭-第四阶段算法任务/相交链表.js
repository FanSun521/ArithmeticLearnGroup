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
var getIntersectionNode = function (headA, headB) {
    let ha = headA
    let hb = headB
    let countA = 0
    let countB = 0
    while (ha) {
        ha = ha.next
        countA++
    }
    while (hb) {
        hb = hb.next
        countB++
    }
    ha = headA
    hb = headB
    if (countA >= countB) {
        let count = countA - countB
        while (count > 0) {
            ha = ha.next
            count--
        }
        while (countB > 0) {
            if (ha === hb) {
                return hb
            }
            ha = ha.next
            hb = hb.next
            countB--
        }
        return null
    }
    if (countA < countB) {
        let count = countB - countA
        while (count > 0) {
            hb = hb.next
            count--
        }
        while (countA > 0) {
            if (ha === hb) {
                return ha
            }
            ha = ha.next
            hb = hb.next
            countA--
        }
        return null
    }
};