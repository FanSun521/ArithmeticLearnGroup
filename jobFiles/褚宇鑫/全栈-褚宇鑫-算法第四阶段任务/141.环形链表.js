/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //先判断是否为空链表或只有一个元素的链表
    if(head == null || head.next == null){
        return false;
    };
    //定义快慢指针
    let fast = head;
    let slow = head,slowStep = 0;
    /*
        循环条件中先要判断fast不能为null，因为fast = fast.next.next时，他移动两步后的指针
        有可能会直接指null，从而会使得fast变为null后没有next属性而报错
            之后判断他的下一个指针是否为空即可
    */
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        // slowStep++;
        if(fast == slow){
            console.log(slowStep)
            return true;
        }
    }
    
    return false;
};
// @lc code=end

