// find amount of vowels

const vowels= "aeiou";

const vowelCount = str => {
    return str.split("")
      .filter(letter => vowels.includes(letter))
      .length;
};

console.log(vowelCount("abcde"));