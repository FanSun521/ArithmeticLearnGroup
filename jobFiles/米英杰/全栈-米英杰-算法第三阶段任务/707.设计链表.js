/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var Node = function (val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function () {
    this.head = null
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
    //查询索引越界
    if (this.size === 0 || index < 0 || index >= this.size) {
        return null
    }
    let cur = this.head
    for (let i = 0; i < index; i++) {
        cur = cur.next
    }
    return cur
};
MyLinkedList.prototype.get = function (index) {
    return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new Node(val)
    if (this.size == 0) {
        this.head = node
    }
    else {
        node.next = this.head
        this.head = node
    }
    this.size++

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new Node(val)
    if (this.size === 0) {
        this.head = node
    } else {
        let cur = this.getNode(this.size - 1)
        cur.next = node
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    //越界处理
    if (index < 0 || index > this.size) {
        return
    }
    let node = new Node(val)
    if (index === 0) {
        node.next = this.head
        this.head = node
    } else {
        let pre = this.getNode(index - 1)
        node.next = pre.next
        pre.next = node
    }
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.size === 0 || index < 0 || index >= this.size) {
        return
    }
    let cur = this.head
    if (index === 0) {
        this.head = cur.next
    } else {
        let pre = this.getNode(index - 1)
        cur = pre.next
        pre.next = cur.next
    }
    this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */