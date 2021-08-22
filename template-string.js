// use of caret, ` `
const count = 3;
const old = '<h3 class = "friend-name"> friend -5</h3>';
const old1 = '<h3 class = "friend-name"> friend -' + count + '</h3>';
const newOne = `<h3 class = "friend-name"> friend -${count}</h3>`;

console.log(newOne);

const first = "Taki";
const second =  "Kauser";
const fullNameNew = `My name is: ${first} ${second}`;

console.log(fullNameNew);