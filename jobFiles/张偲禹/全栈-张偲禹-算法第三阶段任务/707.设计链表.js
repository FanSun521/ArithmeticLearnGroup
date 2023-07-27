// 这个题还是有些许不懂
var MyLinkedList = function () {
    this.size = 0;
    this.head = new ListNode(0);
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // 1.下标无效
    if(index < 0 || index > this.size){
        return -1;
    }
    // 2.获取当前节点
    let temp = this.head;
    for(let i = 0; i <= index;i++){
        temp = temp.next;
    }
    return temp.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // 调用addAtIndex函数
    this.addAtIndex(0,val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // 调用addAtIndex函数
    this.addAtIndex(this.size,val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size){
        return;
    }
    this.size ++;
    let pred = this.head;
    for(let i =0;i <index; i ++){
        pred = pred.next;
    }
    let add = new ListNode(val);
    add.next = pred.next;
    pred.next = add;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size){
        return;
    }
    this.size--;
    let pred = this.head;
    for(let i = 0;i <index;i++){
        pred = pred.next;
    }
    pred.next = pred.next.next;
};

class ListNode{
    constructor(val,next){
        this.val = (val === undefined? 0 :val)
        this.next = (next === undefined? null : next)
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