// function should accept a postive number num.
// should console log a step shape
// make sure step has spaces on the right hand side

const stepPrinter = num => {

    for(let i = 1; i <=num; i++) {
        let result = "";

        result += ("#".repeat(i));
        result += (" ".repeat(num - i));
        console.log(result);
    }
};

console.log(stepPrinter(5));