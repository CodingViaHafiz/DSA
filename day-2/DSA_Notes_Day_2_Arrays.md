
# 📘 DSA in JavaScript – Day 2: Searching & Frequency Count in Arrays

## ✅ Concepts Covered

### 🔍 1. Linear Search
Used to find the index of a target value by checking each element.
```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```
**Explanation:**  
Goes through each element. If it finds the target, returns its index. Otherwise, returns -1.

---

### 🔢 2. Frequency Count using Object
Counts how many times each number appears in an array.
```js
function frequencyCount(arr) {
  const freq = {};
  for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }
  return freq;
}
```
**Explanation:**  
If the element already exists in `freq`, increment its count. If not, set it to 1.

---

## 🧠 Practice Questions with Answers & Explanations

### ✅ Q1: Find the index of a target in an array
**Input:** `[10, 20, 30, 40]`, target = `30`  
**Output:** `2`

```js
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

**Explanation:**  
Iterates through the array, comparing each element with the target. If match found, returns the index.

---

### ✅ Q2: Count frequency of each element
**Input:** `[1, 2, 2, 3, 1]`  
**Output:** `{1: 2, 2: 2, 3: 1}`

```js
function countFrequency(arr) {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
```

**Explanation:**  
Uses a JS object as a hash map. The `(freq[num] || 0)` ensures undefined values default to 0.

---

### ✅ Q3: Find the element with highest frequency
**Input:** `[4, 5, 4, 6, 4, 6, 6, 6]`  
**Output:** `6`

```js
function highestFrequencyElement(arr) {
  const freq = {};
  let maxCount = 0;
  let mostFreq = null;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mostFreq = num;
    }
  }

  return mostFreq;
}
```

**Explanation:**  
Builds frequency map, and keeps track of the most frequent number during iteration.

---

### ✅ Q4: Check if an element exists in the array or not
**Input:** `[1, 2, 3]`, target = `4`  
**Output:** `false`

```js
function elementExists(arr, target) {
  return arr.includes(target);
}
```

**Explanation:**  
`includes()` returns `true` if the element is in the array, otherwise `false`.

---

## 📝 Summary Notes

- Use `for` loop or `includes()` for searching.
- Use objects `{}` to build frequency maps.
- Practice building small reusable logic blocks.
- These patterns form the base for advanced problems like pairs, majority elements, etc.

---
