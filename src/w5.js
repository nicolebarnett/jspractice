//Js loops 
// A loop reiterates over a set of multiple statements
//for, for of, for in, while, Array forEach, Array
//some Array  methods are similar to loops

let arr = [1,2,3,4,5,6,7]
// dictates the size of the array- placeholders. Will print less than 7 or 7 

console.log(arr.length)
//to show the ength of the array

for(i= 0; i < 5; i++) {
    console.log('this is a loop')
}

// the iteration counts 0! I've asked the statement to run 5 times however console.log printed it 6 

//what variables and conditions do I need?
//declare varibale inside loop 
//for loops require 3 statements, will throw an error if not


for (let i =0;; i++) {
    console.log("loop, i = " + i);
    if (i > 1)
    break;
};
//loop counters are 0-index based, skip the middle statement and break out of the loop using the condition (i > 1)
//always have a condition to avoid infinite loops 

//multiple statements can be seperated by commas.

let counter = 0;
function inc() { counter++; } for (let i =0; i < 10; i++, inc());
console.log(counter); // 10

//inc() function is used to increment the value of a global variable "counter"

//loops can increment or decrement 

//bracketless for-loop does not work well let. this code generates an error 
//for ( var i = 0; i < 10; i++) let x = i;

//all variables defined with let requires their own local scope
for ( var i = 0; i < 10; i++) { 
    let x = i; 
    console.log(x)} 
//const also works in this instance 

//nested loops can be used as the iterable statement od another for loop. 
for (let y = 0; y < 2; y++)
for (let x = 0; x < 2; x++)
console.log(x, y);
 //the output is all combinations between x and y 

 // continue allows you to skip an iteration step 
 for (let i = 0 ; i < 3; i++) {if (i == 1) continue ; 
    console.log(i); }
// the output skips 1 

//loop can be broken by using the keyword break. conditions can be applied 

for (let i = 0;; i++) {
    console.log(" loop" ); break; 
} ;

//use array.length to check arrays
//there is no index, no stop or break has been defined
let array = [0, 1, 2,]
for (let value of array)
console.log(value);





