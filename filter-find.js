const numbers = [41, 9, 37, 0, 29, 3, 67, 19, 91];

const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);

const products = [
    { name: "mobile", price: 1700, color: "black" },
    { name: "laptop", price: 57500, color: "teal" },
    { name: "headphone", price: 550, color: "black" },
    { name: "bag", price: 900, color: "black" },
    { name: "shirt", price: 450, color: "peru" }
];

// filter
// return an array
// return an array of multiple elements
const expensiveProducts = products.filter(product => product.price > 1500);
// console.log(expensiveProducts);

const darkProducts = products.filter(product => product.color == "black");
// console.log(darkProducts);

// returns an empty array if can't find required config
const blueProducts = products.filter(product => product.color == "blue");
// console.log(blueProducts);

// find
// return element
// return only first element of multiple elements
const darkProductsFind = products.find(product => product.color == "black");
// console.log(darkProductsFind);

const tealProducts = products.find(product => product.color == "teal");
// console.log(tealProducts);