class stack {
    constructor () {
        this.elements = [];
    }

    push(item) {
        this.elements.push(item);
    }

    pop() {
        return this.elements.pop();
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

let s = new stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s);

s.pop();
console.log(s);
console.log(s.top());
console.log(s.size());
console.log(s.string());