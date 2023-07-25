/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head == []) {
        return []
    }
    else {
        function getCount() {
            let trial = head
            let count = 0
            while (trial != null) {
                trial = trial.next
                count++
            }
            return count
        }
        let count = getCount()
        let key = val
        function deleteSingle(countR) {
            let trial = head
            for (let i = 0; i <= countR - 1; i++) {
                if (trial.val == key) {
                    if (i == 0) {
                        head = head.next
                    }
                    else {
                        let j = i - 1
                        let pre = head
                        while (j > 0) {
                            pre = pre.next
                            j--
                        }
                        pre.next = trial.next
                    }
                    return true
                }

                trial = trial.next

            }
            return false
        }
        while (1) {
            let res = deleteSingle(count)
            if (res == false) {
                break
            }
            count--
        }
        return head

    }

};