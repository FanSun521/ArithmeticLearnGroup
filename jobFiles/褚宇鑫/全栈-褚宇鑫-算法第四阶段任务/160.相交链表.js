/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA,sizeA = 0;
    let curB = headB,sizeB = 0;
    let len = 0;
    
    //计算链表长度
    while(curA){
      curA = curA.next;
      sizeA++;

    }
    while(curB){
      curB.next = curB;
      sizeB++;
    }
    console.log(sizeA,sizeB);
    //移动较长链表的头指针，使其与较短链表末尾对齐的位置
    if(sizeA < sizeB){
      len = sizeB-sizeA;  
      while(len){
        curB = curB.next;
        len--;
      } 
    }else{
      len = sizeA -sizeB;
      while(len){
        curA = curA.next;
        len--;
      }
    }
    //设置变量记录移动步数,和交点值
    let step = 0,IntersectVal = 0;
    // let skipA = 0,skipB = 0;
    //开始比较节点是否相同
    while(curB){
      step++;
      if(curA.val == curB.val){
        IntersectVal = curB.val;
        break;
      }else{
        return null;
      }
    }

    return IntersectVal;
};
a = getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5])
console.log(a);
// @lc code=end

