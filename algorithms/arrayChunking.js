// Given an array and chunk size, divide array into many subarrays where each subarray is of length size

const chunk = (arr, size) => {
    //remaning array length > size ? add new array with "size" length into results array, continue on result array
    let result = [];
    const chunker = arr => {
        if (arr.length > size) {
            result.push(arr.splice(0, size));
            chunker(arr);
        } else {
            result.push(arr);
        }
    };
    chunker(arr);


    return result;


};

console.log(chunk([1, 2, 3, 4], 1));
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));