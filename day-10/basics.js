// function greet(name) {
//   return `Hello, ${name}!`;
// }
// // greet("Hafiz Abdur rehman");
// console.log(greet("Hafiz Abdur rehman"));

// if condtion
// function getGrade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 70) {
//     return "B";
//   } else if (score >= 50) {
//     return "C";
//   } else if (score >= 40) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log(`Your grade is ${getGrade(87)}`);

// Write a function that takes a temperature and tells you what to wear
// function WhatToWear(temp) {
//   if (temp >= 30) {
//     return "Wear T-shirt & shorts";
//   } else if (temp >= 20) {
//     return "Wear a light jacket";
//   } else if (temp >= 10) {
//     return "Wear a sweater";
//   } else {
//     return "Wear a warm jacket";
//   }
// }
// console.log(WhatToWear(35));

// write a function that check access of a user
// function checkAccess(isLoggedIn, isVerified, isBanned) {
//   if (isBanned) {
//     return "Access denied: You are banned.";
//   } else if (isLoggedIn && isVerified) {
//     return "Access granted: Welcome!";
//   } else if (isLoggedIn && !isVerified) {
//     return "Access denied: Please verify you email.";
//   } else {
//     return "Access denied: Please login.";
//   }
// }

// console.log(checkAccess(true, false, false));

// Loops
// function findMax(nums) {
//   let max = nums[0]; // assume first element is the biggest
//   for (const num of nums) {
//     // loop through each element in the array
//     if (num > max) {
//       // if current number is bigger than max
//       max = num; // update max
//     }
//   }
//   return max; // return the biggest number
// }
// let nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(findMax(nums));

// find sum of all numbers in an array
// function sumArray(nums) {
//   let sum = 0; // initialize sum to 0
//   for (const num of nums) {
//     // loop through each element in the array
//     sum += num; // add current number to sum
//   }
//   return sum; // return the total sum
// }
// let nums = [17, 4, 31, 3, 8];
// console.log(sumArray(nums));

// find even number in an array
function findEvenNumbers(nums) {
  let evenNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNumbers.push(nums[i]);
    }
  }
  return evenNumbers;
}
let nums = [77, 3, 2, 97, 12];
console.log(findEvenNumbers(nums));
