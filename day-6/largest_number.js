function largestNum(arr) {
  for (i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        flag = false;
        break;
      }
    }
    if (flag == true) return i;
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5];
let idx = largestNum(arr);
console.log(`Index = ${idx}
  Largest number in [${arr}] is ${arr[idx]}`);
