// Q1: Print all elements of an array
// function printArr() {
//   const arr = [1, 4, 2, 5];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printArr();

// Q2: Find the maximum element
// function findMaxNum() {
//   const arr = [34, 23, 83, 2, 10];
//   let max = arr[0];
//   for (const elem of arr) {
//     if (elem > max) {
//       max = elem;
//     }
//   }
//   console.log("Maximum number is : ", max);
// }
// findMaxNum();

//Q3: Reverse an array (create a new one)
// function reverseArr() {
//   const arr = [1, 2, 3, 4, 5, 6, 7];
//   const reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   console.log("original array: ", arr);
//   console.log("reversed array: ", reversed);
// }
// reverseArr();

// arr = [1, 2, 3, 4, 5, 6];
// const sum = arr.reduce((acc, currVal) => {
//   return acc - currVal;
// }, 0);

// console.log(sum);
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }

// console.log(a); // ✅ 1
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError
