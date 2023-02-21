class queues {
    constructor() {
        this.elements = [];
    }

    enqueue(item) {
        this.elements.push(item);
    }

    dequeue() {
        return this.elements.shift();
    }

    top() {
        return this.elements[this.elements.length-1];
    }

    size() {
        return this.elements.length;
    }

    string() {
        return this.elements.toString();
    }
}

let q = new queues();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q);

q.dequeue();
console.log(q);