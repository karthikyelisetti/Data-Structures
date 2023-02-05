class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    const newNode = new Node(value);
    if (this.head == null) {
        this.head = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    return this;
  }
}

let l1 = new LinkedList(1);
l1.append(2);
l1.append(3).append(4).append(5);
console.log(l1);
