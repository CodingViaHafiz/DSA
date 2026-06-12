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
function fizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log(fizzBuzz());
