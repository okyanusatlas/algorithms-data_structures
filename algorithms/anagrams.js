// check if two strings are anagrams of eachother
// they are anagram of antoher if they use same characters in the same quantity

const anagram = (str1, str2) => {

    let obj1 = objMaker(str1);
    let obj2 = objMaker(str2);

    return (equivalentObjects(obj1, obj2));

};
//test comment
const objMaker = str => {
    return str
      .toLowerCase() // make sure everything is lower case
      .trim() // cut unnecessery white spacing
      .split('') // make an array of strings
      .filter(char => isLetter(char)) // remove non letters
      .reduce((acc, curr) => {
          acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
          return acc;
      }, {}); // create an obj contains how much each letter is used
};


const equivalentObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    Object.keys(obj1).some(key => {
        return obj1[key] === obj2[key]
    });
    return true;
};

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}

console.log(anagram('rail safety', 'fairy tales'));
console.log(anagram('rAiL sAfeTY!', 'fairy tales_!'));
console.log(anagram('hi there', 'bye there'));