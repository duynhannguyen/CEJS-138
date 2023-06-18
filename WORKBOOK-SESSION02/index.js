// --------------------------------------------------------TRẮC NGHIỆM----------------------------------------------------------------//
/*
**Câu 1:** `var` khai báo một biến có phạm vi trong block?
    False
**Câu 2:** `const` khai báo một biến có phạm vi trong block?
    True
**Câu 3:** `let` khai báo một biến có phạm vi trong block?
True
**Câu 4:** Giá trị sau cùng của `obj` trong ví dụ sau là gì?
```jsx
const obj = { foo: 1 }
obj.bar = 2
```
{foo: 1, bar: 2}
**Câu 5:** Kết quả của ví dụ sau đây là gì?
```jsx
const speed = 'quick'
`The ${speed} brown fox jumps over the lazy dog.`
```
'The quick brown fox jumps over the lazy dog.’
**Câu 6:** Giá trị của câu lệnh `obj[123]` trong ví dụ sau:
```jsx
const obj = {

}
```
`undefined`
**Câu 7:** Giá trị của `array` trong ví dụ sau:
```jsx
const array = [1, 2, 3]
const extension = [4, 5, 6]

array = [...extension, ...array]
```
 `[4, 5, 6, 1, 2, 3]`
 **Câu 8:** Giá trị của a trong ví dụ sau?
```jsx
function mystery(...params) {
	return params
}
let a = mystery(1, 23, 4);
```
`1 23 4`
**Câu 9:** Giá trị của biểu thức sau?
```jsx
[...[..."..."]].length
```
 `3`
**Câu 10:** Giá trị của a và b với ví dụ sau?
```jsx
let a = 12, b = 3;
[a, b] = [b, a];
```
1. a = 3, b = 12
**Câu 11** Giá trị của obj sau trong ví dụ sau?
```jsx
const obj = {
	name: "MindX"
}
const sayHello = (x) => {
	let {name} = x
  name = "Code Intensive"
}
sayHellO(obj)
```
 `{name: “MindX”}`
 **Câu 12:** Giá trị của biểu `arr` trong ví dụ sau?
```jsx
let arr = [1, 2, 3, 4, 5]
arr.map(item => {
  if (item % 2 === 0) {
		return item;
  }
	return item * 2;
})
```
 `[2, 2, 6, 4, 10]`
 **Câu 13:** Giá trị của `total` trong ví dụ sau?
```jsx
const arr = [1, 2, 3, 4, 5]
const total = arr.filter(item => item % 2 === 0)
								 .reduce((value, item) => value + item , 10)
```
 `16`
*/
// --------------------------------------------------------TRẮC NGHIỆM----------------------------------------------------------------//
// --------------------------------------------------------THỰC HÀNH----------------------------------------------------------------//
// Câu 1: Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
const arr = "abcdef";
let result = "";
for (let i = 0; i < arr.length; i++) {
  const arrEle = arr[i];
  result = arrEle + result;
}
console.log(result);

// Viết một function xoá các phần từ trùng lặp trong một mảng các số:
const fristArr = [1, 2, 3, 3, 5, 4, 2, 6, 4];
let newArr = [];
const findIndex = (arr , findnumber) => {
  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] === findnumber){
      return i;
    }
  }
  return -1;
}
for (let i = 0; i < fristArr.length; i++) {
  const fristArrEle = fristArr[i];
  if (findIndex(newArr,fristArrEle) === -1 ) {
    newArr = [...newArr, fristArrEle];
  }
}
console.log(newArr);
// Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
// const input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
// let number = {}
// let count = 0
//  for(let i of input){
//   if()
//  }
// const mostLoopNumber = (arr,number) => {
//   let count = 0;
//   for(let i = 0 ; i < arr.length ; i++ ){
//     const inputEle = arr[i];
//     if(inputEle === number){
//     //  console.log(count = count + 1);
//     count+= 1;
//     }
//   }
// return -1;
// };
// console.log(mostLoopNumber([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3],3));
// for( let i = 0; i < input.length; i++){
//   const inputEle = input[i];
//   if(mostLoopNumber(input,inputEle) === true){
//     console.log(inputEle);
//   }
// }
// function findhighestOccurenceAndNum(a) {
//   let obj = {};
//   let maxNum, maxVal;
//   for (let v of a) {
//     obj[v] = ++obj[v] || 1;
//     if (maxVal === undefined || obj[v] > maxVal) {
//       maxNum = v;
//       maxVal = obj[v];
//     }
//     // maxNum = 2
//     // maxVal = 1
//   }
//   const max = {};
//   for(let i = 0 ; i<obj.length ; i++){
//     const objEle = obj[i];
//     if(obj[0].value > objEle.value){
//     max.push()
//     }
//   }
//   console.log("value:" ,maxNum, 'count :', maxVal);
// }
function findHighestOccurrences(arr) {
  let freq = {};
  let maxNums = [];
  let maxCount = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
    if (freq[num] > maxCount) {
      maxNums = [num];
      maxCount = freq[num];
    } else if (freq[num] === maxCount) {
      maxNums.push(num);
    }
  }
  
  return {nums: maxNums, occurrence: maxCount};
}
console.log(findHighestOccurrences([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3, 2]));
// --------------------------------------------------------THỰC HÀNH----------------------------------------------------------------//