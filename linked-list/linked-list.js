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

  print = () => {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push (currentNode.value);
      currentNode = currentNode.next;
    }
    return arr.join(" - ");
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

  prepend = (value) => {
    const newNode = new Node(value);
    if (this.head == null) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    return this;
  }

  insert = (index, value) => {
    const newNode = new Node(value);
    let count = 1;
    let currentNode = this.head;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;    
    return this;
  }

  deleteTail = () => {
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }

  deleteHead = () => {
    this.head = this.head.next;
    this.length--;
  }

  deleteNode = (index) => {
    let currentNode = this.head;
    let counter = 1;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
    return this;
  }

  search = (key) => {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value == key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

let l1 = new LinkedList(1);
l1.append(2);
l1.append(3).append(4).append(5);
console.log(l1);

l1.prepend(20);
console.log(l1);

l1.insert(1, 100);
console.log(l1);

console.log(l1.print());

l1.deleteNode();
console.log(l1);

console.log(l1.print());
