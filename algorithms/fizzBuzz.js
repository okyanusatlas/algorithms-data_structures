//console.log everything from 1 to n
// for multiples of 3 print fizz, for multiples of 5 buzz, for 15 fizzbuzz

const fizzbuzzer = num => {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log("fizzbuzz");
        if (i % 3 === 0) console.log("fizz");
        if (i % 5 === 0) console.log("buzz");
        else console.log(i);
    }
};

console.log(fizzbuzzer(100));