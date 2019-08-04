const reverseInteger = num => {
    if (num >= 0) {
        return Number(String(num).split('').reverse().join(''))
    } else {
        return Number("-" + String(num).slice(1).split('').reverse().join(''))
    }
};

console.log(reverseInteger(32) === 23);
console.log(reverseInteger(36) === 63);
console.log(reverseInteger(-36) === -63);
console.log(reverseInteger(-21) === -12);
console.log(reverseInteger(500) === 5);
console.log(reverseInteger(0) === 0);
console.log(reverseInteger(789123) === 321987);