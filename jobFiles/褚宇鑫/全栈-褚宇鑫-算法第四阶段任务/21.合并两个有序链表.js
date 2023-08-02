/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
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
var mergeTwoLists = function(list1, list2) {
    if(list1 == null){
        return list2;
    }
    else if(list2 == null){
        return list1;
    }
    let prehead = new ListNode(0);
    let pre = prehead;
    let cur1 = list1;
    let cur2 = list2;
    while(cur1 && cur2){
        if(cur1.val <= cur2.val){
            pre.next = cur1;
            // pre = cur1;
            cur1 = cur1.next;
        }else{
            pre.next = cur2;
            // pre = cur2;
            cur2 = cur2.next;
        }
        pre = pre.next;    
    }
    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可

    // if(cur1 == null){
    //     pre.next = cur2;
    // }
    // else if(cur2 == null){
    //     pre.next = cur1;
    // }

    prev.next = l1 === null ? l2 : l1;
    return prehead.next
};
// @lc code=end

