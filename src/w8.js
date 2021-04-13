// // ["215", true, false, 2, 2.1, [], null] -> [string]

// function arrayDataTypes(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(typeof arr[i]) 
//     }
//     return newArr
// }
// console.log(arrayDataTypes(["215", true, false, 2, 2.1, [], null]))

// //now we make 2 lines!

// function arrayDataTypes(arr) {
//     return arr.map(x => typeof x)
// }

const arrayDataTypes = arr => arr.map(x => typeof x)
console.log(arrayDataTypes(["215", true, false, 2, 2.1, [], null]))