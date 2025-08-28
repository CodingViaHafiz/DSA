function remDup(arr) {
  let n = arr.length + 1;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[i + 1]) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

let arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8];
console.log(`Before removing duplicates: ${arr}`);
let result = remDup(arr);
console.log(`After removing duplicates: ${result}`);
