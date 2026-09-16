console.log("Hello, World!");
console.log("This is a sample JavaScript file.");
//alert("This is an alert message for Nazeer to demonstrate JavaScript functionality.");
let age = 24;

let fullname = "Nazeer";
let fullName = "vasanth kumar";
let x = null;
let y = undefined;
let y1;
let radius = 5;
const PI = 3.14;
let isFollowed = true;
console.log("Age: " + age);
console.log("Full Name: " + fullname);
console.log("Value of x: " + x);
console.log("Value of y: " + y);
console.log("Radius: " + radius);
console.log("Is Followed: " + isFollowed);
console.log("Full Name: " + fullName);
let x1=BigInt(1234567890123456789012345678901234567890);
//let variable
let browserName = "Chrome";

browserName = "Firefox";

console.log(browserName);
//variable const
const username = "admin";

console.log(username);


///Data Types in JavaScript
// Number
// Boolean
// Undefined
// Null
// Object
// Array
//not import as per playwrigt
// BigInt
// Symbol

//number
const price = 100;
const tax = 18;

const total = price + tax;

console.log(total);

//boolean
const testPassed = true;

if (testPassed) {
    console.log("Test passed");
}

//undefined
let testResult;
console.log(testResult);

//null
let a;
let b = null;
console.log('undefined value of a: ' + a);
console.log('null value of b: ' + b);

//object
const user = {
    username: "admin",
    password: "Password123",
    role: "admin"
};
console.log("user object with user name as " + user.username + " and role as " + user.role);
console.log("password of user is " + user.password);

//array
const browsers = ["Chrome", "Firefox", "Safari"];
console.log("Browsers array: " + browsers);//all browser name
console.log("First browser: " + browsers[0]);//first browser name   
console.log("Second browser: " + browsers[1]);//second browser name
console.log("Third browser: " + browsers[2]);//third browser name   


//checking the data type of variable
console.log("Data type of price: " + typeof price);
console.log("Data type of testPassed: " + typeof testPassed);
console.log("Data type of testResult: " + typeof testResult);
console.log("Data type of a: " + typeof a);
console.log("Data type of b: " + typeof b);


// FUNCTIONS with out any return value
function sayHello(fullname) {
    console.log("Hello, " + fullname + "!");
}
sayHello("nazeer");


const firstName = "John";

console.log(`Welcome ${firstName}`);

// FUNCTIONS with  return value
function addNumbers(num1, num2) {
    return num1 + num2;
}

const result = addNumbers(5, 20);
console.log("Result of addition: " + result);

//// FUNCTIONS expression
const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};
const product = multiplyNumbers(8, 100);
console.log("Result of multiplication: " + product);

//text functions expression
const greet = function(name) {
    console.log("Hello, functions testing for " + name + "!");
};
greet("Nazeer");

//arrow function
const divideNumbers = (num1, num2) => {
    let result = num1 / num2;
    console.log("result for division using arrow function:" + result);
    return result;
}

divideNumbers(100, 10);

const greetArrow = (name1, name2) => {
    console.log("Hello, testing arrow function for " + name1 + " and " + name2 + "!");
}   

greetArrow("Nazeer", "Vasanth");

// Recursive Function

// A function can call itself.

function countDown(number) {
    console.log(number);

    if (number > 1) {
        countDown(number - 1);
    }
}

countDown(5);

//infinite loop function with condition
function infiniteLoop() {
    console.log("This is an infinite loop function.");
    infiniteLoop();
}

//another infinite loop function with condition
function infiniteLoopWithCondition(counter2) {
     counter2 = -1;
   console.log("This is an infinite loop function with condition. Counter: " + counter2);
    if (counter2 > 0) {
        infiniteLoopWithCondition(counter2 + 1);
         console.log("This is an infinite loop function with condition. Counter: " + counter2);
    }
}

const infiniteLoopWithCondition2 = counter1 => {
    console.log("This is an infinite loop function with condition. Counter: " + counter1)
}     ;