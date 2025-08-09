function insert(arr, position, element) {
  for (i = arr.length; i > position; i--) {
    arr[i] = arr[i - 1];
  }
  arr[position] = element;
}
const arr = [1, 54, 2, 2, 6, 8];
console.log(`before insertion : ${arr}`);
insert(arr, 3, 9);
console.log(`after insertion: ${arr}`);

// function insert(arr, position, x) {
//   for (i = arr.length; i > position; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[position] = x;
// }
// const arr = [1, 5, 32, 4, 6, 9];
// console.log(`before insertion: ${arr}`);
// insert(arr, 5, 0);
// console.log(`after insertion: ${arr}`);
