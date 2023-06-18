// // bai 1
// const employees = [
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 },
// ];
// function getTotalSalary(employees){
//     let result = 0 
//     for( let i = 0 ; i < employees.length ; i++){
//         result += employees[i].budget
//     }
//     return result
// }
// console.log("bai 1", getTotalSalary(employees));
// //  bai 2 
// const cart = {
//     "Shampoo": 5.99, "Rubber Ducks": 15.99,
//     //  "Flatscreen TV": 399.99 ,
//     //  "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99
// }
// function freeShipping(cart){
//     let total = 0
//     for(let key in cart){
//         total += cart[key]
//     }
//     return total>= 50 
//     // return order[key]
// }
// console.log("bai 2",freeShipping(cart));

// // bai 3 
// const GUEST_LIST = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
// };
// function greating(guestName) {
//     if(GUEST_LIST[guestName]){
//         return `Hi ! I'm ${guestName}, and I'm from ${GUEST_LIST[guestName]}`// template literal
//     }
//     return "Hi ! I'm a guest";

// }
// console.log(greating("Sam"))




// TỰ LÀM
// BÀI 1 
const employees = [
{ name: "John", age: 21, budget: 23000},
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 },
];
function totalSalary(employees){
    let salary = 0;
    for(let i = 0 ; i < employees.length ; i++){
        salary += employees[i].budget;
    }
    return salary;
}
console.log(totalSalary(employees))
// BÀI 2 
const cart = {"Shampoo": 5.99, "Rubber Ducks": 15.99}
function getFreeShip(cart){
    let value = 0
    for(let key in cart){ 
        value += cart[key]
    }
    return value >= 50
}
console.log(getFreeShip({"Shampoo": 5.99, "Rubber Ducks": 15.99}))
// Bài 3 
const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }
  function guestName(name){
    for(let name in GUEST_LIST){
        if(GUEST_LIST[name]){
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
        }else {
           return "Hi! I'm a guest."
        }
    }
  }
console.log( guestName("Sam"))






