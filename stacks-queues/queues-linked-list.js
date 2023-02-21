class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

class QueuesLinkedList {
    constructor(value) {
        this.head = {value: value, next: null};
        this.tail = this.head;
        this.length = 1;
    }

    enqueue(value) {
        const newNode = new Node(value);
        let temp;
        if (this.head == null) {
            this.head = this.tail = value;
        }else {
            temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
        return this;
    }

    dequeue() {}
}