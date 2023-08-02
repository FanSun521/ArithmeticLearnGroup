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
    //若两个链表为null（递归的结束条件）
    if (list1 === null) {
        return list2
    }
    else if (list2 === null) {
        return list1
    }
    //比较头节点大小（使next指向较小值）
    else if (list1.val <= list2.val) {
        //对list1进行递归
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        //对list2进行递归
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }

};