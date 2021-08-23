const fish = {
    id: 89,
    name: "Hilsha",
    price: 1300,
    phone: "phishphish",
    address: "chandpur",
    dress: "silver"
};
/* 
// old approach
const id = fish.id;
const name = fish.name;
const price = fish.price;
const phone = fish.phone;
const dress = fish.dress;
 */
// current approach
const { id, name, price, dress, phone } = fish;

console.log(phone);
console.log(dress);
console.log(id);
console.log(price);
console.log(name);
// example 2
const company = {
    name: "kb",
    ceo: {
        id: 1,
        name: "kauser",
        food: "temarind"
    },
    web: {
        work: "web development",
        employee: 27,
        framework: "react",
        tech: {
            first: "html",
            second: "css",
            third: "js"
        }
    }
}
/* 
// old approach
const work = company.web.work;
const framework = company.web.framework;
 */

// current approach
const { work, framework } = company.web;
const { food } = company.ceo;
const { third } = company.web.tech;
console.log(work, framework, food, third);