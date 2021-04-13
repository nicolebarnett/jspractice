// ["215", true, false, 2, 2.1, [], null] -> [string]

function arrayDataTypes(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(typeof arr[i]) 
    }
    return newArr
}
console.log(arrayDataTypes(["215", true, false, 2, 2.1, [], null]))