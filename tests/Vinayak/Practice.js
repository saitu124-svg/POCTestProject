console.log("*******************let******************************");
// let: block-scoped, can be reassigned but not redeclared in same scope
let a =10
console.log(a);
console.log(typeof(a))

console.log("*******************const******************************");
// const: block-scoped, cannot be reassigned after declaration
const s = 10.78
console.log(s);
console.log(typeof(s))

console.log("*******************var******************************");
// var: function-scoped, can be redeclared (last value wins)
var  c = 10
var c = "testing"
console.log(c);
console.log(typeof(c))

console.log("*******************Boolean******************************");

const required = true
console.log(required);
console.log(!required); // ! negates the boolean value
console.log(typeof(required))

console.log("*******************Object******************************");
// object: key-value pairs accessed via dot notation
let employee = {
    name:"vinayk",
    employId:10,
    role: "QA"
}
console.log(employee);
console.log("Role:"+employee.role);


console.log("*******************ifElse******************************");
let i=5
if (i<10)
{
console.log("less then 10");
}
else{
    console.log("more then 10");
}

//Second: Boelean

const flag = true
if(false)
{
    console.log("condition satisfied");
}else{
    console.log("condition not satisfied");
    
}

console.log("*******************While loop******************************");
let j=0
// condition is false from the start, so the loop body never runs
while (j>10) {
    j++
    console.log(j);
}

console.log("*******************DoWhile loop******************************");
// do-while runs the body at least once before checking the condition
do {
    j++
} while (j>10);
console.log(j)



console.log("******************* functions ******************************");


function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


console.log("=============== Prac.js ===============");
{
console.log("Hello World");


// Variables
let num=10
console.log("num "+num)
console.log(typeof(num))

let b= 100.8
console.log(b);


const name = "String Values"
console.log("Name is "+ name)
console.log(typeof(name))

let required = true
console.log(typeof(required))
//Boolean using operator
console.log(!required);


//
let res = num+b
console.log(res);
}


console.log("=============== array.js ===============");
{
// size of array is 6, Declaring array 3 ways
let employees = Array(6)


//let emps = new Array(20, 30, 40, 50, 50, 60)

let emp = [20, 30, 40, 50, 50, 60]
// third indexvalue retrive
console.log(emp[2]);
// change the index value
emp[0]=15
console.log(emp[0]);

// total number of element
console.log(emp.length);

// new elemet append ,adding last
emp.push(70)
console.log(emp);
// delecting the element , at the end element
emp.pop()
console.log(emp);
// adding element at the first idex
emp.unshift(5)
console.log(emp);

// get the index number, give the value get the index number

console.log(emp.indexOf(50));

// Check the whether the element are not not
console.log(emp.includes(100))
console.log(emp.includes(5))

//slice the array, it takes indec 2 to 4
subArray = emp.slice(2, 5)
console.log(subArray);

// Itteratiiion - Print all elements
for(k=0;k<emp.length;k++)
{
    console.log(emp[k])
}


console.log("*************Itteratiiion - sum of all the elements *****************");

var sum = 0
for(k=0;k<emp.length;k++)
{
    sum = sum + emp[k]
}console.log(sum);


//Reduce filtter map
console.log("*************Reduce - sum of all the elements *****************");

let emps = new Array(20, 30, 67, 50, 50, 60)
let total = emps.reduce((sum,e)=>sum+e,0)
console.log(total);

console.log("*************crate new array having even numbetr  *****************");

var scores = new Array(1, 3, 4, 6,  7, 8)
var evenScore=[]
var oddScore=[]
for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2 == 0)
    {
evenScore.push(scores[i])
    }if(scores[i]%2 != 0)
    {
        oddScore.push(scores[i])
    }
}
console.log(evenScore);
console.log(oddScore);

let evenFilterArray = scores.filter(score=>score%2==0)
console.log(evenFilterArray);
let oddScoreFilterArray = scores.filter(score=>score%2!=0)
console.log(oddScoreFilterArray);
}


console.log("=============== basic.js ===============");
{
const flag = true

// If Else conditions
//if(flag)
if(!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log("condition not satisfied")
}


// while loop

let i=0
while(i>10)
{
i++
console.log(i)

}


do {
    i++
} while (i>10);
console.log(i)

console.log("----------------------------------");


//For loop
for(let k=0;k<=10;k++)
{
    console.log(k);

}


/* There are 4 common situations:

if / else → Make a decision
for → Repeat a known number of times / go through a collection
while → Repeat while a condition is true
do...while → Execute once, then decide whether to repeat
*/



//2 and 5
// from 1 to 10 give me common multiple values of 2 & 5

console.log("********************************************************");

for(let a=1;a<=100;a++)
{
    if(a%2 == 0 && a%5 == 0)
    {
        console.log(a);

    }
}

// For only first 3 digits
console.log("***************For only first 3 digits****************************");

let n = 0
for(let a=1;a<=100;a++)

    {
        if(a%2 == 0 && a%5 == 0)
        {
            n++
        console.log(a);
        if(n==3)
        {
            break
        }
        }
    }

console.log("***************with OR || operator***********************");

// with OR || operator

for(let a=1;a<=10;a++)
{
    if(a%5 == 0 || a%3 == 0)
    {
        console.log(a);

    }
}
}      






