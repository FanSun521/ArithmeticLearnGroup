var reverseList = function (head) {
    //判空
    if (head == null || head.next == null) {
        return head
    } else {
        //定义前一个、当前、下一个结点的指针
        let pre = null
        let cur = head
        let nextNode = cur.next
        //将链表指向反转，使cur指向上一个结点
        while (nextNode !== null) {
            cur.next = pre
            pre = cur
            cur = nextNode
            nextNode = cur.next
        }
        //尾部处理
        cur.next = pre
        return cur
    }
};