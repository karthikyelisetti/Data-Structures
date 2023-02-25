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

    inorderArr = [];
    inorder (node) {
        if (node !== null) {
            this.inorder(node.left);
            this.inorderArr.push(node.value);
            // console.log(node.value);
            this.inorder(node.right);
        }
        // console.log(this.inorderArr);
    }

    preorderArr = [];
    preorder (node) {
        if (node != null) {
            this.preorderArr.push(node.value);
            // console.log(node.value);
            this.preorder(node.left);            
            this.preorder(node.right);
        }
    }

    postorderArr = [];
    postorder (node) {
        if (node != null) {            
            this.postorder(node.left);            
            this.postorder(node.right);
            this.postorderArr.push(node.value);
            // console.log(node.value);
        }
    }

    traversal(p) {
        let inorder = (node) => {
            if (node.left !== null){
                inorder(node.left);
            }
            inorder(this.root);
            if (node.right !== null) {
                inorder(node.right);
            }
        }
    }

    printArray () {
        let arr = [];
        this.inorder (node => {
            arr.push(node.value);
        })
        return console.log(arr);
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
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

// console.log(bst.root);
console.log("In-order: ", bst.inorderArr);
console.log("Pre-order: ", bst.preorderArr);
console.log("Post-order: ", bst.postorderArr);