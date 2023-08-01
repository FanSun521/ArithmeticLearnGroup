// function ListNode(val, next) {      //初始化节点
//   this.val = (val === undefined ? 0 : val);        // 元素
//   this.next = (next === undefined ? null : next);   //指向下一个的指针
// }
class Node {
  //初始化节点
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class MyLinkedList {
  //初始化链表
  constructor() {
    this.size = 0; //初始化长度为0 ；
    this.head = null;
  } //头指针head为null

  get(index) {
    if (index < 0 || index >= this.size) {
      //如果是非法数值直接返回 -1
      return -1;
    }
    let current = this.head;
    for (let i = 0; i <= index - 1; i++) {
      current = current.next;
    }
    return current.element;
  }

  addAt(element) {
    // 在头或尾增加链表
    let node = new Node(element);
    if (this.head === null) {
      //链表为空时，附加节点
      this.head = node;
    } else {
      let current = this.getNode(this.size - 1);
      current.next = node;
    }
    this.size++;
  }

  //   addAtTail(element) {
  //     let node = new Node(element);
  //     if (this.head != null) {
  //       //链表不为空时，加节点
  //       let current = this.getNode(this.size - 1);
  //       current.next = node;
  //     }
  //     this.size++; //增加长度
  //   }

  addAtIndex(index, element) {
    if (index < 0 || index > this.size) {
      throw Error("out range");
    }
    let node = new Node(element);

    if (index === 0) {
      //向前添加
      //  向前创建节点
      node.next = this.head; // 创建的节点的next指原本的节点
      this.head = node; //  将head指针指向新建节点
    } else {
      let pre = this.getNode(index - 1);
      node.next = pre.next; //将前一位指向后一位的的指针变为新建节点指向后一位的指针
      pre.next = node; //将将前一位指向后一位的的指针变为指向新建节点的指针
    }
    this.size++; //增加长度
  }

  deleteAtIndex = function (index) {
    //删除链表
    if (index < 0 || index >= this.size) {
      throw Error("out range");
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let pre = this.getNode(size - 1);
      current = pre.next;
      pre.next = current.next;
    } 
    this.size--;
  };

  getNode(index) {
    //获取指定位置的值
    if (index < 0 || index >= this.size) {
      throw Error("out range");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

let ll = new MyLinkedList();
ll.addAt(1);
ll.addAt(2);

ll.addAtIndex(2, 3);
ll.addAtIndex(3, 4);
ll.addAtIndex(3, 2);

ll.deleteAtIndex(0);

console.log(ll.get(3));
console.dir(ll, {
  depth: 100,
});
