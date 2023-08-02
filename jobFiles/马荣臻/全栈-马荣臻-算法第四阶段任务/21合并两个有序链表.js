var mergeTwoLists = function (list1, list2) {
    //定义list3为合并后的链表，并设置三个指针指向当前结点
    let list3 = new ListNode(0)
    let cur1 = list1
    let cur2 = list2
    let cur3 = list3
    //判空操作
    if (list1 == null) {
        return list2
    }
    else if (list2 == null) {
        return list1
    }
    //一般情况
    else {
        //当两个链表当前结点都不为空时，执行比较，小的结点优先排列
        while (cur1 !== null && cur2 !== null) {
            if (cur1.val <= cur2.val) {
                cur3.next = cur1
                cur1 = cur1.next
            } else {
                cur3.next = cur2
                cur2 = cur2.next
            }
            cur3 = cur3.next
        }
        //当有一个链表已经结束时，退出上一个while循环，进入下面这两个循环，将不为空的链表走完
        while (cur1 !== null) {
            cur3.next = cur1
            cur1 = cur1.next
            cur3 = cur3.next
        }
        while (cur2 !== null) {
            cur3.next = cur2
            cur2 = cur2.next
            cur3 = cur3.next
        }
    }
    return list3.next
};