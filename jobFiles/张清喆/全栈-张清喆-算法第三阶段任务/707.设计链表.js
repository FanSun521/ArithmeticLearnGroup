/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start



class linknode{
    constructor(val,index=null)
    {
        this.val=val;
        this.index=index;
    }
}

var MyLinkedList = function() {
    this.size=0;
    this.head=null;
    this.tail=null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0||index>=this.size)
    {
        return -1;
    }
    else
    {
        var node=this.head;
        for(var i=0;i<index;i++)
        {
            node=node.index;
        }
        return node.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node=new linknode(val);
    if(this.size===0)
    {
        this.head=node;
        this.tail=node;
    }
    else
    {
        node.index=this.head;
        this.head=node;
    }
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node=new linknode(val,null);
    if(this.size===0)
    {
        this.tail=node;
        this.head=node;
    }
    else
    {
        
        this.tail.index=node;
        this.tail=node;
        console.log(this.tail);
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<0||index>this.size)
    {
        return null;
    }
    else if(index===this.size)
    {
        this.addAtTail(val);
    }
    else if(index===0)
    {
        this.addAtHead(val);
    }
    else
    {
        var node=new linknode(val);
        var temp=this.head;
        for(var i=0;i<index-1;i++)
        {
            temp=temp.index;
        }
        node.index=temp.index;
        temp.index=node;
        this.size++;
    }
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0||index>=this.size)
    {
        return null;
    }
    else if(index===0)
    {
        this.head=this.head.index;
        if(this.size===1)
        {
            this.tail=null;
        }
    }
    else
    {
        var temp=this.head;
        for(var i=0;i<index-1;i++)
        {
            temp=temp.index;
        }
        temp.index=temp.index.index;
        if(index===this.size-1)
        {
            this.tail=temp;
        }
    }
    this.size--;
};


// @lc code=end

