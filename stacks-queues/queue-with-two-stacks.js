class Queue {
    constructor() {
        this.insertionStack = [];
        this.deletionStack = [];
    }

    enqueue(value) {
        this.insertionStack.push(value);
    }

    dequeue() {
        if(this.deletionStack.length === 0) {
            while(this.insertionStack.length > 0) {
                let temp = this.insertionStack.pop();
                this.deletionStack.push(temp);
            }
        }
        let popped = this.deletionStack.pop();
        while(this.deletionStack.length > 0) {
            let temp = this.deletionStack.pop();
            this.insertionStack.push(temp);
        }

        return popped;
    }
}

const qsstack = new Queue();

qsstack.enqueue(10);
qsstack.enqueue(20);
qsstack.enqueue(30);
qsstack.enqueue(40);
qsstack.enqueue(50);                                                                                                                                                                                                                                                                                                
qsstack.enqueue(60);

qsstack.dequeue();
console.log(qsstack);