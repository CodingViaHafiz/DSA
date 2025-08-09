// let nums = [2, 3, 5, 7];
// function findIndex(nums) {
//   const target = 9;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }
// console.log(findIndex(nums));

// reverse only the words that are longer than 5 characters, and return the modified string.
let str = "this is modified string";
// function reverseLongWords(str) {
//   return str
//     .split(" ") // turns string into array
//     .map((word) => {
//       return word.length > 5 ? word.split("").reverse().join("") : word;
//     }) // returns array
//     .join(" "); // converts array back to string
// }
// console.log(reverseLongWords(str));

// calculate numbe rof words whom length is bigger than 5
function reverseLongWords(str) {
  const lengthThreshold = 5;
  const text = str.split(" ");
  const count = text.filter((word) => word.length > 5).length;
  console.log(`Words longer than ${lengthThreshold}: `, count);
  return count;
}
reverseLongWords(str);
