function filterMe(arr) {
  let result = [];
  arr.map((num) => {
    if (num > 6) {
      result.push(num);
    }
  });
  return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Before filtering ${arr}`);
console.log(`After filtering ${filterMe(arr)}`);
