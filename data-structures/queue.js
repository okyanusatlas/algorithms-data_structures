class Queue {
    // Creates the data store
    constructor(dataStore = []) {
        this.dataStore = dataStore;
    }

    add(element) {
        this.dataStore.push(element);
    }

    remove() {
        this.dataStore.shift();
    }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
console.log(queue);
queue.remove();
console.log(queue);