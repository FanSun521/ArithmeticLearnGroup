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
var removeElements = function (head, val) {
    //判空，返回null
    if (head == null) {
        return null
    }
    //搞一个指针指向当前节点
    let tem = head
    //如果头结点的值就是val
    if (tem.val == val) {
        //删除，直到头结点的值不是val
        while (tem.val == val && tem.next !== null) {
            tem.val = tem.next.val;
            tem.next = tem.next.next;
        }
        //删的就剩一个val了，直接返回null
        if (tem.next === null && tem.val == val) {
            return null;
        }
    }
    //一般情况
    while (tem.next) {
        //删除操作
        if (tem.next.val == val) {
            tem.next = tem.next.next
        } else {
            tem = tem.next
        }
    }
    return head
};