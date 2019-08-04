const palindrome = word => {
    return word === word.split('').reverse().join('')
};

console.log(Boolean(palindrome("abba")));
console.log(Boolean(palindrome("aba")));
console.log(Boolean(palindrome("abaasd")));