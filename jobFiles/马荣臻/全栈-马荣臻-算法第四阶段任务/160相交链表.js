var getIntersectionNode = function (headA, headB) {
    //两个指向当前结点的指针
    let curA = headA, curB = headB
    //两个链表的长度
    let sizeA = 0, sizeB = 0
    //先测算两个链表的长度
    while (curA !== null) {
        curA = curA.next
        sizeA++
    }
    while (curB !== null) {
        curB = curB.next
        sizeB++
    }
    //指针拨回头结点
    curA = headA
    curB = headB
    //由于判断链表是否相交不需要管最长的链表多出来的那一部分，所以舍去
    if (sizeA > sizeB) {
        while (sizeA - sizeB > 0) {
            curA = curA.next
            sizeA--
        }
    }
    else if (sizeB > sizeA) {
        while (sizeB - sizeA > 0) {
            curB = curB.next
            sizeB--
        }
    }
    //开始判断，如果有相同结点则证明有相交
    while (curA !== null) {
        if (curA == curB) {
            return curA
        } else {
            curA = curA.next
            curB = curB.next
        }
    }
    return null
};