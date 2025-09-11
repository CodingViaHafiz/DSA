function maxDiff(arr) {
  let res = arr[1] - arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      res = Math.max(res, arr[j] - arr[i]);
    }
  }
  return res;
}
let arr = [35, 3, 4, 10, 6, 7, 8];
console.log(`Maximum difference  = ${maxDiff(arr)}`);
