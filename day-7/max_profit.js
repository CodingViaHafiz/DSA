function maxProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }
  return profit;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Maximum profit in stock market is ${maxProfit(arr)}`);
