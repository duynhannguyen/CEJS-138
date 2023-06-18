// ### Bài 1 - Get Sum of People's Budget
// Hãy viết `function` tính tổng lương mà công ty phải trả hằng tháng cho nhân viên. Biết rằng mỗi nhân viên sẽ là một object với cấu trúc như 
let sumOfSalary = 0
const getBudgets = (array) => {
    for( let i = 0 ; i<array.length ; i++){
        let arrayElement = array[i]
        sumOfSalary += arrayElement.budget


    }
    return sumOfSalary
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))
//   ### Bài 2 - Online shopping
// Hãy viết `function` để kiểm tra xem đơn đặt hàng `Shoppe` có đủ điều kiện để miễn phí giao hàng hay không. Nếu đơn giao hàngd đó đủ điều kiện thi function sẽ trả về giá trị `true`, ngược lại trả về giá trị `false`, biết rằng:

// * Tổng chi phí của các mặt hàng ≥ $50.00 sẽ được miến phí ship
// * Tổng chi phí của các mặt hàng < $50.00 sẽ phải trả tiền ship

// Cấu trúc của mỗi đơn hàng`
// ```
 let total = 0
 const freeShipping = (Object) => {
    for(const key in Object ){
        total += Object[key]
        if(total >= 50){
            return true
        }
    }
    return false
 }
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
// { "Shampoo": 5.99, "Rubber Ducks": 15.99 }

console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));

// ### Bài 3 - International Greeting
// Giả sử bạn có một object lưu trữ thông tin của các học sinh đến từ nhiều quốc gia khác nhau dưới dạng key-value pairs như sau:
// ```

// ```
// Hãy viết một function nhận vào `name` của một người trong `GUEST_LIST` và trả về như sau:

// - "Hi! I'm [name], and I'm from [country]."
// - Nếu `name` không tồn tại trong  `GUEST_LIST` , return: :   `Hi! I'm a guest.`
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
const greeting = (key) => {
        if(GUEST_LIST[key]){
           return `Hi! I'm ${key}, and I'm from ${GUEST_LIST[key]}`
        }
        return `Hi! I'm a guest.`
    }
console.log(greeting("Sam"));

// const a = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
//   }
//   for(let key in a){
//     console.log(key);
//   }