/* Baì 1
    Viết 1 function kiểm tra xem tháng đó có bao nhiêu ngày
    Biết rằng:
    Input: month,year
    output: số ngày của tháng
    nếu tháng không hợp lệ thì trả về giá trị là -1 
 */
let getDayFormMonthAndYear = (month, year) => {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      if (
        (year / 4 === 0 && year / 100 !== 0) ||
        (year / 100 === 0 && year / 400)
      ) {
        return 29;
      } else {
        return 28;
      }
    default:
      return -1;
  }
};

console.log("Bai 1:", getDayFormMonthAndYear(6, 2104));
/* ------------------------------------------------------
    Bài 2
    Viết một function để tìm số lớn trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị lớn nhất của mảng
    // console.log(findMax([-1, 10, 100, 15, -20, 0])); // 100
*/
let arr = [-1, 10, 100, 15, -20, 0];
let findMaxNumber = () => {
  let maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    if (maxNumber < arrElement) {
      maxNumber = arrElement;
    }
  }
  return maxNumber;
};
console.log("bài 2", findMaxNumber(arr));
/* ------------------------------------------------------
    Bài 3
    Viết một function để tìm số nhỏ trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị nhỏ nhất của mảng
     // console.log(findMax([-1, 10, 100, 15, -20, 0])); // -20
*/
let arr1 = [-1, 10, 100, 15, -20, 0];
let findMinNumber = () => {
  let minNumber = 0;
  for (let i = 0; i < arr1.length; i++) {
    let arr1Element = arr[i];
    if (minNumber > arr1Element) {
      minNumber = arr1Element;
    }
  }
  return minNumber;
};
console.log("bài 3", findMinNumber(arr1));
/* ------------------------------------------------------
    Bài 5
    Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng
    Input: 
        + array: mảng cần chèn
        + position: vị trí chèn
        + value: giá trị chèn
    Output: mảng mới với giá trị đã được chèn vào
*/
let test_array = [10, -5, 6, 8, 7];
let insertedArray = (test_array, position, value) => {
  const fristArr = test_array.slice(0, position);
  fristArr.push(value);
  const secondArr = test_array.slice(position, test_array.length);
  const newArr = fristArr.concat(secondArr);
  return newArr;
};

console.log(insertedArray(test_array, 1, 100)); // [10,100, -5, 6, 8, 7]
console.log(insertedArray(test_array, 5, 10000)); // [10, -5, 6, 8, 7, 10000]
console.log(insertedArray(test_array, 0, 8888)); // [ 8888,10, -5, 6, 8, 7]
/*------------------------------------------------------
    Bài 6
    Viết một function, với dữ liệu đầu vào là một mảng một chiều 
    ⇒ trả về một mảng mới bao gồm kiểu dữ liệu(data type) của từng phẩn tử trong mảng
    Cách lấy datatype của một biến: // typeof(variable) => kieu du lieu
*/
// const typeArr = [1, 2, "null", []];
const newTypeArr = [];
arrTypeOf = (array) => {
  for (let i = 0; i < array.length; i++) {
    const typeArrElement = array[i];
    newTypeArr.push(typeof typeArrElement);
  }
  return newTypeArr;
};
console.log(arrTypeOf(["214", true, false, 2, 2.15, [], null]));
console.log(arrTypeOf([1, 2, "null", []]));
console.log(
  arrTypeOf([21.1, "float", "array", ["I am array"], null, true, 214])
);
// console.log(arrayValuesTypes([1, 2, "null", []]));
// //[("number", "number", "string", "object")]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// //["string", "boolean", "boolean", "number", "number", "object", "object"]

// console.log(
//   arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// );
// //["number", "string", "string", "object", "object", "boolean", "number"]



// Bài 7
/* ------------------------------------------------------
      Viết một hàm, kết quả trả về là một mảng bao gồm các phần tử khác biệt từ 2 mảng cho trước
  */ 
  // const array1 = [1,2,3];
  // const array2 = [100, 2, 1, 10, 10, 10, 8, 5, 7]; 
  // let arraynum1 = 0
  // let arraynum2 = 0
  let arraynum1 = 0
  const findIndex = (array1 , value) => {
    for(let i = 0 ; i<array1.length ; i++){
      let array1Element = array1[i];
      if(array1Element === value){
        return i 
        
      } 
    }
    return -1
    // console.log(-1)
  }
console.log(findIndex([1,2,3] , 3))
const array2 = [100, 2, 1, 10, 10, 10, 8, 5, 7]; 
const array1 = [1, 2, 3];

  const difference = () => {
    for( let i = 0; i<array2.length; i++){
    let array2Element = array2[i]
    if(findIndex(array1,array2Element) === -1){
      array1.push(array2Element)
      // console.log(array1)
    }

  }
  return array1
}

console.log(difference());



//   console.log(difference([1, 2, 3], [100, 2, 1, 10, 10, 10, 8, 5, 7]))
