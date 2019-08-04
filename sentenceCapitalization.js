// capitalize first letter of each word
const capitalize = str => {
    return str
      .split(" ")
      .map(word => {
          return word[0].toUpperCase() + word.slice(1, word.length)
      })
      .join(" ");
};

console.log(capitalize("a lazy guy"));