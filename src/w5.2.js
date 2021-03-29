// a switch is a block of code

const person = 'jane';
switch (person) {
    case 'jane':
        console.log('hi jane');
        break;
        case '60':console.log('old');break;
        case 'john':
            console.log('hi john');
            break;
            case 'joe':
                console.log('hi joe')
                break;
                case 'mary':
                console.log('hi mary');
                break;
                default:
                    console.log('hi')
                    break;
}

const score = 2
switch (score) {
    case score >= 80:
        console.log('A')
        break;
    case score >= 60:
        console.log('B')
        break;
    case score >= 40:
        console.log('C')
        break;
    case score >= 20:
        console.log('D')
        break;
    default:
        console.log('Fail')
        break;
}

let gradStudent = 90 

switch (false) {
    case (gradStudent >= 90):
        console.log('My grade is A+')
        break
        case (gradStudent <= 80):
            console.log('My grade is B+')
            break           
}

let Tony = {
    name : 'Tony',
    age : 20,
    driver: null
};

if (Tony.age >= 16) {
    Tony.driver = 'yes';
} else {
    Tony.driver = 'no';
}
console.log(Tony)

let = isStudent = true;

let price = isStudent ? 8 : 12 
console.log(price); //8

