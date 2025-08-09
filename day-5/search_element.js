function search(arr, x) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return x;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 4, 7];
console.log(`searched index = ${search(arr, 3)}`);
