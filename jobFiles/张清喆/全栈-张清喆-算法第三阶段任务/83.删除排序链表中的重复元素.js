/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var node=head;
    var arr=[];
    if(head===null)
    {
        return head;
    }   
    arr[0]=head.val; 
    while(node.next!=null)
    {
        var judge=0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]===node.next.val)
            {
                node.next=node.next.next;
                judge=1;
            }
        }
        if(judge===0)
        {
            arr.push(node.next.val);
            node=node.next;
            
        }
    }
    return head;
};