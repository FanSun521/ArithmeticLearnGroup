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
var deleteDuplicates = function (head) {
    //判空
    if (head == null || head.next == null) {
        return head
    }
    //搞一个指针指向当前节点
    let cur = head
    //删除操作
    while (cur.next != null && cur.next.next != null) {
        //判断当前节点和下一节点的值是否一样，一样就删了，不一样就看下一个
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    //cur.next.next判断不了尾部节点，所以对结尾进行补充判断
    if (cur.val == cur.next.val) {
        cur.next = null
    }
    return head
};