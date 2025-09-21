function filterMe(arr) {
  let result = [];
  arr.map((num) => {
    if (num > 5) {
      result.push(num);
    }
  });
  return result;
}
let arr = [1, 73, 3, 4, 5, 6, 7, 78];
console.log(`Before filtering: ${arr}`);
console.log(`After filtering: ${filterMe(arr)}`);
