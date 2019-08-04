// return the char that is most used in the string

const maxChar = str => {
    const obj = str.split('').reduce((acc, curr) => {
        acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
        return acc;
    }, {});

    return Object.keys(obj).reduce((acc, curr) => {
        return obj[acc] > obj[curr] ? acc : curr;
    });
};

console.log(maxChar("abcccccccccccd") === "c");
console.log(maxChar("asdasdsadddddd 19999999999994") === "9");