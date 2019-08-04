const fibo = num => {
    if (num <= 2) return 1;
    return fibo(num - 2) + fibo(num - 1)
};

// console.log(fibo(10));
// console.log(fibo(9));

const fibo2 = () => {
    const memory = {};

    const calcFibo = num => {
        memory[num] = num <= 2 ? 1 : calcFibo(num - 2) + calcFibo(num - 1);
        return memory[num];
    };
    return num => {
        console.log("current memory", memory);
        if (memory[num]) {
            console.log("taking from memory");
            return memory[num];
        }
        calcFibo(num);
        return memory[num];
    };


};
const fiboWithMemory = fibo2();
console.log(fiboWithMemory(10));
console.log(fiboWithMemory(8));