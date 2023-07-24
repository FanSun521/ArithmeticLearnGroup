/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
var removeElements = function(head, val) {
    var node=head;
    if(node===null)
    {
        return head;
    }
    for(;node.next!==null;)
    {
        if(node.next.val===val)
        {
            node.next=node.next.next;
        }
            else
            {
                node=node.next;
            }   
    }
    if(head.val===val)
    {
        head=head.next;
    }
    return head;
};


// @lc code=end

