function removeDuplicates(str) {
  const stack = [];

  for (let char of str) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop(); // remove the duplicate
    } else {
      stack.push(char); // add non-duplicate
    }
  }

  return stack.join("");
}
let str = "azxxzy";
console.log(`Before removing duplicates: ${str}`);
result = removeDuplicates(str);
console.log(`After removing duplicates: ${result}`);
