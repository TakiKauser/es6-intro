const people = ["proffessor", "nairobi", "tokiyo", "higenberg", "scoefield", "garuda"];

const peopleLength = people.map(char => char.length);
// console.log(peopleLength);

const products = [
    { name: "mobile", price: 1700, color: "black" },
    { name: "laptop", price: 57500, color: "teal" },
    { name: "headphone", price: 550, color: "black" },
    { name: "bag", price: 900, color: "black" },
    { name: "shirt", price: 450, color: "peru" }
]

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
console.log(productNames, productPrices);

// foreach()
// just do the task; doesn't return like map()
products.forEach(product => console.log(product));