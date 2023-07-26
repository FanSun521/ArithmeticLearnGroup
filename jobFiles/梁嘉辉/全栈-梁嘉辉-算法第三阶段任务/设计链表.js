var MyLinkedList = function() {
  this.size=0;//链表初始化
  this.head=new ListNode(0);
};


MyLinkedList.prototype.get = function(index) {
    //判断下标是否有效，无效则返回-1
    if (index < 0 || index >= this.size) {
        return -1;
    }
    //从头部节点开始循环，直到找到index对应的节点
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    //index比链表长度大，则无返回值，该节点不会插入到链表中
    if (index > this.size) {
        return;
    }
    index = Math.max(0, index);
    this.size++;
    let pred = this.head;
    //遍历链表找到对应节点
    for (let i = 0; i < index; i++) {
        pred = pred.next;
    }
    let toAdd = new ListNode(val);
    // 让新插入的节点的后继节点成为插入节点前节点的原后继节点
    toAdd.next = pred.next;
    // 让新插入节点前的节点的后继节点成为新插入的节点
    pred.next = toAdd;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    this.size--;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
        pred = pred.next;
    }
    pred.next = pred.next.next;
};
