class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }    
}

class tree {
    constructor (value) {
        this.root = null;
    }

    insert (value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let curr = this.root;
            while (true) {
                if (value < curr.value) {
                    if (curr.left == null) {
                        curr.left = newNode;
                        break;
                    } else {
                        curr = curr.left;
                    }
                } else if (value > curr.value) {
                    if (curr.right == null) {
                        curr.right = newNode;
                        break;
                    } else {
                        curr = curr.right;
                    }
                }
            }                       
        }
    }

    inorder (node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    preorder (node) {
        if (node != null) {
            console.log(node.value);
            this.preorder(node.left);            
            this.preorder(node.right);
        }
    }

    postorder (node) {
        if (node != null) {            
            this.postorder(node.left);            
            this.postorder(node.right);
            console.log(node.value);
        }
    }

    printArray () {
        let arr = [];
        this.inorder (node => {
            arr.push(node.value);
        })
        return arr;
    }

}

const bst = new tree();

bst.insert(70);
bst.insert(40);
bst.insert(20);
bst.insert(60);
bst.insert(55);
bst.insert(85);
bst.insert(80);
bst.insert(90);

console.log(bst.root);

console.log(bst.inorder(bst.root));
// console.log(bst.preorder(bst.root));
// console.log(bst.postorder(bst.root));

console.log(bst.printArray());