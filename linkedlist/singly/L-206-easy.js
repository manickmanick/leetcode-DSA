// Reverse linkedlist

/* My understanding and debuging below
head = 1

innerFunction starts

head = 1

->innerReverseList(1)
--> innerReverseList(2)
--->innerReverseList(3)
---->innerReverseList(4)
----->innerReverseList(5)
							here head.next = null so recursion return returns 5 and i save the reverseHead = 5.
							return and control goes to upper above callstack function.
# <----- 
head = 4
next = 5
5 -> 4
4->null
return 4
control goes to upper callstack which is (3)
# <----
head = 3
next = 4
4->3
3->null
return 3
# <---
head = 2
next = 3
3->2
2->null
return 2
# <--
head = 1
next = 2
2->1
1->null
return 1
*/

// 1.Approach - 1 (recursive approach)
var reverseList = function(head) {
    let reverseHead = null
    function innerReverseList(head){
        if(!head ||!head.next) {
            reverseHead = head;
            return head
        };
        let next =  innerReverseList(head.next);
        if(next) next.next = head;
        head.next = null;
        return head;
    }
   innerReverseList(head);
   return reverseHead;
};


// approach-2 optimized recursive approach

var reverseList = function(head) {
    if(!head || !head.next) return head
    let newReverseNode = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return newReverseNode;
};

/*
above code debugging value below.
->reverseList(1)
-->reverseList(2)
--->reverseList(3)
---->reverseList(4)
----->reverseList(5)
return 5
# <-----
head = 4
5->4
4->null
return 5
# <----
 head = 3
 4->3
 3->null
 return 5
# <---
head=2
3->2
2->null
return 5
# <--
head = 1
2->1
1->null
return 5

*/


// approach - 3 iterative approach

var reverseList = function(head) {
    let reverseHead = null
    function innerReverseList(head){
        if(!head ||!head.next) {
            reverseHead = head;
            return head
        };
        let next =  innerReverseList(head.next);
        if(next) next.next = head;
        head.next = null;
        return head;
    }
   let lastNode = innerReverseList(head);
   return reverseHead;
};
