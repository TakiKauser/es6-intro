// soread operator "..."
const numbers = [2, 56, 38, 94, 86, 19];

// console.log(numbers);
console.log(...numbers);

const max = Math.max(2, 99, -1);
const maxArray = Math.max(...numbers);

// console.log(max, maxArray);

const numbers2 = [-3, ...numbers, 89];
numbers.push(23);

console.log(numbers, numbers2);