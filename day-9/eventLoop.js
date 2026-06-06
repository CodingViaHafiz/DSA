// Synchronous code runs first, then microtasks (like Promises, async/await), and finally macrotasks (like setTimeout).
// console.log("1");
// setTimeout(() => console.log("2"), 2000);
// setTimeout(() => console.log("3"), 0);
// Promise.resolve().then(() => console.log("4"));
// console.log("5");

// Implement delay function that returns a Promise which resolves after a specified time
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function run() {
//   console.log("start");
//   await delay(1000);
//   console.log("end");
//   await delay(500);
//   console.log("done");
// }
// run();

// sequential vs parallel fetches
const fakeApi = (id, ms) => {
  return new Promise((res) =>
    setTimeout(() => {
      console.log(`Api ${id} finished`);
      res(`Data for ${id} `);
    }, ms),
  );
};
async function sequential() {
  const a = await fakeApi(1, 300);
  const b = await fakeApi(2, 200);
  const c = await fakeApi(3, 100);
  return [a, b, c];
}
sequential().then((result) => console.log("final result sequential:", result));

async function parallel() {
  const result = await Promise.all([
    fakeApi(1, 300),
    fakeApi(2, 200),
    fakeApi(3, 100),
  ]);
  return result;
}
parallel().then((result) => console.log("final result parallel:", result));
