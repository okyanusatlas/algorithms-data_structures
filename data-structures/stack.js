//FILO

class Stack {
    // Creates the data store
    constructor(dataStore = []) {
        this.dataStore = dataStore;
    }

    add(element) {
        this.dataStore.push(element);
    }

    remove() {
        this.dataStore.pop();
    }
}
const stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
console.log(stack);
stack.remove();
console.log(stack);