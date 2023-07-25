//设置一个节点类
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};
//初始化链表，设置头结点和链表长度
var MyLinkedList = function () {
    this.head = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    //首先创建一个current表示现在指向的位置
    let cur = this.head
    //检测index是否合法
    if (index < 0 || index >= this.size) {
        //不合法直接return -1
        return -1
    }
    else {
        //合法的话顺着next找到索引
        while (index > 0) {
            cur = cur.next
            index--
        }
    }
    //返回索引处的值
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    //先建立一个新节点
    let newNode = new ListNode(val)
    //把原始链表接到节点后面
    newNode.next = this.head
    //把新链表放到头节点的位置上
    this.head = newNode
    //更新链表长度
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    //设置新节点
    let newNode = new ListNode(val)
    //搞一个指针指向当前节点
    let cur = this.head
    //判空操作，没有元素就直接赋值
    if (this.head == null) {
        this.head = newNode
        this.size++
    }
    else {
        //有元素就顺着next找到末尾
        while (cur.next != null) {
            cur = cur.next
        }
        //接上新节点
        cur.next = newNode
        //更新链表长度
        this.size++
    }
    // console.log(this.head)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    //判断index是否合法
    if (index < 0 || index > this.size) {
        return null
    }
    //如果index是0，那就是在头部插入，直接调用addAtHead
    else if (index == 0) {
        this.addAtHead(val)
    }
    //如果index是0，那就是在尾部插入，直接调用addAtTail
    else if (index == this.size) {
        this.addAtTail(val)
    }
    //一般情况
    else {
        //搞一个新节点
        let newNode = new ListNode(val)
        //搞一个指针指向当前节点
        let cur = this.head
        //循环到index前一个位置，在这里进行插入操作
        while (index > 1) {
            cur = cur.next
            index--
        }
        //插入新节点
        newNode.next = cur.next
        cur.next = newNode
        //更新长度
        this.size++
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    //判断index是否合法
    if (index < 0 || index >= this.size) {
        return null
    }
    //删除头结点特殊对待
    else if (index == 0) {
        //如果头结点之后还有节点就将后续链表提前
        if (this.size >= 2) {
            this.head.val = this.head.next.val
            this.head.next = this.head.next.next
        }
        //没有就直接删了吧
        else {
            this.head = null
        }
    }
    //一般情况
    else {
        //搞一个指针指向当前节点
        let cur = this.head
        //找到index前一位
        while (index > 1) {
            cur = cur.next
            index--
        }
        //如果要被删除的节点之后还有节点，就直接接上
        if (cur.next.next) {
            cur.next = cur.next.next
        }
        //没有就直接赋值null
        else {
            cur.next = null;
        }
    }
    this.size--
};