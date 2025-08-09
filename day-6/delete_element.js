function deleteElement(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return "no such element exist in array";
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i != arr.indexOf(elem)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr = [1, 2, 3, 4, 5];
console.log(`before deletion: ${arr}`);
const deletElemArr = deleteElement(arr, 255);
console.log(`after deletion: ${deletElemArr}`);
