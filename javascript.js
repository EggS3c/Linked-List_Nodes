//current commit
class Node {
  constructor(val){
    this.val = val;
    this.current = null;
  };
};

//adding nodes
const a = new Node('A'); const b = new('B'); const c = new Node('C'); const d = new Node('D');

//linking nodes
// A -> B -> C -> D -> null
a.next = b;
b.next = c;
c.next = d;

//iterative algorithm
const PrintLinkedList (headh) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  };
};

PrintLinkedList(a);


//recursive algorithm
const PrintLinkedList = (head) => {
  if(head == null){
    console.log(head.val);
    PrintLinkedList(head.next);
  };
};

PrintLinkedList(a);
