// default parameter
function add(num1, num2 = 29) {
   /*  
    // option 1
    if (num2 == undefined) {
        num2 = 0
    }
    // option 2
    num2 = num2 || 0;
 */
    const total = num1 + num2;
    return total;
}

const sumResult = add(13);
console.log(sumResult);

// example 2

function name(first, last = "Kauser"){
    const fullName = first + " "+ last;
    return fullName;
}
const fullName = name("Taki");
console.log(fullName);