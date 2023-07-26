var LinkNode = function(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var cur = this.head
    var i = 0
    while (cur) {
        if (i === index) {
            return cur.val
        }
        i++
        cur = cur.next
    }
    return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var newNode = this.head;
    this.head = new LinkNode(val);
    this.head.next = newNode;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(!this.head) {
        this.head = new LinkNode(val);
        return;
    }
    var cur = this.head;
    while(cur.next) {
        cur = cur.next;
    }
    cur.next = new LinkNode(val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new LinkNode(val);
    if(index < 0) {
        return;
    }
    if(index === 0) {
        newNode.next = this.head;
        return;
    }
    let cur = this.head;
    let count = 0;
    let temp = null;
    while(cur !== null && count < index) {
        temp = cur;
        cur = cur.next;
        count++;
    }
    if(count === index) {
        temp.next = newNode;
        newNode.next = cur;
    } else {
        return;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) {
        return;
    }
    if(index === 0) {
        this.head = this.head.next;
    }
    if(index === this.size - 1) {
        this.tail = this.head;
        this.size--;
        return;
    }
    let cur = this.head;
    while(index-- >= 0) {
        cur = cur.next;
        this.size--;
    }
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