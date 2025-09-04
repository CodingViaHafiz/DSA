function moveZeroToEnd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] != 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]]; // swap values
          break;
        }
      }
    }
  }
}
let arr = [1, 0, 2, 4, 0, 0, 0, 6];
console.log(`Before moving zeros: ${arr}`);
moveZeroToEnd(arr);
console.log(`After moving zeros to end: ${arr}`);
