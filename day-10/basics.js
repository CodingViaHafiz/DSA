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
function checkAccess(isLoggedIn, isVerified, isBanned) {
  if (isBanned) {
    return "Access denied: You are banned.";
  } else if (isLoggedIn && isVerified) {
    return "Access granted: Welcome!";
  } else if (isLoggedIn && !isVerified) {
    return "Access denied: Please verify you email.";
  } else {
    return "Access denied: Please login.";
  }
}

console.log(checkAccess(true, false, false));
