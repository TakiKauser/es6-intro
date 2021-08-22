const multiply = (num1, num2, num3) => num1 * num2 * num3;

const multiplyResult = multiply(3, 7, 9);
console.log(multiplyResult);

const sixTimes = num => num * 6;
const requiredResult = sixTimes(7);
console.log(requiredResult);

// for multiline tasks use {} with explicit return
const doMath = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const multiply = x * y;
    const result = multiply / (sum * difference);
    return result;
}
const result = doMath(7, 3);
console.log(result);