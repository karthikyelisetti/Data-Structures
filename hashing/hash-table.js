class Hashtable {
    constructor(s=8) {
        this.buckets = new Array(s);
        this.s = s;
    }

    hash(key) {
        // return key.toString().length % this.s;
        let sum = 0;
        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }
        let hash = sum % this.s; 

        return hash;
    }
}

// let number = 101;
// console.log(number.toString().length);