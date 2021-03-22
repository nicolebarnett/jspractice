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

