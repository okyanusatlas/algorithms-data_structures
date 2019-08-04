const pyramid = num => {
    for (let i = 1; i <= num; i++) {
        let result = "";
        result += (" ".repeat(num - i));
        result += ("#".repeat((2 * i) - 1));
        result += (" ".repeat(num - i));
        console.log(result);
    }
};

console.log(pyramid(85));