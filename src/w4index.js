//declaring variables and assigning string values
let country = 'New Zealand' 
let city = 'Nelson'
let postcode = 7010
console.log(country)
console.log(city)
console.log(postcode)

let isIsland = false
let language 

console.log(typeof island)
console.log(typeof language)
language = function() {
    return 'Hello'
}

console.log(typeof language)

language = {
    name: 'Neeko', 
    city: 'reee',
    country: 'no'
}

console.log(typeof language)

language = ['english ', 'deutsch ', 'arabic']
console.log(typeof language)
//everything in js is an object, including datatypes and keywords

console.log(typeof postcode)

console.log(`${language}, ${country}, ${city}, ${postcode}`)

// if(postcode === 7010) {
//     console.log('Nelson')
//     else {
//         console.log('NotNelson')
//     }
// }

 
let a = 'A+'
let b = 'B+'

let studentOne = 75

if (studentOne >= 70 && studentOne <= 80) {
    console.log(b)
} else if (studentOne < 70) {
    console.log('c+')
}

console.log(24 >= 24)
console.log(25 < 26)
console.log('24' === 24)

console.log(24 !== 24)

console.log('24' === 24)

console.log(0 == false)
//0 always represents flase

console.log(1 == true)
//1 will always be true

const x = {
    city: 'Nelson'
}
const y = x 

console.log(y.city)