console.log("=============== 1. Variables and Data Types ===============");
// var: function-scoped, can be redeclared
// let: block-scoped, can be reassigned
// const: block-scoped, cannot be reassigned
let username = "vinayak";      // string
let age = 25;                  // number
const isActive = true;         // boolean
let city;                      // undefined (declared, no value)
let user = null;                // null (explicitly empty)

console.log(username, typeof username);
console.log(age, typeof age);
console.log(isActive, typeof isActive);
console.log(city, typeof city);
console.log(user, typeof user);


console.log("=============== 2. Functions ===============");
// normal function declaration
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Vinayak"));

// function expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 10));


console.log("=============== 3. Arrow Functions ===============");
// an arrow function is just a shorter way to write a normal function

// Step 1: normal function
function sayHello(name) {
    return "Hello " + name;
}
console.log(sayHello("Vinayak"));

// Step 2: same thing as an arrow function
const sayHelloArrow = (name) => {
    return "Hello " + name;
};
console.log(sayHelloArrow("Vinayak"));

// Step 3: if the function body is a single line, "{}" and "return" can be dropped
const sayHelloShort = (name) => "Hello " + name;
console.log(sayHelloShort("Vinayak"));

// Step 4: if there is only one parameter, "()" can be dropped too
const square = n => n * n;
console.log(square(6));

// with two or more parameters, "()" is required
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));


console.log("=============== 4. Arrays ===============");
let browsers = ["Chrome", "Firefox", "WebKit"];
console.log(browsers);
console.log(browsers[0]);      // access by index
browsers.push("Edge");         // add element at the end
console.log(browsers);
console.log(browsers.length);

// looping through an array
browsers.forEach(browser => console.log(browser));


console.log("=============== 5. Objects ===============");
let testCase = {
    id: 101,
    title: "Login test",
    passed: true
};
console.log(testCase);
console.log(testCase.title);       // dot notation
console.log(testCase["passed"]);   // bracket notation


console.log("=============== 6. Destructuring ===============");
// destructuring = pulling values out of an array/object into separate variables

// without destructuring
let colors = ["red", "green"];
let color1 = colors[0];
let color2 = colors[1];
console.log(color1, color2);

// with destructuring (same result, shorter way)
let [c1, c2] = colors;
console.log(c1, c2);

// same idea works for objects, but using names instead of position
let person = { pname: "Vinayak", page: 25 };

// without destructuring
let personName = person.pname;
console.log(personName);

// with destructuring (variable names must match the object's keys)
let { pname, page } = person;
console.log(pname, page);


console.log("=============== 7. Spread Operator ===============");
// spread ( ... ) = unpacks all items of an array/object, used to copy or combine

let arr1 = [1, 2, 3];

// copy an array
let arr1Copy = [...arr1];
console.log(arr1Copy);

// combine two arrays
let arr2 = [4, 5];
let combined = [...arr1, ...arr2];
console.log(combined);

// same idea for objects: copy and add/override a property
let user1 = { name: "Vinayak", role: "QA" };
let user2 = { ...user1, role: "Lead QA" }; // role gets overridden
console.log(user2);


console.log("=============== 7b. Rest Operator ===============");
// rest ( ...args ) = collects multiple function arguments into a single array

function add2Numbers(a, b) {
    return a + b;
}
console.log(add2Numbers(2, 3));

// what if we don't know how many numbers will be passed?
function addAnyNumbers(...numbers) {
    console.log(numbers); // numbers is a normal array here
    return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(addAnyNumbers(1, 2, 3, 4));


console.log("=============== 8. Promises ===============");
// a Promise is a placeholder for a value that will be ready later (like an API call)

// Step 1: a promise that always succeeds after 1 second
let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task done");
    }, 1000);
});
promise1.then((result) => console.log(result));

// Step 2: a promise that can succeed or fail
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are allowed");
        } else {
            reject("You are too young");
        }
    });
}
checkAge(20).then((msg) => console.log(msg));   // success path
checkAge(10).catch((err) => console.log(err));  // failure path


console.log("=============== 9. async/await ===============");
// async/await is just a simpler way to write and read Promise code

// same checkAge promise from above, but consumed using await
async function verifyAge() {
    const result = await checkAge(25); // wait here until the promise finishes
    console.log(result);
}
verifyAge();

// handling failure with async/await uses try/catch instead of .catch()
async function verifyAgeFail() {
    try {
        const result = await checkAge(5);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
verifyAgeFail();


console.log("=============== 10. Modules ===============");
/*
Modules = splitting code into separate files, then sharing code between them
using "export" (to give code out) and "import" (to bring code in).

// file: mathUtils.js
export function add(a, b) {
    return a + b;
}

// file: main.js
import { add } from "./mathUtils.js";
console.log(add(2, 3));

Note: to use import/export in Node.js, set "type": "module" in package.json.
*/
