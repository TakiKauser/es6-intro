// arrow function

// regular function
function add(num1, num2) {
    return num1 + num2;
}
// function expression
const add1 = function add1(num1, num2) {
    return num1 + num2;
}
// function expression (anonymous)
const add2 = function (num1, num2) {
    return num1 + num2;
}
// arrow function
const add3 = (num1, num2) => num1 + num2;

const sum = add(13, 29);
const sum1 = add1(13, 29);
const sum2 = add2(13, 29);
const sum3 = add3(13, 29);
console.log(sum, sum1, sum2, sum3);