const employees = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 },
];

const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function getTotalSalary(employees){
    // Your code here
    let result = 0;
    for(let i = 0; i < employees.length; i++) {
        result += employees[i].budget;
    }

    return result;
}
console.log('bai 1: ', getTotalSalary(employees));

const cart =
{
    "Shampoo": 5.99,
    "Rubber Ducks": 15.99
};
function freeShipping(order){
    // Your logic code here
    let total = 0;
    for (const key in order) {
        total += order[key];
    }

    return total >= 50;
}

console.log('bai 2: ', freeShipping(cart));
console.log('bai 2: ', freeShipping({
    "Shampoo": 5.99,
    "Rubber Ducks": 55.99
}));


const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
};
function greating(guestName) {
    // if(guestName in GUEST_LIST) {
    //     return `Hi! I'm ${guestName}, and I'm from ${GUEST_LIST[guestName]}.`; // template literal
    // }

    if(GUEST_LIST[guestName]) {
        return `Hi! I'm ${guestName}, and I'm from ${GUEST_LIST[guestName]}.`; // template literal
    }

    return "Hi! I'm a guest.";
}

console.log('bai 3: ', greating('thomas'));
console.log('bai 3: ', greating('Sam'));


function countLetters(str){
    const res = {};
    for(let c of str) {
        if(!res[c]) {
            res[c] = 1;
            console.log(c)
        }
         else {
            res[c] += 1;
        }
    }

    console.log('bai 5: ', {res})
}

countLetters('hello world');

// Truthy & Falsy
/**
 * undefined
 * 0
 * ''
 * null
 * NaN
 * ...
 */