class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    setRoot(node) {
        this.root = node;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
node1.add(node2);
node1.add(node3);
node1.add(node4);
node2.add(node5);
node2.add(node6);
node3.add(node7);
node4.add(node8);
node4.add(node9);
node4.add(node10);
node4.add(node11);
const tree = new Tree();
tree.setRoot(node1);
const fn = num => console.log(num.data);
console.log(tree.traverseBF(fn));