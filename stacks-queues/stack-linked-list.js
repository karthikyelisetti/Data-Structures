class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor(value) {
        this.head = {value: value, next: null};
        this.tail = this.head;
        this.length = 1;
    }

    add(value) {
        let temp;
        const newNode = new Node(value);
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

    remove() {
        let temp;
        if (this.head == null) {
            return null;
        } else {
            temp = this.head;
            this.head = this.head.next;
        }
        this.length--;
        return temp.value;
    }
}

const s = new StackLinkedList();

s.add(21);
s.add(22);
s.add(28);
s.add(3);
console.log(s);

s.remove();
console.log(s);