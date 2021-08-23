// declare variable based on the name of object property
const object = {
    x: 1,
    y: 3,
    z: 89,
    a: 42,
    b: 59,
    t: 94
};
const { b, t } = object;
console.log(b, t);

// destructuring array
const [p, q] = ["string", 29];
console.log(p, q);

// optional chaining
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
console.log(company?.web?.tech.third);
console.log(company.backend?.tech.third);