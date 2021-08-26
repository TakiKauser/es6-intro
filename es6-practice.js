// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

let temporaryVariable = 26;
const constantVariable = 25;

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।
const laptop = {
    brand: "ASUS",
    color: "teal",
    ram: "8gb",
    harddisc: "1TB",
    ssd: "120gb"
}
/* 
// first approach
const templateString = `<p class="dirthDate-age"> My date of birth is ${constantVariable} and now, I a'm ${temporaryVariable} years old. I'm using a laptop which brand is ${laptop.brand} with RAM ${laptop.ram} and SSD ${laptop.ssd}.</p`
*/

// current approach
const { brand, ram, ssd } = laptop;

const templateString = `<p class="dirthDate-age"> My date of birth is ${constantVariable} and now, I a'm ${temporaryVariable} years old. I'm using a laptop which brand is ${brand} with RAM ${ram} and SSD ${ssd}.</p`

// console.log(templateString);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

const devideByFive = number => number / 5;

// console.log(devideByFive(24));

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

const doMath = (number1, number2) => ((number1 + 2) * (number2 + 2));

// console.log(doMath(5, 7));

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const multipliedValue = (num1, num2, num3) => num1 * num2 * num3;

// console.log(multipliedValue(2, 3, 4));

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const doMath2 = (input1, input2) => {
    input1 = input1 + 2; // input1+=2;
    input2 = input2 + 2; // input2+=2;
    const requiredResult = input1 * input2;
    return requiredResult;
}
// console.log(doMath2(5, 9));

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 








// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 











// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const array0 = [4, 97, 89, 36, 63, 19, 49, 47, 29, 93, 69, 141, 67, 94, 37, 61, 14, 7, 98, 3, 6, 100];

const multipliedWithFive = array0.map(elementOfArray => elementOfArray * 5);
// console.log(multipliedWithFive, array0);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const oddNumbers = array0.filter(elementOfArray => elementOfArray % 2);

// console.log(oddNumbers);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const objectsInArray = [
    { name: "mobile", price: 1700, color: "black" },
    { name: "laptop", price: 57500, color: "teal" },
    { name: "headphone", price: 5000, color: "black" },
    { name: "bag", price: 900, color: "black" },
    { name: "shirt", price: 450, color: "peru" },
    { name: "modem", price: 5000, color: "black" }
]

// returns only first element of matched elements
const products5k = objectsInArray.find(object => object.price == 5000);

// console.log(products5k);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 






// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const phone = {
    brandName: "Nokia",
    color: "black",
    price: 1700
}
const { brandName, color, price } = phone;

// console.log(brandName, color, price);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const destructuringArray = ["firstElement", 2, "3rdElement", undefined, null, -1, 0];

const [one, two, three] = destructuringArray;

// console.log(three);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

function containingThreeparameters(para1, para2, para3 = 7) {
    return para1 + para2 + para3;
}

// console.log(containingThreeparameters(3, 6));

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const nestedObject = {
    office: {
        name: "kb's software",
        owner: {
            name: "kb",
            age: 29,
            address: "Mymenshingh",
            education: {
                ssc: "GPA 5",
                hsc: "GPA 5",
                bsc: "CGPA 2.9"
            },
            expertice: ["git", "problem solving", "html5", "css3", "bootstrap", "tailwind", "javascript", "es6"]
        },
        address: "Dhaka",
        employees: 27,
        tech: ["html5", "css3", "bootstrap", "tailwind", "javascript", "es6"]
    }
};
// console.log(nestedObject);

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।

console.log(nestedObject?.office?.owner?.expertice);