var MyLinkedList = function () {
    //初始化链表
    this.length = 0;
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */

//根据下标获取值
MyLinkedList.prototype.get = function (index) {
    //index是否在范围内
    if (index < 0 || index >= this.length) {
        return -1
    }
    //遍历链表找到index位置
    let cur = this.head;
    let curIndex = 0;
    while (curIndex < index) {
        cur = cur.next;
        curIndex++
    }
    //返回index对应的值
    return cur.val
};


/** 
 * @param {number} val
 * @return {void}
 */

//添加头节点
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val)
    //若无头节点
    if (!this.head) {
        this.head = newNode
    } else {
        //头节点已存在
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */

//链表尾部添加节点
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new Node(val)
    //若无头节点
    if (!this.head) {
        this.head = newNode
    } else {
        //头节点已存在
        let cur = this.head;
        let curIdex = 0;
        let pre = null;
        //遍历链表找到尾部
        while (curIdex < this.length) {
            pre = cur
            cur = cur.next;
            curIdex++;
        }
        pre.next = newNode
    }
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */

//指定位置插入节点
MyLinkedList.prototype.addAtIndex = function (index, val) {
    //index是否在范围内
    if (index < 0 || index > this.length) {
        return -1
    }
    const newNode = new Node(val)
    //若index === 0
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        //若index != 0
        let cur = this.head;
        let curIdex = 0;
        let pre = null;
        //遍历列表找到index的对应位置
        while (curIdex < index) {
            pre = cur;
            cur = cur.next;
            curIdex++
        }
        pre.next = newNode;
        newNode.next = cur;
    }
    this.length++
};

/** 
 * @param {number} index
 * @return {void}
 */

//删除指定位置节点
MyLinkedList.prototype.deleteAtIndex = function (index) {
    //判断index是否在范围内
    if (index < 0 || index >= this.length) {
        return -1
    }
    //若index === 0
    if (index === 0) {
        this.head = this.head.next
        this.length--
    } else {
        //若index ！= 0
        let cur = this.head;
        let curIdex = 0;
        let pre = null;
        while (curIdex < index) {
            pre = cur
            cur = cur.next
            curIdex++
        }
        pre.next = cur.next
        this.length--
    }
};

//节点类
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/