const numbers = [4, 7, 9, 3, 6, 1];
const tripledNumbers = [];

const tripleItOld = number => number * 3;

for (const number of numbers) {
    const result = tripleItOld(number);
    tripledNumbers.push(result);
}
// console.log(tripledNumbers);

// mapping
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array
const tripledOutput = numbers.map(tripleItOld);
console.log(tripledOutput);
console.log(numbers.map(x => x * x));