// Palindrome Check
// A palindrome reads the same forwards and backwards. "madam", "racecar", "level"

// function isPalindrome(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("racecar"));

// Reverse a string
// function reverseString(str) {
//   // str = str.toLowerCase();
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     // for loop: from end to start
//     result += str[i];
//   }
//   return result;
// }
// console.log(reverseString("ich heiBe Hafiz Abdur Rehman."));

// FizzBuzz
// function fizzBuzz() {
//   for (let i = 1; i <= 30; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
//   }
// }
// console.log(fizzBuzz());

// find duplicates in an array
// function findDuplicates(arr) {
//   let seen = {};
//   let duplicates = [];
//   for (const item of arr) {
//     if (seen[item]) {
//       if (!duplicates.includes(item)) {
//         duplicates.push(item);
//       }
//     } else {
//       seen[item] = true;
//     }
//   }
//   return duplicates;
// }
// console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 7, 9]));

// find factorial (using while loop)

// function findFactorial(n) {
//   let result = 1;
//   while (n > 1) {
//     result *= n;
//     n--;
//   }
//   return result;
// }
// console.log(findFactorial(5));

// count vowels

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (const char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("Pakistan"));

// student grade counter
// Return an object where:
// Key = grade
// Value = how many times that grade appeared

// function countGrades(grades) {
//   let freq = {};
//   for (const grade of grades) {
//     if (freq[grade]) {
//       freq[grade]++;
//     } else {
//       freq[grade] = 1;
//     }
//   }
//   return freq;
// }
// console.log(countGrades([70, 30, 40, 90, 70]));

// calculate the sum of an array of numbers
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += sum;
//     sum = arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// return an object with the frequency of each character in a string
// function freqChar(str) {
//   let result = {};
//   for (const char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// }
// console.log(freqChar("Hello world"));

// find the longest word in a sentence
function LongestWord(str) {
  str = str.split(" ");
  let Longest = "";
  for (const word of str) {
    if (word.length > Longest.length) {
      Longest = word;
    }
  }
  return Longest;
}
console.log(LongestWord("Hafiz Abdur Rehman"));
