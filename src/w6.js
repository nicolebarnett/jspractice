let arr =[1,2,3,4,5,6]
console.log(arr.length)

function Dog(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color 
    this.bark = function() {return 'barking' }; 
}

Dog.prototype.constructor 

const dog1 = new Dog(
    "Daisy",
    "puppy",
    "red"

)
console.log(dog1)



const example = {
nestedObj: {
    name: 'Alex'
}
}

console.log(example) 

const another = new Object()

const propsName = 'firstName'

const objOne = {
    [propsName.toUpperCase()]: 'Alex'
}

console.log(objOne)

const objTwo = {
    firstName: 'Alex',
    lastName: 'Ali',
    printFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


console.log(objTwo.printFullName())

console.log(objTwo['firstName'])

console.log(objTwo.hasOwnProperty('lastName'))
console.log(objTwo.hasOwnProperty('address'))

const newProps = delete objTwo.firstName
console.log(newProps)