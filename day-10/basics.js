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
// function findEvenNumbers(nums) {
//   let evenNumbers = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       evenNumbers.push(nums[i]);
//     }
//   }
//   return evenNumbers;
// }
// let nums = [77, 3, 2, 97, 12];
// console.log(findEvenNumbers(nums));

// Add two numbers of an array whom sum is target number , return their indices

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
// }
// let nums = [3, 7, 1, 13, 5, 2];
// console.log(twoSum(nums, (target = 7)));

// return the largest sum of any two adjacent numbers in an array
// function largestAdjacentSum(nums) {
//   let maxSum = nums[0] + nums[1]; // initialize maxSum to the sum of the first two elements
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j]; // calculate the sum of the current pair
//       if (sum > maxSum) {
//         maxSum = sum;
//         return [i, j];
//       }
//     }
//   }
//   return maxSum; // return the largest sum found
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
// console.log(largestAdjacentSum(nums));

// function largestAdjacentSum(nums) {
//   let maxSum = 0;
//   let indices = [0, 1];
//   for (let i = 0; i < nums.length - 1; i++) {
//     const currentSum = nums[i] + nums[i + 1];
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       indices = [i, i + 1];
//     }
//   }
//   return {
//     maxSum,
//     indices,
//   };
// }
// console.log(largestAdjacentSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// find missing number in an array of 1 to n
// function findMissingNumber(nums) {
//   let n = nums.length + 1; // total numbers should be n
//   let expectedSum = (n * (n + 1)) / 2; // sum of numbers from 1 to n
//   let actualSum = 0;
//   for (const num of nums) {
//     actualSum += num; // calculate the sum of the given numbers
//   }
//   return expectedSum - actualSum; // the missing number is the difference between expected and actual sum
// }
// console.log(findMissingNumber([1, 2, 4, 5, 6, 7]));

// find all numbers greater than a target number
// function getNumbersGreaterThanTarget(nums, target) {
//   const newNums = [];
//   for (const num of nums) {
//     if (num > target) {
//       newNums.push(num); // add the number to newNums if it's greater than the target
//     }
//   }
//   return newNums; // return the array of numbers greater than the target
// }
// console.log(getNumbersGreaterThanTarget([1, 2, 3, 4, 5, 6, 7], 3));

// find all the even numbers in an array
// function getEvenNUmbersGreaterThanTarget(nums, target) {
//   const result = [];
//   for (const num of nums) {
//     if (num > target && num % 2 === 0) {
//       result.push(num);
//     }
//   }
//   return result;
// }
// console.log(getEvenNUmbersGreaterThanTarget([1, 2, 3, 4, 5, 6, 7], 2));

// return squares of numbers grater than target
// function getSquaresOfNumbersGreaterThanTarget(nums, target) {
//   const result = [];
//   for (const num of nums) {
//     if (num > target) {
//       result.push(num * num);
//     }
//   }
//   return result;
// }
// console.log(getSquaresOfNumbersGreaterThanTarget([12, 1, 4, 17, 7, 8], 4));

// Return an onject containing:
// lists of numbers greater than target
// count of those numbers
// function getNumbersGreaterThanTargetWithCount(nums, target) {
//   const result = {};
//   result.numbers = [];
//   result.count = 0;
//   for (const num of nums) {
//     if (num > target) {
//       result.numbers.push(num);
//       result.count++;
//     }
//   }
//   return result;
// }
// console.log(getNumbersGreaterThanTargetWithCount([1, 2, 3, 4, 5, 6, 7], 3));

//Return an object with:
// even numbers
// odd numbers
// count of each
// function getEvenAndOddNumbersWithCount(nums) {
//   const result = {};
//   result.evenNumbers = [];
//   result.oddNumbers = [];
//   result.evenCount = 0;
//   result.oddCount = 0;
//   for (const num of nums) {
//     if (num % 2 === 0) {
//       result.evenNumbers.push(num);
//       result.evenCount++;
//     } else {
//       result.oddNumbers.push(num);
//       result.oddCount++;
//     }
//   }
//   return result;
// }
// console.log(getEvenAndOddNumbersWithCount([1, 2, 3, 4, 5, 6, 7]));

//Return:
// frequency object
// most frequent number
// function getFrequencyAndMostFrequentNumber(nums) {
//   const result = {};
//   const frequency = {};
//   let maxCount = 0;
//   let mostFrequent = null;
//   for (const num of nums) {
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//     if (frequency[num] > maxCount) {
//       maxCount = frequency[num];
//       mostFrequent = num;
//     }
//   }
//   result.frequency = frequency;
//   result.mostFrequent = mostFrequent;
//   return result;
// }
// console.log(
//   getFrequencyAndMostFrequentNumber([
//     1, 2, 3, 3, 3, 3, 5, 5, 7, 7, 7, 7, 7, 7, 7, 10, 10, 10,
//   ]),
// );

// function getFrequencyAndMostFrequentNumber(nums) {
//   let result = {};
//   let frequency = {};
//   let maxCount = 0;
//   let mostFrequent = null;
//   for (const num of nums) {
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//     if (frequency[num] > maxCount) {
//       maxCount = frequency[num];
//       mostFrequent = num;
//     }
//   }
//   result.frequency = frequency;
//   result.mostFrequent = mostFrequent;
//   return result;
// }
// console.log(
//   getFrequencyAndMostFrequentNumber([1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9]),
// );
