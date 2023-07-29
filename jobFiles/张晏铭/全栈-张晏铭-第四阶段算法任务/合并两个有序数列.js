/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 == null || list2 == null) {
        return list1 == null ? list2 : list1
    }
    else {
        //我的思路
        let cur1 = list1
        let cur2 = list2
        let cur3
        if (list1.val >= list2.val) {
            while (cur2.next) {
                cur2 = cur2.next
            }
            cur2.next = cur1
            cur3 = list2
        }
        if (list1.val < list2.val) {
            while (cur1.next) {
                cur1 = cur1.next
            }
            cur1.next = cur2
            cur3 = list1
        }
        console.log(cur3)
        let cur5 = cur3
        let count = 0
        while (cur5) {
            cur5 = cur5.next
            count++
        }
        while (count > 0) {
            let pre = cur3
            let cur4 = cur3.next
            while (cur4) {
                if (cur4.val <= pre.val) {
                    let temp = pre.val
                    pre.val = cur4.val
                    cur4.val = temp
                }
                pre = pre.next
                cur4 = cur4.next
            }
            count--
        }
        return cur3


        //大佬的思路
        let l3 = new ListNode(-1)
        let cur = l3
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                cur.next = list1
                list1 = list1.next
            }
            else {
                cur.next = list2
                list2 = list2.next
            }
            cur = cur.next
        }
        return l3.next
        
    }
};