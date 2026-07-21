// function remDup(arr) {
//   let n = arr.length + 1;
//   let temp = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] != arr[i + 1]) {
//       temp.push(arr[i]);
//     }
//   }
//   return temp;
// }

// let arr = [1, 2, 3, 3, 4, 5, 6, 3, 7, 7, 7, 8];
// console.log(`Before removing duplicates: ${arr}`);
// let result = remDup(arr);
// console.log(`After removing duplicates: ${result}`);

// remove duplicates
// function remDups(arr) {
//   let seen = {};
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       seen[arr[i]]++;
//     } else {
//       seen[arr[i]] = 1;
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(remDups([1, 2, 2, 3, 4, 5, 2, 7]));

// find missing number
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  let result = expectedSum - actualSum;
  return result;
}
console.log(findMissingNumber([1, 3, 4, 5, 6, 7]));
