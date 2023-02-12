class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode;
        } else {
            let curr = this.root;
            while (true) {
                if (value > curr.value) {
                    if (curr.right == null) {
                        curr.right = newNode;
                        break;
                    } else {
                        curr = curr.right;
                    }
                } else if (value < curr.value) {
                    if (curr.left == null) {
                        curr.left = newNode;
                        break;
                    } else {
                        curr = curr.left;
                    }
                }
            }
        }
    }

    search (root, value) {
        if (root === null) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else {
                if (root.value > value) {
                    return this.search(root.left, value);
                } else {
                    return this.search(root.right, value);
                }
            }
        } 
    }

    getMin (node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    getMax (node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
}

const bst = new BinarySearchTree();
bst.insert(40);
// bst.insert(70);
bst.insert(60);
bst.insert(90);
bst.insert(55);
console.log(bst.root);

bst.search(bst.root,90);
console.log(bst.getMin())
console.log(bst.getMax())