// Synchronous code runs first, then microtasks (like Promises, async/await), and finally macrotasks (like setTimeout).
// console.log("1");
// setTimeout(() => console.log("2"), 2000);
// setTimeout(() => console.log("3"), 0);
// Promise.resolve().then(() => console.log("4"));
// console.log("5");

// Implement delay function that returns a Promise which resolves after a specified time
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function run() {
  console.log("start");
  await delay(1000);
  console.log("end");
  await delay(500);
  console.log("done");
}
run();
