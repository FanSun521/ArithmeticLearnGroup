var hasCycle = function (head) {
    //双指针
    let cur = head, point = head, size = 0
    //判空
    if (head == null) {
        return false
    }
    //遍历链表
    while (cur.next !== null) {
        //每一次都令point从头开始
        point = head
        //判断链表是否重复出现同一个结点，如果是，则证明有环
        for (let index = 0; index <= size; index++) {
            if (cur.next === point) {
                return true
            } else {
                point = point.next
            }
        }
        //进行下一次遍历
        cur = cur.next
        size++
    }
    return false
};