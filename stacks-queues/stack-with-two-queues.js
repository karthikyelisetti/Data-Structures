class Stacks {
    constructor() {
        this.insertionEnqueue = [];
        this.deletionDequeue = [];
    }

    insert (value) {
        this.insertionEnqueue.push(value);
    }

    delete() {
        if (this.deletionDequeue.length === 0) {
            console.log(this.insertionEnqueue.length);                        
            while (this.insertionEnqueue.length > 0) {
                let temp = this.deletionDequeue.shift();
                console.log(temp);
                this.deletionDequeue.push(temp);
            }
        }        
        return this.deletionDequeue;
    }
}

const sqqueue = new Stacks();

sqqueue.insert(10);
sqqueue.insert(20);
sqqueue.insert(30);
sqqueue.insert(40);
sqqueue.insert(50);
// console.log(sqqueue);

sqqueue.delete();
console.log(sqqueue);