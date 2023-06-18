/* Baì 1
    Viết 1 function kiểm tra xem tháng đó có bao nhiêu ngày
    Biết rằng:
    Input: month,year
    output: số ngày của tháng
    nếu tháng không hợp lệ thì trả về giá trị là -1 
 */
function getDayFormMonthAndYear(month, year) {
  let result;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
        return 30;
    case 2:
      if (
        year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 
      ) {
        return 29;
      } else {
        return 28;
      }
    default:
      return -1;
  }
  // logic

}
console.log("Bai 1:",getDayFormMonthAndYear(2, 2016));
/* ------------------------------------------------------
    Bài 2
    Viết một function để tìm số lớn trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị lớn nhất của mảng
    // console.log(findMax([-1, 10, 100, 15, -20, 0])); // 100
*/
function findMax(nums){
    let maxnumber = nums[0];
    for( let i = 0;i<nums.length;i++){
        if(nums[i] > maxnumber){
            maxnumber = nums[i];
        }
    }
    return maxnumber;

}

console.log("Bai 2:",findMax([-1, 10, 100, 15, -20, 0])); // 100
/* ------------------------------------------------------
    Bài 3
    Viết một function để tìm số nhỏ trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị nhỏ nhất của mảng
*/
function findMin(nums){
    let minnumber = nums[0];
    for( let i = 0;i<nums.length;i++){
        if(nums[i] < minnumber){
            minnumber = nums[i];
        }
    }
    return minnumber;

}

console.log("Bai 3:",findMin([-1, 10, 100, 15, -20, 0])); // 100
/* ------------------------------------------------------
    Bài 5
    Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng
    Input: 
        + array: mảng cần chèn
        + position: vị trí chèn
        + value: giá trị chèn
    Output: mảng mới với giá trị đã được chèn vào
*/
function insert(array, position, value) {
    let insertedArray = [];
    let fristArr = array.slice(0, position);
    let lastArr = array.slice(position,array.length);

    fristArr.push(value);
    return fristArr.concat(lastArr);
  }
  
  const test_array = [10, -5, 6, 8, 7];
  console.log(insert(test_array, 1, 100)); // [10,100, -5, 6, 8, 7]
console.log(insert(test_array, 5, 10000)); // [10, -5, 6, 8, 7, 10000]
console.log(insert(test_array, 0, 8888)); // [ 8888,10, -5, 6, 8, 7]
/*------------------------------------------------------
    Bài 6
    Viết một function, với dữ liệu đầu vào là một mảng một chiều 
    ⇒ trả về một mảng mới bao gồm kiểu dữ liệu(data type) của từng phẩn tử trong mảng
    Cách lấy datatype của một biến: // typeof(variable) => kieu du lieu
*/
function arrayValuesTypes(arry){
    let new_array = [];
    for(let i = 0 ; i<arry.length ; i++){
        const value = arry[i];
        new_array.push(typeof value);
    }

    return new_array;
} 

console.log(arrayValuesTypes([1, 2, "null", []]));
//[("number", "number", "string", "object")]

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
//["string", "boolean", "boolean", "number", "number", "object", "object"]

console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);
//["number", "string", "string", "object", "object", "boolean", "number"]
// Bài 7
/* ------------------------------------------------------
    Viết một hàm, kết quả trả về là một mảng bao gồm các phần tử khác biệt từ 2 mảng cho trước
*/
function findIndex(arr, findNumber){
    for (let i = 0;i<arr.length;i++){
        if (arr[i] === findNumber){
            return i;
        }
    }
    return -1
}
console.log(findIndex([1,2,3,4,5,6,7] , 4))
//     function difference(arr1,arr2){
//         let result = arr1;
//         for (let i = 0; i<arr2.length;i++){
//             if(findIndex(result, element) === -1){
//                 result.push(element);
//             }
//         }
//         return -1
//     }
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  //["1", "2", "3", "10", "100"]