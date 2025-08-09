// Q1: Find the index of a target in an array
// const arr = [2, 3, 5, 1, 34, 12];
// function findIdx() {
//   let target = 5;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findIdx());

// using built in method
// const arr = [34, 2, 6, 33, 67];
// function findIdx() {
//   // target = 67;
//   return arr.indexOf(67);
// }
// console.log(findIdx());

// Q2: Count frequency of each element
// const arr = [1, 78, 35, 42, 78, 1, 52, 35, 45, 35];
// function freqOfElem() {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (freq[val]) {
//       freq[val]++;
//     } else {
//       freq[val] = 1;
//     }
//   }
//   console.log(freq);
// }
// freqOfElem();

// Q3: Find the element with highest frequency
// const arr = [4, 1, 5, 2, 7, 3, 2, 1, 2];
// function elemHighFreq() {
//   let freq = {};
//   let maxCount = 0;
//   let mostFreqElem = null;
//   // Step 1: Count frequency
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     freq[val] = (freq[val] || 0) + 1;
//     // Step 2: Update maxCount and element if needed
//     if (freq[val] > maxCount) {
//       maxCount = freq[val];
//       mostFreqElem = val;
//     }
//   }
//   console.log("Most freq element:", mostFreqElem);
//   console.log("Frequency:", maxCount);
// }
// elemHighFreq();

// Q4: Check if an element exists in the array or not
// const arr = [1, 2, 3, 4, 6, 7, 8, 9];
// function findElem() {
//   target = 6;

//   if (arr.includes(target)) {
//     const index = arr.indexOf(target);
//     console.log(`Element is: ${target} at index ${index}`);
//   } else {
//     console.log("Element not found");
//   }
// }
// findElem();
