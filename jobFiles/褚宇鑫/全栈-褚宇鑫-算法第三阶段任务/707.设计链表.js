class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
};



var MyLinkedList = function() {
    this.head = new ListNode(0);
    this.size = 0;

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this.size||index < 0){
        return -1;
    };
    let cur = this.head;
    let i = 0;
    while(cur.next){
        cur = cur.next;
        if(i == index){
            return cur.val
        }
        i++;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val);
    let cur = this.head;
    if(cur.next == null){
        cur.next = newNode;
    }else{
        
        let tem = cur.next
        cur.next = newNode;
        newNode.next = tem;
        // console.log(cur.next);
    }
    
    
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new ListNode(val);
    let cur = this.head;
    while(cur.next){
        cur = cur.next;
    }
    cur.next = newNode;
    this.size++;
    // console.log(cur.next);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let cur = this.head;
    let value = myLinkedList.get(index);
    console.log(value);
    while(cur.next){
        if(cur.next.val == value){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
        
    }
    this.size--;
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
myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtHead(2);
myLinkedList.addAtTail(3);
console.log(myLinkedList.get(0));
myLinkedList.deleteAtIndex(0)
console.log(myLinkedList);
