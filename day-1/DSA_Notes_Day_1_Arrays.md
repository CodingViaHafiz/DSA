
# 📘 DSA in JavaScript – Day 1: Arrays Basics

## ✅ Concepts Covered

### 🔹 What is an Array?
- A linear data structure to store multiple values in a single variable.
- Elements are stored in **indexed**, **contiguous memory**.
- JS arrays are dynamic and can hold mixed data types.

### 🔹 Array Declaration Example:
```js
const arr = [1, 2, 3];
```

---

## 🛠️ Common Array Methods in JavaScript

| Method        | Description                                  | Example                          |
|---------------|----------------------------------------------|----------------------------------|
| `push()`      | Adds to end                                   | `arr.push(5)`                    |
| `pop()`       | Removes from end                              | `arr.pop()`                      |
| `shift()`     | Removes from start                            | `arr.shift()`                    |
| `unshift()`   | Adds to start                                 | `arr.unshift(1)`                 |
| `slice(a,b)`  | Returns elements from a to b-1                | `arr.slice(1,3)`                 |
| `splice()`    | Add/remove/replace at specific index          | `arr.splice(1,1,"x")`            |
| `includes()`  | Checks for existence                          | `arr.includes(3)`                |

---

## 🔁 Looping Techniques

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(el => console.log(el));  // Modern
```

---

## 🧠 Practice Questions

### Q1: Print all elements of an array
```js
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

---

### Q2: Find the maximum element in an array
```js
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

---

### Q3: Reverse an array
```js
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
```

---

## 📝 Summary Notes

- Arrays are key to mastering DSA and coding interviews.
- Knowing when to use `for`, `forEach`, or `map` matters.
- Understand memory, indexing, and mutation with array methods.

---
